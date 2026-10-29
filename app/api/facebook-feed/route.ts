import { NextResponse } from "next/server";
import fallbackPosts from "@/lib/scrapedFbPosts.json";

// Types matching the frontend Activities post schema
export interface FormattedFbPost {
  id: string;
  post_id: string;
  name: string;
  username: string;
  message: string;
  facebook_link: string;
  post_date: string;
  post_date_time: string;
  images: string[];
  full_picture?: string;
  thumbnail_url?: string;
  source: "graph_api" | "feed_sync" | "local_archive";
}

interface GraphSubAttachment {
  media?: {
    image?: {
      src?: string;
    };
  };
}

interface GraphAttachment {
  media?: {
    image?: {
      src?: string;
    };
  };
  subattachments?: {
    data?: GraphSubAttachment[];
  };
}

interface GraphApiPostItem {
  id: string;
  message?: string;
  full_picture?: string;
  created_time: string;
  permalink_url?: string;
  attachments?: {
    data?: GraphAttachment[];
  };
}

export async function GET() {
  const pageId = process.env.FB_PAGE_ID || process.env.NEXT_PUBLIC_FB_PAGE_ID || "385396448574702";
  const accessToken = process.env.FB_PAGE_ACCESS_TOKEN;

  // 1. IF Meta Graph API credentials are provided:
  if (accessToken && pageId) {
    try {
      // NOTE: Using '/published_posts' fetches ONLY posts authored by the Page itself (NO external shares!)
      const graphUrl = `https://graph.facebook.com/v21.0/${pageId}/published_posts?fields=id,message,created_time,permalink_url,full_picture,attachments{media,subattachments}&limit=50&access_token=${accessToken}`;
      
      const res = await fetch(graphUrl, {
        next: { revalidate: 300 }, // Cache on server for 5 minutes
      });

      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.data) && data.data.length > 0) {
          const formatted: FormattedFbPost[] = (data.data as GraphApiPostItem[])
            .filter((p: GraphApiPostItem) => Boolean(p.message || p.full_picture))
            .map((p: GraphApiPostItem) => {
              // Extract all image URLs from attachments
              const images: string[] = [];
              if (p.full_picture) images.push(p.full_picture);
              
              if (p.attachments?.data) {
                p.attachments.data.forEach((att: GraphAttachment) => {
                  if (att.media?.image?.src && !images.includes(att.media.image.src)) {
                    images.push(att.media.image.src);
                  }
                  if (att.subattachments?.data) {
                    att.subattachments.data.forEach((sub: GraphSubAttachment) => {
                      if (sub.media?.image?.src && !images.includes(sub.media.image.src)) {
                        images.push(sub.media.image.src);
                      }
                    });
                  }
                });
              }

              return {
                id: p.id,
                post_id: p.id,
                name: "Cdrrmo Lipa City",
                username: "cdrrmo.lipacity",
                message: p.message || "",
                facebook_link: p.permalink_url || `https://www.facebook.com/${p.id}`,
                post_date: p.created_time,
                post_date_time: p.created_time,
                images,
                full_picture: images[0] || "",
                thumbnail_url: images[0] || "",
                source: "graph_api" as const,
              };
            });

          return NextResponse.json({
            success: true,
            source: "graph_api",
            count: formatted.length,
            posts: formatted,
          });
        }
      } else {
        const errorDetails = await res.text();
        console.warn("Meta Graph API returned non-200:", errorDetails);
      }
    } catch (err) {
      console.error("Meta Graph API fetch error:", err);
    }
  }
  // 2. Default Fallback: Return verified archive (zero external shares, 100% reliable)
  return NextResponse.json({
    success: true,
    source: "local_archive",
    count: fallbackPosts.length,
    posts: fallbackPosts.map((p) => ({ ...p, source: "local_archive" })),
  });
}
