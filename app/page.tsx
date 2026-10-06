import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  ShieldCheck,
  Activity,
  CloudRain,
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock,
  Radio,
} from "lucide-react";
import LipaLogo from "@/components/LipaLogo";

export default function Home() {
  return (
    <div className="w-full">
      {/* Clean Hero Section - Lipa Maroon */}
      <section className="bg-[#7a1313] text-white py-12 sm:py-16 border-b-2 border-[#c68a18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-semibold text-amber-200 uppercase tracking-wider">
                City Government of Lipa &bull; Province of Batangas
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Lipa City Disaster Risk Reduction &amp; Management Office
              </h1>

              <p className="text-sm sm:text-base text-slate-100 max-w-2xl leading-relaxed">
                Coordinating city-wide disaster prevention, community preparedness, 24/7 emergency rescue operations, and post-disaster recovery for the 72 barangays of Lipa City.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/hotlines"
                  className="bg-[#c68a18] hover:bg-[#b37910] text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded flex items-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Emergency Hotlines</span>
                </Link>

                <Link
                  href="#pillars"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded border border-white/20 transition-colors"
                >
                  The 4 DRRM Pillars
                </Link>

                <Link
                  href="#about"
                  className="text-amber-200 hover:text-white font-medium text-xs sm:text-sm px-2 py-2.5 transition-colors flex items-center gap-1"
                >
                  <span>About Our Office</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Card: Operations Center Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white text-slate-900 rounded-lg p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <LipaLogo className="w-12 h-12" />
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#7a1313]">
                      Lipa Rescue 24/7
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      Emergency Operations Center
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#c68a18] shrink-0 mt-0.5" />
                    <span>Lipa City Hall Complex, Marawoy, Lipa City</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#c68a18] shrink-0" />
                    <span>24 Hours / 7 Days On-Duty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-[#c68a18] shrink-0" />
                    <span>Radio Net: 142.850 MHz</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500 font-medium">Direct Line:</div>
                  <div className="text-base font-bold font-mono text-[#7a1313]">
                    (043) 756-0127 / 0915-463-5005
                  </div>
                </div>

                <Link
                  href="/hotlines"
                  className="block text-center text-xs font-semibold text-[#7a1313] hover:underline pt-1"
                >
                  View All Emergency Numbers &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Public Safety Services */}
      <section id="services" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xs uppercase font-bold text-[#7a1313] tracking-wider">
              Department Services
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Public Safety &amp; Emergency Assistance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded bg-[#7a1313] text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Emergency Rescue</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                24/7 response for vehicular incidents, search and rescue, flood extraction, and emergency incidents.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded bg-[#7a1313] text-white flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Ambulance Transport</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Emergency medical care and patient transport to hospitals and medical facilities in Lipa City.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded bg-[#7a1313] text-white flex items-center justify-center">
                <CloudRain className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Weather &amp; Hazard Advisory</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Continuous tracking of PAGASA weather bulletins, rainfall, flood levels, and Taal Volcano status.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 space-y-2">
              <div className="w-9 h-9 rounded bg-[#7a1313] text-white flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Community DRRM Training</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                First aid, basic life support (BLS), earthquake drills, and disaster seminars for schools and barangays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Thematic Pillars */}
      <section id="pillars" className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xs uppercase font-bold text-[#7a1313] tracking-wider">
              Legal Framework (R.A. 10121)
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              The Four DRRM Thematic Areas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-lg border-t-4 border-blue-700 border-x border-b border-slate-200 space-y-2">
              <div className="text-[11px] font-bold text-blue-800 uppercase">Pillar 1</div>
              <h3 className="font-bold text-slate-900 text-sm">
                Prevention &amp; Mitigation
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Measures to avoid hazards and reduce vulnerability through hazard mapping, drainage review, and structural safety assessments.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border-t-4 border-amber-600 border-x border-b border-slate-200 space-y-2">
              <div className="text-[11px] font-bold text-amber-800 uppercase">Pillar 2</div>
              <h3 className="font-bold text-slate-900 text-sm">
                Disaster Preparedness
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Strengthening barangay disaster readiness, early warning communication, resource stockpiling, and regular community drills.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border-t-4 border-red-700 border-x border-b border-slate-200 space-y-2">
              <div className="text-[11px] font-bold text-red-800 uppercase">Pillar 3</div>
              <h3 className="font-bold text-slate-900 text-sm">
                Disaster Response
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Rapid emergency activation, incident command coordination, search and rescue deployment, and evacuation management.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border-t-4 border-emerald-700 border-x border-b border-slate-200 space-y-2">
              <div className="text-[11px] font-bold text-emerald-800 uppercase">Pillar 4</div>
              <h3 className="font-bold text-slate-900 text-sm">
                Rehabilitation &amp; Recovery
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Post-disaster assessments, restoration of basic public lifelines, livelihood assistance, and resilient reconstruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About LCDRRMO Section */}
      <section id="about" className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-3">
              <h2 className="text-xs uppercase font-bold text-[#7a1313] tracking-wider">
                About the Department
              </h2>
              <p className="text-xl sm:text-2xl font-bold text-slate-900">
                Mandate &amp; Operations
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Pursuant to Republic Act No. 10121 (The Philippine Disaster Risk Reduction and Management Act of 2010), the Lipa City Disaster Risk Reduction and Management Office (LCDRRMO) functions as the implementing arm of the Lipa City Disaster Risk Reduction and Management Council (CDRRMC).
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The office is responsible for setting operational guidelines, conducting risk assessments, organizing response logistics, and maintaining 24/7 readiness across all 72 barangays of the City of Lipa.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-5 rounded-lg space-y-2 text-xs">
              <div className="font-bold text-slate-900 text-sm">Office Details</div>
              <div className="space-y-1 text-slate-600">
                <div><strong>Agency:</strong> Lipa CDRRMO (Lipa Rescue)</div>
                <div><strong>Parent Unit:</strong> City Government of Lipa</div>
                <div><strong>Motto:</strong> &ldquo;Virtud y Trabajo&rdquo; (Virtue and Work)</div>
                <div><strong>Location:</strong> City Hall Complex, Marawoy</div>
                <div><strong>Coverage:</strong> 72 Barangays</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
