"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  ExternalLink,
  PhoneCall,
  ChevronRight,
  ShieldCheck,
  Search,
  Calendar,
  RefreshCw,
  AlertTriangle,
  FileText,
  ThumbsUp,
  MessageCircle,
  Share2,
  CheckCircle2,
  Radio
} from "lucide-react";
import LipaLogo from "@/components/LipaLogo";
import fallbackPosts from "@/lib/scrapedFbPosts.json";

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

interface ScrapedPost {
  id?: string;
  post_id?: string;
  name?: string;
  username?: string;
  message?: string;
  shared_post_description?: string;
  shared_post_owner_name?: string;
  shared_link?: string;
  facebook_link?: string;
  post_date?: string;
  post_date_time?: string;
  images?: string[];
  image_urls?: string[];
  media_attachments?: string[];
  thumbnail_url?: string;
  full_picture?: string;
  likes_count?: string;
  comments_count?: string;
  share_count?: string;
}

export default function ActivitiesPage() {
  const [allPosts, setAllPosts] = useState<ScrapedPost[]>(fallbackPosts as ScrapedPost[]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("Synced with Facebook");

  // Fetch newest posts from the API route (supports Meta Graph API with automatic fallback)
  const fetchLivePosts = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch(`/api/facebook-feed?t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.posts) && data.posts.length > 0) {
          setAllPosts(data.posts);
          const sourceLabel =
            data.source === "graph_api"
              ? "Meta Graph API"
              : "Verified Archive";
          setLastUpdated(`Synced (${sourceLabel}) ${new Date().toLocaleTimeString("en-PH", { hour: "2-digit", minute: "2-digit" })} PST`);
        }
      }
    } catch (err) {
      console.warn("Could not fetch latest feed, using cached scraped posts:", err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/facebook-feed?t=${Date.now()}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && Array.isArray(data.posts) && data.posts.length > 0) {
          setAllPosts(data.posts);
          const sourceLabel =
            data.source === "graph_api" ? "Meta Graph API" : "Verified Archive";
          setLastUpdated(
            `Synced (${sourceLabel}) ${new Date().toLocaleTimeString("en-PH", {
              hour: "2-digit",
              minute: "2-digit",
            })} PST`
          );
        }
      })
      .catch((err) => {
        console.warn("Could not fetch latest feed, using cached scraped posts:", err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const formatDate = (isoString?: string) => {
    if (!isoString) return "Recent Dispatch";
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString("en-PH", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Manila"
      }) + " PST";
    } catch {
      return isoString;
    }
  };

  // STRICT FILTER: ONLY original posts authored by Lipa CDRRMO, strictly NO shared posts!
  const originalOnlyPosts = useMemo(() => {
    return allPosts.filter((p) => {
      const isShared = Boolean(
        p.shared_post_owner_name ||
        p.shared_link ||
        (p.shared_post_description && !p.message)
      );
      return !isShared;
    });
  }, [allPosts]);

  // Apply search query over original posts
  const filteredPosts = useMemo(() => {
    return originalOnlyPosts.filter((p) => {
      const text = (p.message || "").toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      return q === "" || text.includes(q);
    });
  }, [originalOnlyPosts, searchQuery]);

  return (
    <div className="w-full bg-[#fbfbfa] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Breadcrumb & Official Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <nav className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <Link href="/" className="hover:text-[#7a1313] transition-colors">
                Home
              </Link>
              <span>&rsaquo;</span>
              <span className="text-slate-800 font-bold">Activities &amp; Accomplishments</span>
            </nav>
            <h1 className="text-xl sm:text-2xl font-bold text-[#7a1313] tracking-tight">
              Official Emergency Response &amp; Operations Reports
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Direct emergency dispatches, vehicular accident responses, and trauma care operations published by the Lipa CDRRMO Operations Center (@cdrrmo.lipacity).
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <a
              href="https://www.facebook.com/cdrrmo.lipacity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs inline-flex items-center gap-1.5 bg-[#1877f2] hover:bg-[#166fe5] text-white px-3.5 py-2 rounded font-semibold transition-colors shadow-2xs"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Follow @cdrrmo.lipacity</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Official Channel Verified Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-slate-200 bg-white p-1 shrink-0 flex items-center justify-center shadow-2xs">
                <LipaLogo className="w-full h-full object-contain" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900">
                    Lipa City Disaster Risk Reduction and Management Office
                  </h2>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-blue-600" />
                    @cdrrmo.lipacity
                  </span>
                </div>
                <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
                  Official emergency response summaries, trauma incidents, and field dispatches documented directly by the Lipa CDRRMO Operations Center.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={fetchLivePosts}
                disabled={isRefreshing}
                className="px-3 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-300"
                title="Refresh Dispatches Feed"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-[#7a1313]" : ""}`} />
                <span>{isRefreshing ? "Updating..." : "Refresh Feed"}</span>
              </button>

              <a
                href="https://www.facebook.com/cdrrmo.lipacity"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded bg-[#0e274a] hover:bg-[#1a365d] text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
                <span>Open Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Search Bar & Stream Control Bar */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded bg-[#7a1313] text-white font-semibold text-xs inline-flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Dispatches ({filteredPosts.length})</span>
            </span>
            <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
              &bull; {lastUpdated}
            </span>
          </div>

          <div className="w-full sm:w-80 relative">
            <input
              type="text"
              placeholder="Search response reports (e.g. Vehicular, Medical)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-8 pr-3 py-2 border border-slate-300 rounded focus:outline-hidden focus:border-[#7a1313] bg-slate-50"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3" />
          </div>
        </div>

        {/* Main Content Layout: Stream (8 cols) + Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left Column (8 cols): Emergency Dispatches Stream */}
          <div className="lg:col-span-8 space-y-4">

            {filteredPosts.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-lg p-8 text-center text-xs text-slate-500 space-y-2 shadow-xs">
                <AlertTriangle className="w-6 h-6 text-amber-500 mx-auto" />
                <p className="font-bold text-slate-800 text-sm">No dispatches found matching your search</p>
                <p className="text-slate-500">Try adjusting your keyword filter (e.g. &quot;Medical&quot;, &quot;Accident&quot;, or &quot;Rescue&quot;).</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-2 text-xs text-[#7a1313] font-bold hover:underline cursor-pointer"
                >
                  Clear search filter
                </button>
              </div>
            ) : (
              filteredPosts.map((post, idx) => {
                const messageText = post.message || "";
                const postUrl = post.facebook_link || "https://www.facebook.com/cdrrmo.lipacity";
                const images = post.images && post.images.length > 0
                  ? post.images
                  : post.image_urls && post.image_urls.length > 0
                  ? post.image_urls
                  : post.media_attachments && post.media_attachments.length > 0
                  ? post.media_attachments
                  : post.full_picture
                  ? [post.full_picture]
                  : [];

                return (
                  <article
                    key={post.id || post.post_id || idx}
                    className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-3.5 hover:border-slate-300 transition-all"
                  >
                    {/* Post Header: Profile, Date & Status */}
                    <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-slate-200 bg-white p-0.5 shrink-0 flex items-center justify-center shadow-2xs">
                          <LipaLogo className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-xs sm:text-sm text-slate-900">
                              {post.name || "Cdrrmo Lipa City"}
                            </span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 fill-blue-50" />
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1.5 font-mono">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            <span>{formatDate(post.post_date || post.post_date_time)}</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href={postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#1877f2] hover:underline inline-flex items-center gap-1 shrink-0"
                      >
                        <span>View on Facebook</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Post Narrative / Text */}
                    {messageText ? (
                      <div className="text-xs sm:text-[13px] text-slate-800 leading-relaxed whitespace-pre-line font-normal">
                        {messageText}
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500 italic">
                        Field rescue operational photograph documentation.
                      </div>
                    )}

                    {/* Operational Rescue Photos with Graceful Error Handling */}
                    {images.length > 0 && (
                      <div className="pt-1">
                        <div className={`grid gap-2 ${images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                          {images.slice(0, 4).map((imgUrl, imgIdx) => (
                            <a
                              key={imgIdx}
                              href={postUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative block rounded-lg overflow-hidden border border-slate-200 bg-slate-100 hover:opacity-95 transition-opacity"
                            >
                              <img
                                src={imgUrl}
                                alt={`Rescue operation photo ${imgIdx + 1}`}
                                loading="lazy"
                                onError={(e) => {
                                  // Gracefully hide expired FB CDN images
                                  (e.currentTarget as HTMLElement).style.display = "none";
                                }}
                                className="w-full h-auto max-h-[380px] object-cover"
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Post Footer with Engagement Counters */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-3 text-[11px] text-slate-500">
                        {post.likes_count && (
                          <span className="flex items-center gap-1 font-mono text-slate-600">
                            <ThumbsUp className="w-3 h-3 text-[#1877f2]" />
                            {post.likes_count}
                          </span>
                        )}
                        {post.comments_count && (
                          <span className="flex items-center gap-1 font-mono text-slate-600">
                            <MessageCircle className="w-3 h-3 text-slate-400" />
                            {post.comments_count}
                          </span>
                        )}
                        {post.share_count && (
                          <span className="flex items-center gap-1 font-mono text-slate-600">
                            <Share2 className="w-3 h-3 text-slate-400" />
                            {post.share_count}
                          </span>
                        )}
                      </div>

                      <a
                        href={postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#1877f2] hover:underline inline-flex items-center gap-1"
                      >
                        <span>View on Facebook</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                  </article>
                );
              })
            )}

          </div>

          {/* Right Column (4 cols): Operations Base & Emergency Hotlines */}
          <div className="lg:col-span-4 space-y-4">

            {/* Official Facebook Channel Connect Card */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
              <div className="bg-[#1877f2] p-4 text-white space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FacebookIcon className="w-5 h-5 fill-current" />
                    <span className="font-bold text-xs uppercase tracking-wider">Official Page</span>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono font-medium">
                    Verified
                  </span>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Join our official Facebook community for citizen advisories, live public inquiries, and real-time community engagement.
                </p>
              </div>
              <div className="p-4 space-y-3 bg-slate-50/50">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-slate-700">Facebook Channel:</span>
                  <span className="font-mono text-blue-700 font-semibold">@cdrrmo.lipacity</span>
                </div>
                <a
                  href="https://www.facebook.com/cdrrmo.lipacity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                  <span>Follow &amp; Like on Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 24/7 Operations Center Emergency Call Box */}
            <div className="bg-[#7a1313] text-white rounded-lg p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <PhoneCall className="w-4 h-4" />
                <span>24/7 Operations Center</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                For vehicular collisions, trauma cases, flooding, or fallen trees, contact the Lipa Rescue Operations Center immediately:
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
                  <span className="text-slate-400">Radio Frequency:</span>
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
                Operations Base
              </h3>
              <div className="space-y-1.5 text-slate-600">
                <div><strong>Station:</strong> City Hall Complex, Marawoy, Lipa City</div>
                <div><strong>Jurisdiction:</strong> 72 Barangays of Lipa City</div>
                <div><strong>Standard Response Time:</strong> Within 5 to 7 Minutes</div>
                <div><strong>Active Standby:</strong> 24 Hours / 7 Days</div>
              </div>
            </div>

            {/* Direct Official Links */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs space-y-2">
              <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
                Related Modules
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

          </div>

        </div>

      </div>
    </div>
  );
}
