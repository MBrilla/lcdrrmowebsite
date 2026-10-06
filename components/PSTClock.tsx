"use client";

import React, { useEffect, useState } from "react";

export default function PSTClock() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const optionsTime: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const optionsDate: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Manila",
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      };

      setTimeStr(now.toLocaleTimeString("en-PH", optionsTime));
      setDateStr(now.toLocaleDateString("en-PH", optionsDate));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeStr) {
    return (
      <span className="text-slate-300 text-xs">
        Philippine Standard Time: Loading...
      </span>
    );
  }

  return (
    <div className="text-xs text-slate-200 flex items-center gap-1.5 font-normal">
      <span className="text-slate-300">Philippine Standard Time:</span>
      <span className="font-medium text-white">{dateStr}</span>
      <span className="font-mono text-amber-300 font-semibold">{timeStr}</span>
    </div>
  );
}
