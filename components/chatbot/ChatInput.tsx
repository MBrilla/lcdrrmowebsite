"use client";

import React, { useState } from "react";
import { Send, Phone } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export default function ChatInput({
  onSendMessage,
  disabled = false,
  placeholder = "Ask about Lipa hotlines, weather, evacuation...",
}: ChatInputProps) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled || !inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText("");
  };

  return (
    <div className="p-3 bg-white border-t border-slate-200 rounded-b-xl space-y-2">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className="flex-1 text-xs bg-slate-50 text-slate-800 placeholder-slate-400 border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-hidden focus:border-[#7a1313] focus:bg-white disabled:bg-slate-100 disabled:cursor-not-allowed transition-colors"
        />
        <button
          type="submit"
          disabled={disabled || !inputText.trim()}
          className="p-2.5 rounded-lg bg-[#7a1313] hover:bg-[#610f0f] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0 shadow-2xs cursor-pointer"
          title="Send message"
          aria-label="Send message"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

      <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-100">
        <span>Powered by Gemini AI &bull; Lipa DRRM</span>
        <a
          href="tel:09154635005"
          className="font-bold text-[#7a1313] hover:underline flex items-center gap-1"
        >
          <Phone className="w-2.5 h-2.5" />
          <span>Hotline: 0915-463-5005</span>
        </a>
      </div>
    </div>
  );
}
