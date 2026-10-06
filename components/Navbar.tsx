"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LipaLogo from "./LipaLogo";
import PSTClock from "./PSTClock";
import { SHOW_MINIMAL_PROGRESS } from "@/lib/siteConfig";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-slate-200">
      {/* GOVPH Standard Bar */}
      <div className="bg-[#0e274a] text-slate-200 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <a
              href="https://www.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold tracking-wider text-white hover:text-amber-300 transition-colors"
            >
              GOVPH
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">City Government of Lipa</span>
          </div>

          <div className="flex items-center gap-4">
            <PSTClock />
          </div>
        </div>
      </div>

      {/* Main Masthead */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 sm:gap-4 text-left">
            <LipaLogo className="w-14 h-14 sm:w-16 sm:h-16" />
            <div>
              <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                Republic of the Philippines &bull; City Government of Lipa
              </div>
              <div className="text-base sm:text-xl lg:text-2xl font-bold text-[#7a1313] leading-tight">
                Disaster Risk Reduction and Management Office
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Lipa CDRRMO &bull; Lipa Rescue &bull; &ldquo;Virtud y Trabajo&rdquo;
              </div>
            </div>
          </Link>

          {/* Quick Contact Info */}
          {!SHOW_MINIMAL_PROGRESS && (
            <div className="hidden md:flex items-center gap-4 text-right">
              <div className="border-l-2 border-slate-200 pl-4">
                <div className="text-[11px] uppercase font-semibold text-slate-500">
                  24/7 Operations Center
                </div>
                <div className="text-sm font-bold text-slate-900">
                  (043) 756-0127 &bull; 0915-463-5005
                </div>
                <div className="text-xs text-slate-500">
                  Lipa City Hall Complex, Marawoy
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#7a1313] text-white hover:bg-[#560a0a]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar (Lipa Maroon with Gold Accent) */}
      <nav className="bg-[#7a1313] text-white border-b-2 border-[#c68a18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between">
            <ul className="flex items-center text-xs sm:text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className={`px-4 py-3 inline-block transition-colors ${pathname === "/"
                      ? "bg-[#560a0a] text-amber-300 font-semibold border-b-2 border-amber-300"
                      : "hover:bg-[#560a0a] text-white"
                    }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="px-4 py-3 inline-block hover:bg-[#560a0a] transition-colors text-white"
                >
                  {SHOW_MINIMAL_PROGRESS ? "About (Draft)" : "About LCDRRMO"}
                </Link>
              </li>
              <li>
                <Link
                  href="/organization"
                  className={`px-4 py-3 inline-block transition-colors ${pathname === "/organization"
                      ? "bg-[#560a0a] text-amber-300 font-semibold border-b-2 border-amber-300"
                      : "hover:bg-[#560a0a] text-white"
                    }`}
                >
                  Organizational Chart
                </Link>
              </li>
              {!SHOW_MINIMAL_PROGRESS && (
                <>
                  <li>
                    <Link
                      href="/#pillars"
                      className="px-4 py-3 inline-block hover:bg-[#560a0a] transition-colors text-white"
                    >
                      The 4 DRRM Pillars
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="px-4 py-3 inline-block hover:bg-[#560a0a] transition-colors text-white"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#advisories"
                      className="px-4 py-3 inline-block hover:bg-[#560a0a] transition-colors text-white"
                    >
                      Advisories & Alerts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hotlines"
                      className={`px-4 py-3 inline-block transition-colors ${pathname === "/hotlines"
                          ? "bg-[#560a0a] text-amber-300 font-semibold border-b-2 border-amber-300"
                          : "hover:bg-[#560a0a] text-white"
                        }`}
                    >
                      Emergency Hotlines
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {!SHOW_MINIMAL_PROGRESS && (
              <Link
                href="/hotlines"
                className="bg-[#c68a18] hover:bg-[#b37910] text-slate-950 font-bold text-xs uppercase px-3.5 py-1.5 rounded inline-block transition-colors"
              >
                Hotlines Directory
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 text-white border-b-2 border-[#c68a18]">
          <div className="p-4 space-y-2 text-sm font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded ${pathname === "/" ? "bg-[#7a1313] text-amber-300" : "hover:bg-slate-800"
                }`}
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded hover:bg-slate-800"
            >
              {SHOW_MINIMAL_PROGRESS ? "About (Draft)" : "About LCDRRMO"}
            </Link>
            <Link
              href="/organization"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded ${pathname === "/organization" ? "bg-[#7a1313] text-amber-300" : "hover:bg-slate-800"
                }`}
            >
              Organizational Chart
            </Link>
            {!SHOW_MINIMAL_PROGRESS && (
              <>
                <Link
                  href="/#pillars"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded hover:bg-slate-800"
                >
                  The 4 DRRM Pillars
                </Link>
                <Link
                  href="/#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded hover:bg-slate-800"
                >
                  Services
                </Link>
                <Link
                  href="/#advisories"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded hover:bg-slate-800"
                >
                  Advisories & Alerts
                </Link>
                <Link
                  href="/hotlines"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded ${pathname === "/hotlines" ? "bg-[#7a1313] text-amber-300" : "hover:bg-slate-800"
                    }`}
                >
                  Emergency Hotlines
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
