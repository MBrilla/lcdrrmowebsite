"use client";

import React from "react";
import { Bot, X, Minus } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onMinimize?: () => void;
  botName?: string;
  statusText?: string;
}

export default function ChatHeader({
  onClose,
  onMinimize,
  botName = "Lipa DRRM Assistant",
  statusText = "Online • 24/7 AI Assistance",
}: ChatHeaderProps) {
  return (
    <div className="bg-[#7a1313] text-white px-4 py-3 rounded-t-xl flex items-center justify-between shadow-xs border-b border-[#610f0f]">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-xs sm:text-sm font-bold tracking-wide leading-tight">
              {botName}
            </h3>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <p className="text-[10px] text-slate-200 font-medium">
            {statusText}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {onMinimize && (
          <button
            onClick={onMinimize}
            className="p-1 rounded hover:bg-white/15 text-slate-200 hover:text-white transition-colors"
            title="Minimize Chat"
            aria-label="Minimize Chat"
          >
            <Minus className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-white/15 text-slate-200 hover:text-white transition-colors"
          title="Close Chat"
          aria-label="Close Chat"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
