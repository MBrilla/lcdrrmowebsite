import { NextRequest, NextResponse } from "next/server";
import { BlogPost, PostTab } from "@/lib/postsData";
import {
  getAllStoredPosts,
  addStoredPost,
  updateStoredPost,
  deleteStoredPost,
} from "@/lib/postsStorage";

/**
 * GET /api/posts
 * Query Parameters:
 *  - tab: "activities" | "accomplishments"
 *  - category: string
 *  - q: search query
 *  - slug: string
 *  - limit: number
 *  - all: boolean (include drafts/unpublished)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tab = searchParams.get("tab") as PostTab | null;
    const category = searchParams.get("category");
    const query = searchParams.get("q")?.toLowerCase().trim() || "";
    const slug = searchParams.get("slug");
    const limitParam = searchParams.get("limit");
    const includeUnpublished = searchParams.get("all") === "true";
    const limit = limitParam ? parseInt(limitParam, 10) : undefined;

    let posts = getAllStoredPosts();

    if (!includeUnpublished) {
      posts = posts.filter((p) => p.published !== false);
    }

    if (slug) {
      const post = posts.find((p) => p.slug === slug || p.id === slug);
      if (!post) {
        return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, post });
    }

    if (tab && (tab === "activities" || tab === "accomplishments")) {
      posts = posts.filter((p) => p.tab === tab);
    }

    if (category && category !== "All") {
      posts = posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }

    if (query) {
      posts = posts.filter((p) => {
        const matchTitle = (p.title || "").toLowerCase().includes(query);
        const matchSummary = (p.summary || "").toLowerCase().includes(query);
        const matchContent = (p.content || []).some((c) => c.toLowerCase().includes(query));
        const matchLocation = (p.location || "").toLowerCase().includes(query);
        const matchDivision = (p.division || "").toLowerCase().includes(query);
        const matchBarangay = (p.barangay || "").toLowerCase().includes(query);
        return matchTitle || matchSummary || matchContent || matchLocation || matchDivision || matchBarangay;
      });
    }

    // Sort newest first
    posts.sort((a, b) => new Date(b.dateIso).getTime() - new Date(a.dateIso).getTime());

    if (limit && limit > 0) {
      posts = posts.slice(0, limit);
    }

    return NextResponse.json({
      success: true,
      total: posts.length,
      tab: tab || "all",
      posts,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

/**
 * POST /api/posts
 * Inserts or uploads new post into either Activities or Accomplishments.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || !body.tab || !body.content) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: title, tab (activities or accomplishments), and content are required.",
        },
        { status: 400 }
      );
    }

    if (body.tab !== "activities" && body.tab !== "accomplishments") {
      return NextResponse.json(
        {
          success: false,
          error: "Tab must be either 'activities' or 'accomplishments'.",
        },
        { status: 400 }
      );
    }

    const id = body.id || `${body.tab === "activities" ? "act" : "acc"}-${Date.now()}`;
    const slug =
      body.slug ||
      body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    const newPost: BlogPost = {
      id,
      slug,
      tab: body.tab,
      title: body.title,
      date:
        body.date ||
        new Date().toLocaleDateString("en-PH", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }) + " • " + new Date().toLocaleTimeString("en-PH", { hour: "2-digit", minute: "2-digit" }),
      dateIso: body.dateIso || new Date().toISOString(),
      author: body.author || "Lipa CDRRMO Operations Center",
      division: body.division || "Public Information & Operations Division",
      category: body.category || (body.tab === "activities" ? "Community Drills" : "Emergency Response"),
      badgeBg: body.badgeBg || (body.tab === "activities" ? "bg-blue-50 border-blue-200" : "bg-red-50 border-red-200"),
      badgeText: body.badgeText || (body.tab === "activities" ? "text-blue-800" : "text-red-800"),
      location: body.location || "Lipa City, Batangas",
      barangay: body.barangay || "Marawoy",
      coverImage: body.coverImage || (body.tab === "activities" ? "/posts/drill-lcnhs.svg" : "/posts/weekly-summary.svg"),
      images: Array.isArray(body.images) && body.images.length > 0 ? body.images : [body.coverImage || "/posts/drill-lcnhs.svg"],
      summary: body.summary || body.title,
      content: Array.isArray(body.content) ? body.content : [body.content],
      keyHighlights: Array.isArray(body.keyHighlights) ? body.keyHighlights : [],
      stats: Array.isArray(body.stats) ? body.stats : [],
      respondingUnits: Array.isArray(body.respondingUnits) ? body.respondingUnits : ["Lipa Rescue 24/7"],
      status: body.status || "Completed",
      featured: Boolean(body.featured),
      published: body.published !== false,
    };

    const saved = addStoredPost(newPost);

    return NextResponse.json({
      success: true,
      message: `Post successfully published to ${body.tab}`,
      post: saved,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

/**
 * PUT /api/posts
 * Update an existing post.
 */
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const id = body.id || body.slug;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Post ID or slug is required for updating." },
        { status: 400 }
      );
    }

    const updated = updateStoredPost(id, body);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: `Post with ID '${id}' not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Post successfully updated.",
      post: updated,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

/**
 * DELETE /api/posts
 * Delete a post by id or slug query parameter or body.
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    let id = searchParams.get("id") || searchParams.get("slug");

    if (!id) {
      try {
        const body = await request.json();
        id = body.id || body.slug;
      } catch {
        // No body
      }
    }

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Post ID or slug is required for deletion." },
        { status: 400 }
      );
    }

    const deleted = deleteStoredPost(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: `Post with ID '${id}' could not be deleted or not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Post '${id}' successfully deleted.`,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
