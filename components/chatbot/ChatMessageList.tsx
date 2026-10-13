"use client";

import React, { useEffect, useRef } from "react";
import { Bot, Loader2 } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { ChatMessage as ChatMessageType } from "./types";

interface ChatMessageListProps {
  messages: ChatMessageType[];
  isLoading?: boolean;
}

export default function ChatMessageList({
  messages,
  isLoading = false,
}: ChatMessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-3.5 space-y-1 bg-slate-50/50 min-h-[220px] max-h-[340px]">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}

      {isLoading && (
        <div className="flex items-start gap-2.5 my-2.5">
          <div className="w-7 h-7 rounded-full bg-[#7a1313] flex items-center justify-center shrink-0 text-white text-xs">
            <Bot className="w-3.5 h-3.5" />
          </div>
          <div className="bg-white border border-slate-200 rounded-xl rounded-tl-xs p-3 shadow-2xs text-xs text-slate-500 flex items-center gap-2">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#7a1313]" />
            <span className="font-medium">LCDRRMO Assistant is typing...</span>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
