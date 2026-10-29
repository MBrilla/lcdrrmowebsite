"use client";

import React from "react";
import { QuickPrompt } from "./types";

interface ChatQuickPromptsProps {
  onSelectPrompt: (prompt: QuickPrompt) => void;
  disabled?: boolean;
}

const DEFAULT_PROMPTS: QuickPrompt[] = [
  { id: "1", label: "🚨 Emergency Hotlines", query: "What are the official Lipa City emergency hotlines?" },
  { id: "2", label: "🎒 Go Bag & Infographics", query: "What should I pack in a 72-hour Emergency Go Bag and where can I download preparedness infographics?" },
  { id: "3", label: "🌤️ Weather Forecast", query: "What is the weather status in Lipa City?" },
  { id: "4", label: "🌋 Taal Volcano Advisory", query: "What is the current advisory for Taal Volcano in Lipa?" },
  { id: "5", label: "📍 Evacuation Centers", query: "Where are the primary evacuation centers in Lipa City?" },
];

export default function ChatQuickPrompts({
  onSelectPrompt,
  disabled = false,
}: ChatQuickPromptsProps) {
  return (
    <div className="py-2 border-t border-slate-100 bg-slate-50/70 px-3">
      <div className="text-[10px] uppercase font-bold text-slate-500 mb-1.5 tracking-wider">
        Quick Topics
      </div>
      <div className="flex flex-wrap gap-1.5">
        {DEFAULT_PROMPTS.map((prompt) => (
          <button
            key={prompt.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelectPrompt(prompt)}
            className="text-[11px] font-medium bg-white text-slate-700 hover:text-white hover:bg-[#7a1313] hover:border-[#7a1313] border border-slate-200 px-2.5 py-1 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-2xs cursor-pointer"
            title={prompt.query}
          >
            {prompt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
