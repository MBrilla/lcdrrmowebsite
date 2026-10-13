"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PAGES } from "@/lib/siteConfig";

export interface PersonnelItem {
  id: string;
  name: string;
  title: string;
  category: "executive" | "operations" | "admin" | "responder";
  categoryLabel: string;
  badge?: string;
  image?: string;
  rankOrder: number;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  const cleaned = parts.filter((p) => !/^(jr\.?|sr\.?|ii|iii|iv|hon\.?|mayor)$/i.test(p));
  if (cleaned.length >= 2) {
    return (cleaned[0][0] + cleaned[cleaned.length - 1][0]).toUpperCase();
  }
  return parts[0].slice(0, 2).toUpperCase();
}

const ALL_PERSONNEL: PersonnelItem[] = [
  // 0. City Chief Executive & Council Chairperson
  {
    id: "mayor_africa",
    name: "HON. ERIC B. AFRICA",
    title: "City Mayor / Chairperson, CDRRMC",
    category: "executive",
    categoryLabel: "Executive Leadership",
    badge: "City Mayor",
    image: "/personnel/eric_b_africa.jpeg",
    rankOrder: 0,
  },

  // 1. Executive Leadership
  {
    id: "tadeja",
    name: "LEONARDO D. TADEJA",
    title: "City DRRMO Officer",
    category: "executive",
    categoryLabel: "Executive Leadership",
    badge: "Department Head",
    image: "/personnel/leonardo_d_tadeja.jpg",
    rankOrder: 1,
  },
  {
    id: "mitra",
    name: "JOSEPH DONDON M. MITRA",
    title: "Local DRRM Officer IV",
    category: "executive",
    categoryLabel: "Executive Leadership",
    badge: "Operations Lead",
    image: "/personnel/joseph_dondon_m_mitra.jpeg",
    rankOrder: 2,
  },
  {
    id: "lucero",
    name: "LOLITA M. LUCERO",
    title: "Local DRRM Officer IV",
    category: "executive",
    categoryLabel: "Executive Leadership",
    badge: "Research & Planning Lead",
    image: "/personnel/lolita_m_lucero.jpeg",
    rankOrder: 3,
  },

  // 2. Operations, Medical & Technical Services
  {
    id: "gualberto",
    name: "ERROLD D. GUALBERTO",
    title: "Nurse II",
    category: "operations",
    categoryLabel: "Operations & Medical",
    badge: "Medical Lead",
    image: "/personnel/errold_d_gualberto.jpeg",
    rankOrder: 4,
  },
  {
    id: "hernandez",
    name: "JEFFREY L. HERNANDEZ",
    title: "Engineering Assistant",
    category: "operations",
    categoryLabel: "Operations & Medical",
    badge: "Engineering Support",
    image: "/personnel/jeffrey_l_hernandez.jpg",
    rankOrder: 5,
  },
  {
    id: "macasaet",
    name: "DULCE M. MACASAET",
    title: "Nursing Attendant II",
    category: "operations",
    categoryLabel: "Operations & Medical",
    badge: "Medical Operations",
    image: "/personnel/dulce_m_macasaet.jpeg",
    rankOrder: 6,
  },
  {
    id: "reyes",
    name: "REAH M. REYES",
    title: "Nursing Attendant I",
    category: "operations",
    categoryLabel: "Operations & Medical",
    badge: "Medical Operations",
    image: "/personnel/reah_m_reyes.jpeg",
    rankOrder: 7,
  },

  // 3. Administrative Support Services
  {
    id: "amorin",
    name: "LAILA B. AMORIN",
    title: "Administrative Aide IV",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Admin Services",
    image: "/personnel/laila_b_amorin.jpeg",
    rankOrder: 8,
  },
  {
    id: "morcilla",
    name: "JEFFREY L. MORCILLA",
    title: "Administrative Aide III",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Admin Services",
    image: "/personnel/jeffrey_l_morcilla.png",
    rankOrder: 9,
  },
  {
    id: "nimfa_javier",
    name: "NIMFA B. JAVIER",
    title: "Administrative Aide II",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Admin Services",
    image: "/personnel/nimfa_b_javier.png",
    rankOrder: 10,
  },
  {
    id: "mea",
    name: "ALLAN RAYMUND O. MEA",
    title: "Administrative Aide IV",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Logistics Support",
    image: "/personnel/allan_raymund_o_mea.jpeg",
    rankOrder: 11,
  },
  {
    id: "lantin",
    name: "JEFFREY R. LANTIN",
    title: "Administrative Aide III",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Admin Services",
    image: "/personnel/jeffrey_r_lantin.jpeg",
    rankOrder: 12,
  },
  {
    id: "caspe",
    name: "ARNULFO R. CASPE JR.",
    title: "Administrative Asst. I",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Office Assistance",
    image: "/personnel/arnulfo_r_caspe_jr.jpeg",
    rankOrder: 13,
  },

  // 4. City Response Personnel (Responders)
  {
    id: "pesigan",
    name: "PEEWEE V. PESIGAN",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/peewee_v_pesigan.jpeg",
    rankOrder: 14,
  },
  {
    id: "latayan",
    name: "DAVE WILSON M. LATAYAN",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/dave_wilson_m_latayan.png",
    rankOrder: 15,
  },
  {
    id: "novicio",
    name: "JOB NOLAN L. NOVICIO",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/job_nolan_l_novicio.jpeg",
    rankOrder: 16,
  },
  {
    id: "moster_derick",
    name: "DERICK C. MOSTER",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/derick_c_moster.png",
    rankOrder: 17,
  },
  {
    id: "corpuz",
    name: "HAIZON M. CORPUZ",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/haizon_m_corpuz.jpg",
    rankOrder: 18,
  },
  {
    id: "leyesa",
    name: "JAECEL JAROLD C. LEYESA",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/jaecel_jarold_c_leyesa.jpeg",
    rankOrder: 19,
  },
  {
    id: "guillarte",
    name: "LEO G. GUILLARTE",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/leo_g_guillarte.jpeg",
    rankOrder: 20,
  },
  {
    id: "esquillo",
    name: "ALLEN PAUL MATTHEW L. ESQUILLO",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/allen_paul_matthew_l_esquillo.jpeg",
    rankOrder: 21,
  },
  {
    id: "dalisay",
    name: "NICO C. DALISAY",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/nico_c_dalisay.png",
    rankOrder: 22,
  },
  {
    id: "caguicla",
    name: "JULIAN VICTOR M. CAGUICLA",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/julian_victor_m_caguicla.png",
    rankOrder: 23,
  },
  {
    id: "sarmiento",
    name: "JANE P. SARMIENTO",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/jane_p_sarmiento.png",
    rankOrder: 24,
  },
  {
    id: "moster_arnie",
    name: "ARNIE M. MOSTER",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/arnie_m_moster.jpeg",
    rankOrder: 25,
  },
  {
    id: "javier_joel",
    name: "JOEL O. JAVIER",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/joel_o_javier.jpeg",
    rankOrder: 26,
  },
  {
    id: "aguillera",
    name: "MARK C. AGUILLERA",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/mark_c_aguillera.jpeg",
    rankOrder: 27,
  },
  {
    id: "valencia",
    name: "MARK JOSEPH M. VALENCIA",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/mark_joseph_m_valencia.png",
    rankOrder: 28,
  },
  {
    id: "olan",
    name: "JUHRELL O. OLAN",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/juhrell_o_olan.jpeg",
    rankOrder: 29,
  },
  {
    id: "antonio",
    name: "REYNELL D. ANTONIO",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/reynell_d_antonio.jpeg",
    rankOrder: 30,
  },
  {
    id: "mendoza",
    name: "DEUENN JOSCH C. MENDOZA",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/deuenn_josch_c_mendoza.jpeg",
    rankOrder: 31,
  },
  {
    id: "organo",
    name: "ALEX P. ORGANO JR.",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/alex_p_organo_jr.png",
    rankOrder: 32,
  },
  {
    id: "flores",
    name: "MARK ANTHONY G. FLORES",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/mark_anthony_g_flores.jpeg",
    rankOrder: 33,
  },
  {
    id: "bravo",
    name: "HARMELVEY CETHROEI D. BRAVO",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/harmelvey_cethroei_d_bravo.jpeg",
    rankOrder: 34,
  },
  {
    id: "laylo",
    name: "HEART QUEENZY M. LAYLO",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    image: "/personnel/heart_queenzy_m_laylo.png",
    rankOrder: 35,
  },
];

type CategoryFilter = "all" | "executive" | "operations" | "admin" | "responder";

function PersonnelCard({
  item,
  isHead = false,
  isExecutive = false,
  isMayor = false,
}: {
  item: PersonnelItem;
  isHead?: boolean;
  isExecutive?: boolean;
  isMayor?: boolean;
}) {
  return (
    <div
      className={`bg-white border rounded p-3 sm:p-3.5 flex flex-col items-center text-center transition-all hover:shadow-sm ${
        isMayor
          ? "border-[#c68a18] ring-2 ring-[#c68a18]/40 shadow-sm bg-gradient-to-b from-amber-50/50 via-white to-white"
          : isHead
          ? "border-[#7a1313] ring-1 ring-[#7a1313]/25 shadow-xs"
          : isExecutive
          ? "border-slate-300 ring-1 ring-slate-200/80 shadow-xs hover:border-[#7a1313]"
          : "border-slate-200 hover:border-slate-300 shadow-xs"
      }`}
    >
      {/* Appropriately Sized Headshot Box with Official Border */}
      <div
        className={`relative overflow-hidden bg-slate-50 border-2 rounded shadow-xs mb-2.5 flex flex-col items-center justify-center ${
          isMayor
            ? "border-[#c68a18] w-36 h-46 sm:w-40 sm:h-50"
            : isHead
            ? "border-[#7a1313] w-32 h-42 sm:w-36 sm:h-46"
            : isExecutive
            ? "border-[#7a1313] w-28 h-36 sm:w-30 sm:h-40"
            : "border-[#7a1313] w-24 h-32 sm:w-26 sm:h-34"
        }`}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-2 text-slate-400 select-none">
            <svg
              className={`${
                isMayor
                  ? "w-14 h-14 text-amber-700/60"
                  : isHead
                  ? "w-12 h-12 text-slate-300"
                  : isExecutive
                  ? "w-10 h-10 text-slate-300"
                  : "w-8 h-8 text-slate-300"
              } mb-1`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span
              className={`font-bold tracking-wider ${
                isMayor ? "text-xs font-extrabold text-[#7a1313]" : "text-[10px] text-slate-400"
              }`}
            >
              {getInitials(item.name)}
            </span>
          </div>
        )}
      </div>

      {/* Role / Section Tag */}
      <span
        className={`font-bold uppercase tracking-wider mb-1 line-clamp-1 ${
          isMayor
            ? "text-[10px] sm:text-[11px] text-[#7a1313] bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-full"
            : "text-[10px] text-[#7a1313]"
        }`}
      >
        {item.badge || item.categoryLabel}
      </span>

      {/* Name */}
      <h3
        className={`font-bold leading-snug line-clamp-2 ${
          isMayor
            ? "text-sm sm:text-base text-[#7a1313]"
            : isHead
            ? "text-sm sm:text-base text-slate-900"
            : isExecutive
            ? "text-xs sm:text-sm text-slate-900"
            : "text-xs sm:text-[13px] text-slate-900"
        }`}
      >
        {item.name}
      </h3>

      {/* Designation / Title */}
      <p
        className={`font-medium mt-0.5 line-clamp-1 ${
          isMayor
            ? "text-xs font-semibold text-slate-700"
            : isHead
            ? "text-xs text-slate-600"
            : "text-[11px] text-slate-600"
        }`}
      >
        {item.title}
      </p>
    </div>
  );
}

export default function OrganizationPage() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered personnel based on category and search query
  const filteredPersonnel = useMemo(() => {
    return ALL_PERSONNEL.filter((item) => {
      const matchesCategory =
        selectedFilter === "all" || item.category === selectedFilter;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.badge && item.badge.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  // Grouped subsets
  const executiveGroup = useMemo(
    () => ALL_PERSONNEL.filter((p) => p.category === "executive"),
    []
  );
  const operationsGroup = useMemo(
    () => ALL_PERSONNEL.filter((p) => p.category === "operations"),
    []
  );
  const adminGroup = useMemo(
    () => ALL_PERSONNEL.filter((p) => p.category === "admin"),
    []
  );
  const respondersGroup = useMemo(
    () => ALL_PERSONNEL.filter((p) => p.category === "responder"),
    []
  );

  if (!PAGES.organization) {
    return (
      <div className="w-full bg-[#fbfbfa] py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav className="text-xs text-slate-500 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#7a1313]">
              Home
            </Link>
            <span>&rsaquo;</span>
            <span className="text-slate-800 font-semibold">Organizational Chart</span>
          </nav>

          <div className="space-y-2">
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-200 uppercase tracking-wide">
              Module In Development
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#7a1313] tracking-tight">
              Organizational Chart &amp; Personnel Directory
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              The official personnel directory and staffing structure for the Lipa City Disaster Risk Reduction and Management Office is currently being prepared for the upcoming development milestone.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded p-6 shadow-xs space-y-4">
            <div>
              <h2 className="font-bold text-slate-900 text-sm">Department Leadership</h2>
              <p className="text-xs text-slate-500">Lipa City Disaster Risk Reduction &amp; Management Office</p>
              <div className="text-base font-bold text-[#7a1313] mt-1">
                Leonardo D. Tadeja &bull; City DRRM Officer
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Full personnel directory verification in progress</span>
              <Link href="/" className="text-[#7a1313] font-semibold hover:underline">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fbfbfa] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Compact Header & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <nav className="text-xs text-slate-500 flex items-center gap-1.5">
              <Link href="/" className="hover:text-[#7a1313] transition-colors">
                Home
              </Link>
              <span>&rsaquo;</span>
              <span className="text-slate-800 font-semibold">Organizational Directory</span>
            </nav>
            <h1 className="text-xl sm:text-2xl font-bold text-[#7a1313] tracking-tight">
              LCDRRMO Personnel &amp; Organizational Directory
            </h1>
            <p className="text-xs text-slate-600">
              City Disaster Risk Reduction and Management Office &bull; City Government of Lipa ({ALL_PERSONNEL.length} Active Personnel)
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <Link
              href="/"
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded border border-slate-300 transition-colors"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>

        {/* Filter Navigation Bar & Search */}
        <div className="bg-white border border-slate-200 rounded p-3 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-xs">
          {/* Quick Filter Pills */}
          <div className="flex items-center gap-1.5 text-xs overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                selectedFilter === "all"
                  ? "bg-[#7a1313] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Personnel ({ALL_PERSONNEL.length})
            </button>
            <button
              onClick={() => setSelectedFilter("executive")}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                selectedFilter === "executive"
                  ? "bg-[#7a1313] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Leadership ({executiveGroup.length})
            </button>
            <button
              onClick={() => setSelectedFilter("operations")}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                selectedFilter === "operations"
                  ? "bg-[#7a1313] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Operations &amp; Medical ({operationsGroup.length})
            </button>
            <button
              onClick={() => setSelectedFilter("admin")}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                selectedFilter === "admin"
                  ? "bg-[#7a1313] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Admin &amp; Support ({adminGroup.length})
            </button>
            <button
              onClick={() => setSelectedFilter("responder")}
              className={`px-3 py-1.5 rounded font-medium transition-colors ${
                selectedFilter === "responder"
                  ? "bg-[#7a1313] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Field Responders ({respondersGroup.length})
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search by name or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs px-3 py-1.5 border border-slate-300 rounded focus:outline-hidden focus:border-[#7a1313] bg-slate-50"
            />
          </div>
        </div>

        {/* Search Results Filtered View */}
        {(searchQuery.trim() !== "" || selectedFilter !== "all") ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-600 border-b border-slate-200 pb-2">
              <span className="font-semibold text-slate-800">
                Showing {filteredPersonnel.length} matching personnel
              </span>
              {(searchQuery.trim() !== "" || selectedFilter !== "all") && (
                <button
                  onClick={() => {
                    setSelectedFilter("all");
                    setSearchQuery("");
                  }}
                  className="text-[#7a1313] hover:underline font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredPersonnel.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded p-8 text-center text-xs text-slate-500">
                No personnel found matching your criteria.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5">
                {filteredPersonnel.map((person) => (
                  <PersonnelCard
                    key={person.id}
                    item={person}
                    isMayor={person.id === "mayor_africa"}
                    isHead={person.id === "mayor_africa" || person.id === "tadeja"}
                    isExecutive={person.category === "executive"}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Structured "All" View: Balanced Hierarchy without messy gaps */
          <div className="space-y-8">
            
            {/* TIER 0: City Chief Executive & CDRRMC Chairperson (The Very Top) */}
            <div className="bg-white border-2 border-[#c68a18] rounded p-6 shadow-sm text-center space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7a1313] via-[#c68a18] to-[#7a1313]" />

              <div className="space-y-1">
                <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#7a1313] bg-amber-100 border border-amber-300 px-3 py-0.5 rounded-full shadow-2xs">
                  City Chief Executive &bull; Council Chairperson
                </span>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Lipa City Disaster Risk Reduction and Management Council (CDRRMC)
                </h2>
                <p className="text-xs text-slate-500 max-w-xl mx-auto">
                  Providing overall executive policy direction and disaster governance for the City of Lipa pursuant to R.A. 10121.
                </p>
              </div>

              {/* Mayor Card at the Center Top */}
              <div className="flex justify-center pt-1">
                <div className="w-full max-w-xs sm:max-w-sm">
                  <PersonnelCard
                    item={ALL_PERSONNEL.find((p) => p.id === "mayor_africa")!}
                    isMayor={true}
                    isHead={true}
                  />
                </div>
              </div>

              {/* Connecting Tree Line Downward to Implementing Office */}
              <div className="flex flex-col items-center pt-2">
                <div className="w-0.5 h-6 bg-gradient-to-b from-[#c68a18] to-[#7a1313]" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#7a1313] bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200 shadow-2xs">
                  Implementing Arm &bull; LCDRRMO Department Leadership
                </span>
                <div className="w-0.5 h-6 bg-[#7a1313]" />
              </div>
            </div>

            {/* TIER 1: Executive Leadership (3 Headshot Boxes) */}
            <div className="bg-white border border-slate-200 rounded p-5 space-y-4 shadow-xs">
              <div className="text-center space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a1313] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded">
                  Executive Command
                </span>
                <h2 className="text-base font-bold text-slate-900">
                  Office Leadership &amp; Division Chiefs
                </h2>
              </div>

              {/* Trio: Tadeja center, Mitra & Lucero on sides */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto items-stretch">
                <PersonnelCard
                  item={ALL_PERSONNEL.find((p) => p.id === "mitra")!}
                  isExecutive={true}
                />
                <PersonnelCard
                  item={ALL_PERSONNEL.find((p) => p.id === "tadeja")!}
                  isHead={true}
                />
                <PersonnelCard
                  item={ALL_PERSONNEL.find((p) => p.id === "lucero")!}
                  isExecutive={true}
                />
              </div>
            </div>

            {/* TIER 2: Operations, Medical & Technical Unit (4 Headshot Boxes) */}
            <div className="bg-white border border-slate-200 rounded p-5 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a1313] bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                    Operations &amp; Technical
                  </span>
                  <h2 className="text-base font-bold text-slate-900 mt-1">
                    Operations, Medical &amp; Technical Unit
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-medium">4 Officers</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
                {operationsGroup.map((person) => (
                  <PersonnelCard key={person.id} item={person} />
                ))}
              </div>
            </div>

            {/* TIER 3: Administrative & Logistics Support (6 Headshot Boxes) */}
            <div className="bg-white border border-slate-200 rounded p-5 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                    Administration
                  </span>
                  <h2 className="text-base font-bold text-slate-900 mt-1">
                    Administrative &amp; General Support Services
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-medium">6 Personnel</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
                {adminGroup.map((person) => (
                  <PersonnelCard key={person.id} item={person} />
                ))}
              </div>
            </div>

            {/* TIER 4: City Emergency Response Force (23 Headshot Boxes) */}
            <div className="bg-white border border-slate-200 rounded p-5 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a1313] bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                    24/7 Field Operations
                  </span>
                  <h2 className="text-base font-bold text-slate-900 mt-1">
                    City Emergency Response Personnel (Lipa Rescue)
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-medium">23 Responders</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5">
                {respondersGroup.map((person) => (
                  <PersonnelCard key={person.id} item={person} />
                ))}
              </div>
            </div>

            {/* Plantilla Vacancies Information Note */}
            <div className="bg-slate-50 border border-slate-200 rounded p-3 sm:p-4 text-xs text-slate-600 space-y-1">
              <div className="font-bold text-slate-800">
                Authorized Plantilla Positions (Vacant):
              </div>
              <p>
                Administrative Officer II (Admin Head) &bull; Supply Officer I (Supply Management) &bull; Computer Maintenance Technologist III (Monitoring &amp; Warning) &bull; Local DRRM Officer II (Research &amp; Planning)
              </p>
            </div>

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
