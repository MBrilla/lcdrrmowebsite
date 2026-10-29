"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  FileText, 
  Search, 
  ExternalLink, 
  Download, 
  Calendar, 
  BookOpen, 
  ShieldCheck, 
  Filter, 
  CheckCircle2, 
  Building2, 
  Scale, 
  Info 
} from "lucide-react";
import { ISSUANCES_DATA, IssuanceItem } from "@/lib/issuancesData";
import { PAGES } from "@/lib/siteConfig";

export default function IssuancesPage() {
  const [selectedAgency, setSelectedAgency] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const agencies = [
    { id: "all", label: "All Agencies" },
    { id: "DILG", label: "DILG Circulars" },
    { id: "NDRRMC", label: "NDRRMC Guidelines" },
    { id: "City Government of Lipa", label: "City Executive Orders" },
  ];

  const categories = [
    { id: "all", label: "All Subjects" },
    { id: "operation-listo", label: "Operation LISTO" },
    { id: "preparedness", label: "DRRM Planning" },
    { id: "evacuation-standards", label: "Evacuation Centers" },
    { id: "calamity-fund", label: "LDRRM Fund (5%)" },
    { id: "bdrrmc-governance", label: "Barangay Governance" },
  ];

  const years = ["all", "2024", "2023", "2022", "2020"];

  const filteredIssuances = useMemo(() => {
    return ISSUANCES_DATA.filter((item) => {
      const matchesAgency =
        selectedAgency === "all" || item.issuingAgency === selectedAgency;
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesYear =
        selectedYear === "all" || item.year.toString() === selectedYear;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.issuanceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.signatory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.legalBases.some((base) =>
          base.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesAgency && matchesCategory && matchesYear && matchesSearch;
    });
  }, [selectedAgency, selectedCategory, selectedYear, searchQuery]);

  return (
    <div className="w-full bg-[#fbfbfa] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <nav className="text-xs text-slate-500 flex items-center gap-1.5">
              <Link href="/" className="hover:text-[#7a1313] transition-colors">
                Home
              </Link>
              <span>&rsaquo;</span>
              <span className="text-slate-800 font-semibold">DILG Memorandums &amp; Issuances</span>
            </nav>
            <h1 className="text-xl sm:text-2xl font-bold text-[#7a1313] tracking-tight">
              DILG Memorandums, Circulars &amp; Statutory Issuances
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Official disaster governance directives, Operation LISTO protocols, and LDRRM fund guidelines.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <a
              href="https://www.dilg.gov.ph/issuances"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs inline-flex items-center gap-1.5 bg-[#0e274a] hover:bg-[#1a3861] text-white px-3.5 py-2 rounded font-semibold transition-colors shadow-2xs"
            >
              <Building2 className="w-4 h-4 text-amber-300" />
              <span>DILG Official Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Legal Authority & Statutory Mandate Notice */}
        <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs text-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-red-50 text-[#7a1313] rounded shrink-0 mt-0.5 border border-red-200">
              <Scale className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <span className="font-bold text-slate-900">
                Statutory Framework &bull; Republic Act No. 10121 &amp; R.A. 6975
              </span>
              <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">
                Under Section 10 of R.A. 10121, the <strong>Department of the Interior and Local Government (DILG)</strong> serves as the National Vice-Chairperson for Disaster Preparedness. These issuances guide the City Government of Lipa and its 72 barangays in disaster risk reduction, contingency budgeting, and mandatory evacuation protocols.
              </p>
            </div>
          </div>
          <a
            href="https://www.officialgazette.gov.ph/2010/05/27/republic-act-no-10121/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-[#7a1313] hover:underline shrink-0 flex items-center gap-1"
          >
            Read R.A. 10121 &rarr;
          </a>
        </div>

        {/* Filter Navigation Bar & Multi-Select Controls */}
        <div className="bg-white border border-slate-200 rounded p-3 sm:p-4 space-y-3 shadow-xs">
          {/* Top Row: Search and Agency Tabs */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap">
              {agencies.map((agency) => (
                <button
                  key={agency.id}
                  onClick={() => setSelectedAgency(agency.id)}
                  className={`px-3 py-1.5 rounded font-medium transition-colors shrink-0 ${
                    selectedAgency === agency.id
                      ? "bg-[#7a1313] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {agency.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                placeholder="Search MC number, title, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-8 pr-3 py-1.5 border border-slate-300 rounded focus:outline-hidden focus:border-[#7a1313] bg-slate-50"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>

          {/* Bottom Row: Category & Year Filters */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-slate-500 font-semibold text-[11px] mr-1 hidden sm:inline">
                Topic:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded text-[11px] transition-colors shrink-0 ${
                    selectedCategory === cat.id
                      ? "bg-[#0e274a] text-white font-semibold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Year Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500 font-semibold text-[11px]">Year:</span>
              <div className="flex items-center gap-1">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => setSelectedYear(y)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      selectedYear === y
                        ? "bg-[#7a1313] text-white font-bold"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {y === "all" ? "All" : y}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between text-xs text-slate-600 border-b border-slate-200 pb-2">
          <span className="font-semibold text-slate-800 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#7a1313]" />
            <span>Showing {filteredIssuances.length} Statutory Issuances &amp; Directives</span>
          </span>
          {(searchQuery.trim() !== "" || selectedAgency !== "all" || selectedCategory !== "all" || selectedYear !== "all") && (
            <button
              onClick={() => {
                setSelectedAgency("all");
                setSelectedCategory("all");
                setSelectedYear("all");
                setSearchQuery("");
              }}
              className="text-[#7a1313] hover:underline font-medium"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Issuances List */}
        {filteredIssuances.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded p-8 text-center text-xs text-slate-500">
            No memorandums or issuances found matching your selected criteria.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredIssuances.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-slate-200 rounded p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-all space-y-4"
              >
                {/* Header: Issuance Number & Status Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-xs font-bold font-mono px-2.5 py-0.5 rounded border ${item.agencyBadgeBg} ${item.agencyBadgeText}`}
                    >
                      {item.issuanceNumber}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.dateIssued}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{item.status}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h2>

                {/* Signatory Banner */}
                <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-slate-400">Signed by: </span>
                    <span className="font-bold text-slate-800">{item.signatory}</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    {item.signatoryTitle}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Directives for LGUs */}
                {item.keyDirectives && item.keyDirectives.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7a1313]">
                      Key Mandatory Directives for Lipa City &amp; Barangays:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1 pl-4 list-disc marker:text-[#7a1313]">
                      {item.keyDirectives.map((directive, dIdx) => (
                        <li key={dIdx} className="leading-relaxed">
                          {directive}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Legal Bases & Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
                  {/* Legal Bases Badges */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      Legal Authority:
                    </span>
                    {item.legalBases.map((base, bIdx) => (
                      <span
                        key={bIdx}
                        className="text-[10px] bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded font-mono"
                      >
                        {base}
                      </span>
                    ))}
                  </div>

                  {/* External Document Source Action Button */}
                  <a
                    href={item.officialSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#7a1313] hover:text-[#5a0d0d] bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1.5 rounded transition-colors self-start sm:self-auto"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View on {item.officialSourceLabel}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Footer Navigation */}
        <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <span>Lipa City Disaster Risk Reduction and Management Office &bull; City Government of Lipa</span>
          <Link href="/" className="text-[#7a1313] font-semibold hover:underline">
            &larr; Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
