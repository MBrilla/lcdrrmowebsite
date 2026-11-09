import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public", "posts");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const SVGS = [
  {
    filename: "drill-lcnhs.svg",
    category: "COMMUNITY DRILLS & PREPAREDNESS",
    title: "Multi-Hazard Earthquake & Evacuation Simulation",
    subtitle: "Lipa City National High School • 1,850+ Students & Faculty Evaluated",
    tag: "LIPA RESCUE 24/7",
    color: "#0e274a",
    accent: "#c68a18",
    iconType: "drill"
  },
  {
    filename: "taal-monitoring.svg",
    category: "ENVIRONMENTAL HAZARD MONITORING",
    title: "Taal Volcano Gas Emission & Air Quality Testing",
    subtitle: "Barangays Lodlod, San Celestino & San Salvador • SO2 Field Surveillance",
    tag: "TECHNICAL WARNING UNIT",
    color: "#2e1065",
    accent: "#a855f7",
    iconType: "air"
  },
  {
    filename: "wasar-inspection.svg",
    category: "LOGISTICS & FLOOD READINESS",
    title: "Water Search & Rescue (WASAR) Boat Maintenance",
    subtitle: "Outboard Motors, Dewatering Pumps & Floatation Safety Audit",
    tag: "SPECIAL RESCUE UNIT",
    color: "#0f766e",
    accent: "#14b8a6",
    iconType: "boat"
  },
  {
    filename: "relief-dagatan.svg",
    category: "RELIEF & LOGISTICS MOBILIZATION",
    title: "Food Packs Assembly & Modular Evacuation Tents",
    subtitle: "City Evacuation Gymnasium, Brgy. Dagatan • Joint Operation with CSWDO",
    tag: "LOGISTICS DIVISION",
    color: "#78350f",
    accent: "#f59e0b",
    iconType: "relief"
  },
  {
    filename: "bls-training.svg",
    category: "TRAINING & CAPACITY BUILDING",
    title: "Basic Life Support & First Aid Certification",
    subtitle: "144 Barangay First Responders from 72 Barangays Certified",
    tag: "TRAINING CORPS",
    color: "#1e3a8a",
    accent: "#3b82f6",
    iconType: "medical"
  },
  {
    filename: "river-inspection.svg",
    category: "HAZARD MITIGATION & DRAINAGE",
    title: "Pre-Typhoon Creek Inspection & River Clearing",
    subtitle: "Sabang-Lodlod Tributaries • 14 Tons Silt & Culvert Debris Extracted",
    tag: "MITIGATION TASK FORCE",
    color: "#064e3b",
    accent: "#10b981",
    iconType: "river"
  },
  {
    filename: "vehicular-response.svg",
    category: "EMERGENCY RESPONSE REPORT",
    title: "Vehicular Incident Response & Emergency Transport",
    subtitle: "Pres. J.P. Laurel Highway, Brgy. Balintawak • 4-Minute Arrival Interval",
    tag: "EMS ALPHA TEAM",
    color: "#7a1313",
    accent: "#ea580c",
    iconType: "ambulance"
  },
  {
    filename: "tree-clearing.svg",
    category: "RAPID ROAD CLEARING OPERATION",
    title: "Fallen Tree Removal & Highway Obstruction Clearance",
    subtitle: "Pres. J.P. Laurel Highway, Brgy. Marawoy • Both Lanes Restored in 42 Mins",
    tag: "CLEARING CREW",
    color: "#854d0e",
    accent: "#eab308",
    iconType: "clearing"
  },
  {
    filename: "weekly-summary.svg",
    category: "OFFICIAL DISPATCH SUMMARY",
    title: "Weekend Emergency Response Operations Report",
    subtitle: "13 Total Emergency Dispatches: 5 Medical Transports & 8 Collisions",
    tag: "OPERATIONS CENTER",
    color: "#1e293b",
    accent: "#c68a18",
    iconType: "report"
  },
  {
    filename: "fire-standby.svg",
    category: "FIRE STANDBY & EMERGENCY MEDICAL",
    title: "Residential Structure Fire Support & Medical Standby",
    subtitle: "Sitio Riverside, Brgy. Sabang • Oxygen Therapy Rendered to Elderly",
    tag: "LIPA RESCUE BRAVO",
    color: "#7f1d1d",
    accent: "#ef4444",
    iconType: "fire"
  },
  {
    filename: "maternal-ems.svg",
    category: "HIGH-PRIORITY MEDICAL DISPATCH",
    title: "Midnight Maternal Emergency Ambulance Conveyance",
    subtitle: "Sitio Maligaya, Brgy. Pinagkawitan • Safe Delivery at Lipa Medix",
    tag: "EMS AMBULANCE 03",
    color: "#065f46",
    accent: "#34d399",
    iconType: "ambulance"
  },
  {
    filename: "quarterly-report.svg",
    category: "EXECUTIVE PERFORMANCE AUDIT",
    title: "Third Quarter Accomplishment & Readiness Report",
    subtitle: "214 Calls Handled • 98.4% On-Target Response Time Across 72 Barangays",
    tag: "EXECUTIVE DIRECTORATE",
    color: "#1e293b",
    accent: "#c68a18",
    iconType: "report"
  }
];

function getIconSvg(type) {
  switch (type) {
    case "ambulance":
      return `
        <rect x="20" y="30" width="70" height="40" rx="6" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="2"/>
        <path d="M90 45 L108 45 L118 56 L118 70 L90 70 Z" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="2"/>
        <circle cx="45" cy="74" r="10" fill="#ffffff" stroke="#ffffff" stroke-width="2"/>
        <circle cx="98" cy="74" r="10" fill="#ffffff" stroke="#ffffff" stroke-width="2"/>
        <path d="M50 42 L60 42 L60 32 L66 32 L66 42 L76 42 L76 48 L66 48 L66 58 L60 58 L60 48 L50 48 Z" fill="#ea580c"/>
      `;
    case "drill":
      return `
        <circle cx="65" cy="40" r="14" fill="#ffffff" fill-opacity="0.2" stroke="#ffffff" stroke-width="2"/>
        <path d="M40 76 C40 60, 52 56, 65 56 C78 56, 90 60, 90 76 Z" fill="#ffffff" fill-opacity="0.2" stroke="#ffffff" stroke-width="2"/>
        <circle cx="105" cy="46" r="10" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="1.5"/>
        <path d="M88 78 C88 66, 96 62, 105 62 C114 62, 122 66, 122 78 Z" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="1.5"/>
        <path d="M25 46 L35 46 L30 36 Z" fill="#c68a18"/>
      `;
    case "boat":
      return `
        <path d="M30 65 L45 80 L110 80 L125 65 Z" fill="#ffffff" fill-opacity="0.2" stroke="#ffffff" stroke-width="2"/>
        <rect x="55" y="45" width="40" height="20" rx="3" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="1.5"/>
        <path d="M75 25 L75 45 M65 30 L75 25 L85 30" stroke="#14b8a6" stroke-width="2.5" fill="none"/>
        <path d="M15 88 Q35 82 55 88 T95 88 T135 88" stroke="#14b8a6" stroke-width="2" fill="none"/>
      `;
    case "fire":
      return `
        <path d="M75 25 C65 40 50 48 50 65 C50 80 62 90 75 90 C88 90 100 80 100 65 C100 50 85 40 75 25 Z" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="2"/>
        <path d="M75 48 C70 56 62 62 62 72 C62 80 68 85 75 85 C82 85 88 80 88 72 C88 64 80 58 75 48 Z" fill="#ef4444"/>
      `;
    case "clearing":
      return `
        <rect x="30" y="60" width="85" height="15" rx="4" fill="#ffffff" fill-opacity="0.2" stroke="#ffffff" stroke-width="2"/>
        <circle cx="50" cy="50" r="18" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-width="1.5"/>
        <path d="M35 45 L65 55 M65 45 L35 55" stroke="#eab308" stroke-width="2"/>
        <path d="M85 40 L105 40 L115 60 L85 60 Z" fill="#eab308" fill-opacity="0.4"/>
      `;
    case "relief":
      return `
        <rect x="40" y="45" width="65" height="42" rx="4" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="2"/>
        <path d="M40 55 L105 55 M72.5 45 L72.5 87" stroke="#ffffff" stroke-width="1.5"/>
        <rect x="52" y="32" width="40" height="13" rx="2" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="72.5" cy="70" r="6" fill="#f59e0b"/>
      `;
    case "air":
      return `
        <path d="M35 60 Q55 45 75 60 T115 60" stroke="#a855f7" stroke-width="3" fill="none"/>
        <path d="M45 45 Q65 30 85 45 T125 45" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M30 75 Q50 60 70 75 T110 75" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.6"/>
        <circle cx="95" cy="35" r="8" fill="#a855f7"/>
      `;
    case "river":
      return `
        <path d="M25 40 L45 85 L100 85 L120 40 Z" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-width="1.5"/>
        <path d="M35 55 Q55 65 75 55 T115 55" stroke="#10b981" stroke-width="2.5" fill="none"/>
        <path d="M40 70 Q60 80 80 70 T110 70" stroke="#10b981" stroke-width="2.5" fill="none"/>
      `;
    default:
      return `
        <rect x="40" y="30" width="65" height="55" rx="4" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="2"/>
        <line x1="52" y1="45" x2="93" y2="45" stroke="#ffffff" stroke-width="2"/>
        <line x1="52" y1="55" x2="93" y2="55" stroke="#ffffff" stroke-width="2"/>
        <line x1="52" y1="65" x2="78" y2="65" stroke="#ffffff" stroke-width="2"/>
        <circle cx="90" cy="70" r="6" fill="#c68a18"/>
      `;
  }
}

for (const svg of SVGS) {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <!-- Solid professional palette with subtle pattern -->
    <pattern id="grid-${svg.filename}" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#ffffff" stroke-width="0.75" stroke-opacity="0.04"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="675" fill="${svg.color}"/>
  <rect width="1200" height="675" fill="url(#grid-${svg.filename})"/>

  <!-- Left Header Accent Bar -->
  <rect x="0" y="0" width="16" height="675" fill="${svg.accent}"/>

  <!-- Top Masthead Info -->
  <g transform="translate(60, 55)">
    <!-- Official Emblem Crest Placeholder Circle -->
    <circle cx="28" cy="28" r="28" fill="#ffffff" fill-opacity="0.1" stroke="${svg.accent}" stroke-width="2"/>
    <text x="28" y="34" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">LIPA</text>
    
    <text x="75" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5" fill="#ffffff" fill-opacity="0.75">
      REPUBLIC OF THE PHILIPPINES • CITY GOVERNMENT OF LIPA
    </text>
    <text x="75" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" letter-spacing="1" fill="#ffffff">
      DISASTER RISK REDUCTION AND MANAGEMENT OFFICE (LCDRRMO)
    </text>
  </g>

  <!-- Category & Tag Bar -->
  <g transform="translate(60, 160)">
    <rect x="0" y="0" width="220" height="34" rx="4" fill="${svg.accent}"/>
    <text x="110" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="900" letter-spacing="1" fill="#1e1917" text-anchor="middle">
      ${svg.tag}
    </text>

    <text x="240" y="23" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" letter-spacing="1.5" fill="${svg.accent}">
      ${svg.category}
    </text>
  </g>

  <!-- Main Headline Title -->
  <g transform="translate(60, 260)">
    <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
      ${svg.title.length > 40 ? svg.title.slice(0, 40) + '...' : svg.title}
    </text>
    
    <!-- Subtitle / Location -->
    <text x="0" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="500" fill="#ffffff" fill-opacity="0.85">
      ${svg.subtitle}
    </text>
  </g>

  <!-- Illustration Badge Right Side -->
  <g transform="translate(920, 240)">
    <circle cx="80" cy="80" r="110" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1" stroke-width="2"/>
    <circle cx="80" cy="80" r="85" fill="#ffffff" fill-opacity="0.08" stroke="${svg.accent}" stroke-width="2"/>
    <g transform="translate(5, 20)">
      ${getIconSvg(svg.iconType)}
    </g>
  </g>

  <!-- Bottom Official Accreditation Bar -->
  <rect x="0" y="605" width="1200" height="70" fill="#000000" fill-opacity="0.3"/>
  <g transform="translate(60, 646)">
    <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff" fill-opacity="0.9">
      24/7 Operations Center: (043) 756-0127 • 0915-463-5005 • Radio Net 142.850 MHz
    </text>
    <text x="1080" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="800" fill="${svg.accent}" text-anchor="end">
      OFFICIAL OPERATIONS REPORT
    </text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(dir, svg.filename), content, "utf-8");
}

console.log("Successfully generated all 12 SVG post graphics in public/posts/");
