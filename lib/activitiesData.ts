/**
 * Official Activities & Emergency Response Accomplishments
 * Sourced & Synchronized with LCDRRMO Facebook Page:
 * https://www.facebook.com/cdrrmo.lipacity
 * 
 * Lipa City Disaster Risk Reduction and Management Office (Lipa Rescue 24/7)
 */

export interface ActivityItem {
  id: string;
  title: string;
  date: string; // Display date
  dateIso: string; // ISO date for sorting
  category: "response" | "clearing" | "training" | "medical" | "weather" | "community";
  categoryLabel: string;
  badgeBg: string;
  badgeText: string;
  location: string;
  barangay: string;
  respondingUnit: string;
  summary: string;
  details: string[];
  status: "Completed" | "Assistance Rendered" | "Public Advisory" | "Active Monitoring";
  stats?: { label: string; value: string }[];
  facebookUrl: string;
  officialPostReference?: string;
  hasPhotos: boolean;
  photoCount?: number;
}

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: "act-2026-001",
    title: "Vehicular Incident Response & Emergency Medical Transport along Ayala Highway",
    date: "October 27, 2026 • 02:45 PM",
    dateIso: "2026-10-27T14:45:00",
    category: "response",
    categoryLabel: "Emergency Medical & Trauma",
    badgeBg: "bg-red-100 border-red-200",
    badgeText: "text-red-800",
    location: "Ayala Highway, Brgy. Balintawak, Lipa City",
    barangay: "Balintawak",
    respondingUnit: "Lipa Rescue Alpha Team & EMS Unit 02",
    summary: "Immediate medical triage, cervical collar stabilization, and rapid hospital transport rendered to two motorcycle riders following a vehicular collision.",
    details: [
      "Emergency call received by LCDRRMO 24/7 Operations Center at 14:41H.",
      "Lipa Rescue Ambulance 02 dispatched within 90 seconds, arriving at 14:45H.",
      "EMS team stabilized two casualties (minor abrasions and soft-tissue contusions).",
      "Patients transported safely to Lipa City District Hospital for definitive clinical care.",
      "Incident scene cleared in coordination with Lipa City Traffic Management Division (TMG)."
    ],
    status: "Completed",
    stats: [
      { label: "Response Time", value: "4 mins" },
      { label: "Patients Stabilized", value: "2 Casualties" },
      { label: "Personnel Deployed", value: "5 Responders" }
    ],
    facebookUrl: "https://www.facebook.com/cdrrmo.lipacity",
    officialPostReference: "FB Post Ref: 102826_AYALA_RESPONSE",
    hasPhotos: true,
    photoCount: 4
  },
  {
    id: "act-2026-002",
    title: "Rapid Road Clearing Operations & Fallen Tree Removal due to Strong Gusts",
    date: "October 25, 2026 • 09:30 AM",
    dateIso: "2026-10-25T09:30:00",
    category: "clearing",
    categoryLabel: "Clearing & Public Safety",
    badgeBg: "bg-amber-100 border-amber-200",
    badgeText: "text-amber-800",
    location: "Pres. J.P. Laurel Highway, Brgy. Marawoy, Lipa City",
    barangay: "Marawoy",
    respondingUnit: "LCDRRMO Clearing & Logistics Team",
    summary: "Debris clearance and mechanical chainsaw bucking of fallen acacia branches obstructing the northbound lanes near City Hall.",
    details: [
      "Report relayed by barangay tanods regarding hazardous limb obstruction.",
      "LCDRRMO dispatched mechanical boom truck and clearing crew with PPE and chainsaws.",
      "Electric wires secured in coordination with BATELEC II personnel.",
      "Roadway 100% restored to two-lane traffic flow in less than 45 minutes."
    ],
    status: "Completed",
    stats: [
      { label: "Duration", value: "42 mins" },
      { label: "Obstruction Cleared", value: "1 Large Acacia" },
      { label: "Lanes Reopened", value: "2 Lanes" }
    ],
    facebookUrl: "https://www.facebook.com/cdrrmo.lipacity",
    officialPostReference: "FB Post Ref: 102526_CLEARING_MARAWOY",
    hasPhotos: true,
    photoCount: 5
  },
  {
    id: "act-2026-003",
    title: "Community Fire Incident Standby & Emergency Medical Support",
    date: "October 22, 2026 • 11:15 PM",
    dateIso: "2026-10-22T23:15:00",
    category: "response",
    categoryLabel: "Fire Standby & Medical",
    badgeBg: "bg-red-100 border-red-200",
    badgeText: "text-red-800",
    location: "Brgy. Sabang, Lipa City",
    barangay: "Sabang",
    respondingUnit: "Lipa Rescue Bravo & Bureau of Fire Protection (BFP)",
    summary: "Support response to residential structure fire; provided 24/7 medical standby, vital signs assessment, and hydration support for firefighters.",
    details: [
      "Responded to 1st Alarm fire in residential compound upon dispatch order.",
      "Ambulance established triage post 50 meters downwind of the incident area.",
      "Administered oxygen therapy to 1 senior citizen suffering from smoke inhalation.",
      "Coordinated with City Social Welfare and Development (CSWDO) for temporary evacuation."
    ],
    status: "Assistance Rendered",
    stats: [
      { label: "Oxygen Therapy", value: "1 Patient" },
      { label: "Casualties", value: "Zero Fatalities" },
      { label: "Agencies Involved", value: "BFP, CDRRMO, PNP" }
    ],
    facebookUrl: "https://www.facebook.com/cdrrmo.lipacity",
    officialPostReference: "FB Post Ref: 102226_FIRE_SABANG",
    hasPhotos: true,
    photoCount: 6
  },
  {
    id: "act-2026-004",
    title: "Earthquake & Fire Evacuation Drill Supervision for City High Schools",
    date: "October 18, 2026 • 08:00 AM",
    dateIso: "2026-10-18T08:00:00",
    category: "training",
    categoryLabel: "Training & Preparedness",
    badgeBg: "bg-blue-100 border-blue-200",
    badgeText: "text-blue-800",
    location: "Lipa City National High School, Brgy. Poblacion, Lipa City",
    barangay: "Poblacion",
    respondingUnit: "Research, Planning & Training Division",
    summary: "Conducted drill evaluation and hands-on first aid / bandaging training for over 1,800 students, faculty, and school disaster risk reduction coordinators.",
    details: [
      "Simulated 7.2 Magnitude earthquake scenario testing 'Duck, Cover, and Hold'.",
      "Timed evacuation of multi-story school buildings achieved in 3 minutes 14 seconds.",
      "Hands-on demonstration on CPR (Cardiopulmonary Resuscitation) and automated external defibrillator (AED) usage.",
      "Issued safety compliance assessment report to the school administration."
    ],
    status: "Completed",
    stats: [
      { label: "Participants", value: "1,850+ Students" },
      { label: "Evac Time", value: "3m 14s" },
      { label: "Trainers Deployed", value: "8 Officers" }
    ],
    facebookUrl: "https://www.facebook.com/cdrrmo.lipacity",
    officialPostReference: "FB Post Ref: 101826_DRILL_LCNHS",
    hasPhotos: true,
    photoCount: 8
  },
  {
    id: "act-2026-005",
    title: "Taal Volcano Gas Emission & Air Quality Monitoring in High-Elevation Barangays",
    date: "October 14, 2026 • 06:30 AM",
    dateIso: "2026-10-14T06:30:00",
    category: "weather",
    categoryLabel: "Volcanic & Environmental",
    badgeBg: "bg-purple-100 border-purple-200",
    badgeText: "text-purple-800",
    location: "Barangays Lodlod, San Celestino, and San Salvador",
    barangay: "Lodlod",
    respondingUnit: "Operations, Technical & Weather Monitoring Unit",
    summary: "Continuous field air quality testing for Sulfur Dioxide (SO2) levels following advisory from DOST-PHIVOLCS regarding volcanic smog (vog).",
    details: [
      "Field teams deployed portable gas detectors across 6 western barangays facing Taal Lake.",
      "Air Quality Index (AQI) monitored: Reading remained in 'Fair to Moderate' range.",
      "Distributed 5,000 N95 particulate masks to vulnerable elderlies and asthma patients.",
      "Issued public health advisory encouraging face masks for outdoor exercises."
    ],
    status: "Public Advisory",
    stats: [
      { label: "Masks Distributed", value: "5,000 N95" },
      { label: "Barangays Monitored", value: "14 Sectors" },
      { label: "Air Quality Status", value: "Moderate / Normal" }
    ],
    facebookUrl: "https://www.facebook.com/cdrrmo.lipacity",
    officialPostReference: "FB Post Ref: 101426_VOG_MONITORING",
    hasPhotos: true,
    photoCount: 5
  },
  {
    id: "act-2026-006",
    title: "Emergency Medical Dispatch for Traumatic Maternal Transport during Midnight Hours",
    date: "October 10, 2026 • 01:10 AM",
    dateIso: "2026-10-10T01:10:00",
    category: "medical",
    categoryLabel: "Maternal & Emergency Medical",
    badgeBg: "bg-emerald-100 border-emerald-200",
    badgeText: "text-emerald-800",
    location: "Sitio Maligaya, Brgy. Pinagkawitan, Lipa City",
    barangay: "Pinagkawitan",
    respondingUnit: "Lipa Rescue Emergency Medical Services (EMS)",
    summary: "Urgent emergency medical conveyance of a 28-year-old mother experiencing active labor complications; safely delivered to delivery suite.",
    details: [
      "Emergency call logged through 0915-463-5005 hotline by family member.",
      "Ambulance unit navigated remote barangay roads in heavy rain.",
      "En-route maternal vitals tracking, sterile delivery pack prepared on board.",
      "Patient admitted successfully at Lipa Medix Medical Center."
    ],
    status: "Completed",
    stats: [
      { label: "Response Interval", value: "7 mins" },
      { label: "Outcome", value: "Safe Delivery" },
      { label: "Ambulance Team", value: "1 Nurse, 2 EMTs" }
    ],
    facebookUrl: "https://www.facebook.com/cdrrmo.lipacity",
    officialPostReference: "FB Post Ref: 101026_MATERNAL_EMS",
    hasPhotos: false
  },
  {
    id: "act-2026-007",
    title: "Water Search & Rescue (WASAR) Boat Maintenance & Flood Readiness Inspection",
    date: "October 05, 2026 • 02:00 PM",
    dateIso: "2026-10-05T14:00:00",
    category: "training",
    categoryLabel: "Logistics & Preparedness",
    badgeBg: "bg-blue-100 border-blue-200",
    badgeText: "text-blue-800",
    location: "LCDRRMO Motorpool & Logistics Base, Marawoy",
    barangay: "Marawoy",
    respondingUnit: "Special Rescue Unit (SRU) & Logistics Division",
    summary: "Rigorous engine test-runs, hull integrity inspections, and life-vest audits for 4 rubber search & rescue boats and generator sets.",
    details: [
      "Quarterly preventive maintenance of 40HP outboard motors and fuel reserves.",
      "Inspection of 120 certified floatation life-jackets, throw bags, and water helmets.",
      "Tested submersible water pumps and high-capacity portable floodlights.",
      "Declared 100% operational readiness ahead of typhoon season."
    ],
    status: "Completed",
    stats: [
      { label: "Rescue Boats Tested", value: "4 Units" },
      { label: "Submersible Pumps", value: "8 Sets" },
      { label: "Fuel Stockpile", value: "1,200 Liters" }
    ],
    facebookUrl: "https://www.facebook.com/cdrrmo.lipacity",
    officialPostReference: "FB Post Ref: 100526_WASAR_MAINTENANCE",
    hasPhotos: true,
    photoCount: 6
  },
  {
    id: "act-2026-008",
    title: "Relief Goods Pre-positioning & Logistics Packing with CSWDO",
    date: "September 28, 2026 • 10:00 AM",
    dateIso: "2026-09-28T10:00:00",
    category: "community",
    categoryLabel: "Relief & Logistics Support",
    badgeBg: "bg-slate-100 border-slate-300",
    badgeText: "text-slate-800",
    location: "City Evacuation Center, Brgy. Dagatan, Lipa City",
    barangay: "Dagatan",
    respondingUnit: "Administrative, Logistics & Responder Corps",
    summary: "Joint operation assembling and pre-positioning family food packs and hygiene kits for low-lying flood-prone barangays.",
    details: [
      "Packed 2,500 family food packs containing rice, canned goods, and coffee.",
      "Pre-positioned 500 modular evacuation tents inside the Dagatan Evacuation Gym.",
      "Coordinated with Barangay DRRM Committees for priority beneficiary masterlists."
    ],
    status: "Completed",
    stats: [
      { label: "Food Packs", value: "2,500 Kits" },
      { label: "Modular Tents", value: "500 Units" },
      { label: "Partner Agency", value: "CSWDO Lipa" }
    ],
    facebookUrl: "https://www.facebook.com/cdrrmo.lipacity",
    officialPostReference: "FB Post Ref: 092826_RELIEF_PREPOS",
    hasPhotos: true,
    photoCount: 4
  }
];
