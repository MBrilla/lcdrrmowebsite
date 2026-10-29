/**
 * Page & Site Visibility Configuration
 * 
 * ============================================================================
 * METHOD 1: PAGE REVEAL STAGES (1 to 3) - Incremental Unlocking
 * ============================================================================
 * 
 * - Stage 1 (Home Page Only):
 *     • Only the Home Page (/) is visible.
 *     • Sub-pages (/organization and /hotlines) are hidden from menus and locked.
 * 
 * - Stage 2 (Home + Organizational Chart):
 *     • Unlocks the full Organizational Chart (/organization) page with City Mayor & personnel directory.
 *     • Emergency Hotlines remains hidden/under development.
 * 
 * - Stage 3 (All Pages Unlocked):
 *     • Unlocks the Emergency Hotlines Directory (/hotlines) page.
 *     • Complete portal with all pages and navigation links live.
 */

export type PageStage = 1 | 2 | 3;

// 🎯 Step through pages in increments: Change to 1, 2, or 3:
export const PAGE_STAGE: PageStage = 2;

/**
 * ============================================================================
 * METHOD 2: GRANULAR PAGE CONTROLS
 * ============================================================================
 * You can also set each page directly to `true` or `false` below!
 */
export const PAGES = {
  // 1. Home Page (/) - Main portal landing page
  home: true,

  // 2. Organizational Chart (/organization) - City Mayor & personnel directory
  organization: (PAGE_STAGE as number) >= 2,

  // 3. Emergency Hotlines (/hotlines) - Full consolidated directory
  hotlines: true,

  // 4. Preparedness & Downloadable Infographics (/preparedness)
  preparedness: true,

  // 5. Activities & Emergency Response Accomplishments (/activities) - Linked to FB Page
  activities: true,

  // 6. DILG & DRRM Policy Memorandums & Issuances (/issuances)
  issuances: true,
};

/**
 * Detailed section features (can also be tuned if desired)
 */
export const FEATURES = {
  // Navigation
  quickContactHeader: true,
  pillarsNavLink: true,
  servicesNavLink: (PAGE_STAGE as number) >= 2,
  officialNavLabels: (PAGE_STAGE as number) >= 2,
  preparednessNavLink: true,
  activitiesNavLink: true,
  issuancesNavLink: true,

  // Homepage sections
  weatherSection: true,
  heroActionButtons: true,
  pillarsSection: true,
  servicesSection: (PAGE_STAGE as number) >= 2,
  heroLiveEocCard: (PAGE_STAGE as number) >= 2,
  preparednessSection: true,

  // Chatbot Assistant
  chatbotWidget: true,

  // Personnel Directory
  showPersonnelImages: true, // Display staff photos with clean uniform headshot borders

  // Footers
  detailedFooter: (PAGE_STAGE as number) >= 2,

  // Page aliases
  fullHotlinesDirectory: PAGES.hotlines,
  fullOrganizationPage: PAGES.organization,
};

// Backward compatibility helper
export const SHOW_MINIMAL_PROGRESS: boolean = (PAGE_STAGE as number) <= 1;
