"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import ChatHeader from "./ChatHeader";
import ChatMessageList from "./ChatMessageList";
import ChatQuickPrompts from "./ChatQuickPrompts";
import ChatInput from "./ChatInput";
import { ChatMessage as ChatMessageType, QuickPrompt } from "./types";

interface ChatbotWidgetProps {
  botName?: string;
  defaultOpen?: boolean;
}

const INITIAL_MESSAGES: ChatMessageType[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Magandang araw! Ako ang **Lipa DRRM AI Assistant**.\n\nHanda akong sumagot sa inyong mga katanungan ukol sa:\n* 🚨 **24/7 Emergency Hotlines**\n* 🌧️ **Panahon at PAGASA Advisories**\n* 📍 **Evacuation Centers sa Lipa City**\n* 🌋 **Taal Volcano Status**\n* 📋 **Disaster Preparedness & Rescue Services**\n\nMay maitutulong ba ako sa inyo ngayon?",
    timestamp: "Just now",
    badge: "Official AI",
  },
];

export default function ChatbotWidget({
  botName = "Lipa DRRM Assistant",
  defaultOpen = false,
}: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [messages, setMessages] = useState<ChatMessageType[]>(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);

  // Close with Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed || isLoading) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMessage: ChatMessageType = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: trimmed,
      timestamp: currentTime,
    };

    // Optimistically update message state
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          messages: nextMessages.map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      const botReplyText =
        data.reply ||
        "Paumanhin, hindi maiproseso ang tugon ngayon. Maaari ring tumawag direkta sa Lipa Rescue: 0915-463-5005 o (043) 756-0127.";

      const botMessage: ChatMessageType = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        badge: "Lipa DRRM",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: ChatMessageType = {
        id: `err-${Date.now()}`,
        sender: "bot",
        text: "⚠️ **Paumanhin, nagkaroon ng aberya sa koneksyon.**\n\nKung ito ay agarang emergency, mangyaring tumawag agad sa:\n* **Lipa Rescue Hotline**: `0915-463-5005`\n* **Landline**: `(043) 756-0127`\n* **Philippine Red Cross Lipa**: `(043) 756-1466`",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        badge: "System Alert",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectPrompt = (prompt: QuickPrompt) => {
    handleSendMessage(prompt.query);
  };

  return (
    <aside
      aria-label="Lipa DRRM Chatbot Assistant"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-1.5rem)]"
    >
      {/* Floating Trigger Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#7a1313] hover:bg-[#610f0f] text-white shadow-md hover:shadow-lg transition-colors cursor-pointer border-2 border-white focus:outline-hidden"
          aria-label="Open Lipa DRRM Assistant Chatbot"
        >
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="hidden sm:block absolute right-14 bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            DRRM Assistant
          </span>
        </button>
      )}

      {/* Chat Window Popup Modal */}
      {isOpen && (
        <div className="w-[calc(100vw-1.5rem)] sm:w-96 max-w-sm max-h-[82vh] rounded-xl shadow-2xl bg-white border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <ChatHeader
            botName={botName}
            statusText="Online • 24/7 AI Assistance"
            onClose={() => setIsOpen(false)}
            onMinimize={() => setIsOpen(false)}
          />

          {/* Message List */}
          <ChatMessageList messages={messages} isLoading={isLoading} />

          {/* Quick Starter Topics */}
          <ChatQuickPrompts
            onSelectPrompt={handleSelectPrompt}
            disabled={isLoading}
          />

          {/* Input Bar */}
          <ChatInput
            onSendMessage={handleSendMessage}
            disabled={isLoading}
          />
        </div>
      )}
    </aside>
  );
}
