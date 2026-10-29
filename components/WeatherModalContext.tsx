"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface WeatherModalContextType {
  isOpen: boolean;
  openWeatherModal: () => void;
  closeWeatherModal: () => void;
}

const WeatherModalContext = createContext<WeatherModalContextType | undefined>(undefined);

export function WeatherModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openWeatherModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeWeatherModal = useCallback(() => {
    setIsOpen(false);
    if (typeof window !== "undefined" && window.location.hash === "#weather") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  // Listen to hash changes for deep linking (#weather)
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash === "#weather") {
        setIsOpen(true);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeWeatherModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeWeatherModal]);

  return (
    <WeatherModalContext.Provider
      value={{
        isOpen,
        openWeatherModal,
        closeWeatherModal,
      }}
    >
      {children}
    </WeatherModalContext.Provider>
  );
}

export function useWeatherModal() {
  const context = useContext(WeatherModalContext);
  if (!context) {
    throw new Error("useWeatherModal must be used within a WeatherModalProvider");
  }
  return context;
}
