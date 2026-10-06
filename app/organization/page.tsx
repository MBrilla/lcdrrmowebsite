"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

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
  const cleaned = parts.filter((p) => !/^(jr\.?|sr\.?|ii|iii|iv)$/i.test(p));
  if (cleaned.length >= 2) {
    return (cleaned[0][0] + cleaned[cleaned.length - 1][0]).toUpperCase();
  }
  return parts[0].slice(0, 2).toUpperCase();
}

const ALL_PERSONNEL: PersonnelItem[] = [
  // 1. Executive Leadership
  {
    id: "tadeja",
    name: "LEONARDO D. TADEJA",
    title: "City DRRM Officer",
    category: "executive",
    categoryLabel: "Executive Leadership",
    badge: "Department Head",
    rankOrder: 1,
  },
  {
    id: "mitra",
    name: "JOSEPH DONDON M. MITRA",
    title: "Local DRRM Officer IV",
    category: "executive",
    categoryLabel: "Executive Leadership",
    badge: "Chief, Operations & Warning",
    rankOrder: 2,
  },
  {
    id: "lucero",
    name: "LOLITA M. LUCERO",
    title: "Local DRRM Officer IV",
    category: "executive",
    categoryLabel: "Executive Leadership",
    badge: "Chief, Research & Planning",
    rankOrder: 3,
  },

  // 2. Operations & Medical Unit
  {
    id: "gualberto",
    name: "EHROLD D. GUALBERTO",
    title: "Nurse II",
    category: "operations",
    categoryLabel: "Operations & Medical",
    badge: "Operations Lead",
    rankOrder: 4,
  },
  {
    id: "hernandez",
    name: "Jeffrey L. Hernandez",
    title: "Engineering Assistant",
    category: "operations",
    categoryLabel: "Operations & Medical",
    badge: "Research & Planning Staff",
    rankOrder: 5,
  },
  {
    id: "macasaet",
    name: "Dulce M. Macasaet",
    title: "Nursing Attendant II",
    category: "operations",
    categoryLabel: "Operations & Medical",
    badge: "Medical Operations",
    rankOrder: 6,
  },
  {
    id: "reyes",
    name: "Reah M. Reyes",
    title: "Nursing Attendant I",
    category: "operations",
    categoryLabel: "Operations & Medical",
    badge: "Medical Operations",
    rankOrder: 7,
  },

  // 3. Administrative Support Services
  {
    id: "amorin",
    name: "Laila B. Amorin",
    title: "Administrative Aide IV",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Admin Services",
    rankOrder: 8,
  },
  {
    id: "nimfa_javier",
    name: "Nimfa B. Javier",
    title: "Administrative Aide II",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Admin Services",
    rankOrder: 9,
  },
  {
    id: "morcilla",
    name: "Jeffrey L. Morcilla",
    title: "Administrative Aide IV",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Admin Services",
    rankOrder: 10,
  },
  {
    id: "mea",
    name: "Allan Raymund O. Mea",
    title: "Administrative Aide IV",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Logistics Support",
    rankOrder: 11,
  },
  {
    id: "lantin",
    name: "Jeffrey R. Lantin",
    title: "Administrative Aide III",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Admin Services",
    rankOrder: 12,
  },
  {
    id: "caspe",
    name: "Arnulfo B. Caspe Jr.",
    title: "Administrative Assistant I",
    category: "admin",
    categoryLabel: "Administrative Support",
    badge: "Office Assistance",
    rankOrder: 13,
  },

  // 4. City Emergency Response Force (23 Responders)
  {
    id: "heart_leynes",
    name: "Heart Queenzy M. Leynes",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 14,
  },
  {
    id: "elaine_mila",
    name: "Elaine K. Mila",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 15,
  },
  {
    id: "brasil",
    name: "Harrielvey Cutberto D. Brasil",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 16,
  },
  {
    id: "corpuz",
    name: "Hadzin M. Corpuz",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 17,
  },
  {
    id: "orellano",
    name: "Leo G. Orellano",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 18,
  },
  {
    id: "ladioan",
    name: "Dave Wilson M. Ladioan",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 19,
  },
  {
    id: "cayetona",
    name: "Jazzel Marie B. Cayetona",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 20,
  },
  {
    id: "leynes_derick",
    name: "Derick L. Leynes",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 21,
  },
  {
    id: "novicio",
    name: "John Nolan L. Novicio",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 22,
  },
  {
    id: "pesigan",
    name: "Pierrie V. Pesigan",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 23,
  },
  {
    id: "aguilera",
    name: "Mark C. Aguilera",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 24,
  },
  {
    id: "castillo",
    name: "Julian Victor M. Castillo",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 25,
  },
  {
    id: "talpay",
    name: "Nico C. Talpay",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 26,
  },
  {
    id: "lingullo",
    name: "Allen Paul Matthew E. Lingullo",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 27,
  },
  {
    id: "javier_joel",
    name: "Joel O. Javier",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 28,
  },
  {
    id: "mostejo",
    name: "Arnie M. Mostejo",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 29,
  },
  {
    id: "sarmiento",
    name: "Jane P. Sarmiento",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 30,
  },
  {
    id: "valencia",
    name: "Marc Joseph M. Valencia",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 31,
  },
  {
    id: "artieno",
    name: "Reyniell D. Artieno",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 32,
  },
  {
    id: "padua",
    name: "Mark Anthony M. Padua",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 33,
  },
  {
    id: "mendoza",
    name: "Glenn Josua C. Mendoza",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 34,
  },
  {
    id: "bain",
    name: "Jerriclo D. Ba-in",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 35,
  },
  {
    id: "organo",
    name: "Alex B. Organo Jr.",
    title: "City Response Personnel",
    category: "responder",
    categoryLabel: "Emergency Responders",
    badge: "Field Responder",
    rankOrder: 36,
  },
];

type CategoryFilter = "all" | "executive" | "operations" | "admin" | "responder";

function PersonnelCard({
  item,
  isHead = false,
  isExecutive = false,
}: {
  item: PersonnelItem;
  isHead?: boolean;
  isExecutive?: boolean;
}) {
  return (
    <div
      className={`bg-white border rounded p-3 sm:p-3.5 flex flex-col items-center text-center transition-all hover:shadow-sm ${
        isHead
          ? "border-[#7a1313] ring-1 ring-[#7a1313]/25 shadow-xs"
          : isExecutive
          ? "border-slate-300 ring-1 ring-slate-200/80 shadow-xs hover:border-[#7a1313]"
          : "border-slate-200 hover:border-slate-300 shadow-xs"
      }`}
    >
      {/* Appropriately Sized Headshot Box with Official Lipa Rescue Red Border */}
      <div
        className={`relative overflow-hidden bg-slate-50 border-2 border-[#7a1313] rounded shadow-xs mb-2.5 flex flex-col items-center justify-center ${
          isHead
            ? "w-32 h-42 sm:w-36 sm:h-46"
            : isExecutive
            ? "w-28 h-36 sm:w-30 sm:h-40"
            : "w-24 h-32 sm:w-26 sm:h-34"
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
                isHead ? "w-12 h-12" : isExecutive ? "w-10 h-10" : "w-8 h-8"
              } text-slate-300 mb-1`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider">
              {getInitials(item.name)}
            </span>
          </div>
        )}
      </div>

      {/* Role / Section Tag */}
      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a1313] mb-1 line-clamp-1">
        {item.badge || item.categoryLabel}
      </span>

      {/* Name */}
      <h3
        className={`font-bold text-slate-900 leading-snug line-clamp-2 ${
          isHead
            ? "text-sm sm:text-base"
            : isExecutive
            ? "text-xs sm:text-sm"
            : "text-xs sm:text-[13px]"
        }`}
      >
        {item.name}
      </h3>

      {/* Designation / Title */}
      <p
        className={`font-medium text-slate-600 mt-0.5 line-clamp-1 ${
          isHead ? "text-xs" : "text-[11px]"
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
  const [showPhotoModal, setShowPhotoModal] = useState(false);

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
              City Disaster Risk Reduction and Management Office &bull; City Government of Lipa (36 Active Personnel)
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setShowPhotoModal(true)}
              className="text-xs bg-white hover:bg-slate-50 text-slate-800 font-medium px-3 py-1.5 rounded border border-slate-300 transition-colors shadow-xs"
            >
              View Board Photo
            </button>
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
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
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
                    isHead={person.id === "tadeja"}
                    isExecutive={person.category === "executive"}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Structured "All" View: Balanced Hierarchy without messy gaps */
          <div className="space-y-8">
            
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

        {/* Modal: Original Corkboard Photo */}
        {showPhotoModal && (
          <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
            <div className="bg-white rounded max-w-4xl w-full p-4 space-y-3 max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-bold text-slate-800">
                  Official Corkboard Organizational Chart Photo
                </span>
                <button
                  onClick={() => setShowPhotoModal(false)}
                  className="text-slate-500 hover:text-black font-bold text-sm px-2 py-1"
                >
                  &times; Close
                </button>
              </div>
              <div className="flex-1 overflow-auto bg-slate-900 rounded flex items-center justify-center p-2">
                <img
                  src="/org-chart.jpg"
                  alt="Original Corkboard Chart"
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>
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
