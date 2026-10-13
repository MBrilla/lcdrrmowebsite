"use client";

import React from "react";
import { Bot, User, AlertCircle } from "lucide-react";
import { ChatMessage as ChatMessageType } from "./types";

interface ChatMessageProps {
  message: ChatMessageType;
}

function formatMessageContent(content: string, isBot: boolean) {
  return content.split("\n").map((line, idx) => {
    // Check bullet points
    const isBullet = line.trim().startsWith("* ") || line.trim().startsWith("• ") || line.trim().startsWith("- ");
    const cleanLine = isBullet ? line.trim().slice(2) : line;

    // Bold (**...**) and inline code (`...`) replacement
    const parts = cleanLine.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

    return (
      <span
        key={idx}
        className={`${isBullet ? "flex items-start gap-1.5 ml-1 my-0.5" : "block"} min-h-[1.15em]`}
      >
        {isBullet && <span className="text-[#7a1313] font-bold shrink-0">&bull;</span>}
        <span>
          {parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong
                  key={pIdx}
                  className={isBot ? "font-bold text-slate-900" : "font-bold text-white"}
                >
                  {part.slice(2, -2)}
                </strong>
              );
            }
            if (part.startsWith("`") && part.endsWith("`")) {
              return (
                <code
                  key={pIdx}
                  className={`font-mono text-[11px] px-1 py-0.5 rounded ${
                    isBot
                      ? "bg-slate-100 text-[#7a1313] font-semibold border border-slate-200"
                      : "bg-white/20 text-white font-semibold"
                  }`}
                >
                  {part.slice(1, -1)}
                </code>
              );
            }
            return part;
          })}
        </span>
      </span>
    );
  });
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === "bot";
  const isSystem = message.sender === "system";

  if (isSystem) {
    return (
      <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2 my-2">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="leading-relaxed text-[11px]">{message.text}</div>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-2.5 my-2.5 ${isBot ? "" : "flex-row-reverse"}`}>
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-xs ${
          isBot ? "bg-[#7a1313]" : "bg-slate-700"
        }`}
      >
        {isBot ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
      </div>

      <div className={`max-w-[85%] ${isBot ? "items-start" : "items-end"} flex flex-col`}>
        <div
          className={`p-3 rounded-xl text-xs leading-relaxed shadow-2xs ${
            isBot
              ? "bg-white text-slate-800 border border-slate-200 rounded-tl-xs"
              : "bg-[#7a1313] text-white rounded-tr-xs"
          }`}
        >
          {formatMessageContent(message.text, isBot)}
        </div>
        <span className="text-[10px] text-slate-400 mt-1 px-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
