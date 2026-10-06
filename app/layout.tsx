import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lipa City Disaster Risk Reduction & Management Office (LCDRRMO)",
  description:
    "Official Web Portal of the Lipa City Disaster Risk Reduction and Management Office (LCDRRMO) / Lipa Rescue. Emergency hotlines, early weather warnings, disaster preparedness guides, and public safety services for Lipa City, Batangas.",
  keywords: [
    "Lipa City",
    "Lipa Rescue",
    "CDRRMO",
    "LCDRRMO",
    "Disaster Risk Reduction",
    "Batangas DRRM",
    "Emergency Hotlines",
    "Lipa City Government",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbfbfa] text-slate-800 font-sans selection:bg-[#7a1313] selection:text-white">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
