import React from "react";
import Link from "next/link";
import LipaLogo from "./LipaLogo";
import { SHOW_MINIMAL_PROGRESS } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c1917] text-slate-300 font-sans border-t-2 border-[#c68a18]">
      {/* Main Department Footer */}
      {SHOW_MINIMAL_PROGRESS ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <LipaLogo className="w-10 h-10" />
              <div>
                <div className="text-[10px] uppercase font-bold text-amber-400">
                  City Government of Lipa
                </div>
                <div className="text-sm font-bold text-white leading-tight">
                  Disaster Risk Reduction and Management Office
                </div>
              </div>
            </div>
            <div className="text-slate-400 text-xs text-center sm:text-right">
              Official Web Portal &bull; City Government of Lipa
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          {/* Col 1: Office Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <LipaLogo className="w-12 h-12" />
              <div>
                <div className="text-[10px] uppercase font-bold text-amber-400">
                  City Government of Lipa
                </div>
                <div className="text-sm font-bold text-white leading-tight">
                  Disaster Risk Reduction and Management Office
                </div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Serving the 72 barangays of Lipa City through institutionalized disaster risk reduction, 24/7 emergency response, and resilient community recovery.
            </p>
          </div>

          {/* Col 2: Contact & Location */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase font-bold text-white tracking-wider border-b border-slate-700 pb-1.5">
              Operations Center
            </h3>
            <div className="space-y-1.5 text-slate-300">
              <div>City Hall Complex, Marawoy, Lipa City, Batangas 4217</div>
              <div>Operations Center: 24/7 Active Standby</div>
              <div>Hotlines: (043) 756-0127 / 0915-463-5005</div>
              <div>
                <a href="mailto:cdrrmo@lipa.gov.ph" className="hover:text-white underline">
                  cdrrmo@lipa.gov.ph
                </a>
              </div>
            </div>
            <div className="pt-1">
              <Link
                href="/hotlines"
                className="text-amber-300 hover:text-white font-semibold underline underline-offset-2"
              >
                View Complete Emergency Directory &rarr;
              </Link>
            </div>
          </div>

          {/* Col 3: The 4 Pillars */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-bold text-white tracking-wider border-b border-slate-700 pb-1.5">
              DRRM Framework
            </h3>
            <ul className="space-y-1.5 text-slate-400">
              <li>&bull; Disaster Prevention &amp; Mitigation</li>
              <li>&bull; Disaster Preparedness</li>
              <li>&bull; Disaster Response (Lipa Rescue)</li>
              <li>&bull; Disaster Rehabilitation &amp; Recovery</li>
            </ul>
          </div>

          {/* Col 4: Partner Portals */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-bold text-white tracking-wider border-b border-slate-700 pb-1.5">
              Government Links
            </h3>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a
                  href="https://lipa.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  City Government of Lipa
                </a>
              </li>
              <li>
                <a
                  href="https://batangas.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Province of Batangas
                </a>
              </li>
              <li>
                <a
                  href="https://ndrrmc.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  NDRRMC
                </a>
              </li>
              <li>
                <a
                  href="https://bagong.pagasa.dost.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  DOST-PAGASA (Weather)
                </a>
              </li>
              <li>
                <a
                  href="https://phivolcs.dost.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  DOST-PHIVOLCS (Seismic)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      )}

      {/* Standard Republic of the Philippines GOVPH Footer */}
      <div className="bg-[#0e274a] text-slate-400 text-[11px] py-4 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-semibold text-white">Republic of the Philippines</span> &bull; All content is in the public domain unless otherwise stated.
          </div>
          <div className="text-slate-400">
            &copy; 2026 City Government of Lipa &bull; Disaster Risk Reduction and Management Office
          </div>
        </div>
      </div>
    </footer>
  );
}
