import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import LipaLogo from "./LipaLogo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c1917] text-slate-300 font-sans border-t-2 border-[#c68a18]">
      {/* Main Department Footer */}
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
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-[#c68a18] shrink-0 mt-0.5" />
              <span>City Hall Complex, Marawoy, Lipa City, Batangas 4217</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Clock className="w-4 h-4 text-[#c68a18] shrink-0" />
              <span>Operations Center: 24/7 Active Standby</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-[#c68a18] shrink-0" />
              <span>Hotlines: (043) 756-0127 / 0915-463-5005</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-[#c68a18] shrink-0" />
              <a href="mailto:cdrrmo@lipa.gov.ph" className="hover:text-white">
                cdrrmo@lipa.gov.ph
              </a>
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
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                  <span>City Government of Lipa</span>
                </a>
              </li>
              <li>
                <a
                  href="https://batangas.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                  <span>Province of Batangas</span>
                </a>
              </li>
              <li>
                <a
                  href="https://ndrrmc.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                  <span>NDRRMC</span>
                </a>
              </li>
              <li>
                <a
                  href="https://bagong.pagasa.dost.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                  <span>DOST-PAGASA (Weather)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://phivolcs.dost.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                  <span>DOST-PHIVOLCS (Seismic)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

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
