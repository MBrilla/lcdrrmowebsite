import React from "react";

export default function WeatherBox() {
  return (
    <div id="weather" className="space-y-5">
      {/* Widget 1: Lipa City 4-Day Daily Forecast (Compact Meteoblue) */}
      <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-xs">
        <div className="bg-[#7a1313] text-white px-3 py-2 text-center font-bold text-xs uppercase tracking-wider">
          Weather &bull; Lipa City
        </div>
        <div className="p-3 flex flex-col items-center">
          <div className="text-[11px] text-slate-500 mb-2 font-medium">
            13.94&deg;N 121.16&deg;E &bull; 325m asl
          </div>
          <div className="flex justify-center w-full overflow-hidden">
            <iframe
              src="https://www.meteoblue.com/en/weather/widget/daily/lipa-city_philippines_1706090?geoloc=fixed&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=1&winddirection=1&uv=1&humidity=1&precipitation=1&precipitationprobability=1&spot=1&pressure=0&layout=light"
              sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
              style={{ width: "216px", height: "420px", border: "none" }}
              title="Weather Lipa City 4-Day Forecast"
            />
          </div>
          <div className="mt-1 text-center">
            <a
              href="https://www.meteoblue.com/en/weather/week/lipa-city_philippines_1706090?utm_source=daily_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#7a1313] hover:underline font-semibold"
            >
              meteoblue
            </a>
          </div>
        </div>
      </div>

      {/* Widget 2: Philippine Area Weather & Wind Map (Compact Sidebar View) */}
      <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-xs">
        <div className="bg-[#7a1313] text-white px-3 py-2 text-center font-bold text-xs uppercase tracking-wider">
          Live Weather &amp; Wind Map
        </div>
        <div className="p-2.5">
          <div className="w-full bg-slate-100 rounded border border-slate-200 overflow-hidden">
            <iframe
              src="https://www.meteoblue.com/en/weather/maps/widget/lipa-city_philippines_1706090?windAnimation=1&gust=1&satellite=1&cloudsAndPrecipitation=1&temperature=1&sunshine=1&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"
              sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
              style={{ width: "100%", height: "280px", border: "none" }}
              title="Philippine Weather Map"
            />
          </div>
          <div className="mt-1 flex items-center justify-between px-1 text-[10px] text-slate-400">
            <span className="sm:hidden">Swipe outside map to scroll</span>
            <a
              href="https://www.meteoblue.com/en/weather/maps/lipa-city_philippines_1706090?utm_source=map_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#7a1313] hover:underline font-semibold ml-auto"
            >
              meteoblue
            </a>
          </div>
        </div>
      </div>

      {/* Public Advisory Card */}
      <div className="bg-white border border-slate-200 rounded p-3 text-xs shadow-xs space-y-1.5">
        <div className="font-bold text-[#7a1313] uppercase tracking-wide text-[11px] flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#7a1313] animate-pulse"></span>
          Public Safety Advisory
        </div>
        <p className="text-slate-600 leading-relaxed text-[11px]">
          For official Philippine tropical cyclone alerts, severe rainfall warnings, and gale advisories, refer to{" "}
          <a
            href="https://bagong.pagasa.dost.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7a1313] font-bold hover:underline"
          >
            DOST-PAGASA
          </a>.
        </p>
        <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-700">
          <strong>Lipa Rescue 24/7:</strong> (043) 756-0127 &bull; 0915-463-5005
        </div>
      </div>
    </div>
  );
}
