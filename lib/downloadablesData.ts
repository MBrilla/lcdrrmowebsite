/**
 * Official Disaster Preparedness Downloadables & IEC Infographics Directory
 * Sourced directly from DOST-PAGASA (bagong.pagasa.dost.gov.ph) and DOST-PHIVOLCS (phivolcs.dost.gov.ph)
 * Rule: Real downloadable files are provided IF AND ONLY IF the official agency publishes said infographic.
 * In compliance with Republic Act No. 10121 (The Philippine Disaster Risk Reduction and Management Act of 2010).
 */

export interface InfographicItem {
  id: string;
  title: string;
  subtitle: string;
  agency: "DOST-PAGASA" | "DOST-PHIVOLCS" | "NDRRMC & LCDRRMO" | "DOH & LCDRRMO" | "BFP & LCDRRMO";
  agencyFull: string;
  agencyWebsiteName: string;
  agencyWebsiteUrl: string;
  directResourceUrl: string;
  agencySealAlt: string;
  category: "weather" | "volcano-seismic" | "emergency-kit" | "health-fire";
  categoryLabel: string;
  badgeColor: string;
  badgeTextColor: string;
  hasOfficialDownloadable: boolean; // TRUE if and only if the agency officially provides a downloadable infographic on their website
  downloadFileUrl?: string; // Real file path on server
  downloadFileName?: string;
  officialSourceFileUrl?: string; // Direct URL to the file hosted on the official agency server
  officialSourcePageUrl?: string; // Direct URL to the agency publication/IEC page
  previewImageUrl?: string; // Real image preview if available (jpg/png)
  fileSize?: string;
  missingDownloadReason?: string;
  fileFormat: string;
  dimensions: string;
  officialSource: string;
  officialSourceUrl: string;
  accreditation: string;
  summary: string;
  tagalogSummary: string;
  levels?: {
    label: string;
    levelName: string;
    color: string;
    textColor: string;
    criterion: string;
    action: string;
  }[];
  keySteps?: string[];
  checklistItems?: {
    category: string;
    items: string[];
  }[];
}

export const INFOGRAPHICS_DATA: InfographicItem[] = [
  // 1. DOST-PAGASA: Rainfall Warning System Poster (REAL FILE SOURCED FROM PAGASA)
  {
    id: "pagasa-rainfall-warning",
    title: "DOST-PAGASA Heavy Rainfall Warning System Poster",
    subtitle: "Official Color-Coded Rainfall Intensity, Flood Advisory & Community Action Matrix",
    agency: "DOST-PAGASA",
    agencyFull: "Philippine Atmospheric, Geophysical and Astronomical Services Administration (DOST-PAGASA)",
    agencyWebsiteName: "bagong.pagasa.dost.gov.ph",
    agencyWebsiteUrl: "https://bagong.pagasa.dost.gov.ph",
    directResourceUrl: "https://bagong.pagasa.dost.gov.ph/learnings/publication",
    agencySealAlt: "DOST-PAGASA Official Seal",
    category: "weather",
    categoryLabel: "Weather & Typhoons",
    badgeColor: "bg-blue-800",
    badgeTextColor: "text-blue-100",
    hasOfficialDownloadable: true,
    downloadFileUrl: "/downloadables/PAGASA-Rainfall-Warning-Poster.jpg",
    downloadFileName: "DOST-PAGASA-Rainfall-Warning-System-Poster.jpg",
    officialSourceFileUrl: "https://pagasa.dost.gov.ph/themes/hiraia//assets/images/publications/RAINFALLWARNING-POSTER.jpg",
    officialSourcePageUrl: "https://bagong.pagasa.dost.gov.ph/learnings/publication",
    previewImageUrl: "/downloadables/PAGASA-Rainfall-Warning-Poster.jpg",
    fileSize: "90 KB",
    fileFormat: "Official JPEG Poster (DOST-PAGASA Publications)",
    dimensions: "Print-Ready Poster (A4 / Scalable)",
    officialSource: "DOST-PAGASA Hydrometeorological Division & Public Information Unit",
    officialSourceUrl: "https://bagong.pagasa.dost.gov.ph",
    accreditation:
      "Directly sourced and downloaded from the official DOST-PAGASA Publications repository (bagong.pagasa.dost.gov.ph/learnings/publication). Published under the Department of Science and Technology in compliance with Republic Act No. 10121 for public flood risk reduction.",
    summary:
      "Official 3-tier color warning system indicating rainfall volume per hour, flood danger, and mandatory community actions for low-lying and flood-prone barangays.",
    tagalogSummary:
      "Opisyal na poster mula sa DOST-PAGASA sa antas ng lakas ng ulan at baha. Pulang Babala: Lumikas agad; Kahel: Maghandang lumikas; Dilaw: Magmasid at maging alerto.",
    levels: [
      {
        label: "RED WARNING",
        levelName: "Torrential Rainfall (>30 mm/hr)",
        color: "#dc2626",
        textColor: "#ffffff",
        criterion: "Rainfall exceeds 30 mm in 1 hour or continuous for 3 hours (>65 mm).",
        action: "EVACUATION IS MANDATORY. Severe river and urban flooding is occurring or imminent.",
      },
      {
        label: "ORANGE WARNING",
        levelName: "Intense Rainfall (15 – 30 mm/hr)",
        color: "#ea580c",
        textColor: "#ffffff",
        criterion: "Rainfall of 15 to 30 mm in 1 hour, expected to persist for the next 2 hours.",
        action: "PREPARE TO EVACUATE. Flooding is threatening low-lying communities and waterways.",
      },
      {
        label: "YELLOW WARNING",
        levelName: "Heavy Rainfall (7.5 – 15 mm/hr)",
        color: "#ca8a04",
        textColor: "#ffffff",
        criterion: "Rainfall of 7.5 to 15 mm observed in 1 hour and expected to continue.",
        action: "MONITOR WEATHER CONDITIONS. Flooding is possible in low-lying areas and stream channels.",
      },
    ],
    keySteps: [
      "Check your barangay BDRRMC flood hazard classification before heavy rainfall events.",
      "Move electrical appliances and vital records to the upper floor if residing near creeks or drainage channels.",
      "Never attempt to drive or walk through floodwaters: only 15 cm of moving water can knock you down.",
      "Maintain active communication with Lipa CDRRMO Operations Center (0915-463-5005).",
    ],
  },

  // 2. DOST-PAGASA: Tropical Cyclone Wind Signals (REAL FILE SOURCED FROM PAGASA)
  {
    id: "pagasa-tcws-signals",
    title: "DOST-PAGASA Tropical Cyclone Wind Signals Poster",
    subtitle: "Official Wind Classification, Expected Lead Time & Threat Scale (TCWS 1 to 5)",
    agency: "DOST-PAGASA",
    agencyFull: "Philippine Atmospheric, Geophysical and Astronomical Services Administration (DOST-PAGASA)",
    agencyWebsiteName: "bagong.pagasa.dost.gov.ph",
    agencyWebsiteUrl: "https://bagong.pagasa.dost.gov.ph",
    directResourceUrl: "https://bagong.pagasa.dost.gov.ph/learnings/publication",
    agencySealAlt: "DOST-PAGASA Official Seal",
    category: "weather",
    categoryLabel: "Weather & Typhoons",
    badgeColor: "bg-blue-800",
    badgeTextColor: "text-blue-100",
    hasOfficialDownloadable: true,
    downloadFileUrl: "/downloadables/PAGASA-Tropical-Cyclone-Warning-Poster.jpg",
    downloadFileName: "DOST-PAGASA-Tropical-Cyclone-Wind-Signals-Poster.jpg",
    officialSourceFileUrl: "https://pagasa.dost.gov.ph/themes/hiraia//assets/images/publications/TROPCYCLONE-POSTER.jpg",
    officialSourcePageUrl: "https://bagong.pagasa.dost.gov.ph/learnings/publication",
    previewImageUrl: "/downloadables/PAGASA-Tropical-Cyclone-Warning-Poster.jpg",
    fileSize: "160 KB",
    fileFormat: "Official JPEG Poster (DOST-PAGASA Publications)",
    dimensions: "High-Resolution TCWS Classification Poster",
    officialSource: "DOST-PAGASA Weather Forecasting Center & Public Information Unit",
    officialSourceUrl: "https://bagong.pagasa.dost.gov.ph",
    accreditation:
      "Directly sourced and downloaded from the official DOST-PAGASA Publications repository (bagong.pagasa.dost.gov.ph/learnings/publication). Defined per national meteorological warning classifications.",
    summary:
      "The official modified 5-tier system used by PAGASA to notify the public of the strength, potential damage, and lead time of tropical cyclone winds approaching Lipa City and Batangas province.",
    tagalogSummary:
      "Opisyal na poster mula sa DOST-PAGASA sa limang antas ng Tropical Cyclone Wind Signal (TCWS 1 hanggang 5) at lakas ng hanging dala ng bagyo.",
    levels: [
      {
        label: "SIGNAL NO. 1",
        levelName: "39 – 61 km/h (Strong Breeze to Near Gale)",
        color: "#2563eb",
        textColor: "#ffffff",
        criterion: "Winds expected within 36 hours. Minimal to minor threat to life and property.",
        action: "Inspect house roofs and anchor lightweight outdoor items. Monitor PAGASA updates.",
      },
      {
        label: "SIGNAL NO. 2",
        levelName: "62 – 88 km/h (Gale to Gale-Force Winds)",
        color: "#0891b2",
        textColor: "#ffffff",
        criterion: "Winds expected within 24 hours. Minor to moderate threat to life and property.",
        action: "Classes suspended per DepEd order. Secure window shutters and charge electronic devices.",
      },
      {
        label: "SIGNAL NO. 3",
        levelName: "89 – 117 km/h (Storm-Force Winds)",
        color: "#ca8a04",
        textColor: "#ffffff",
        criterion: "Winds expected within 18 hours. Moderate to significant threat to life and property.",
        action: "Evacuate high-risk homes and low-lying river areas. Move to sturdy evacuation centers.",
      },
      {
        label: "SIGNAL NO. 4",
        levelName: "118 – 184 km/h (Typhoon-Force Winds)",
        color: "#ea580c",
        textColor: "#ffffff",
        criterion: "Winds expected within 12 hours. Significant to severe threat to life and property.",
        action: "Stay inside heavily fortified structures. Total cancellation of all non-emergency transit.",
      },
      {
        label: "SIGNAL NO. 5",
        levelName: "≥ 185 km/h (Super Typhoon)",
        color: "#7f1d1d",
        textColor: "#ffffff",
        criterion: "Winds expected within 12 hours. Extreme catastrophic threat to life and property.",
        action: "Full-scale disaster response active. Seek reinforced shelter away from tall trees and power lines.",
      },
    ],
    keySteps: [
      "Pay attention to the lead time: Signal 1 provides 36 hours for early proactive preparation.",
      "Keep phones, radios, and emergency power banks fully charged before winds escalate.",
      "Clear nearby tree branches that may fall across electrical lines or roofs during severe gusts.",
    ],
  },

  // 3. DOST-PAGASA: Flood Warning Information System (REAL FILE SOURCED FROM PAGASA)
  {
    id: "pagasa-flood-warning",
    title: "DOST-PAGASA Flood Warning Information System Poster",
    subtitle: "Official Hydrological Alert Scale & River Basin Inundation Protocols",
    agency: "DOST-PAGASA",
    agencyFull: "Philippine Atmospheric, Geophysical and Astronomical Services Administration (DOST-PAGASA)",
    agencyWebsiteName: "bagong.pagasa.dost.gov.ph",
    agencyWebsiteUrl: "https://bagong.pagasa.dost.gov.ph",
    directResourceUrl: "https://bagong.pagasa.dost.gov.ph/learnings/publication",
    agencySealAlt: "DOST-PAGASA Official Seal",
    category: "weather",
    categoryLabel: "Weather & Typhoons",
    badgeColor: "bg-blue-800",
    badgeTextColor: "text-blue-100",
    hasOfficialDownloadable: true,
    downloadFileUrl: "/downloadables/PAGASA-Flood-Warning-Poster.jpg",
    downloadFileName: "DOST-PAGASA-Flood-Warning-System-Poster.jpg",
    officialSourceFileUrl: "https://pagasa.dost.gov.ph/themes/hiraia//assets/images/publications/FLOODWARNING-POSTER.jpg",
    officialSourcePageUrl: "https://bagong.pagasa.dost.gov.ph/learnings/publication",
    previewImageUrl: "/downloadables/PAGASA-Flood-Warning-Poster.jpg",
    fileSize: "118 KB",
    fileFormat: "Official JPEG Poster (DOST-PAGASA)",
    dimensions: "High-Resolution River Basin Advisory Poster",
    officialSource: "DOST-PAGASA Hydrometeorology Division (HMD)",
    officialSourceUrl: "https://bagong.pagasa.dost.gov.ph",
    accreditation:
      "Directly sourced and downloaded from the official DOST-PAGASA Publications repository (bagong.pagasa.dost.gov.ph/learnings/publication). Outlines river basin monitoring and flood threshold actions.",
    summary:
      "Provides hydrological warning standards for river stage levels, flash floods, and drainage overflow affecting downstream flood catchments in Lipa City.",
    tagalogSummary:
      "Opisyal na gabay mula sa DOST-PAGASA sa mga babala ng pagbaha at pag-apaw ng ilog at daluyan ng tubig.",
    keySteps: [
      "Monitor river water level gauges and BDRRMC flood watchposts during prolonged downpours.",
      "Stay off roads submerged under fast-flowing water: 30 cm of water can float small vehicles.",
      "Identify the nearest designated high-ground barangay evacuation site before water levels rise.",
    ],
  },

  // 4. DOST-PHIVOLCS: Earthquake Intensity Scale (PEIS) (REAL FILE SOURCED FROM PHIVOLCS)
  {
    id: "phivolcs-peis-intensity",
    title: "DOST-PHIVOLCS Poster: May Naramdamang Lindol?! Gabay at PEIS",
    subtitle: "Official 20x30 in Poster: PHIVOLCS Earthquake Intensity Scale (PEIS I to X)",
    agency: "DOST-PHIVOLCS",
    agencyFull: "Philippine Institute of Volcanology and Seismology (DOST-PHIVOLCS)",
    agencyWebsiteName: "phivolcs.dost.gov.ph",
    agencyWebsiteUrl: "https://phivolcs.dost.gov.ph",
    directResourceUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    agencySealAlt: "DOST-PHIVOLCS Official Seal",
    category: "volcano-seismic",
    categoryLabel: "Volcano & Earthquakes",
    badgeColor: "bg-red-800",
    badgeTextColor: "text-red-100",
    hasOfficialDownloadable: true,
    downloadFileUrl: "/downloadables/PHIVOLCS-Poster-Lindol-at-PEIS-Scale.jpg",
    downloadFileName: "DOST-PHIVOLCS-Poster-PEIS-Earthquake-Intensity-Scale-20x30in.jpg",
    officialSourceFileUrl: "https://www.phivolcs.dost.gov.ph/wp-content/uploads/vault/IEC-Materials/Poster-May-Naramdamang-Lindol-at-PEIS_20x30in_11Aug2023.jpg",
    officialSourcePageUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    previewImageUrl: "/downloadables/PHIVOLCS-Poster-Lindol-at-PEIS-Scale.jpg",
    fileSize: "4.3 MB",
    fileFormat: "Official 20x30 in JPEG Poster (DOST-PHIVOLCS)",
    dimensions: "20 x 30 inches (Full Print Resolution)",
    officialSource: "DOST-PHIVOLCS Geologic Disaster Awareness and Preparedness Division (GDAPD)",
    officialSourceUrl: "https://phivolcs.dost.gov.ph",
    accreditation:
      "Directly sourced and downloaded from the official DOST-PHIVOLCS General Information Products repository (phivolcs.dost.gov.ph/index.php/general-information-products). Official standard for earthquake reporting in the Philippines.",
    summary:
      "The official PHIVOLCS Earthquake Intensity Scale (PEIS), detailing ground shaking effects from Intensity I (Scarcely Perceptible) to Intensity X (Completely Devastating).",
    tagalogSummary:
      "Opisyal na 20x30 pulgadang poster mula sa DOST-PHIVOLCS sa antas ng lakas ng lindol (PEIS I hanggang X) at tamang pag-uulat ng naramdamang pagyanig.",
    levels: [
      {
        label: "PEIS I - III",
        levelName: "Scarcely Perceptible to Weak",
        color: "#16a34a",
        textColor: "#ffffff",
        criterion: "Felt only by a few individuals at rest indoors; hanging objects swing slightly.",
        action: "No immediate danger; verify information through official PHIVOLCS channels.",
      },
      {
        label: "PEIS IV - V",
        levelName: "Moderately Strong to Strong",
        color: "#ca8a04",
        textColor: "#ffffff",
        criterion: "Felt generally by people indoors and outdoors; light sleep awakens; glassware clatters.",
        action: "Stay alert; check structural surroundings; prepare for possible minor aftershocks.",
      },
      {
        label: "PEIS VI - VII",
        levelName: "Very Strong to Destructive",
        color: "#ea580c",
        textColor: "#ffffff",
        criterion: "Heavy furniture moves; plaster cracks; poorly built structures suffer damage.",
        action: "Perform Drop, Cover, and Hold immediately. Evacuate structure once shaking subsides.",
      },
      {
        label: "PEIS VIII - X",
        levelName: "Very Destructive to Completely Devastating",
        color: "#991b1b",
        textColor: "#ffffff",
        criterion: "Many well-built buildings damaged or collapse; ground fissures and landslides occur.",
        action: "Total community emergency mobilization. Proceed to safe open evacuation fields.",
      },
    ],
    keySteps: [
      "Differentiate Magnitude (energy released at epicenter) from Intensity (ground shaking felt at your location in Lipa).",
      "Report felt intensities to PHIVOLCS via the Earthquake Intensity Reporting portal.",
      "Inspect home foundations, load-bearing columns, and utility connections following strong shaking.",
    ],
  },

  // 5. DOST-PHIVOLCS: Drop, Cover, and Hold Official Visual (REAL FILE SOURCED FROM PHIVOLCS)
  {
    id: "phivolcs-duck-cover-hold",
    title: "DOST-PHIVOLCS Official Visual: What To Do During an Earthquake",
    subtitle: "Standard 'Drop, Cover, and Hold' Life-Saving Action Graphic",
    agency: "DOST-PHIVOLCS",
    agencyFull: "Philippine Institute of Volcanology and Seismology (DOST-PHIVOLCS)",
    agencyWebsiteName: "phivolcs.dost.gov.ph",
    agencyWebsiteUrl: "https://phivolcs.dost.gov.ph",
    directResourceUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    agencySealAlt: "DOST-PHIVOLCS Official Seal",
    category: "volcano-seismic",
    categoryLabel: "Volcano & Earthquakes",
    badgeColor: "bg-red-800",
    badgeTextColor: "text-red-100",
    hasOfficialDownloadable: true,
    downloadFileUrl: "/downloadables/PHIVOLCS-Drop-Cover-Hold-Official.jpg",
    downloadFileName: "DOST-PHIVOLCS-Drop-Cover-and-Hold-Official.jpg",
    officialSourceFileUrl: "https://www.phivolcs.dost.gov.ph/wp-content/uploads/vault/IEC-Materials/Sticker-DROP-COVER-AND-HOLD-2025.jpg",
    officialSourcePageUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    previewImageUrl: "/downloadables/PHIVOLCS-Drop-Cover-Hold-Official.jpg",
    fileSize: "502 KB",
    fileFormat: "Official JPEG Visual (DOST-PHIVOLCS)",
    dimensions: "Square High-Resolution Drill Graphic",
    officialSource: "DOST-PHIVOLCS Geologic Disaster Awareness and Preparedness Division (GDAPD)",
    officialSourceUrl: "https://phivolcs.dost.gov.ph",
    accreditation:
      "Directly sourced and downloaded from the official DOST-PHIVOLCS General Information Products repository (phivolcs.dost.gov.ph). Standard visual material for the National Simultaneous Earthquake Drill (NSED).",
    summary:
      "The nationwide life-saving standard: Drop to hands and knees, take Cover under a sturdy table, and Hold on firmly until the earthquake shaking stops completely.",
    tagalogSummary:
      "Opisyal na visual mula sa DOST-PHIVOLCS sa tamang kilos sa oras ng lindol: DROP (Dumapa), COVER (Magtago sa ilalim ng lamesa), at HOLD (Kumapit nang mahigpit).",
    keySteps: [
      "1. DROP: Drop onto your hands and knees immediately to protect yourself from falling.",
      "2. COVER: Shield your head, neck, and entire torso under a sturdy table or desk.",
      "3. HOLD ON: Grip your shelter firmly and be prepared to move along with it until shaking ceases.",
      "NEVER run outside or use elevators while the ground is actively shaking.",
      "AFTER SHAKING: Evacuate calmly to designated open assembly areas away from high power poles and glass facades.",
    ],
  },

  // 6. DOST-PHIVOLCS: Volcano Hazards Poster (REAL FILE SOURCED FROM PHIVOLCS)
  {
    id: "phivolcs-volcano-hazards",
    title: "DOST-PHIVOLCS Poster: Bulkan at mga Panganib Nito",
    subtitle: "Official Volcanic Hazards Poster: Base Surges, Ashfall, Lava, PDC, and Lahar",
    agency: "DOST-PHIVOLCS",
    agencyFull: "Philippine Institute of Volcanology and Seismology (DOST-PHIVOLCS)",
    agencyWebsiteName: "phivolcs.dost.gov.ph",
    agencyWebsiteUrl: "https://phivolcs.dost.gov.ph",
    directResourceUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    agencySealAlt: "DOST-PHIVOLCS Official Seal",
    category: "volcano-seismic",
    categoryLabel: "Volcano & Earthquakes",
    badgeColor: "bg-red-800",
    badgeTextColor: "text-red-100",
    hasOfficialDownloadable: true,
    downloadFileUrl: "/downloadables/Poster-Bulkan-at-mga-Panganib-nito-FINAL-7Aug2023.pdf",
    downloadFileName: "DOST-PHIVOLCS-Poster-Bulkan-at-mga-Panganib-Nito.pdf",
    officialSourceFileUrl: "https://www.phivolcs.dost.gov.ph/wp-content/uploads/vault/IEC-Materials/Poster-Bulkan-at-mga-Panganib-nito-FINAL-7Aug2023.pdf",
    officialSourcePageUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    fileSize: "35.5 MB",
    fileFormat: "Official Print-Ready PDF Poster (DOST-PHIVOLCS)",
    dimensions: "Full-Size High-Resolution Print Poster",
    officialSource: "DOST-PHIVOLCS Volcano Monitoring and Eruption Prediction Division (VMEPD)",
    officialSourceUrl: "https://phivolcs.dost.gov.ph",
    accreditation:
      "Directly sourced and downloaded from the official DOST-PHIVOLCS General Information Products repository (phivolcs.dost.gov.ph). Published by the Volcano Monitoring and Eruption Prediction Division.",
    summary:
      "Comprehensive official poster explaining all primary and secondary volcanic hazards including Pyroclastic Density Currents (PDC), ballistic projectiles, ashfall tephra, volcanic gas, and tsunami.",
    tagalogSummary:
      "Opisyal na komprehensibong poster mula sa DOST-PHIVOLCS na nagpapaliwanag sa iba't ibang panganib ng bulkan tulad ng base surge, abo, lahar, at nakalalasong gas.",
    keySteps: [
      "Learn the distinctive characteristics of volcanic hazards: Ashfall travels with prevailing winds, while Base Surges travel horizontally at extreme speed.",
      "Recognize the Taal Volcano Permanent Danger Zone (PDZ) encompassing the entire Volcano Island.",
      "Keep respiratory protective gear (N95 respirators) readily accessible in all Lipa City households.",
    ],
  },

  // 7. DOST-PHIVOLCS: Taal Volcano Educational Comics (REAL FILE SOURCED FROM PHIVOLCS)
  {
    id: "phivolcs-taal-comics",
    title: "DOST-PHIVOLCS Comics: Ang Hamon ng Bulkan (Bulkang Taal)",
    subtitle: "Official Illustrated Educational Booklet on Taal Volcano Eruption Preparedness",
    agency: "DOST-PHIVOLCS",
    agencyFull: "Philippine Institute of Volcanology and Seismology (DOST-PHIVOLCS)",
    agencyWebsiteName: "phivolcs.dost.gov.ph",
    agencyWebsiteUrl: "https://phivolcs.dost.gov.ph",
    directResourceUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    agencySealAlt: "DOST-PHIVOLCS Official Seal",
    category: "volcano-seismic",
    categoryLabel: "Volcano & Earthquakes",
    badgeColor: "bg-red-800",
    badgeTextColor: "text-red-100",
    hasOfficialDownloadable: true,
    downloadFileUrl: "/downloadables/Comics-AngHamonNgBulkan-TaalVolcano1965Eruption-Final2024-min.pdf",
    downloadFileName: "DOST-PHIVOLCS-Comics-Taal-Volcano-Preparedness.pdf",
    officialSourceFileUrl: "https://www.phivolcs.dost.gov.ph/wp-content/uploads/vault/IEC-Materials/Comics-AngHamonNgBulkan-TaalVolcano1965Eruption-Final2024-min.pdf",
    officialSourcePageUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    fileSize: "6.1 MB",
    fileFormat: "Official Illustrated Educational PDF Booklet",
    dimensions: "Multi-Page Illustrated Comic Booklet",
    officialSource: "DOST-PHIVOLCS Taal Volcano Observatory & GDAPD",
    officialSourceUrl: "https://phivolcs.dost.gov.ph",
    accreditation:
      "Directly sourced and downloaded from the official DOST-PHIVOLCS General Information Products repository (phivolcs.dost.gov.ph). Specially developed for community and school disaster preparedness in the Taal Lake region.",
    summary:
      "Engaging and highly informative educational comic recounting historical Taal eruptions and providing actionable family preparedness guidelines for communities in Batangas province.",
    tagalogSummary:
      "Opisyal na komiks mula sa DOST-PHIVOLCS tungkol sa kasaysayan ng pagputok ng Bulkang Taal at mahahalagang aral sa paglikas at paghahanda ng pamilya.",
    keySteps: [
      "Ideal for community education in Lipa City public schools and barangay halls.",
      "Illustrates historical eruption behavior, precursory signs, and safe evacuation corridors.",
      "Teaches children and youth how to protect themselves from ashfall and volcanic gases.",
    ],
  },

  // 8. DOST-PHIVOLCS: 72-Hour Emergency Go Bag Infographic (REAL FILE SOURCED FROM PHIVOLCS)
  {
    id: "phivolcs-gobag-sticker",
    title: "DOST-PHIVOLCS Official Visual: Emergency Go Bag Checklist",
    subtitle: "Official Checklist for Household Survival Items Following Seismic & Volcanic Emergencies",
    agency: "DOST-PHIVOLCS",
    agencyFull: "Philippine Institute of Volcanology and Seismology (DOST-PHIVOLCS)",
    agencyWebsiteName: "phivolcs.dost.gov.ph",
    agencyWebsiteUrl: "https://phivolcs.dost.gov.ph",
    directResourceUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    agencySealAlt: "DOST-PHIVOLCS Official Seal",
    category: "emergency-kit",
    categoryLabel: "Emergency Kit & Evacuation",
    badgeColor: "bg-red-800",
    badgeTextColor: "text-red-100",
    hasOfficialDownloadable: true,
    downloadFileUrl: "/downloadables/PHIVOLCS-Go-Bag-Official-Infographic.png",
    downloadFileName: "DOST-PHIVOLCS-Go-Bag-Official-Infographic.png",
    officialSourceFileUrl: "https://www.phivolcs.dost.gov.ph/wp-content/uploads/vault/IEC-Materials/Sticker-GO-BAG_die-cut-2025.png",
    officialSourcePageUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    previewImageUrl: "/downloadables/PHIVOLCS-Go-Bag-Official-Infographic.png",
    fileSize: "550 KB",
    fileFormat: "Official PNG Graphic (DOST-PHIVOLCS)",
    dimensions: "High-Resolution Die-Cut Visual",
    officialSource: "DOST-PHIVOLCS Geologic Disaster Awareness and Preparedness Division (GDAPD)",
    officialSourceUrl: "https://phivolcs.dost.gov.ph",
    accreditation:
      "Directly sourced and downloaded from the official DOST-PHIVOLCS General Information Products repository (phivolcs.dost.gov.ph). Official survival kit standard for Philippine disaster readiness.",
    summary:
      "Visual guide outlining essential items every family must pack in their Emergency Go Bag (E-Balde) to survive for 72 hours without external power or running water.",
    tagalogSummary:
      "Opisyal na visual gabay mula sa DOST-PHIVOLCS sa mga dapat ilagay sa Emergency Go Bag: pagkain, tubig, flashlight, pito, gamot, at mahahalagang papeles.",
    checklistItems: [
      {
        category: "1. Tubig at Pagkain (Min. 3 Araw)",
        items: [
          "Inuming tubig (4 litro bawat tao kada araw).",
          "Pagkaing hindi madaling masira (canned goods, ready-to-eat meals, biskwit).",
          "Mano-manong pambukas ng lata (manual can opener) at kubyertos.",
        ],
      },
      {
        category: "2. Ilaw at Komunikasyon",
        items: [
          "LED Flashlight na may reserbang baterya.",
          "Transistor radio (AM/FM) na pinatatakbo ng baterya.",
          "Whistle / Pito para sa paghingi ng tulong.",
          "Power bank na puno ang karga para sa cellphone.",
        ],
      },
      {
        category: "3. First Aid at Kalusugan",
        items: [
          "First Aid Kit (band-aid, gasa, betadine, gunting).",
          "Maintenance na gamot para sa 7 araw (altapresyon, diabetes, hika).",
          "N95 face masks para sa ashfall at alikabok.",
          "Alkohol o sanitizing wipes.",
        ],
      },
      {
        category: "4. Dokumento at Salapi",
        items: [
          "Mahahalagang dokumento na nakalagay sa waterproof ziplock.",
          "Barya at perang papel sa maliliit na halaga.",
          "Listahan ng emergency contact numbers ng Lipa Rescue (0915-463-5005).",
        ],
      },
    ],
  },

  // 9. DOST-PHIVOLCS: House Earthquake Readiness Checklist Flyer (REAL FILE SOURCED FROM PHIVOLCS)
  {
    id: "phivolcs-bahay-matibay",
    title: "DOST-PHIVOLCS Flyer: Bahay, Bahay Ginawa ka bang Matibay?",
    subtitle: "Official 12-Point Earthquake Safety Self-Check for Concrete Hollow Block (CHB) Houses",
    agency: "DOST-PHIVOLCS",
    agencyFull: "Philippine Institute of Volcanology and Seismology (DOST-PHIVOLCS)",
    agencyWebsiteName: "phivolcs.dost.gov.ph",
    agencyWebsiteUrl: "https://phivolcs.dost.gov.ph",
    directResourceUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    agencySealAlt: "DOST-PHIVOLCS Official Seal",
    category: "volcano-seismic",
    categoryLabel: "Volcano & Earthquakes",
    badgeColor: "bg-red-800",
    badgeTextColor: "text-red-100",
    hasOfficialDownloadable: true,
    downloadFileUrl: "/downloadables/PHIVOLCS-Flyer-Bahay-Matibay-Checklist.pdf",
    downloadFileName: "DOST-PHIVOLCS-Flyer-Bahay-Matibay-Checklist.pdf",
    officialSourceFileUrl: "https://www.phivolcs.dost.gov.ph/wp-content/uploads/vault/Observers/Flyer-Bahay-Bahay-Ginawa-Bang-Matibay-Dec2022.pdf",
    officialSourcePageUrl: "https://www.phivolcs.dost.gov.ph/index.php/general-information-products",
    fileSize: "6.5 MB",
    fileFormat: "Official PDF Flyer (DOST-PHIVOLCS)",
    dimensions: "Printable 12-Point Checklist Brochure",
    officialSource: "DOST-PHIVOLCS & JICA Earthquake Disaster Mitigation Study",
    officialSourceUrl: "https://phivolcs.dost.gov.ph",
    accreditation:
      "Directly sourced and downloaded from the official DOST-PHIVOLCS General Information Products repository (phivolcs.dost.gov.ph). Standard tool for homeowners to evaluate building vulnerability against seismic shock.",
    summary:
      "A practical 12-question evaluation checklist enabling Lipa homeowners to assess whether their residential building was properly designed and constructed to withstand major earthquakes.",
    tagalogSummary:
      "Opisyal na 12-puntong pagsusuri mula sa DOST-PHIVOLCS upang malaman kung matibay at ligtas sa lindol ang inyong tahanan.",
    keySteps: [
      "Evaluate if your house was built after the 1992 National Building Code structural updates.",
      "Inspect concrete hollow blocks (CHB): Must have vertical and horizontal steel reinforcing bars (rebar).",
      "Check for unreinforced second-story extensions that add excessive top-heavy load.",
    ],
  },

  // 10. DOST-PHIVOLCS & IVHHN: Ashfall Health Guidelines (REAL FILE SOURCED FROM PHIVOLCS PORTAL)
  {
    id: "phivolcs-ashfall-health",
    title: "IVHHN & DOST-PHIVOLCS: Gabay sa Kalusugan Laban sa Ashfall",
    subtitle: "Official Tagalog Health Advisory on Respiratory, Eye, and Skin Protection During Ashfall",
    agency: "DOST-PHIVOLCS",
    agencyFull: "Philippine Institute of Volcanology and Seismology & International Volcanic Health Hazard Network",
    agencyWebsiteName: "phivolcs.dost.gov.ph",
    agencyWebsiteUrl: "https://phivolcs.dost.gov.ph",
    directResourceUrl: "https://www.phivolcs.dost.gov.ph/index.php/volcano-hazard/volcano-information-materials",
    agencySealAlt: "DOST-PHIVOLCS Official Seal",
    category: "volcano-seismic",
    categoryLabel: "Volcano & Earthquakes",
    badgeColor: "bg-red-800",
    badgeTextColor: "text-red-100",
    hasOfficialDownloadable: true,
    downloadFileUrl: "/downloadables/Leaflet_Filipino.pdf",
    downloadFileName: "IVHHN-PHIVOLCS-Gabay-Kalusugan-Ashfall-Filipino.pdf",
    officialSourceFileUrl: "https://www.ivhhn.org/uploads/Leaflet_Filipino.pdf",
    officialSourcePageUrl: "https://www.phivolcs.dost.gov.ph/index.php/volcano-hazard/volcano-information-materials",
    fileSize: "616 KB",
    fileFormat: "Official PDF Leaflet (Tagalog / Filipino)",
    dimensions: "Printable 3-Fold Health Leaflet",
    officialSource: "IVHHN & DOST-PHIVOLCS Volcano Information Materials Section",
    officialSourceUrl: "https://phivolcs.dost.gov.ph",
    accreditation:
      "Officially endorsed and linked directly on the DOST-PHIVOLCS Volcano Information Materials repository (phivolcs.dost.gov.ph/index.php/volcano-hazard/volcano-information-materials). International standard for volcanic ash health protection.",
    summary:
      "Official Tagalog leaflet providing medical and practical guidance on symptoms caused by fine volcanic ash inhalation, sulfur dioxide irritations, and safe clean-up procedures.",
    tagalogSummary:
      "Opisyal na polyeto sa wikang Filipino mula sa IVHHN at DOST-PHIVOLCS ukol sa pangangalaga ng baga, mata, at kalusugan sa panahon ng pag-ulan ng abo ng Bulkang Taal.",
    keySteps: [
      "Wear certified N95 particulate respirators; surgical masks provide poor seal against fine tephra.",
      "Do NOT wear contact lenses; ash particles cause severe corneal abrasions.",
      "Dampen ash lightly with water mist before sweeping roofs to prevent re-suspending particles into breathing air.",
    ],
  },

  // 11. DOST-PAGASA: Extreme Heat Index Scale (NO DOWNLOADABLE INFOGRAPHIC ON WEBSITE - BULLETIN ONLY)
  {
    id: "pagasa-heat-index",
    title: "PAGASA Extreme Heat Index Classification & Safety",
    subtitle: "Public Health Warning Thresholds for Apparent Temperature & Heat Stress",
    agency: "DOST-PAGASA",
    agencyFull: "Philippine Atmospheric, Geophysical and Astronomical Services Administration (DOST-PAGASA)",
    agencyWebsiteName: "bagong.pagasa.dost.gov.ph",
    agencyWebsiteUrl: "https://bagong.pagasa.dost.gov.ph",
    directResourceUrl: "https://bagong.pagasa.dost.gov.ph/climate/climate-heat-index",
    agencySealAlt: "DOST-PAGASA Official Seal",
    category: "weather",
    categoryLabel: "Weather & Typhoons",
    badgeColor: "bg-blue-800",
    badgeTextColor: "text-blue-100",
    hasOfficialDownloadable: false, // DOST-PAGASA maintains this as a dynamic operational table / web bulletin, NOT a downloadable infographic
    missingDownloadReason:
      "DOST-PAGASA does not provide a downloadable infographic poster for the Heat Index. It is published exclusively as an operational climatological table and daily updated advisory bulletin on their website.",
    fileFormat: "Official Live Web Bulletin & Dynamic Advisory",
    dimensions: "Interactive Online Table",
    officialSource: "DOST-PAGASA Climatology & Agrometeorology Division (CAD)",
    officialSourceUrl: "https://bagong.pagasa.dost.gov.ph",
    accreditation:
      "Directly sourced and accredited from the official DOST-PAGASA website (bagong.pagasa.dost.gov.ph). Published as an operational climatological metric and daily health advisory.",
    summary:
      "Operational guidelines explaining human discomfort and medical risk caused by combining high air temperature and relative humidity during the dry hot season in Lipa City.",
    tagalogSummary:
      "Opisyal na batayan mula sa DOST-PAGASA ukol sa Heat Index at antas ng init ng panahon upang maiwasan ang heat exhaustion at heat stroke.",
    levels: [
      {
        label: "CAUTION (27°C – 32°C)",
        levelName: "Ingat",
        color: "#eab308",
        textColor: "#000000",
        criterion: "Fatigue is possible with prolonged exposure and activity.",
        action: "Drink plenty of water and schedule heavy outdoor work during cooler hours.",
      },
      {
        label: "EXTREME CAUTION (33°C – 41°C)",
        levelName: "Labis na Pag-iingat",
        color: "#f97316",
        textColor: "#ffffff",
        criterion: "Heat cramps and heat exhaustion are possible. Continued activity could lead to heat stroke.",
        action: "Take frequent hydration breaks in shaded or air-conditioned environments.",
      },
      {
        label: "DANGER (42°C – 51°C)",
        levelName: "Panganib",
        color: "#ef4444",
        textColor: "#ffffff",
        criterion: "Heat cramps and heat exhaustion are likely; heat stroke is probable with continued exposure.",
        action: "Limit outdoor exposure between 10:00 AM and 4:00 PM. Wear loose, light-colored clothing.",
      },
      {
        label: "EXTREME DANGER (≥ 52°C)",
        levelName: "Matinding Panganib",
        color: "#7f1d1d",
        textColor: "#ffffff",
        criterion: "Heat stroke is imminent with brief outdoor activity.",
        action: "Avoid unnecessary outdoor exertion. Immediately cool anyone showing signs of confusion or dizziness.",
      },
    ],
    keySteps: [
      "Drink at least 2 to 3 liters of water daily, even if you do not feel thirsty.",
      "Avoid coffee, alcoholic beverages, and high-sugar drinks as they promote dehydration.",
      "Recognize heat stroke warning signs: lack of sweat despite extreme heat, confusion, rapid pulse, and fainting.",
      "Call Lipa Rescue (0915-463-5005) immediately if someone collapses from heat stroke.",
    ],
  },

  // 12. DOH & Lipa CDRRMO: Floodwater Health Safety (CLINICAL PROTOCOL & ADVISORY ONLY)
  {
    id: "doh-leptospirosis-flood-safety",
    title: "Floodwater Health Hazards & Leptospirosis Prevention Protocol",
    subtitle: "Public Health Safety Guidelines for Wading, Inundations & Water Disinfection",
    agency: "DOH & LCDRRMO",
    agencyFull: "Department of Health (DOH) & Lipa City Health Office",
    agencyWebsiteName: "doh.gov.ph",
    agencyWebsiteUrl: "https://doh.gov.ph",
    directResourceUrl: "https://doh.gov.ph",
    agencySealAlt: "DOH & Lipa City Seals",
    category: "health-fire",
    categoryLabel: "Health & Fire Safety",
    badgeColor: "bg-emerald-800",
    badgeTextColor: "text-emerald-100",
    hasOfficialDownloadable: false, // DOH issues clinical guidelines and advisories rather than a standalone image file on weather/seismic websites
    missingDownloadReason:
      "DOH issues leptospirosis management protocols and public health warnings through administrative circulars and health press releases rather than a downloadable infographic poster on PAGASA or PHIVOLCS portals.",
    fileFormat: "Official Public Health Clinical Protocol",
    dimensions: "Clinical Advisory Document",
    officialSource: "Department of Health (DOH) Health Emergency Management Bureau (HEMB)",
    officialSourceUrl: "https://doh.gov.ph",
    accreditation:
      "Sourced and accredited from the official Department of Health (DOH) website (doh.gov.ph) and Lipa City Health Office (CHO).",
    summary:
      "Crucial health protocols for protecting family members against deadly bacterial infections (Leptospirosis), skin lesions, and waterborne illnesses during monsoon floods.",
    tagalogSummary:
      "Opisyal na payo mula sa DOH sa pag-iingat sa baha laban sa leptospirosis: huwag lumusong kung may sugat, magsuot ng bota, at kumonsulta agad para sa prophylaxis.",
    keySteps: [
      "NEVER WADE IN FLOODWATER: Leptospirosis bacteria excreted by rats and animals penetrates open skin wounds and mucous membranes.",
      "WEAR PROTECTIVE BOOTS: If crossing floodwater is unavoidable, wear high rubber boots and wash immediately with soap and water.",
      "PROPHYLAXIS: Anyone who wades in floodwaters—especially with skin abrasions—must consult a doctor or barangay health center within 24 to 48 hours for Doxycycline prophylaxis.",
      "SAFE DRINKING WATER: Boil tap water vigorously for at least 2 minutes if water supply lines were submerged or contaminated.",
      "WATCH FOR SYMPTOMS: High fever, muscle aches (especially calves), red eyes, and dark urine appearing 7 to 14 days after flood exposure requires immediate hospital admission.",
    ],
  },

  // 13. BFP & Lipa CDRRMO: Community Fire Prevention (OPERATIONAL GUIDELINE ONLY)
  {
    id: "bfp-fire-prevention",
    title: "Community Fire Prevention & Safe Evacuation Standards",
    subtitle: "Exit Drills in the Home (EDITH) & Electrical Fire Prevention Guide",
    agency: "BFP & LCDRRMO",
    agencyFull: "Bureau of Fire Protection (BFP Lipa City) & Lipa CDRRMO",
    agencyWebsiteName: "bfp.gov.ph",
    agencyWebsiteUrl: "https://bfp.gov.ph",
    directResourceUrl: "https://bfp.gov.ph",
    agencySealAlt: "BFP Official Seal",
    category: "health-fire",
    categoryLabel: "Health & Fire Safety",
    badgeColor: "bg-orange-800",
    badgeTextColor: "text-orange-100",
    hasOfficialDownloadable: false, // Standard operational guidelines
    missingDownloadReason:
      "Bureau of Fire Protection fire safety codes and EDITH guidelines are published as operational directives and regulatory manuals, not as an infographic download on meteorological/seismological portals.",
    fileFormat: "Operational Fire Safety Directive",
    dimensions: "Station Safety Standard",
    officialSource: "Bureau of Fire Protection (BFP) Lipa City Fire Station",
    officialSourceUrl: "https://bfp.gov.ph",
    accreditation:
      "Directly sourced and accredited from the official Bureau of Fire Protection (BFP) website (bfp.gov.ph) and Lipa City Fire Station.",
    summary:
      "Essential fire prevention rules for homes and commercial establishments in Lipa City, including home exit drill protocols and emergency response steps.",
    tagalogSummary:
      "Opisyal na gabay mula sa BFP sa pag-iwas sa sunog, tamang pag-alis sa nasusunog na bahay, at emergency hotlines ng BFP Lipa City.",
    keySteps: [
      "NO OCTOPUS EXTENSIONS: Do not overload extension cords with heavy appliances like air conditioners or refrigerators.",
      "LPG CYLINDER INSPECTION: Regularly check LPG hoses and regulators with soapy water for bubble leaks; always turn off regulators when away.",
      "STOP, DROP, AND ROLL: If clothing catches fire, do not run; drop to the floor and roll back and forth to smother flames.",
      "CRAWL LOW UNDER SMOKE: Smoke rises; breathable air remains close to the floor. Cover nose with a damp cloth while exiting.",
      "NEVER RE-ENTER A BURNING STRUCTURE: Once outside at the family assembly point, stay outside and call BFP Lipa: (043) 757-4618 / 0927-575-8065.",
    ],
  },
];
