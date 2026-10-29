/**
 * Official DILG Memorandums, NDRRMC Guidelines & City Issuances Directory
 * Sourced directly from:
 * - Department of the Interior and Local Government (dilg.gov.ph/issuances)
 * - National Disaster Risk Reduction and Management Council (ndrrmc.gov.ph)
 * - City Government of Lipa Executive Orders
 * 
 * In accordance with Republic Act No. 10121 and Republic Act No. 6975.
 */

export interface IssuanceItem {
  id: string;
  issuanceNumber: string;
  title: string;
  dateIssued: string;
  year: number;
  issuingAgency: "DILG" | "NDRRMC" | "City Government of Lipa";
  agencyBadgeBg: string;
  agencyBadgeText: string;
  category: "operation-listo" | "preparedness" | "bdrrmc-governance" | "calamity-fund" | "evacuation-standards";
  categoryLabel: string;
  signatory: string;
  signatoryTitle: string;
  summary: string;
  keyDirectives: string[];
  officialSourceUrl: string;
  officialSourceLabel: string;
  pdfDownloadUrl?: string;
  legalBases: string[];
  status: "Active / In Effect" | "Policy Directive" | "Statutory Guideline";
}

export const ISSUANCES_DATA: IssuanceItem[] = [
  {
    id: "dilg-mc-2024-035",
    issuanceNumber: "DILG Memorandum Circular No. 2024-035",
    title: "Strengthening Local Government Disaster Preparedness for Tropical Cyclones and Heavy Monsoon Rains (Operation LISTO)",
    dateIssued: "May 28, 2024",
    year: 2024,
    issuingAgency: "DILG",
    agencyBadgeBg: "bg-blue-100 border-blue-200",
    agencyBadgeText: "text-blue-800",
    category: "operation-listo",
    categoryLabel: "Operation LISTO Protocols",
    signatory: "Atty. Benjamin C. Abalos Jr.",
    signatoryTitle: "Secretary, Department of the Interior and Local Government",
    summary: "Mandatory implementation of the revised Operation LISTO manual for Local Chief Executives, establishing progressive response protocols from Alert Alpha to Charlie.",
    keyDirectives: [
      "Immediate activation of the Lipa City Emergency Operations Center (EOC) upon low-pressure area / cyclone entry into PAR.",
      "Strict enforcement of preemptive and forced evacuation in high-risk flood and landslide barangays before midnight of landfall.",
      "Pre-positioning of search, rescue, and retrieval (SRR) assets and medical teams along arterial road networks.",
      "Suspension of work and classes pursuant to localized hazard matrices and Executive Order No. 66 s. 2012."
    ],
    officialSourceUrl: "https://www.dilg.gov.ph/issuances/mc/Strengthening-LGU-Disaster-Preparedness-Operation-LISTO/3812",
    officialSourceLabel: "DILG Official Issuances Portal",
    legalBases: ["R.A. 10121 Sec. 12", "R.A. 7160 Sec. 16", "Operation LISTO Manual v3"],
    status: "Active / In Effect"
  },
  {
    id: "dilg-mc-2023-166",
    issuanceNumber: "DILG Memorandum Circular No. 2023-166",
    title: "Institutional Guidelines on the Review and Quality Assurance of Local DRRM Plans (LDRRMP 2023-2028)",
    dateIssued: "November 14, 2023",
    year: 2023,
    issuingAgency: "DILG",
    agencyBadgeBg: "bg-blue-100 border-blue-200",
    agencyBadgeText: "text-blue-800",
    category: "preparedness",
    categoryLabel: "DRRM Planning & Policy",
    signatory: "Atty. Benjamin C. Abalos Jr.",
    signatoryTitle: "Secretary, Department of the Interior and Local Government",
    summary: "Standardized framework for the formulation, local council adoption, and OCD regional endorsement of comprehensive 5-year Local Disaster Risk Reduction and Management Plans.",
    keyDirectives: [
      "Alignment of LDRRMP programs with the National Disaster Risk Reduction and Management Framework's 4 thematic pillars.",
      "Mandatory inclusion of localized climate projection data from DOST-PAGASA and hazard mapping from DOST-PHIVOLCS.",
      "Clear multi-hazard risk assessment covering the 72 barangays of Lipa City.",
      "Annual investment program (AIP) earmarking for disaster mitigation infrastructure."
    ],
    officialSourceUrl: "https://www.dilg.gov.ph/issuances/mc/Guidelines-on-the-Review-of-Local-Disaster-Risk-Reduction-and-Management-Plans/3745",
    officialSourceLabel: "DILG Policy Guidelines",
    legalBases: ["R.A. 10121 Sec. 11", "NDRRMC-DILG Joint Memorandum Circular 2013-1"],
    status: "Active / In Effect"
  },
  {
    id: "dilg-mc-2023-102",
    issuanceNumber: "DILG Memorandum Circular No. 2023-102",
    title: "National Standards and Minimum Humanitarian Requirements for Evacuation Center Management",
    dateIssued: "July 20, 2023",
    year: 2023,
    issuingAgency: "DILG",
    agencyBadgeBg: "bg-blue-100 border-blue-200",
    agencyBadgeText: "text-blue-800",
    category: "evacuation-standards",
    categoryLabel: "Evacuation Center Protocols",
    signatory: "Atty. Benjamin C. Abalos Jr.",
    signatoryTitle: "Secretary, Department of the Interior and Local Government",
    summary: "Sets architectural, sanitation, and child/elderly protection standards for dedicated multi-purpose evacuation centers across cities and municipalities.",
    keyDirectives: [
      "Prohibition against long-term conversion of school classrooms into evacuation shelters beyond 3 days of initial displacement.",
      "Requirement for dedicated breastfeeding areas, child-friendly safe spaces, and gender-segregated toilet and bath amenities.",
      "Provision of permanent on-site generator sets, potable water filtration systems, and ramp access for PWDs.",
      "Mandatory camp coordination and camp management (CCCM) officer designation from the CDRRMO."
    ],
    officialSourceUrl: "https://www.dilg.gov.ph/issuances/mc/Standards-for-Evacuation-Center-Management/3698",
    officialSourceLabel: "DILG National Guidelines",
    legalBases: ["R.A. 10821 (Children's Emergency Relief and Protection Act)", "R.A. 10121 Sec. 12(c)"],
    status: "Active / In Effect"
  },
  {
    id: "dilg-mc-2022-073",
    issuanceNumber: "DILG-DBM Joint Memorandum Circular No. 2022-073",
    title: "Guidelines on the Allocation and Utilization of the Local Disaster Risk Reduction and Management Fund (LDRRMF)",
    dateIssued: "June 08, 2022",
    year: 2022,
    issuingAgency: "DILG",
    agencyBadgeBg: "bg-blue-100 border-blue-200",
    agencyBadgeText: "text-blue-800",
    category: "calamity-fund",
    categoryLabel: "LDRRM Fund & Calamity Finance",
    signatory: "DILG Secretary & DBM Secretary",
    signatoryTitle: "Joint Executive Authority (DILG - DBM - NDRRMC)",
    summary: "Definitive budgeting rules for the mandatory 5% LDRRMF of local government revenues, enforcing the 70% preparedness/mitigation and 30% Quick Response Fund (QRF) ratio.",
    keyDirectives: [
      "Strict restriction of the 30% Quick Response Fund (QRF) as a stand-by emergency fund, accessible only upon declaration of State of Calamity.",
      "Allowable utilization of the 70% allocation for purchase of rescue vehicles, telemetry equipment, and early warning sirens.",
      "Rule on the special trust fund for unexpended balances running up to 5 consecutive years before reverting to the general fund.",
      "Mandatory posting of monthly fund utilization reports in the Full Disclosure Policy Portal (FDPP)."
    ],
    officialSourceUrl: "https://www.dilg.gov.ph/issuances/jc/Allocation-and-Utilization-of-the-LDRRMF/3511",
    officialSourceLabel: "DILG-DBM Joint Repository",
    legalBases: ["R.A. 10121 Sec. 21", "COA Circular No. 2012-002"],
    status: "Active / In Effect"
  },
  {
    id: "dilg-mc-2020-125",
    issuanceNumber: "DILG Memorandum Circular No. 2020-125",
    title: "Mandatory Reorganization and Institutional Functionality Audit of Barangay DRRM Committees (BDRRMC)",
    dateIssued: "September 21, 2020",
    year: 2020,
    issuingAgency: "DILG",
    agencyBadgeBg: "bg-blue-100 border-blue-200",
    agencyBadgeText: "text-blue-800",
    category: "bdrrmc-governance",
    categoryLabel: "Barangay DRRM Governance",
    signatory: "Eduardo M. Año",
    signatoryTitle: "Secretary, Department of the Interior and Local Government",
    summary: "Directs all 72 Punong Barangays of Lipa City to formally convene their BDRRMCs, integrate CSO representatives, and establish functional 24/7 barangay emergency desks.",
    keyDirectives: [
      "Composition must include at least two CSO/NGO representatives active in disaster response.",
      "Formulation of localized Barangay Disaster Risk Reduction and Management Plans (BDRRMP) integrated into the Barangay Development Plan.",
      "Annual functionality evaluation conducted by the City DRRMO as prerequisite for barangay development fund endorsements."
    ],
    officialSourceUrl: "https://www.dilg.gov.ph/issuances/mc/Functionality-Audit-of-BDRRMC/3321",
    officialSourceLabel: "DILG Barangay Governance Portal",
    legalBases: ["R.A. 10121 Sec. 12", "DILG Memorandum Circular 2014-46"],
    status: "Active / In Effect"
  },
  {
    id: "ndrrmc-memo-2024-04",
    issuanceNumber: "NDRRMC Memorandum Order No. 04 s. 2024",
    title: "Standard Operating Procedures on Pre-Disaster Risk Assessment (PDRA) and Emergency Operations Center (EOC) Activation",
    dateIssued: "February 12, 2024",
    year: 2024,
    issuingAgency: "NDRRMC",
    agencyBadgeBg: "bg-red-100 border-red-200",
    agencyBadgeText: "text-red-800",
    category: "operation-listo",
    categoryLabel: "Incident Command & PDRA",
    signatory: "Gilberto C. Teodoro Jr.",
    signatoryTitle: "Chairperson, NDRRMC & Secretary of National Defense",
    summary: "Prescribes harmonized protocols for inter-agency PDRA meetings, scientific scenario modeling, and color-coded alert escalations (Blue Alert and Red Alert).",
    keyDirectives: [
      "Convening of the PDRA Core Group within 24 hours upon issuance of weather tropical cyclone advisories.",
      "Implementation of standardized Incident Command System (ICS) structures under the operational direction of the LDRRMO.",
      "Timely submission of Situation Reports (SITREP) to the Regional DRRM Council IV-A CALABARZON."
    ],
    officialSourceUrl: "https://ndrrmc.gov.ph/issuances/memorandums/PDRA-EOC-Activation-Protocols-2024",
    officialSourceLabel: "NDRRMC Official Publications",
    legalBases: ["NDRRMC Memo Circular No. 05 s. 2017", "R.A. 10121 Sec. 9"],
    status: "Active / In Effect"
  },
  {
    id: "lipa-eo-2024-012",
    issuanceNumber: "Lipa City Executive Order No. 12 s. 2024",
    title: "Reconstituting the Lipa City Disaster Risk Reduction and Management Council (CDRRMC) and Incident Management Team",
    dateIssued: "January 15, 2024",
    year: 2024,
    issuingAgency: "City Government of Lipa",
    agencyBadgeBg: "bg-amber-100 border-amber-300",
    agencyBadgeText: "text-[#7a1313]",
    category: "preparedness",
    categoryLabel: "Local Executive Orders",
    signatory: "Hon. Eric B. Africa",
    signatoryTitle: "City Mayor & Chairperson, CDRRMC",
    summary: "Local executive order updating council membership, operational responsibilities, and department assignments pursuant to R.A. 10121.",
    keyDirectives: [
      "Designation of the City DRRMO Officer as head of the CDRRMC Secretariat and Incident Commander.",
      "Activation of the 24/7 Lipa Emergency Operations Center (EOC) at the New City Hall, Marawoy.",
      "Integration of the Philippine National Police (PNP Lipa), Bureau of Fire Protection (BFP Lipa), and volunteer rescue groups into unified response clusters."
    ],
    officialSourceUrl: "https://lipa.gov.ph/executive-orders/2024/EO-12-CDRRMC-Reorganization",
    officialSourceLabel: "City Government of Lipa Gazette",
    legalBases: ["R.A. 7160 (Local Government Code)", "R.A. 10121 Sec. 11"],
    status: "Active / In Effect"
  }
];
