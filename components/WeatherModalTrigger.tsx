"use client";

import React from "react";
import { useWeatherModal } from "./WeatherModalContext";

interface WeatherModalTriggerProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export default function WeatherModalTrigger({
  children,
  className,
  title,
  ariaLabel,
}: WeatherModalTriggerProps) {
  const { openWeatherModal } = useWeatherModal();

  return (
    <button
      type="button"
      onClick={() => openWeatherModal()}
      className={className}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
