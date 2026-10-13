import { NextResponse } from "next/server";

const GEMINI_API_KEY =
  process.env.GEMINI_API_KEY ||
  "AQ.Ab8RN6LxhSX_plvyuAYcvsQ6VcHrHETo6RDchOvQFZ1Zgx9sMA";

// Candidate models for automated fallback in case of Google API demand spikes (503 / 429)
const CANDIDATE_MODELS = [
  "gemini-flash-latest",
  "gemini-3.7-flash",
  "gemini-3.6-flash",
  "gemini-3.5-flash",
  "gemini-3.8-flash",
];

const SYSTEM_INSTRUCTION = `You are the official Virtual Assistant for the Lipa City Disaster Risk Reduction & Management Office (LCDRRMO) / Lipa Rescue, City Government of Lipa, Province of Batangas.

YOUR ROLE & TONE:
- Be respectful, calm, fast, helpful, and safety-oriented.
- You can communicate in English, Filipino/Tagalog, or Taglish depending on the citizen's message.
- Always prioritize public safety. If a resident reports an active emergency (severe injury, trapped in flood, fire, vehicle crash, crime), instruct them to call Lipa Rescue or emergency responders immediately and provide the telephone numbers upfront.

OFFICIAL DIRECTORY & EMERGENCY HOTLINES:
- CDRRMO / Lipa Rescue 24/7 Operations Center:
  • Mobile: 0915-463-5005
  • Landlines: (043) 756-0127 / (043) 757-5164
- Bureau of Fire Protection (BFP Lipa):
  • Mobile: 0927-575-8065 | Landline: (043) 757-4618
- Philippine National Police (PNP Lipa):
  • Mobile: 0977-744-9692 | Landline: (043) 702-3832
- Philippine Red Cross (Lipa City Chapter):
  • Mobile: 0998-957-0443 | Landline: (043) 740-0768
- Traffic Management Division (TMD Lipa):
  • Landlines: (043) 702-6454 / (043) 404-9152
- Utility Hotlines:
  • Batangas II Electric Cooperative (BATELEC II): 0917-504-9254 / 0998-892-0145 / (043) 756-6337
  • Metro Lipa Water District (MLWD): (043) 756-1611 / (043) 756-1118
- Major Hospitals in Lipa:
  • Lipa Medix Medical Center: (043) 756-2342
  • Mary Mediatrix Medical Center: (043) 773-6800
  • Ospital ng Lipa: (043) 756-1454
  • San Antonio Medical Center: (043) 756-2522
  • N.L. Villa Memorial Medical Center: (043) 756-1217

OFFICE PROFILE & DRRM FRAMEWORK:
- Location: Lipa City Hall Complex, Marawoy, Lipa City, Batangas 4217
- Radio Net / VHF Frequency: 142.850 MHz
- Operating Hours: 24/7, 365 days a year
- Jurisdiction: All 72 Barangays of Lipa City
- City Mayor & CDRRMC Chairperson: Hon. Eric B. Africa
- City DRRM Officer (Department Head): Leonardo D. Tadeja
- The 4 DRRM Thematic Pillars (R.A. 10121):
  1. Disaster Prevention & Mitigation (hazard mapping, structural safety)
  2. Disaster Preparedness (barangay training, early warning, drill simulations)
  3. Disaster Response (Lipa Rescue 24/7, incident command, emergency dispatch)
  4. Disaster Rehabilitation & Recovery (damage assessment, relief, resilient restoration)

WEATHER & VOLCANIC HAZARDS:
- For typhoon bulletins and rainfall advisories, advise checking DOST-PAGASA and the official LCDRRMO portal.
- For Taal Volcano status and vog/ashfall advisories, advise checking DOST-PHIVOLCS advisories. Recommend wearing N95 masks during sulfur/vog emission.

FORMATTING:
- Keep responses concise, clear, and easy to read on mobile devices.
- Use bullet points when listing numbers or steps. Use bold for key numbers and hotline contacts.`;

interface RawMessage {
  sender?: string;
  text?: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, message } = body;

    // Sanitize conversation turns for Gemini API
    const rawList: RawMessage[] = Array.isArray(messages) && messages.length > 0
      ? messages
      : typeof message === "string" && message.trim()
      ? [{ sender: "user", text: message.trim() }]
      : [];

    if (rawList.length === 0) {
      return NextResponse.json(
        { error: "A message or messages array is required." },
        { status: 400 }
      );
    }

    // Gemini requires:
    // 1. Alternating user and model roles.
    // 2. First turn MUST be 'user' (cannot start with model).
    // 3. Merging consecutive turns from the same role.
    const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];
    let hasUserStarted = false;

    for (const item of rawList) {
      if (!item.text || item.sender === "system") continue;

      if (item.sender === "user") {
        hasUserStarted = true;
      }

      // Skip initial bot greeting turns before the first user query
      if (!hasUserStarted) continue;

      const role: "user" | "model" = item.sender === "user" ? "user" : "model";

      if (contents.length > 0 && contents[contents.length - 1].role === role) {
        // Merge contiguous messages of same role
        contents[contents.length - 1].parts[0].text += `\n${item.text}`;
      } else {
        contents.push({ role, parts: [{ text: item.text }] });
      }
    }

    // Fallback if no valid user message remained
    if (contents.length === 0) {
      const fallbackText = typeof message === "string" && message.trim() ? message.trim() : "Hello";
      contents.push({ role: "user", parts: [{ text: fallbackText }] });
    }

    const payload = {
      systemInstruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }],
      },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    };

    // Try candidate models in order of priority for high availability
    let lastError: string | null = null;
    let candidateText: string | null = null;

    for (const model of CANDIDATE_MODELS) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            candidateText = text;
            break; // Successfully got response
          }
        } else {
          const errDetail = await response.text();
          lastError = `Model ${model} returned ${response.status}: ${errDetail}`;
          console.warn(`Gemini fallback warning [${model}]:`, response.status);
        }
      } catch (networkErr: unknown) {
        const message = networkErr instanceof Error ? networkErr.message : String(networkErr);
        lastError = `Network error calling ${model}: ${message}`;
        console.warn(`Gemini network warning [${model}]:`, message);
      }
    }

    if (candidateText) {
      return NextResponse.json({ reply: candidateText });
    }

    console.error("All Gemini candidate models failed:", lastError);
    return NextResponse.json(
      {
        error: "All AI models are currently unavailable.",
        reply:
          "⚠️ **Paumanhin, kasalukuyang abala ang AI service.**\n\nPara sa agarang tulong at emergency dispatch, tumawag direkta sa:\n* **Lipa Rescue Hotline**: `0915-463-5005`\n* **Operations Center**: `(043) 756-0127`\n* **BFP Lipa Fire**: `0927-575-8065`",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Chat API route critical error:", error);
    return NextResponse.json(
      {
        error: "Failed to process chat message.",
        reply:
          "⚠️ **Paumanhin, nagkaroon ng aberya.** Mangyaring tumawag sa Lipa Rescue Hotline: `0915-463-5005`.",
      },
      { status: 200 }
    );
  }
}
