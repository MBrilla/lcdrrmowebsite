import React from "react";
import Link from "next/link";
import { PhoneCall, CloudSun, FileDown, ShieldCheck, ArrowRight } from "lucide-react";
import LipaLogo from "@/components/LipaLogo";
import WeatherBox from "@/components/WeatherBox";
import { PAGES, FEATURES } from "@/lib/siteConfig";
import WeatherModalTrigger from "@/components/WeatherModalTrigger";

export default function Home() {
  return (
    <div className="w-full bg-[#fbfbfa]">
      {/* Hero / Banner Section */}
      <section className="bg-[#7a1313] text-white py-8 sm:py-14 border-b border-[#610f0f] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="text-[11px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <span>City Government of Lipa</span>
              <span>&bull;</span>
              <span>Province of Batangas</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Lipa City Disaster Risk Reduction &amp; Management Office
            </h1>

            <p className="text-xs sm:text-base text-slate-100 max-w-2xl leading-relaxed">
              Coordinating city-wide disaster prevention, community preparedness, 24/7 emergency rescue operations, and post-disaster recovery for the 72 barangays of Lipa City.
            </p>

            {FEATURES.heroActionButtons && (
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                {PAGES.hotlines && (
                  <Link
                    href="/hotlines"
                    className="bg-white hover:bg-slate-100 text-[#7a1313] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded transition-colors shadow-xs"
                  >
                    Emergency Hotlines
                  </Link>
                )}

                {PAGES.preparedness && (
                  <Link
                    href="/preparedness"
                    className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 rounded transition-colors shadow-xs inline-flex items-center gap-1.5"
                  >
                    <FileDown className="w-4 h-4 text-slate-900" />
                    <span>Preparedness &amp; Downloads</span>
                  </Link>
                )}

                {FEATURES.weatherSection && (
                  <WeatherModalTrigger
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 rounded border border-white/20 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    title="View Weather & Hazard Bulletin"
                  >
                    <CloudSun className="w-4 h-4 text-amber-300" />
                    <span>Weather Updates</span>
                  </WeatherModalTrigger>
                )}

                {FEATURES.pillarsSection && (
                  <Link
                    href="#pillars"
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 rounded border border-white/20 transition-colors hidden xs:inline-block"
                  >
                    The 4 DRRM Pillars
                  </Link>
                )}

                <Link
                  href="#about"
                  className="text-white hover:text-slate-200 font-medium text-xs sm:text-sm px-2 py-2.5 transition-colors underline underline-offset-4"
                >
                  About Our Office
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Quick Emergency Access Bar (Visible only on < lg mobile screens) */}
      <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 shadow-2xs">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4 text-[#7a1313]" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold uppercase text-[#7a1313] truncate">24/7 Operations Center</div>
              <a href="tel:09154635005" className="text-xs font-bold font-mono text-slate-900 hover:text-[#7a1313] truncate block">
                0915-463-5005
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href="tel:09154635005"
              className="bg-[#7a1313] hover:bg-[#610f0f] text-white font-bold text-[11px] py-1.5 px-3 rounded transition-colors shadow-2xs"
            >
              Call Rescue
            </a>
            <WeatherModalTrigger
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-[11px] py-1.5 px-2.5 rounded border border-slate-200 transition-colors inline-flex items-center gap-1 cursor-pointer"
              title="View Weather Updates"
            >
              <CloudSun className="w-3.5 h-3.5 text-[#7a1313]" />
              <span>Weather</span>
            </WeatherModalTrigger>
          </div>
        </div>
      </div>

      {/* Main 2-Column Body Layout (Exact Lipa.gov.ph Architecture) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Column (Left - 8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Core Department Services */}
            {FEATURES.servicesSection && (
              <section id="services" className="space-y-4">
                <h2 className="bg-[#7a1313] text-white text-center py-2.5 px-4 font-bold text-sm sm:text-base tracking-wider uppercase rounded shadow-xs">
                  Department Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded border border-slate-200 bg-white shadow-xs space-y-2 hover:border-[#7a1313] transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7a1313]"></span>
                      <h3 className="font-bold text-slate-900 text-sm">Emergency Rescue</h3>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      24/7 rapid response for vehicular incidents, search and retrieval, flood extraction, and critical emergencies across 72 barangays.
                    </p>
                    <Link
                      href="/accomplishments"
                      className="text-xs font-semibold text-[#7a1313] hover:underline inline-flex items-center gap-1 pt-1"
                    >
                      <span>View Field Rescues &amp; Accomplishments &rarr;</span>
                    </Link>
                  </div>

                  <div className="p-4 rounded border border-slate-200 bg-white shadow-xs space-y-2 hover:border-[#7a1313] transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7a1313]"></span>
                      <h3 className="font-bold text-slate-900 text-sm">Ambulance Transport</h3>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Emergency medical patient transport, pre-hospital care, and emergency stabilization to medical centers in Lipa City.
                    </p>
                    <Link
                      href="/accomplishments"
                      className="text-xs font-semibold text-[#7a1313] hover:underline inline-flex items-center gap-1 pt-1"
                    >
                      <span>View Medical Dispatch Logs &rarr;</span>
                    </Link>
                  </div>

                  <div className="p-4 rounded border border-slate-200 bg-white shadow-xs space-y-2 hover:border-[#7a1313] transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7a1313]"></span>
                      <h3 className="font-bold text-slate-900 text-sm">Weather &amp; Hazard Advisory</h3>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Continuous monitoring of PAGASA bulletins, rainfall saturation, flood risk, and Taal Volcano seismic/vog advisories.
                    </p>
                    <WeatherModalTrigger
                      className="text-xs font-semibold text-[#7a1313] hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer text-left"
                      title="Open Live Weather & Map Modal"
                    >
                      View Live Weather &amp; Map &rarr;
                    </WeatherModalTrigger>
                  </div>

                  <div className="p-4 rounded border border-slate-200 bg-white shadow-xs space-y-2 hover:border-[#7a1313] transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7a1313]"></span>
                      <h3 className="font-bold text-slate-900 text-sm">Community DRRM Training</h3>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      First aid, Basic Life Support (BLS), earthquake &amp; fire simulation drills, and disaster seminars for schools and barangays.
                    </p>
                    <Link
                      href="/activities"
                      className="text-xs font-semibold text-[#7a1313] hover:underline inline-flex items-center gap-1 pt-1"
                    >
                      <span>View Drills &amp; Training Activities &rarr;</span>
                    </Link>
                  </div>
                </div>
              </section>
            )}

            {/* The 4 Thematic Pillars */}
            {FEATURES.pillarsSection && (
              <section id="pillars" className="space-y-4">
                <h2 className="bg-[#7a1313] text-white text-center py-2.5 px-4 font-bold text-sm sm:text-base tracking-wider uppercase rounded shadow-xs">
                  The 4 DRRM Thematic Pillars (R.A. 10121)
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded border-t-4 border-blue-700 border-x border-b border-slate-200 space-y-2 shadow-xs">
                    <div className="text-[11px] font-bold text-blue-800 uppercase">Pillar 1</div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Prevention &amp; Mitigation
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Hazard mapping, drainage engineering reviews, structural safety audits, and risk assessment measures to eliminate vulnerabilities before disaster strikes.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded border-t-4 border-amber-600 border-x border-b border-slate-200 space-y-2 shadow-xs">
                    <div className="text-[11px] font-bold text-amber-800 uppercase">Pillar 2</div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Disaster Preparedness
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Capacity building for barangay BDRRMC units, early warning systems, emergency resource stockpiling, and institutional readiness drills.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded border-t-4 border-red-700 border-x border-b border-slate-200 space-y-2 shadow-xs">
                    <div className="text-[11px] font-bold text-red-800 uppercase">Pillar 3</div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Disaster Response
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Immediate deployment of Lipa Rescue, incident command activation, evacuation center management, medical aid, and relief logistics.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded border-t-4 border-emerald-700 border-x border-b border-slate-200 space-y-2 shadow-xs">
                    <div className="text-[11px] font-bold text-emerald-800 uppercase">Pillar 4</div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Rehabilitation &amp; Recovery
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Post-disaster assessments, restoration of public utilities, shelter assistance, psychological first aid, and resilient reconstruction.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Featured Disaster Preparedness Downloadables & IEC Infographics */}
            {FEATURES.preparednessSection && (
              <section id="preparedness-preview" className="space-y-4">
                <div className="bg-[#7a1313] text-white py-2.5 px-4 rounded shadow-xs flex items-center justify-between">
                  <h2 className="font-bold text-sm sm:text-base tracking-wider uppercase flex items-center gap-2">
                    <FileDown className="w-4 h-4 text-amber-300" />
                    <span>Disaster Preparedness &amp; Downloadables</span>
                  </h2>
                  {PAGES.preparedness && (
                    <Link
                      href="/preparedness"
                      className="text-xs font-semibold text-amber-200 hover:text-white underline flex items-center gap-1"
                    >
                      <span>View All Materials</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1: PAGASA Rainfall */}
                  <div className="bg-white border border-slate-200 rounded p-4 shadow-xs space-y-2 hover:border-[#7a1313] transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-800 text-blue-100">
                        DOST-PAGASA
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono font-bold">Official Poster (JPG)</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Color-Coded Rainfall &amp; Flood Warning System
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Red, Orange, and Yellow rainfall threshold standards, expected hourly volume, and required evacuation actions.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                      <span className="text-[11px] text-slate-400">PAGASA Publications</span>
                      <Link
                        href="/preparedness"
                        className="font-bold text-[#7a1313] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Download Real Poster &rarr;</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 2: PHIVOLCS Taal */}
                  <div className="bg-white border border-slate-200 rounded p-4 shadow-xs space-y-2 hover:border-[#7a1313] transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-800 text-red-100">
                        DOST-PHIVOLCS
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono font-bold">Official Poster (PDF)</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Bulkan at mga Panganib Nito &amp; Taal Preparedness
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Comprehensive volcanic hazards, Base Surges, ashfall, Permanent Danger Zone (PDZ), and Lipa City contingency buffer.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                      <span className="text-[11px] text-slate-400">PHIVOLCS IEC Vault</span>
                      <Link
                        href="/preparedness"
                        className="font-bold text-[#7a1313] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Download Real Poster &rarr;</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 3: 72-Hour Go Bag */}
                  <div className="bg-white border border-slate-200 rounded p-4 shadow-xs space-y-2 hover:border-[#7a1313] transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-800 text-red-100">
                        DOST-PHIVOLCS
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono font-bold">Official Graphic (PNG)</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      72-Hour Emergency &ldquo;Go Bag&rdquo; Survival Checklist
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Complete packing checklist for families: 4L water/person/day, rations, first aid, radios, and emergency documents.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                      <span className="text-[11px] text-slate-400">PHIVOLCS General Products</span>
                      <Link
                        href="/preparedness"
                        className="font-bold text-[#7a1313] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Download Real Graphic &rarr;</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 4: PHIVOLCS PEIS Intensity Scale */}
                  <div className="bg-white border border-slate-200 rounded p-4 shadow-xs space-y-2 hover:border-[#7a1313] transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-800 text-red-100">
                        DOST-PHIVOLCS
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono font-bold">20x30 in Poster (JPG)</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      May Naramdamang Lindol?! PEIS Earthquake Scale
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Official 20x30 inch poster for PEIS Intensity I to X, ground shaking descriptions, and felt-intensity reporting.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                      <span className="text-[11px] text-slate-400">PHIVOLCS General Products</span>
                      <Link
                        href="/preparedness"
                        className="font-bold text-[#7a1313] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Download Real Poster &rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100/80 rounded border border-slate-200 p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#7a1313] shrink-0" />
                    <span className="text-slate-700">
                      Free for public printing, community bulletin boards, and BDRRMC disaster preparedness seminars.
                    </span>
                  </div>
                  {PAGES.preparedness && (
                    <Link
                      href="/preparedness"
                      className="bg-[#7a1313] hover:bg-[#610f0f] text-white px-3.5 py-1.5 rounded font-bold text-xs transition-colors shrink-0"
                    >
                      Browse Full Directory &rarr;
                    </Link>
                  )}
                </div>
              </section>
            )}

            {/* About LCDRRMO Section */}
            <section id="about" className="space-y-4">
              <h2 className="bg-[#7a1313] text-white text-center py-2.5 px-4 font-bold text-sm sm:text-base tracking-wider uppercase rounded shadow-xs">
                About Our Office
              </h2>

              <div className="bg-white border border-slate-200 rounded p-6 shadow-xs space-y-4">
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900">
                    Mandate &amp; Operational Scope
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Pursuant to Republic Act No. 10121 (The Philippine Disaster Risk Reduction and Management Act of 2010), the Lipa City Disaster Risk Reduction and Management Office (LCDRRMO) functions as the executive implementing arm of the Lipa City Disaster Risk Reduction and Management Council (CDRRMC).
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    The office sets operational guidelines, conducts risk assessments, organizes emergency logistics, and maintains continuous 24/7 alert status across all 72 barangays of the City of Lipa.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                  <div className="space-y-1.5">
                    <div><strong>Agency:</strong> Lipa CDRRMO / Lipa Rescue</div>
                    <div><strong>Parent Unit:</strong> City Government of Lipa</div>
                    <div><strong>Motto:</strong> &ldquo;Virtud y Trabajo&rdquo; (Virtue and Work)</div>
                  </div>
                  <div className="space-y-1.5">
                    <div><strong>HQ Location:</strong> City Hall Complex, Marawoy</div>
                    <div><strong>Jurisdiction:</strong> 72 Barangays, Lipa City</div>
                    {PAGES.organization && (
                      <div>
                        <Link
                          href="/organization"
                          className="font-bold text-[#7a1313] hover:underline inline-block pt-0.5"
                        >
                          View Personnel &amp; Organization Chart &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Vision and Mission Statements */}
            <section id="vision-mission" className="space-y-4">
              <h2 className="bg-[#7a1313] text-white text-center py-2.5 px-4 font-bold text-sm sm:text-base tracking-wider uppercase rounded shadow-xs">
                Vision &amp; Mission
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Vision */}
                <div className="bg-white border border-slate-200 rounded p-5 space-y-2 shadow-xs">
                  <h3 className="text-sm font-bold text-[#7a1313] uppercase tracking-wide border-b border-slate-100 pb-2">
                    Vision
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    An Economic and Cultural Hub of the Province, Home to empowered and God-Loving Lipeños, with a business-friendly environment that nurtures inclusive economic growth, equipped with resilient and sustainable infrastructures that protects the biodiversity and natural resources of the city, and inspired by transparent, effective and efficient leadership.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-white border border-slate-200 rounded p-5 space-y-2 shadow-xs">
                  <h3 className="text-sm font-bold text-[#7a1313] uppercase tracking-wide border-b border-slate-100 pb-2">
                    Mission
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <li>To enhance the competencies of our people thereby achieving global competitiveness.</li>
                    <li>To establish a platform of governance through collaboration of all the sectors of the community.</li>
                    <li>To Provide Excellent Beneficial and accessible services towards a vibrant, Responsive and resilient Community.</li>
                  </ol>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar Column (Right - 4 Cols) - Formatted like Lipa.gov.ph Sidebar */}
          <aside id="sidebar-right" className="lg:col-span-4 space-y-6">
            {/* Widget: Emergency Hotlines Directory Table (Matches Lipa.gov.ph Right Sidebar Widget) */}
            <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-xs">
              <div className="bg-[#7a1313] text-white px-3 py-2 text-center font-bold text-xs uppercase tracking-wider">
                Emergency Hotlines
              </div>
              <div className="p-3">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-600 font-semibold text-[11px]">
                      <th className="text-left pb-1.5 font-bold">Office / Agency</th>
                      <th className="text-right pb-1.5 font-bold">Contact Number</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2 text-slate-800 font-medium">CDRRMO (Lipa Rescue)</td>
                      <td className="py-2 text-right font-mono font-bold text-[#7a1313]">
                        <a href="tel:09154635005" className="hover:underline block">0915-463-5005</a>
                        <a href="tel:0437560127" className="hover:underline block text-[11px] text-slate-600">(043) 756-0127</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 text-slate-800 font-medium">Fire Protection (BFP)</td>
                      <td className="py-2 text-right font-mono font-bold text-[#7a1313]">
                        <a href="tel:09275758065" className="hover:underline block">0927-575-8065</a>
                        <a href="tel:0437574618" className="hover:underline block text-[11px] text-slate-600">(043) 757-4618</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 text-slate-800 font-medium">National Police (PNP)</td>
                      <td className="py-2 text-right font-mono font-bold text-[#7a1313]">
                        <a href="tel:09777449692" className="hover:underline block">0977-744-9692</a>
                        <a href="tel:0437023832" className="hover:underline block text-[11px] text-slate-600">(043) 702-3832</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 text-slate-800 font-medium">Traffic Mgmt (TMD)</td>
                      <td className="py-2 text-right font-mono font-bold text-[#7a1313]">
                        <a href="tel:0437026454" className="hover:underline block">(043) 702-6454</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 text-slate-800 font-medium">Red Cross Lipa</td>
                      <td className="py-2 text-right font-mono font-bold text-[#7a1313]">
                        <a href="tel:09989570443" className="hover:underline block">0998-957-0443</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {PAGES.hotlines && (
                  <div className="pt-2.5 mt-2.5 border-t border-slate-100 text-center">
                    <Link
                      href="/hotlines"
                      className="text-xs font-bold text-[#7a1313] hover:underline"
                    >
                      View All Emergency Numbers &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Widget: 24/7 Operations Center Card */}
            <div className="bg-white border border-slate-200 rounded p-4 shadow-xs space-y-3">
              <div className="flex items-center gap-3 pb-2.5 border-b border-slate-100">
                <LipaLogo className="w-11 h-11 shrink-0" />
                <div>
                  <div className="text-[10px] font-bold uppercase text-[#7a1313] tracking-wide">
                    Lipa Rescue 24/7
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Emergency Operations Center
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-700">
                <div><strong>Address:</strong> Lipa City Hall Complex, Marawoy</div>
                <div><strong>Radio Net:</strong> 142.850 MHz</div>
                <div><strong>Hours:</strong> 24 Hours / 7 Days On-Duty</div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="text-[10px] text-slate-500 font-medium">Direct Hotline:</div>
                <div className="text-sm font-bold font-mono text-[#7a1313]">
                  (043) 756-0127 / 0915-463-5005
                </div>
              </div>
            </div>

            {/* Widget: Downloadable IEC Materials */}
            {PAGES.preparedness && (
              <div className="bg-white border border-slate-200 rounded p-4 shadow-xs space-y-2.5">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <FileDown className="w-4 h-4 text-[#7a1313]" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    IEC Downloadables
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Official infographics from DOST-PAGASA, PHIVOLCS, and Lipa CDRRMO. Free for public use and printing.
                </p>
                <div className="pt-1">
                  <Link
                    href="/preparedness"
                    className="w-full bg-[#7a1313] hover:bg-[#610f0f] text-white text-center py-2 px-3 rounded text-xs font-bold transition-colors block shadow-2xs"
                  >
                    Download Infographics &rarr;
                  </Link>
                </div>
              </div>
            )}

            {/* Widget: Reduced Meteoblue & Weather Widgets (Lipa City Forecast + Wind Map) */}
            {FEATURES.weatherSection && <WeatherBox />}
          </aside>
        </div>
      </div>
    </div>
  );
}
