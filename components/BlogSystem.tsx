"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Calendar,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  PhoneCall,
  X,
  Printer,
  Radio,
  Building,
  CheckCircle2,
  Share2,
  FileText,
  Activity,
  Award,
  Layers
} from "lucide-react";
import { BlogPost, PostTab, BLOG_POSTS, getAllCategoriesForTab } from "@/lib/postsData";

interface BlogSystemProps {
  initialTab?: PostTab;
}

export default function BlogSystem({ initialTab = "activities" }: BlogSystemProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<PostTab>(initialTab);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Sync with initialTab prop if navigated between /activities and /accomplishments
  React.useEffect(() => {
    setActiveTab(initialTab);
    setSelectedCategory("All");
    setSearchQuery("");
  }, [initialTab]);

  // Fetch live posts from API to pick up newly uploaded activities/accomplishments
  React.useEffect(() => {
    let isMounted = true;
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/posts");
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.posts) && isMounted) {
            setAllPosts(data.posts);
          }
        }
      } catch (err) {
        console.warn("Using local posts fallback:", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    fetchPosts();
    return () => {
      isMounted = false;
    };
  }, []);

  // Switch tab and keep URL clean
  const handleTabSwitch = (tab: PostTab) => {
    setActiveTab(tab);
    setSelectedCategory("All");
    setSearchQuery("");
    // Update browser URL without full reload
    if (tab === "activities") {
      window.history.pushState(null, "", "/activities");
    } else {
      window.history.pushState(null, "", "/accomplishments");
    }
  };

  // Get available categories for active tab
  const categories = useMemo(() => {
    const tabPosts = allPosts.filter((p) => p.tab === activeTab && p.published);
    const catSet = Array.from(new Set(tabPosts.map((p) => p.category)));
    return ["All", ...catSet];
  }, [activeTab, allPosts]);

  // Filter posts based on activeTab, category, and search query
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      if (post.tab !== activeTab) return false;
      if (!post.published) return false;

      const matchesCategory =
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.location.toLowerCase().includes(q) ||
        post.division.toLowerCase().includes(q) ||
        post.barangay.toLowerCase().includes(q) ||
        post.content.some((c) => c.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeTab, selectedCategory, searchQuery, allPosts]);

  // Featured post for the active tab (first featured post or first post)
  const featuredPost = useMemo(() => {
    const tabPosts = allPosts.filter((p) => p.tab === activeTab && p.published);
    return tabPosts.find((p) => p.featured) || tabPosts[0] || null;
  }, [activeTab, allPosts]);

  // Remaining posts (excluding featured if search is empty and category is All)
  const regularPosts = useMemo(() => {
    if (searchQuery.trim() !== "" || selectedCategory !== "All") {
      return filteredPosts;
    }
    return filteredPosts.filter((p) => p.id !== featuredPost?.id);
  }, [filteredPosts, featuredPost, searchQuery, selectedCategory]);

  // Print single post handler
  const handlePrintPost = (post: BlogPost) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      window.print();
      return;
    }
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${post.title} - Lipa City DRRMO Official Report</title>
          <style>
            @page { size: portrait; margin: 15mm; }
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1e1917; line-height: 1.6; margin: 0; padding: 20px; }
            .header { border-bottom: 3px solid #7a1313; padding-bottom: 12px; margin-bottom: 20px; }
            .title { font-size: 22px; font-weight: bold; color: #7a1313; margin: 8px 0; }
            .meta { font-size: 12px; color: #555; margin-bottom: 15px; }
            .stats-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
            .stats-table th, .stats-table td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; }
            .stats-table th { background: #f4f4f4; }
            .highlights { background: #fafaf9; border-left: 4px solid #7a1313; padding: 12px 16px; margin: 20px 0; }
            .content p { margin-bottom: 14px; font-size: 14px; }
            .footer { margin-top: 30px; border-top: 1px solid #ccc; padding-top: 10px; font-size: 11px; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <div style="font-size: 11px; font-weight: bold; letter-spacing: 1px; color: #555;">REPUBLIC OF THE PHILIPPINES • CITY GOVERNMENT OF LIPA</div>
            <div style="font-size: 13px; font-weight: bold; color: #7a1313;">DISASTER RISK REDUCTION AND MANAGEMENT OFFICE (LCDRRMO)</div>
            <div class="title">${post.title}</div>
            <div class="meta">
              <strong>Date:</strong> ${post.date} &bull; 
              <strong>Location:</strong> ${post.location} &bull; 
              <strong>Division:</strong> ${post.division}
            </div>
          </div>

          <div class="highlights">
            <strong style="color: #7a1313;">Executive Highlights:</strong>
            <ul>
              ${post.keyHighlights.map((h) => `<li>${h}</li>`).join("")}
            </ul>
          </div>

          <div class="content">
            ${post.content.map((p) => `<p>${p}</p>`).join("")}
          </div>

          ${
            post.stats && post.stats.length > 0
              ? `
            <table class="stats-table">
              <thead>
                <tr>
                  <th>Field Metric</th>
                  <th>Recorded Value</th>
                </tr>
              </thead>
              <tbody>
                ${post.stats.map((s) => `<tr><td><strong>${s.label}</strong></td><td>${s.value}</td></tr>`).join("")}
              </tbody>
            </table>
          `
              : ""
          }

          <div class="footer">
            Official Incident Report Reference: ${post.id.toUpperCase()} &bull; Published by Lipa CDRRMO Operations Center.<br/>
            City Hall Complex, Marawoy, Lipa City, Batangas &bull; Emergency Hotline: 0915-463-5005 / (043) 756-0127.
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  return (
    <div className="w-full bg-[#fbfbfa] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-slate-500 flex items-center gap-1.5 font-medium border-b border-slate-200 pb-3">
          <Link href="/" className="hover:text-[#7a1313] transition-colors">
            Home
          </Link>
          <span>&rsaquo;</span>
          <span className="text-slate-800 font-bold">
            {activeTab === "activities" ? "Activities & DRRM Programs" : "Emergency Response Accomplishments"}
          </span>
        </nav>

        {/* Page Official Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold border border-slate-300">
                Official Operations Bulletin
              </span>
              <span className="text-xs text-slate-500 font-medium">
                City Government of Lipa
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#7a1313] tracking-tight">
              {activeTab === "activities"
                ? "Disaster Risk Reduction Activities & Programs"
                : "Emergency Response Operations & Accomplishments"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              {activeTab === "activities"
                ? "Official documentation of school earthquake simulations, community Basic Life Support (BLS) trainings, hazard inspections, and logistics pre-positioning across the 72 barangays."
                : "Official field logs and verified statistics of vehicular incident responses, road clearing operations, medical ambulance transports, and monthly accomplishment reports."}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <Link
              href="/hotlines"
              className="text-xs inline-flex items-center gap-1.5 bg-[#7a1313] hover:bg-[#610f0f] text-white px-3.5 py-2 rounded font-semibold transition-colors shadow-2xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>24/7 Operations Desk</span>
            </Link>
          </div>
        </div>

        {/* PRIMARY TAB SWITCHER: SEPARATE ACTIVITIES & ACCOMPLISHMENTS */}
        <div className="bg-white border border-slate-300 rounded-lg p-1.5 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {/* Tab 1: Activities */}
            <button
              type="button"
              onClick={() => handleTabSwitch("activities")}
              className={`p-3.5 rounded-md text-left transition-all cursor-pointer flex items-start gap-3 border ${
                activeTab === "activities"
                  ? "bg-[#7a1313] text-white border-[#610f0f] shadow-xs"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-transparent"
              }`}
            >
              <div
                className={`w-9 h-9 rounded flex items-center justify-center shrink-0 ${
                  activeTab === "activities" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                }`}
              >
                <Activity className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm tracking-tight">
                    Activities &amp; Programs
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                      activeTab === "activities"
                        ? "bg-white text-[#7a1313]"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    6 Reports
                  </span>
                </div>
                <p
                  className={`text-xs mt-0.5 line-clamp-1 ${
                    activeTab === "activities" ? "text-slate-100" : "text-slate-500"
                  }`}
                >
                  Drills, BLS trainings, logistics inspections, and community seminars
                </p>
              </div>
            </button>

            {/* Tab 2: Accomplishments */}
            <button
              type="button"
              onClick={() => handleTabSwitch("accomplishments")}
              className={`p-3.5 rounded-md text-left transition-all cursor-pointer flex items-start gap-3 border ${
                activeTab === "accomplishments"
                  ? "bg-[#7a1313] text-white border-[#610f0f] shadow-xs"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-transparent"
              }`}
            >
              <div
                className={`w-9 h-9 rounded flex items-center justify-center shrink-0 ${
                  activeTab === "accomplishments" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                }`}
              >
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm tracking-tight">
                    Accomplishments &amp; Rescues
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                      activeTab === "accomplishments"
                        ? "bg-white text-[#7a1313]"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    6 Reports
                  </span>
                </div>
                <p
                  className={`text-xs mt-0.5 line-clamp-1 ${
                    activeTab === "accomplishments" ? "text-slate-100" : "text-slate-500"
                  }`}
                >
                  Vehicular responses, road clearings, hospital transfers &amp; statistical summaries
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Filter Bar & Live Search */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 flex-wrap overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs text-slate-500 font-semibold mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                Category:
              </span>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-2.5 py-1 rounded transition-colors font-medium cursor-pointer border ${
                      isActive
                        ? "bg-[#7a1313] text-white border-[#7a1313]"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Keyword Search Input */}
            <div className="w-full md:w-80 relative shrink-0">
              <input
                type="text"
                placeholder={`Search ${activeTab === "activities" ? "activities, drills" : "accomplishments, collisions"}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-8 pr-7 py-2 border border-slate-300 rounded focus:outline-hidden focus:border-[#7a1313] bg-slate-50 text-slate-800"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>
              Showing <strong>{filteredPosts.length}</strong> {activeTab} article{filteredPosts.length === 1 ? "" : "s"}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-xs text-[#7a1313] font-bold hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Main 2-Column Content Layout: Stream/Grid (8 cols) + Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left Column (8 cols): Blog Articles & Reports */}
          <div className="lg:col-span-8 space-y-6">

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="bg-white border border-slate-200 rounded-lg p-10 text-center space-y-3 shadow-xs">
                <FileText className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="font-bold text-slate-800 text-sm">No official reports found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  No published reports matched your filter parameters. Try clearing the search keyword or selecting a different category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-xs text-white bg-[#7a1313] hover:bg-[#610f0f] px-3.5 py-1.5 rounded font-semibold cursor-pointer"
                >
                  View All {activeTab === "activities" ? "Activities" : "Accomplishments"}
                </button>
              </div>
            )}

            {/* Featured Article Card (Shown when not filtering) */}
            {featuredPost && selectedCategory === "All" && searchQuery.trim() === "" && (
              <div className="bg-white border border-slate-300 rounded-lg overflow-hidden shadow-xs hover:border-slate-400 transition-all">
                <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#7a1313] text-white">
                      Featured Official Report
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900/80 text-white backdrop-blur-xs">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {featuredPost.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 text-slate-600 font-medium">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      {featuredPost.division}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {featuredPost.barangay}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-xl font-bold text-slate-900 hover:text-[#7a1313] transition-colors leading-snug">
                    <button
                      type="button"
                      onClick={() => setSelectedPost(featuredPost)}
                      className="text-left cursor-pointer hover:underline"
                    >
                      {featuredPost.title}
                    </button>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {featuredPost.summary}
                  </p>

                  {/* Highlights Bar */}
                  {featuredPost.keyHighlights && featuredPost.keyHighlights.length > 0 && (
                    <div className="bg-slate-50 border border-slate-200 rounded p-3 text-xs space-y-1.5">
                      <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wide">
                        Key Operational Highlights:
                      </span>
                      <ul className="space-y-1 text-slate-600 text-[11px]">
                        {featuredPost.keyHighlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#7a1313] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      {featuredPost.stats?.slice(0, 2).map((s, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          <strong>{s.label}:</strong> {s.value}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedPost(featuredPost)}
                      className="text-xs font-bold text-white bg-[#7a1313] hover:bg-[#610f0f] px-3.5 py-2 rounded transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Full Report</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Grid of Articles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {regularPosts.map((post) => {
                return (
                  <article
                    key={post.id}
                    className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Cover Image */}
                      <div
                        onClick={() => setSelectedPost(post)}
                        className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden cursor-pointer"
                      >
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-200"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${post.badgeBg} ${post.badgeText}`}>
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-4 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            {post.date.split("•")[0]}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {post.barangay}
                          </span>
                        </div>

                        <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug hover:text-[#7a1313] transition-colors line-clamp-2">
                          <button
                            type="button"
                            onClick={() => setSelectedPost(post)}
                            className="text-left cursor-pointer"
                          >
                            {post.title}
                          </button>
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {post.summary}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-4 pt-0">
                      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-slate-500 truncate max-w-[150px]">
                          {post.division}
                        </span>

                        <button
                          type="button"
                          onClick={() => setSelectedPost(post)}
                          className="text-xs font-semibold text-[#7a1313] hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                        >
                          <span>Read Report</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

          </div>

          {/* Right Column (4 cols): Information & Operations Sidebar */}
          <aside className="lg:col-span-4 space-y-4">

            {/* Admin Publishing System Info Box */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-xs border-b border-slate-100 pb-2">
                <ShieldCheck className="w-4 h-4 text-[#7a1313]" />
                <span>Verified Public Reports</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-xs">
                All activities and operational accomplishments are verified and authorized for public release by the Lipa City DRRMO Executive Directorate under City Mayor <strong>Hon. Eric B. Africa</strong>.
              </p>
              <div className="pt-1 text-[11px] text-slate-500 font-mono">
                System: LCDRRMO Operations Archive 2026
              </div>
            </div>

            {/* 24/7 Operations Center Emergency Call Box */}
            <div className="bg-[#7a1313] text-white rounded-lg p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <PhoneCall className="w-4 h-4" />
                <span>24/7 Operations Center</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                To report vehicular accidents, trauma cases, localized flooding, or fallen tree hazards, contact Lipa Rescue immediately:
              </p>
              <div className="bg-black/20 p-3 rounded border border-white/10 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Landline:</span>
                  <a href="tel:0437560127" className="font-bold text-white hover:text-amber-300">
                    (043) 756-0127
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Mobile / SMS:</span>
                  <a href="tel:09154635005" className="font-bold text-amber-300 hover:underline">
                    0915-463-5005
                  </a>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-400">Radio Net:</span>
                  <span className="text-slate-200 flex items-center gap-1">
                    <Radio className="w-3 h-3 text-amber-300" />
                    142.850 MHz
                  </span>
                </div>
              </div>
              <div className="pt-1">
                <Link
                  href="/hotlines"
                  className="inline-flex items-center gap-1 text-xs text-amber-200 hover:text-white font-semibold underline underline-offset-2"
                >
                  <span>Open Full Emergency Directory</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Operations Base Information */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs space-y-2.5 text-xs text-slate-700">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1.5">
                Headquarters &amp; Dispatch Base
              </h3>
              <div className="space-y-1.5 text-slate-600">
                <div><strong>Station:</strong> City Hall Complex, Marawoy, Lipa City</div>
                <div><strong>Coverage:</strong> 72 Barangays of Lipa City</div>
                <div><strong>Standard Response:</strong> Within 5 to 7 Minutes</div>
                <div><strong>Duty Status:</strong> 24 Hours / 7 Days On-Call</div>
              </div>
            </div>

            {/* Quick Portal Modules */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs space-y-2">
              <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
                Related DRRM Modules
              </span>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <Link href="/issuances" className="text-[#7a1313] hover:underline font-medium flex items-center justify-between">
                    <span>&bull; DILG Memorandums &amp; Policy Issuances</span>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/preparedness" className="text-[#7a1313] hover:underline font-medium flex items-center justify-between">
                    <span>&bull; Download IEC Infographics</span>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/organization" className="text-[#7a1313] hover:underline font-medium flex items-center justify-between">
                    <span>&bull; LCDRRMO Personnel Directory</span>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
              </ul>
            </div>

          </aside>

        </div>

      </div>

      {/* FULL ARTICLE MODAL / OFFICIAL REPORT READER */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-2xs overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-lg shadow-2xl border border-slate-300 overflow-hidden text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#7a1313] text-white px-4 sm:px-6 py-3 flex items-center justify-between gap-3 shrink-0 border-b border-[#610f0f]">
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-200">
                  Lipa CDRRMO Official Bulletin &bull; Ref: {selectedPost.id.toUpperCase()}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white truncate">
                  {selectedPost.title}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handlePrintPost(selectedPost)}
                  className="p-1.5 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Print Official Document"
                  aria-label="Print Document"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Close Article"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-5">
              {/* Cover Banner */}
              <div className="relative aspect-[21/9] sm:aspect-[2/1] w-full bg-slate-900 rounded-lg overflow-hidden border border-slate-200">
                <img
                  src={selectedPost.coverImage}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-2 border-b border-slate-100 pb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${selectedPost.badgeBg} ${selectedPost.badgeText}`}>
                    {selectedPost.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    Status: {selectedPost.status}
                  </span>
                </div>

                <h1 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">
                  {selectedPost.title}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600 pt-1 font-medium">
                  <div>
                    <span className="text-slate-400">Date &amp; Time:</span><br />
                    <strong className="text-slate-800">{selectedPost.date}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Location:</span><br />
                    <strong className="text-slate-800">{selectedPost.location}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Division:</span><br />
                    <strong className="text-slate-800">{selectedPost.division}</strong>
                  </div>
                </div>
              </div>

              {/* Executive Highlights Box */}
              {selectedPost.keyHighlights && selectedPost.keyHighlights.length > 0 && (
                <div className="bg-[#fcfaf7] border border-amber-200/80 rounded-lg p-4 space-y-2">
                  <h4 className="text-xs font-bold text-[#7a1313] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7a1313]" />
                    <span>Operational Highlights &amp; Findings</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedPost.keyHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7a1313] font-bold">&bull;</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Paragraphs */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
                {selectedPost.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Statistical Table Metrics */}
              {selectedPost.stats && selectedPost.stats.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Field Data &amp; Recorded Metrics
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {selectedPost.stats.map((s, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-200 rounded p-2.5 text-center">
                        <div className="text-[10px] text-slate-500 uppercase font-semibold">
                          {s.label}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#7a1313] font-mono mt-0.5">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Responding Units / Personnel */}
              {selectedPost.respondingUnits && selectedPost.respondingUnits.length > 0 && (
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <strong className="text-slate-800">Responding Units &amp; Coordination:</strong>{" "}
                  {selectedPost.respondingUnits.join(" • ")}
                </div>
              )}

              {/* Official Document Footer */}
              <div className="bg-slate-100 rounded p-3 text-[11px] text-slate-500 space-y-1 border border-slate-200">
                <div>
                  <strong>Official Accreditation:</strong> Lipa City Disaster Risk Reduction and Management Office (LCDRRMO).
                </div>
                <div>
                  City Hall Complex, Marawoy, Lipa City, Batangas &bull; Hotline: 0915-463-5005 &bull; Landline: (043) 756-0127.
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
                Verified DRRM Portal Report
              </span>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => handlePrintPost(selectedPost)}
                  className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold py-1.5 px-3 rounded transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Report</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="bg-[#7a1313] hover:bg-[#610f0f] text-white text-xs font-bold py-1.5 px-3.5 rounded transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
