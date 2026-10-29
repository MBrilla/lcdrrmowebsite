import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const jsonPath = path.join(rootDir, 'lib', 'scrapedFbPosts.json');

function getPostKey(post) {
  // If there's a unique Facebook post ID (e.g. pfbid...)
  if (post.id && typeof post.id === 'string' && post.id.startsWith('pfbid')) return post.id;
  if (post.post_id && typeof post.post_id === 'string' && post.post_id.startsWith('pfbid')) return post.post_id;

  // If there's a permalink to a specific post id (e.g. /posts/1416178447339287)
  if (post.facebook_link && post.facebook_link.includes('/posts/')) {
    const match = post.facebook_link.match(/\/posts\/(\d+)/);
    if (match) return `fb_${match[1]}`;
  }

  // Otherwise use composite key of date + normalized snippet of message
  const date = (post.post_date || post.post_date_time || '').slice(0, 10);
  const sig = (post.message || '').slice(0, 35).replace(/\s+/g, '_');
  return `post_${date}_${sig}`;
}

async function syncFacebookFeed() {
  console.log('🔄 [Facebook Auto-Sync] Connecting to public live feed for @cdrrmo.lipacity...');

  let livePosts = [];
  try {
    const res = await fetch('https://data.accentapi.com/feed/25725407.json', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.posts)) {
        livePosts = data.posts;
        console.log(`✅ [Facebook Auto-Sync] Retrieved ${livePosts.length} posts from live cloud feed.`);
      }
    } else {
      console.warn(`⚠️ [Facebook Auto-Sync] Live feed returned HTTP ${res.status}`);
    }
  } catch (err) {
    console.error(`❌ [Facebook Auto-Sync] Failed to fetch live feed: ${err.message}`);
  }

  // Load existing posts archive
  let archivePosts = [];
  if (fs.existsSync(jsonPath)) {
    try {
      archivePosts = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    } catch {
      archivePosts = [];
    }
  }

  // Filter existing archive to ensure only posts with non-empty messages
  archivePosts = archivePosts.filter((p) => p.message && p.message.trim().length > 0);

  // Map existing archive posts by unique post key
  const postMap = new Map();
  archivePosts.forEach((p) => {
    const key = getPostKey(p);
    if (key) postMap.set(key, p);
  });

  // Filter out shared posts from external agencies (DOST-PAGASA, PHIVOLCS, etc.)
  // and ensure post has meaningful text content authored by Lipa CDRRMO
  const validOriginals = livePosts.filter((p) => {
    const isShared = Boolean(
      p.shared_post_owner_name ||
      p.shared_link ||
      (p.shared_post_description && !p.message)
    );
    return !isShared && Boolean(p.message && p.message.trim().length > 0);
  });

  console.log(`🔍 [Facebook Auto-Sync] Extracted ${validOriginals.length} original Lipa CDRRMO emergency dispatches.`);

  let newPostsCount = 0;

  for (let i = 0; i < validOriginals.length; i++) {
    const livePost = validOriginals[i];
    const key = getPostKey(livePost);
    if (!key) continue;

    const existing = postMap.get(key);
    if (!existing) newPostsCount++;

    const formattedPost = {
      id: livePost.id || livePost.post_id || existing?.id,
      post_id: livePost.post_id || livePost.id || existing?.post_id,
      name: livePost.name || "Cdrrmo Lipa City",
      username: "cdrrmo.lipacity",
      message: (livePost.message || existing?.message || "").trim(),
      facebook_link: livePost.facebook_link || existing?.facebook_link || "https://www.facebook.com/cdrrmo.lipacity",
      post_date: livePost.post_date || livePost.post_date_time || existing?.post_date,
      post_date_time: livePost.post_date_time || livePost.post_date || existing?.post_date_time,
      likes_count: livePost.likes_count || existing?.likes_count || "0",
      comments_count: livePost.comments_count || existing?.comments_count || "0",
      share_count: livePost.share_count || existing?.share_count || "0",
      page_id: "cdrrmo.lipacity",
      page_name: "Cdrrmo Lipa City",
      source: "local_archive"
    };

    postMap.set(key, formattedPost);
  }

  // Sort descending by date (newest dispatch first)
  const sorted = Array.from(postMap.values()).sort((a, b) => {
    return new Date(b.post_date || 0).getTime() - new Date(a.post_date || 0).getTime();
  });

  fs.writeFileSync(jsonPath, JSON.stringify(sorted, null, 2), 'utf8');

  console.log(`🎉 [Facebook Auto-Sync Completed]`);
  console.log(`   - Total dispatches in archive: ${sorted.length}`);
  console.log(`   - New dispatches added: ${newPostsCount}`);
}

syncFacebookFeed();
