import fs from "fs";
import path from "path";
import { BlogPost, PostTab, BLOG_POSTS } from "./postsData";

const dataDir = path.join(process.cwd(), "data");
const postsFilePath = path.join(dataDir, "posts.json");

/**
 * Ensures data directory and posts.json exist, initialized with default BLOG_POSTS
 */
export function initPostsStorage(): BlogPost[] {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    if (!fs.existsSync(postsFilePath)) {
      fs.writeFileSync(postsFilePath, JSON.stringify(BLOG_POSTS, null, 2), "utf8");
      return BLOG_POSTS;
    }

    const content = fs.readFileSync(postsFilePath, "utf8");
    const parsed = JSON.parse(content);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }

    // If file is empty array, populate with defaults
    fs.writeFileSync(postsFilePath, JSON.stringify(BLOG_POSTS, null, 2), "utf8");
    return BLOG_POSTS;
  } catch (err) {
    console.error("[postsStorage] Error initializing storage:", err);
    return BLOG_POSTS;
  }
}

/**
 * Get all posts from storage
 */
export function getAllStoredPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(postsFilePath)) {
      return initPostsStorage();
    }
    const content = fs.readFileSync(postsFilePath, "utf8");
    const posts: BlogPost[] = JSON.parse(content);
    return Array.isArray(posts) ? posts : BLOG_POSTS;
  } catch (err) {
    console.error("[postsStorage] Error reading posts:", err);
    return BLOG_POSTS;
  }
}

export const MAX_ITEMS_PER_TAB = 30;

/**
 * Ensures a tab does not exceed MAX_ITEMS_PER_TAB (30).
 * If there are 31 or more items, automatically deletes the oldest based on dateIso to save storage.
 */
export function enforceStorageLimit(posts: BlogPost[], tab?: PostTab): BlogPost[] {
  const tabsToCheck: PostTab[] = tab ? [tab] : ["activities", "accomplishments"];
  let result = [...posts];

  for (const t of tabsToCheck) {
    const tabItems = result.filter((p) => p.tab === t);
    if (tabItems.length > MAX_ITEMS_PER_TAB) {
      // Sort oldest first by dateIso
      tabItems.sort((a, b) => new Date(a.dateIso).getTime() - new Date(b.dateIso).getTime());
      const removeCount = tabItems.length - MAX_ITEMS_PER_TAB;
      const idsToRemove = new Set(tabItems.slice(0, removeCount).map((p) => p.id));

      console.log(`[postsStorage] Auto-pruned ${removeCount} oldest ${t} (retaining latest ${MAX_ITEMS_PER_TAB}).`);
      result = result.filter((p) => !idsToRemove.has(p.id));
    }
  }

  return result;
}

/**
 * Save all posts to storage, enforcing the 30-item quota
 */
export function saveAllStoredPosts(posts: BlogPost[]): boolean {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const pruned = enforceStorageLimit(posts);
    fs.writeFileSync(postsFilePath, JSON.stringify(pruned, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("[postsStorage] Error writing posts:", err);
    return false;
  }
}

/**
 * Add or prepend a new post with automatic 30-item quota enforcement
 */
export function addStoredPost(newPost: BlogPost): BlogPost {
  let posts = getAllStoredPosts();
  // Check if exists
  const idx = posts.findIndex((p) => p.id === newPost.id || p.slug === newPost.slug);
  if (idx >= 0) {
    posts[idx] = { ...posts[idx], ...newPost };
  } else {
    posts.unshift(newPost);
  }

  // Enforce 30-item cap (delete oldest when 31st arrives)
  posts = enforceStorageLimit(posts, newPost.tab);
  saveAllStoredPosts(posts);
  return newPost;
}

/**
 * Update an existing post
 */
export function updateStoredPost(id: string, updates: Partial<BlogPost>): BlogPost | null {
  const posts = getAllStoredPosts();
  const idx = posts.findIndex((p) => p.id === id || p.slug === id);
  if (idx < 0) return null;

  const updated: BlogPost = {
    ...posts[idx],
    ...updates,
    id: posts[idx].id, // Ensure id is retained
  };
  posts[idx] = updated;
  saveAllStoredPosts(posts);
  return updated;
}

/**
 * Delete a post by id or slug
 */
export function deleteStoredPost(id: string): boolean {
  const posts = getAllStoredPosts();
  const filtered = posts.filter((p) => p.id !== id && p.slug !== id);
  if (filtered.length === posts.length) {
    return false;
  }
  return saveAllStoredPosts(filtered);
}

