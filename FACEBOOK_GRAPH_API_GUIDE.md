# Facebook Feed Synchronization Guide
**Lipa City Disaster Risk Reduction and Management Office (LCDRRMO)**

This guide explains how the Facebook Activities & Emergency Dispatches stream is automatically synchronized.

---

## 🚀 Active Setup: Automated GitHub Action Sync (Recommended)

The website is configured with a **zero-maintenance, automated GitHub Action workflow** (`.github/workflows/sync-facebook-feed.yml`).

### How It Works:
1. **Automated Cron**: Every 4 hours, GitHub Actions automatically runs `scripts/sync-fb-feed.mjs`.
2. **Emergency Filtering**: It queries the public feed for `@cdrrmo.lipacity` and filters out shared weather advisories (DOST-PAGASA / PHIVOLCS reposts), preserving only original CDRRMO response reports and field dispatches.
3. **Local Image Archival**: Operational rescue photographs are downloaded directly into `public/activities/`. This prevents Facebook's temporary signed CDN URLs (`oe=...`) from expiring and ensures **zero 403 Forbidden errors**.
4. **Auto-Commit**: Newly discovered posts and photos are automatically committed and pushed back to the `master` branch.

### Manual On-Demand Sync:
If Lipa CDRRMO publishes a major emergency alert or typhoon update that you want visible immediately:
1. Open your repository on GitHub.
2. Go to the **Actions** tab.
3. Click **Auto-Sync Facebook Emergency Dispatches** in the left sidebar.
4. Click **Run workflow** &rarr; **Run workflow**.
5. Or run locally:
   ```bash
   npm run sync-fb
   ```

---

## 🔑 Optional Alternative: Direct Meta Graph API

If you ever wish to connect directly to Meta's Graph API instead of the GitHub Action runner:

1. Create a Meta Developer App with App Type **"None"** at [developers.facebook.com/apps](https://developers.facebook.com/apps) (do not select "Business").
2. In [Graph API Explorer](https://developers.facebook.com/tools/explorer/), generate a Page Access Token with permissions `pages_read_engagement` and `pages_show_list`.
3. Add the token to `.env.local`:
   ```env
   FB_PAGE_ID=385396448574702
   FB_PAGE_ACCESS_TOKEN=YOUR_PERMANENT_PAGE_ACCESS_TOKEN
   ```
4. The backend at `app/api/facebook-feed/route.ts` will automatically detect the token and query `https://graph.facebook.com/v21.0/${pageId}/published_posts`.
