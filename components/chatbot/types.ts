export interface ChatMessage {
  id: string;
  sender: "bot" | "user" | "system";
  text: string;
  timestamp: string;
  badge?: string;
}

export interface QuickPrompt {
  id: string;
  label: string;
  query: string;
}

export interface ChatbotConfig {
  enabled: boolean;
  botName: string;
  botTagline: string;
  statusText: string;
  emergencyHotline: string;
}
