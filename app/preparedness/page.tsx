"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  FileDown, 
  Search, 
  Filter, 
  ShieldCheck, 
  ExternalLink, 
  PhoneCall, 
  AlertTriangle,
  Layers,
  Globe,
  CheckCircle,
  FileText
} from "lucide-react";
import { INFOGRAPHICS_DATA } from "@/lib/downloadablesData";
import InfographicVisual from "@/components/InfographicVisual";

export default function PreparednessPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAgency, setSelectedAgency] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [downloadFilter, setDownloadFilter] = useState<"all" | "downloadable-only" | "protocols-only">("all");

  const downloadableCount = useMemo(() => {
    return INFOGRAPHICS_DATA.filter((i) => i.hasOfficialDownloadable).length;
  }, []);

  const protocolCount = useMemo(() => {
    return INFOGRAPHICS_DATA.filter((i) => !i.hasOfficialDownloadable).length;
  }, []);

  const filteredInfographics = useMemo(() => {
    return INFOGRAPHICS_DATA.filter((item) => {
      // Download filter
      if (downloadFilter === "downloadable-only" && !item.hasOfficialDownloadable) {
        return false;
      }
      if (downloadFilter === "protocols-only" && item.hasOfficialDownloadable) {
        return false;
      }

      // Agency filter
      if (selectedAgency !== "all" && item.agency !== selectedAgency) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesSub = item.subtitle.toLowerCase().includes(query);
        const matchesAgency = item.agency.toLowerCase().includes(query);
        const matchesAgencyFull = item.agencyFull.toLowerCase().includes(query);
        const matchesWebsite = item.agencyWebsiteName.toLowerCase().includes(query);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(query);
        const matchesTagalog = item.tagalogSummary.toLowerCase().includes(query);
        const matchesSummary = item.summary.toLowerCase().includes(query);

        return (
          matchesTitle ||
          matchesSub ||
          matchesAgency ||
          matchesAgencyFull ||
          matchesWebsite ||
          matchesCategory ||
          matchesTagalog ||
          matchesSummary
        );
      }

      return true;
    });
  }, [searchQuery, selectedAgency, selectedCategory, downloadFilter]);

  return (
    <div className="w-full bg-[#fbfbfa] min-h-screen">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-500">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#7a1313] transition-colors">
              Home
            </Link>
            <span>&rsaquo;</span>
            <span className="text-slate-800 font-semibold">Preparedness &amp; Downloadables</span>
          </nav>

          <div className="hidden sm:flex items-center gap-2 text-slate-400 text-[11px]">
            <span>Republic Act No. 10121</span>
            <span>&bull;</span>
            <span className="font-semibold text-slate-600">Sourced Directly from DOST Portals</span>
          </div>
        </div>
      </div>

      {/* Page Hero / Banner Section (Lipa Maroon Theme) */}
      <section className="bg-[#7a1313] text-white py-10 sm:py-14 border-b border-[#610f0f] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/15">
            <FileDown className="w-3.5 h-3.5" />
            <span>Information, Education and Communication (IEC) Hub</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Disaster Preparedness &amp; Downloadable Infographics
            </h1>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
              Real disaster preparedness infographics and public advisories directly sourced and accredited from the official websites of <strong>DOST-PAGASA</strong> (<code>bagong.pagasa.dost.gov.ph</code>) and <strong>DOST-PHIVOLCS</strong> (<code>phivolcs.dost.gov.ph</code>). Downloadable files are provided <em>if and only if</em> the agency officially publishes said infographic on their website.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/15 max-w-4xl text-xs">
            <div className="bg-white/10 p-3 rounded border border-white/10">
              <div className="text-lg sm:text-xl font-bold text-emerald-300">{downloadableCount} Real Downloads</div>
              <div className="text-slate-300 text-[11px]">Official Sourced Files</div>
            </div>
            <div className="bg-white/10 p-3 rounded border border-white/10">
              <div className="text-lg sm:text-xl font-bold text-white">{protocolCount} Live Advisories</div>
              <div className="text-slate-300 text-[11px]">Direct Agency Web Portals</div>
            </div>
            <div className="bg-white/10 p-3 rounded border border-white/10">
              <div className="text-lg sm:text-xl font-bold text-white">Direct Server Links</div>
              <div className="text-slate-300 text-[11px]">PAGASA &bull; PHIVOLCS</div>
            </div>
            <div className="bg-white/10 p-3 rounded border border-white/10">
              <div className="text-lg sm:text-xl font-bold text-amber-300">R.A. 10121</div>
              <div className="text-slate-300 text-[11px]">Community Safety Standard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Source Hub Callout: Direct Links to PAGASA & PHIVOLCS Websites & Publications */}
        <section className="bg-white border-2 border-slate-200 rounded-lg p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Official Agency Sourcing Notice
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Primary Sources: Official DOST-PAGASA &amp; DOST-PHIVOLCS Portals
              </h2>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              Public Domain / Government Educational Resources
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* PAGASA Portal Card */}
            <div className="bg-blue-50/60 border border-blue-200 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-800 text-white">
                  DOST-PAGASA Publications
                </span>
                <span className="text-xs text-blue-800 font-mono font-semibold">bagong.pagasa.dost.gov.ph</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Philippine Atmospheric, Geophysical and Astronomical Services Administration
                </h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Real official posters for the Heavy Rainfall Warning System, Tropical Cyclone Wind Signals (TCWS 1–5), and Flood Information Systems sourced from the PAGASA Publications repository.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-blue-200/60 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedAgency("DOST-PAGASA")}
                  className="font-bold text-blue-900 hover:underline cursor-pointer"
                >
                  Filter PAGASA Materials ({INFOGRAPHICS_DATA.filter(i => i.agency === "DOST-PAGASA").length}) &rarr;
                </button>
                <a
                  href="https://bagong.pagasa.dost.gov.ph/learnings/publication"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-colors shadow-2xs"
                >
                  <span>Open PAGASA Publications Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* PHIVOLCS Portal Card */}
            <div className="bg-red-50/60 border border-red-200 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-800 text-white">
                  DOST-PHIVOLCS General Products
                </span>
                <span className="text-xs text-red-800 font-mono font-semibold">phivolcs.dost.gov.ph</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Philippine Institute of Volcanology and Seismology
                </h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Real official files for PEIS Earthquake Intensity scale (20x30 in), Drop-Cover-Hold, Volcano Hazards poster, Taal Eruption comic booklet, and 12-point house readiness flyer sourced directly from the PHIVOLCS IEC vault.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-red-200/60 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedAgency("DOST-PHIVOLCS")}
                  className="font-bold text-red-900 hover:underline cursor-pointer"
                >
                  Filter PHIVOLCS Materials ({INFOGRAPHICS_DATA.filter(i => i.agency === "DOST-PHIVOLCS").length}) &rarr;
                </button>
                <a
                  href="https://www.phivolcs.dost.gov.ph/index.php/general-information-products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-800 hover:bg-red-900 text-white font-semibold transition-colors shadow-2xs"
                >
                  <span>Open PHIVOLCS IEC Products Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search official infographics (e.g., Taal, Go Bag, Rainfall, Wind Signal, PEIS, Ashfall)..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded border border-slate-300 focus:outline-hidden focus:border-[#7a1313] focus:ring-1 focus:ring-[#7a1313] bg-slate-50/50"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Result Counter */}
            <div className="text-xs text-slate-500 font-medium shrink-0 flex items-center gap-1.5 self-center">
              <Layers className="w-3.5 h-3.5 text-[#7a1313]" />
              <span>Showing <strong>{filteredInfographics.length}</strong> of {INFOGRAPHICS_DATA.length} materials</span>
            </div>
          </div>

          {/* Availability Filter Toggle (Real Downloadable vs Live Protocol) */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                Resource Type:
              </span>
              <button
                type="button"
                onClick={() => setDownloadFilter("all")}
                className={`text-xs px-2.5 py-1 rounded font-semibold cursor-pointer transition-colors ${
                  downloadFilter === "all"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All Resources ({INFOGRAPHICS_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setDownloadFilter("downloadable-only")}
                className={`text-xs px-2.5 py-1 rounded font-semibold cursor-pointer transition-colors inline-flex items-center gap-1 ${
                  downloadFilter === "downloadable-only"
                    ? "bg-emerald-700 text-white"
                    : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200"
                }`}
              >
                <CheckCircle className="w-3 h-3 text-emerald-600" />
                <span>Real Downloadable Infographics Only ({downloadableCount})</span>
              </button>
              <button
                type="button"
                onClick={() => setDownloadFilter("protocols-only")}
                className={`text-xs px-2.5 py-1 rounded font-semibold cursor-pointer transition-colors inline-flex items-center gap-1 ${
                  downloadFilter === "protocols-only"
                    ? "bg-slate-700 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                <FileText className="w-3 h-3 text-slate-500" />
                <span>Live Web Advisories ({protocolCount})</span>
              </button>
            </div>
          </div>

          {/* Agency Filter Tabs */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#7a1313]" />
              <span>Filter by Sourced Agency:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all", label: "All Agencies" },
                { id: "DOST-PAGASA", label: "DOST-PAGASA (Weather / Typhoons)" },
                { id: "DOST-PHIVOLCS", label: "DOST-PHIVOLCS (Taal / Seismic)" },
                { id: "DOH & LCDRRMO", label: "DOH (Health Protocols)" },
                { id: "BFP & LCDRRMO", label: "BFP (Fire Standards)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedAgency(tab.id)}
                  className={`text-xs px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                    selectedAgency === tab.id
                      ? "bg-[#7a1313] text-white font-bold shadow-2xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Hazard / Topic Category:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all", label: "All Hazards" },
                { id: "weather", label: "Weather & Typhoons" },
                { id: "volcano-seismic", label: "Volcano & Earthquakes" },
                { id: "emergency-kit", label: "Emergency Kit & Go Bag" },
                { id: "health-fire", label: "Health & Fire Safety" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-slate-800 text-white font-semibold"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Infographics Grid */}
        {filteredInfographics.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-lg p-10 text-center space-y-3">
            <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No matching infographics found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We couldn&apos;t find any materials matching &ldquo;{searchQuery}&rdquo;. Try clearing your filters or searching for terms like &ldquo;Taal&rdquo;, &ldquo;Go Bag&rdquo;, or &ldquo;Rainfall&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedAgency("all");
                setSelectedCategory("all");
                setDownloadFilter("all");
              }}
              className="text-xs font-bold text-[#7a1313] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredInfographics.map((item) => (
              <InfographicVisual key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Community & Barangay Notice for BDRRMCs */}
        <section className="bg-white border-2 border-slate-200 rounded-lg p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <ShieldCheck className="w-6 h-6 text-[#7a1313]" />
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Notice for Barangay Disaster Risk Reduction and Management Committees (BDRRMCs)
              </h2>
              <p className="text-xs text-slate-500">
                Guidelines for Public Posting &amp; Community Education across 72 Barangays
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            All materials published on this portal are cleared for official government duplication, distribution, and display in compliance with <strong>Republic Act No. 10121</strong>. Barangay leaders, school disaster coordinators, and local homeowner associations are authorized to print and post these infographics in:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <strong className="block text-[#7a1313] mb-1">1. Barangay Halls &amp; Outposts</strong>
              Community bulletin boards, BDRRMC command posts, and health centers.
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <strong className="block text-[#7a1313] mb-1">2. Evacuation Centers</strong>
              School gyms, multipurpose complexes, and designated disaster shelter areas.
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <strong className="block text-[#7a1313] mb-1">3. Schools &amp; Commercial Hubs</strong>
              Public &amp; private campuses, market terminals, and public transit terminals.
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100">
            <span>
              For bulk laminated prints or training requests, contact the <strong>Lipa CDRRMO Training Division</strong>.
            </span>
            <a
              href="tel:09154635005"
              className="text-[#7a1313] font-bold hover:underline inline-flex items-center gap-1"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Operations Center: (043) 756-0127 / 0915-463-5005</span>
            </a>
          </div>
        </section>

        {/* Institutional Accreditation & Legal Citation Footer */}
        <section className="bg-slate-900 text-slate-300 rounded-lg p-6 sm:p-8 space-y-4 text-xs">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            Institutional Accreditations &amp; Official Website Source Citations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400">
            <div className="space-y-1.5">
              <div className="text-slate-200 font-bold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>DOST-PAGASA (bagong.pagasa.dost.gov.ph)</span>
              </div>
              <p>
                Philippine Atmospheric, Geophysical and Astronomical Services Administration. Weather advisories, Tropical Cyclone Wind Signals (TCWS 1–5), Heavy Rainfall Warning Systems, and Flood Information posters are sourced directly from the official PAGASA web portal publications repository.
              </p>
              <a
                href="https://bagong.pagasa.dost.gov.ph/learnings/publication"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Visit DOST-PAGASA Publications Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-1.5">
              <div className="text-slate-200 font-bold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-red-400" />
                <span>DOST-PHIVOLCS (phivolcs.dost.gov.ph)</span>
              </div>
              <p>
                Philippine Institute of Volcanology and Seismology. PEIS Earthquake Intensity scale poster, Drop-Cover-Hold visuals, Volcano Hazards poster, Taal Comics booklet, and House Safety audit flyer are sourced directly from the official PHIVOLCS General Information Products repository.
              </p>
              <a
                href="https://www.phivolcs.dost.gov.ph/index.php/general-information-products"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Visit DOST-PHIVOLCS IEC Products Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-1.5">
              <div className="text-slate-200 font-bold">&bull; IVHHN &bull; International Volcanic Health Hazard Network</div>
              <p>
                Endorsed by DOST-PHIVOLCS for volcanic ashfall health protection and respiratory guidelines during Taal Volcano unrest.
              </p>
              <a
                href="https://www.phivolcs.dost.gov.ph/index.php/volcano-hazard/volcano-information-materials"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Visit PHIVOLCS Volcano Info Materials</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-1.5">
              <div className="text-slate-200 font-bold">&bull; Department of Health (doh.gov.ph) &amp; BFP (bfp.gov.ph)</div>
              <p>
                DOH Health Emergency Management Bureau (HEMB) and Bureau of Fire Protection (BFP) Lipa Station. Health advisories, leptospirosis prophylaxis, and residential fire evacuation standards.
              </p>
              <a
                href="https://doh.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Visit DOH Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
