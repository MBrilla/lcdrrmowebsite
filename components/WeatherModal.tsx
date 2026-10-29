"use client";

import React from "react";
import { X, CloudSun, PhoneCall, ExternalLink } from "lucide-react";
import { useWeatherModal } from "./WeatherModalContext";

export default function WeatherModal() {
  const { isOpen, closeWeatherModal } = useWeatherModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-2xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="weather-modal-title"
      onClick={closeWeatherModal}
    >
      {/* Modal Dialog Container */}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white rounded-lg shadow-xl border border-slate-300 overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#7a1313] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <CloudSun className="w-6 h-6 text-white shrink-0" />
            <div className="min-w-0">
              <h2
                id="weather-modal-title"
                className="text-base sm:text-lg font-bold text-white tracking-wide truncate"
              >
                Weather Updates &bull; Lipa City, Batangas
              </h2>
              <div className="text-xs text-slate-200 truncate">
                Disaster Risk Reduction and Management Office (LCDRRMO) &bull; 13.94&deg;N 121.16&deg;E (325m asl)
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={closeWeatherModal}
            className="p-1.5 rounded text-white/80 hover:text-white hover:bg-black/20 transition-colors shrink-0"
            aria-label="Close Weather Updates Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Full Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: 4-Day Forecast */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded overflow-hidden shadow-2xs">
              <div className="bg-[#7a1313] text-white px-3 py-2 text-center font-bold text-xs uppercase tracking-wider">
                4-Day Forecast &bull; Lipa City
              </div>
              <div className="p-3 flex flex-col items-center">
                <div className="text-[11px] text-slate-500 mb-2 font-medium">
                  Lipa City, Batangas &bull; 13.94&deg;N 121.16&deg;E
                </div>
                <div className="flex justify-center w-full overflow-hidden">
                  <iframe
                    src="https://www.meteoblue.com/en/weather/widget/daily/lipa-city_philippines_1706090?geoloc=fixed&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=1&winddirection=1&uv=1&humidity=1&precipitation=1&precipitationprobability=1&spot=1&pressure=0&layout=light"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                    style={{ width: "216px", height: "420px", border: "none" }}
                    title="Weather Lipa City 4-Day Forecast"
                  />
                </div>
                <div className="mt-2 text-center">
                  <a
                    href="https://www.meteoblue.com/en/weather/week/lipa-city_philippines_1706090?utm_source=daily_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#7a1313] hover:underline font-semibold"
                  >
                    View extended forecast on meteoblue &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Live Radar Map & Official Advisories */}
            <div className="lg:col-span-7 space-y-6">
              {/* Live Weather & Wind Map */}
              <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-2xs">
                <div className="bg-[#7a1313] text-white px-3 py-2 flex items-center justify-between">
                  <span className="font-bold text-xs uppercase tracking-wider">
                    Live Weather &amp; Wind Map
                  </span>
                  <a
                    href="https://www.meteoblue.com/en/weather/maps/lipa-city_philippines_1706090?utm_source=map_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-white/90 hover:text-white hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="p-3">
                  <div className="w-full bg-slate-100 rounded border border-slate-200 overflow-hidden">
                    <iframe
                      src="https://www.meteoblue.com/en/weather/maps/widget/lipa-city_philippines_1706090?windAnimation=1&gust=1&satellite=1&cloudsAndPrecipitation=1&temperature=1&sunshine=1&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
                      style={{ width: "100%", height: "300px", border: "none" }}
                      title="Philippine Weather and Wind Map"
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Swipe or scroll map to zoom / pan across Southern Luzon</span>
                    <a
                      href="https://www.meteoblue.com/en/weather/maps/lipa-city_philippines_1706090?utm_source=map_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7a1313] hover:underline font-semibold"
                    >
                      meteoblue
                    </a>
                  </div>
                </div>
              </div>

              {/* Public Safety & Disaster Early Warnings */}
              <div className="bg-white border border-slate-200 rounded p-4 text-xs space-y-3 shadow-2xs">
                <div className="font-bold text-[#7a1313] uppercase tracking-wide text-xs">
                  Public Safety &amp; Early Warning Advisories
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="border border-yellow-300 bg-yellow-50/80 p-2.5 rounded text-[11px]">
                    <div className="font-bold text-yellow-900">YELLOW ADVISORY</div>
                    <div className="text-yellow-800 mt-0.5">Flooding possible in low-lying areas. Monitor conditions.</div>
                  </div>
                  <div className="border border-orange-300 bg-orange-50/80 p-2.5 rounded text-[11px]">
                    <div className="font-bold text-orange-900">ORANGE ADVISORY</div>
                    <div className="text-orange-800 mt-0.5">Flooding is threatening. Prepare for possible evacuation.</div>
                  </div>
                  <div className="border border-red-300 bg-red-50/80 p-2.5 rounded text-[11px]">
                    <div className="font-bold text-red-900">RED ADVISORY</div>
                    <div className="text-red-800 mt-0.5">Severe flooding expected. Immediate evacuation enforced.</div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-[11px]">
                  For official Philippine tropical cyclone alerts, severe rainfall warnings, and volcanic advisories, visit{" "}
                  <a
                    href="https://bagong.pagasa.dost.gov.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7a1313] font-bold hover:underline"
                  >
                    DOST-PAGASA
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.phivolcs.dost.gov.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7a1313] font-bold hover:underline"
                  >
                    DOST-PHIVOLCS
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-700 w-full sm:w-auto">
            <span className="font-bold text-[#7a1313]">Lipa Rescue 24/7:</span>
            <a
              href="tel:09154635005"
              className="font-mono font-bold text-slate-900 hover:text-[#7a1313]"
            >
              0915-463-5005
            </a>
            <span className="text-slate-400">&bull;</span>
            <span className="font-mono text-slate-600">(043) 756-0127</span>
            <span className="text-slate-400 hidden md:inline">&bull;</span>
            <span className="text-slate-500 text-[11px] hidden md:inline">Radio: 142.850 MHz</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <a
              href="tel:09154635005"
              className="bg-[#7a1313] hover:bg-[#610f0f] text-white text-xs font-bold py-1.5 px-3 rounded transition-colors inline-flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Rescue</span>
            </a>
            <button
              type="button"
              onClick={closeWeatherModal}
              className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold py-1.5 px-3.5 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
