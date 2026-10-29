"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Home as HomeIcon, Phone, Users, CloudSun, FileDown, Activity, FileText } from "lucide-react";
import LipaLogo from "./LipaLogo";
import PSTClock from "./PSTClock";
import { PAGES, FEATURES } from "@/lib/siteConfig";
import { useWeatherModal } from "./WeatherModalContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openWeatherModal } = useWeatherModal();

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 shadow-2xs">
      {/* GOVPH Standard Bar */}
      <div className="bg-[#0e274a] text-slate-200 text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
            <a
              href="https://www.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold tracking-wider text-white hover:text-amber-300 transition-colors"
            >
              GOVPH
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 truncate">City of Lipa</span>
          </div>

          <div className="flex items-center gap-3">
            <PSTClock />
          </div>
        </div>
      </div>

      {/* Main Masthead */}
      <div className="px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-4 text-left min-w-0">
            <LipaLogo className="w-11 h-11 sm:w-16 sm:h-16 shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-600 uppercase tracking-wider truncate">
                Republic of the Philippines &bull; City Government of Lipa
              </div>
              <div className="text-sm sm:text-xl lg:text-2xl font-bold text-[#7a1313] leading-tight truncate">
                Disaster Risk Reduction and Management Office
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium truncate hidden sm:block">
                Lipa CDRRMO &bull; Lipa Rescue &bull; &ldquo;Virtud y Trabajo&rdquo;
              </div>
            </div>
          </Link>

          {/* Quick Contact Info (Desktop) */}
          {FEATURES.quickContactHeader && (
            <div className="hidden md:flex items-center gap-4 text-right shrink-0">
              <div className="border-l-2 border-slate-200 pl-4">
                <div className="text-[11px] uppercase font-semibold text-slate-500">
                  24/7 Operations Center
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono">
                  (043) 756-0127 &bull; 0915-463-5005
                </div>
                <div className="text-xs text-slate-500">
                  Lipa City Hall Complex, Marawoy
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:09154635005"
              className="p-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors shadow-2xs"
              title="Call Lipa Rescue 24/7"
              aria-label="Call Lipa Rescue"
            >
              <PhoneCall className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#7a1313] text-white hover:bg-[#610f0f] transition-colors focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar (Desktop - Official Lipa Maroon) */}
      <nav className="bg-[#7a1313] text-white border-b border-[#610f0f] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between">
            <ul className="flex items-center text-xs sm:text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className={`px-3.5 py-3 inline-block transition-colors ${pathname === "/"
                    ? "bg-[#610f0f] text-white font-bold border-b-2 border-white"
                    : "hover:bg-[#610f0f] text-white"
                    }`}
                >
                  Home
                </Link>
              </li>
              {PAGES.activities && (
                <li>
                  <Link
                    href="/activities"
                    className={`px-3.5 py-3 inline-block transition-colors ${pathname === "/activities"
                      ? "bg-[#610f0f] text-white font-bold border-b-2 border-white"
                      : "hover:bg-[#610f0f] text-white"
                      }`}
                  >
                    Activities &amp; Accomplishments
                  </Link>
                </li>
              )}
              {PAGES.issuances && (
                <li>
                  <Link
                    href="/issuances"
                    className={`px-3.5 py-3 inline-block transition-colors ${pathname === "/issuances"
                      ? "bg-[#610f0f] text-white font-bold border-b-2 border-white"
                      : "hover:bg-[#610f0f] text-white"
                      }`}
                  >
                    DILG Issuances
                  </Link>
                </li>
              )}
              {PAGES.preparedness && (
                <li>
                  <Link
                    href="/preparedness"
                    className={`px-3.5 py-3 inline-block transition-colors ${pathname === "/preparedness"
                      ? "bg-[#610f0f] text-white font-bold border-b-2 border-white"
                      : "hover:bg-[#610f0f] text-white"
                      }`}
                  >
                    Preparedness
                  </Link>
                </li>
              )}
              {PAGES.organization && (
                <li>
                  <Link
                    href="/organization"
                    className={`px-3.5 py-3 inline-block transition-colors ${pathname === "/organization"
                      ? "bg-[#610f0f] text-white font-bold border-b-2 border-white"
                      : "hover:bg-[#610f0f] text-white"
                      }`}
                  >
                    Organizational Chart
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/hotlines"
                  className={`px-3.5 py-3 inline-block transition-colors ${pathname === "/hotlines"
                    ? "bg-[#610f0f] text-white font-bold border-b-2 border-white"
                    : "hover:bg-[#610f0f] text-white"
                    }`}
                >
                  Emergency Hotlines
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openWeatherModal()}
                  className="px-3.5 py-3 inline-flex items-center gap-1.5 transition-colors hover:bg-[#610f0f] text-white cursor-pointer font-medium"
                  title="View Live Weather & Hazard Updates"
                >
                  <CloudSun className="w-4 h-4 text-amber-300" />
                  <span>Weather Updates</span>
                </button>
              </li>
            </ul>

            <div className="text-xs font-medium text-slate-200 flex items-center gap-2">

            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-2xs animate-in fade-in duration-200"
            aria-hidden="true"
          />

          <div className="relative z-50 md:hidden bg-slate-900 text-white border-b-2 border-[#7a1313] shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="p-4 space-y-3">
              {/* Emergency Tap-to-Call Primary Banner inside Mobile Drawer */}
              <a
                href="tel:09154635005"
                className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <PhoneCall className="w-4 h-4 shrink-0" />
                <span>Call Lipa Rescue 24/7: 0915-463-5005</span>
              </a>

              <nav className="space-y-1 text-sm font-medium">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-colors ${pathname === "/"
                      ? "bg-[#7a1313] text-white font-bold"
                      : "text-slate-200 hover:bg-slate-800"
                    }`}
                >
                  <HomeIcon className="w-4 h-4 text-slate-400" />
                  <span>Home</span>
                </Link>

                {PAGES.activities && (
                  <Link
                    href="/activities"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-colors ${pathname === "/activities"
                        ? "bg-[#7a1313] text-white font-bold"
                        : "text-slate-200 hover:bg-slate-800"
                      }`}
                  >
                    <Activity className="w-4 h-4 text-slate-400" />
                    <span>Activities &amp; Accomplishments</span>
                  </Link>
                )}

                {PAGES.issuances && (
                  <Link
                    href="/issuances"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-colors ${pathname === "/issuances"
                        ? "bg-[#7a1313] text-white font-bold"
                        : "text-slate-200 hover:bg-slate-800"
                      }`}
                  >
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span>DILG Issuances</span>
                  </Link>
                )}

                {PAGES.preparedness && (
                  <Link
                    href="/preparedness"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-colors ${pathname === "/preparedness"
                        ? "bg-[#7a1313] text-white font-bold"
                        : "text-slate-200 hover:bg-slate-800"
                      }`}
                  >
                    <FileDown className="w-4 h-4 text-slate-400" />
                    <span>Preparedness &amp; Downloads</span>
                  </Link>
                )}

                <Link
                  href="/hotlines"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-colors ${pathname === "/hotlines"
                      ? "bg-[#7a1313] text-white font-bold"
                      : "text-slate-200 hover:bg-slate-800"
                    }`}
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>Emergency Hotlines</span>
                </Link>

                {PAGES.organization && (
                  <Link
                    href="/organization"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-colors ${pathname === "/organization"
                        ? "bg-[#7a1313] text-white font-bold"
                        : "text-slate-200 hover:bg-slate-800"
                      }`}
                  >
                    <Users className="w-4 h-4 text-slate-400" />
                    <span>Organizational Chart</span>
                  </Link>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openWeatherModal();
                  }}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors w-full text-left cursor-pointer"
                  title="View Live Weather & Hazard Updates"
                >
                  <CloudSun className="w-4 h-4 text-amber-300" />
                  <span>Weather Updates</span>
                </button>
              </nav>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div><strong>Radio Net:</strong> 142.850 MHz</div>
                <div><strong>Operations Center:</strong> 24/7 Active Duty &bull; Marawoy</div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
