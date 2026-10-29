import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { PAGES } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Emergency Hotlines | Lipa City Disaster Risk Reduction & Management Office",
  description:
    "Official directory of emergency hotlines for Lipa City, Batangas. Contact numbers for Lipa Rescue (CDRRMO), BFP, PNP, Red Cross, hospitals, and public utilities.",
};

interface ContactCardProps {
  agency: string;
  category: string;
  numbers: { label: string; number: string; link: string }[];
  address?: string;
  hours?: string;
  note?: string;
  badgeColor?: string;
}

function ContactCard({
  agency,
  category,
  numbers,
  address,
  hours = "24/7 Active Operations",
  note,
  badgeColor = "bg-[#7a1313] text-white",
}: ContactCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded p-5 hover:border-[#7a1313] transition-colors">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${badgeColor}`}>
            {category}
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-1.5">{agency}</h3>
        </div>
      </div>

      {address && (
        <p className="text-xs text-slate-500 mb-3">
          {address}
        </p>
      )}

      <div className="space-y-1.5 my-3 pt-2 border-t border-slate-100">
        {numbers.map((item, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1.5 gap-1">
            <span className="text-slate-600 font-medium">{item.label}:</span>
            <a
              href={`tel:${item.link}`}
              className="inline-flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-[#7a1313] bg-red-50/60 hover:bg-red-100/80 px-2.5 py-1.5 rounded transition-colors"
            >
              📞 {item.number}
            </a>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
        <span>{hours}</span>
        {note && <span className="italic text-slate-400">{note}</span>}
      </div>
    </div>
  );
}

export default function HotlinesPage() {
  if (!PAGES.hotlines) {
    return (
      <div className="w-full bg-[#fbfbfa] py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav className="text-xs text-slate-500 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#7a1313]">
              Home
            </Link>
            <span>&rsaquo;</span>
            <span className="text-slate-800 font-semibold">Emergency Hotlines</span>
          </nav>

          <div className="space-y-2">
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-200 uppercase tracking-wide">
              Module In Development
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#7a1313] tracking-tight">
              Emergency Hotlines Directory
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              The official consolidated hotline database for Lipa Rescue, PNP, BFP, and local healthcare facilities is currently being compiled for the upcoming development milestone.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded p-6 shadow-xs space-y-4">
            <div>
              <h2 className="font-bold text-slate-900 text-sm">Primary Emergency Contact</h2>
              <p className="text-xs text-slate-500">Lipa City Disaster Risk Reduction &amp; Management Office</p>
              <div className="font-mono text-base font-bold text-[#7a1313] mt-1">
                (043) 756-0127 &bull; 0915-463-5005
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Full directory verification in progress (Sprint 2)</span>
              <Link href="/" className="text-[#7a1313] font-semibold hover:underline">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fbfbfa] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb & Header */}
        <div className="space-y-2">
          <nav className="text-xs text-slate-500 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#7a1313]">
              Home
            </Link>
            <span>&rsaquo;</span>
            <span className="text-slate-800 font-semibold">Emergency Hotlines</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#7a1313] tracking-tight">
            Lipa City Emergency Hotlines Directory
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl">
            Official emergency telephone lines and contact directory for the Lipa City Disaster Risk Reduction and Management Office (CDRRMO), police, fire, rescue units, hospitals, and critical utility services.
          </p>
        </div>

        {/* Primary Lipa Rescue Banner Card */}
        <div className="bg-white border-2 border-[#7a1313] rounded p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <span className="bg-[#7a1313] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                Primary Emergency Response Unit
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Lipa City Disaster Risk Reduction &amp; Management Office (Lipa Rescue)
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operates the 24/7 Lipa Emergency Operations Center (EOC). Contact for vehicular accidents, medical transport, search and rescue, flood rescue, fallen trees, and disaster incidents across Lipa City.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-600 pt-1">
                <span>Lipa City Hall Complex, Marawoy, Lipa City</span>
                <span>&bull;</span>
                <span>VHF Radio: 142.850 MHz</span>
              </div>
            </div>

            <div className="md:col-span-4 bg-slate-50 rounded p-4 border border-slate-200 space-y-2">
              <div className="text-xs font-semibold text-slate-500 uppercase">
                Direct Emergency Hotlines
              </div>
              <div className="space-y-1">
                <a
                  href="tel:09154635005"
                  className="block font-mono text-base font-bold text-[#7a1313] hover:underline"
                >
                  0915-463-5005 (Mobile)
                </a>
                <a
                  href="tel:0437560127"
                  className="block font-mono text-sm font-bold text-slate-800 hover:underline"
                >
                  (043) 756-0127 (Landline)
                </a>
                <a
                  href="tel:0437575164"
                  className="block font-mono text-sm font-bold text-slate-800 hover:underline"
                >
                  (043) 757-5164 (Landline)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Emergency & Rescue Services */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Government Rescue, Fire &amp; Police Units
            </h2>
            <span className="text-xs text-slate-500">Available 24 Hours</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ContactCard
              agency="Bureau of Fire Protection (BFP Lipa)"
              category="Fire & Rescue"
              badgeColor="bg-red-700 text-white"
              address="B. Morada Ave, Poblacion, Lipa City"
              numbers={[
                { label: "Mobile Hotline", number: "0927-575-8065", link: "09275758065" },
                { label: "Landline", number: "(043) 757-4618", link: "0437574618" },
              ]}
            />

            <ContactCard
              agency="Philippine National Police (PNP Lipa)"
              category="Law Enforcement"
              badgeColor="bg-blue-800 text-white"
              address="C.M. Recto Ave, Lipa City"
              numbers={[
                { label: "Mobile Hotline", number: "0977-744-9692", link: "09777449692" },
                { label: "Landline", number: "(043) 702-3832", link: "0437023832" },
              ]}
            />

            <ContactCard
              agency="Traffic Management Division (TMD Lipa)"
              category="Traffic & Road Safety"
              badgeColor="bg-amber-700 text-white"
              address="Lipa City Hall Complex, Marawoy, Lipa City"
              numbers={[
                { label: "Landline 1", number: "(043) 702-6454", link: "0437026454" },
                { label: "Landline 2", number: "(043) 404-9152", link: "0434049152" },
              ]}
            />

            <ContactCard
              agency="Philippine Red Cross - Lipa City Chapter"
              category="Humanitarian & Medical"
              badgeColor="bg-rose-700 text-white"
              address="B. Morada Ave, Lipa City"
              numbers={[
                { label: "Mobile Hotline", number: "0998-957-0443", link: "09989570443" },
                { label: "Landline", number: "(043) 740-0768", link: "0437400768" },
              ]}
            />
          </div>
        </div>

        {/* Section 2: Hospitals and Medical Centers */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Lipa City Hospitals &amp; Emergency Rooms
            </h2>
            <span className="text-xs text-slate-500">Emergency Rooms Open 24/7</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ContactCard
              agency="Lipa City District Hospital"
              category="Public Hospital"
              badgeColor="bg-emerald-800 text-white"
              address="Brgy. Granja, Lipa City"
              numbers={[
                { label: "Main Line", number: "(043) 756-1407", link: "0437561407" },
              ]}
            />

            <ContactCard
              agency="Mary Mediatrix Medical Center"
              category="Tertiary Hospital"
              badgeColor="bg-slate-700 text-white"
              address="J.P. Laurel Highway, Lipa City"
              numbers={[
                { label: "Emergency Room", number: "(043) 773-6800", link: "0437736800" },
              ]}
            />

            <ContactCard
              agency="Lipa Medix Medical Center"
              category="Tertiary Hospital"
              badgeColor="bg-slate-700 text-white"
              address="J.P. Laurel Highway, Balintawak, Lipa City"
              numbers={[
                { label: "Trunkline / ER", number: "(043) 756-2342", link: "0437562342" },
              ]}
            />

            <ContactCard
              agency="San Fernando Medical Center"
              category="Medical Center"
              badgeColor="bg-slate-700 text-white"
              address="B. Morada Ave, Lipa City"
              numbers={[
                { label: "Trunkline", number: "(043) 756-5544", link: "0437565544" },
              ]}
            />

            <ContactCard
              agency="N.L. Villa Memorial Medical Center"
              category="Medical Center"
              badgeColor="bg-slate-700 text-white"
              address="G.A. Solis St, Lipa City"
              numbers={[
                { label: "Emergency Line", number: "(043) 756-1217", link: "0437561217" },
              ]}
            />
          </div>
        </div>

        {/* Section 3: Utilities & Lifeline Services */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Utility &amp; Infrastructure Hotlines
            </h2>
            <span className="text-xs text-slate-500">Power, Water, and Infrastructure</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ContactCard
              agency="Batangas II Electric Cooperative Inc. (BATELEC II)"
              category="Power & Electric"
              badgeColor="bg-yellow-800 text-white"
              address="Antipolo Del Norte, Lipa City"
              numbers={[
                { label: "Emergency Mobile 1", number: "0917-504-9254", link: "09175049254" },
                { label: "Emergency Mobile 2", number: "0998-892-0145", link: "09988920145" },
                { label: "Landline", number: "(043) 756-6337", link: "0437566337" },
              ]}
            />

            <ContactCard
              agency="Metro Lipa Water District (MLWD)"
              category="Water Utility"
              badgeColor="bg-cyan-800 text-white"
              address="B. Morada Ave, Lipa City"
              numbers={[
                { label: "Hotline 1", number: "(043) 756-1611", link: "0437561611" },
                { label: "Hotline 2", number: "(043) 756-1118", link: "0437561118" },
              ]}
            />
          </div>
        </div>

        {/* Caller Guidelines Guide (Practical and Clear) */}
        <div className="bg-slate-100 border border-slate-300 rounded p-6 space-y-3">
          <div className="text-slate-900 font-bold text-sm">
            Emergency Call Protocol: What Information to Provide
          </div>
          <p className="text-xs text-slate-600">
            When calling Lipa Rescue or emergency responders, remain calm and provide the following critical details to the dispatcher:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1">
            <div className="bg-white p-3 rounded border border-slate-200">
              <strong className="block text-slate-900 mb-1">1. Exact Location</strong>
              <p className="text-slate-600 text-[11px]">
                State the barangay, street name, house/building number, and prominent nearby landmarks.
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-slate-200">
              <strong className="block text-slate-900 mb-1">2. Nature of Emergency</strong>
              <p className="text-slate-600 text-[11px]">
                Specify if it is a medical case, vehicular accident, fire, localized flooding, or fallen structure.
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-slate-200">
              <strong className="block text-slate-900 mb-1">3. Persons Affected</strong>
              <p className="text-slate-600 text-[11px]">
                Mention how many people need assistance, their condition, and if children, elderly, or pregnant individuals are involved.
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-slate-200">
              <strong className="block text-slate-900 mb-1">4. Caller Details</strong>
              <p className="text-slate-600 text-[11px]">
                Give your complete name and keep your phone line open for follow-up verification from dispatchers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
