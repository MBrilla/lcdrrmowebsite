"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Download,
  Printer,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Globe,
  FileText,
  CheckCircle,
  Eye,
  X,
  Maximize2,
  AlertTriangle,
  FileDown
} from "lucide-react";
import { InfographicItem } from "@/lib/downloadablesData";

interface InfographicVisualProps {
  item: InfographicItem;
  showActions?: boolean;
}

export default function InfographicVisual({ item, showActions = true }: InfographicVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePrint = () => {
    if (!containerRef.current) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      window.print();
      return;
    }

    const contentHtml = containerRef.current.innerHTML;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${item.title} - Official ${item.agency} IEC Material</title>
          <style>
            @page { size: portrait; margin: 12mm; }
            body { font-family: system-ui, -apple-system, sans-serif; color: #111; margin: 0; padding: 20px; background: #fff; }
            .print-hide { display: none !important; }
            .header-banner { border-bottom: 2px solid #7a1313; padding-bottom: 12px; margin-bottom: 16px; }
            .accreditation { font-size: 11px; color: #555; border-top: 1px solid #ccc; padding-top: 10px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="header-banner">
            <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #7a1313;">
              Republic of the Philippines &bull; City Government of Lipa &bull; CDRRMO
            </div>
            <div style="font-size: 18px; font-weight: bold; margin: 4px 0;">
              ${item.title}
            </div>
            <div style="font-size: 11px; color: #666;">
              Official Source: ${item.agencyFull} &bull; Website: ${item.agencyWebsiteName}
            </div>
          </div>
          ${contentHtml}
          <div class="accreditation">
            <strong>Official Source &amp; Accreditation:</strong> ${item.accreditation}<br />
            <strong>Primary Agency Website:</strong> ${item.agencyWebsiteUrl} (${item.officialSource})
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-shadow">
        {/* Main Display Container */}
        <div ref={containerRef} className="p-5 sm:p-7 space-y-5">
          {/* Top Bar: Agency Badge, Category & Official Website Link */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded ${item.badgeColor} ${item.badgeTextColor}`}>
                {item.agency}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                &bull; {item.categoryLabel}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={item.agencyWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-2.5 py-0.5 rounded border border-blue-200 transition-colors inline-flex items-center gap-1"
                title={`Visit official ${item.agencyWebsiteName}`}
              >
                <Globe className="w-3 h-3 text-blue-600" />
                <span>{item.agencyWebsiteName}</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>

              {item.hasOfficialDownloadable ? (
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-700" />
                  <span>Real Agency Downloadable</span>
                </span>
              ) : (
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded flex items-center gap-1">
                  <FileText className="w-3 h-3 text-slate-500" />
                  <span>Official Live Protocol</span>
                </span>
              )}
            </div>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              {item.subtitle}
            </p>
          </div>

          {/* Tagalog Quick Summary Banner */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-3 rounded-r text-xs text-amber-900 leading-relaxed">
            <strong className="block text-[11px] uppercase font-bold text-amber-950 mb-0.5">
              Mabilisang Gabay (Tagalog / Filipino):
            </strong>
            {item.tagalogSummary}
          </div>

          {/* REAL IMAGE PREVIEW THUMBNAIL (For JPG / PNG official graphics) */}
          {item.previewImageUrl && (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-bold flex items-center gap-1.5 text-slate-800">
                  <Eye className="w-3.5 h-3.5 text-blue-600" />
                  <span>Official Agency Graphic Preview:</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className="text-blue-700 hover:text-blue-900 hover:underline flex items-center gap-1 font-semibold text-[11px] cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Enlarge Poster</span>
                </button>
              </div>

              <div
                onClick={() => setIsPreviewOpen(true)}
                className="relative h-56 sm:h-72 w-full bg-white rounded border border-slate-200 overflow-hidden cursor-pointer group flex items-center justify-center"
                title="Click to view full-resolution poster"
              >
                <Image
                  src={item.previewImageUrl}
                  alt={item.title}
                  fill
                  className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-200"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm flex items-center gap-1.5 backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Click to Zoom High-Res
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Dynamic Warning Matrix (If applicable) */}
          {item.levels && item.levels.length > 0 && (
            <div className="space-y-2.5 pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Standard Warning Levels &amp; Action Matrix:
              </div>
              <div className="space-y-2">
                {item.levels.map((lvl, idx) => (
                  <div
                    key={idx}
                    className="rounded border border-slate-200 p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors hover:border-slate-300"
                    style={{ borderLeftColor: lvl.color, borderLeftWidth: "6px" }}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded tracking-wide text-white uppercase"
                          style={{ backgroundColor: lvl.color }}
                        >
                          {lvl.label}
                        </span>
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {lvl.levelName}
                        </span>
                      </div>
                      <div className="text-xs text-slate-600">{lvl.criterion}</div>
                    </div>

                    <div className="shrink-0 w-full sm:w-auto sm:max-w-xs text-left sm:text-right bg-slate-50 sm:bg-transparent p-2 sm:p-0 rounded">
                      <span className="text-[10px] font-bold uppercase text-slate-500 block">Required Action:</span>
                      <span className="text-xs font-semibold text-slate-900 leading-tight">
                        {lvl.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Checklist items (For 72-Hour Go Bag) */}
          {item.checklistItems && item.checklistItems.length > 0 && (
            <div className="space-y-3 pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Essential Go Bag Items (DOST-PHIVOLCS Checklist):
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {item.checklistItems.map((chk, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded p-3 space-y-2">
                    <h4 className="text-xs font-bold text-[#7a1313] uppercase tracking-wide border-b border-slate-200 pb-1">
                      {chk.category}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {chk.items.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Standard Key Steps / Protective Guidance */}
          {item.keySteps && item.keySteps.length > 0 && !item.checklistItems && (
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Standard Community Protective Guidance:
              </div>
              <ul className="space-y-2">
                {item.keySteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50/70 p-2.5 rounded border border-slate-200">
                    <span className="w-5 h-5 rounded-full bg-[#7a1313] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* IF NO DOWNLOADABLE: Informational Notice */}
          {!item.hasOfficialDownloadable && item.missingDownloadReason && (
            <div className="bg-blue-50/80 border border-blue-200 rounded p-3 flex items-start gap-2.5 text-xs text-blue-900">
              <AlertTriangle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-blue-950 mb-0.5">Official Agency Publishing Note:</strong>
                <span>{item.missingDownloadReason}</span>
              </div>
            </div>
          )}

          {/* Official Accreditation & Direct Source Banner */}
          <div className="bg-slate-50 rounded border border-slate-200 p-3 space-y-1.5 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7a1313]" />
              <span>Official Government Source &amp; Accreditation</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              {item.accreditation}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] pt-1.5 text-slate-500 border-t border-slate-200">
              <span>
                <strong>Publisher:</strong> {item.officialSource}
              </span>
              <div className="flex items-center gap-2">
                <span>Official Portal:</span>
                <a
                  href={item.agencyWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7a1313] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>{item.agencyWebsiteName}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer: Real Download vs Live Advisory */}
        {showActions && (
          <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 flex flex-wrap items-center justify-between gap-2">
            <div className="text-[11px] text-slate-500 font-medium flex items-center gap-2 flex-wrap">
              <span>Format: <strong className="text-slate-700">{item.fileFormat}</strong></span>
              {item.fileSize && (
                <span className="bg-slate-200 text-slate-700 font-bold px-1.5 py-0.5 rounded text-[10px]">
                  {item.fileSize}
                </span>
              )}
              {item.dimensions && <span className="hidden sm:inline">&bull; {item.dimensions}</span>}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Direct Link to Agency Publications / Source Page */}
              {item.officialSourcePageUrl && (
                <a
                  href={item.officialSourcePageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-colors"
                  title="View on official agency publications repository"
                >
                  <Globe className="w-3 h-3 text-blue-600" />
                  <span className="hidden sm:inline">Agency Repository</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
              )}

              {/* Direct Link to the actual file hosted on the agency server */}
              {item.officialSourceFileUrl && (
                <a
                  href={item.officialSourceFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-colors"
                  title={`Open official file directly from ${item.agencyWebsiteName} server`}
                >
                  <FileDown className="w-3 h-3 text-emerald-600" />
                  <span className="hidden sm:inline">Official Server Link</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
              )}

              {/* Print Clean Guide */}
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                title="Print clean guideline sheet"
              >
                <Printer className="w-3 h-3 text-slate-500" />
                <span>Print Guide</span>
              </button>

              {/* DOWNLOAD BUTTON: RENDERED IF AND ONLY IF THE AGENCY OFFICIALLY PROVIDES SAID INFOGRAPHIC */}
              {item.hasOfficialDownloadable && item.downloadFileUrl ? (
                <a
                  href={item.downloadFileUrl}
                  download={item.downloadFileName || "official-infographic"}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded bg-[#7a1313] hover:bg-[#610f0f] text-white transition-colors cursor-pointer shadow-xs"
                  title={`Download official ${item.downloadFileName} sourced directly from ${item.agency}`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Real Infographic</span>
                </a>
              ) : (
                <a
                  href={item.directResourceUrl || item.agencyWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors"
                  title="View official live bulletin on agency portal"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                  <span>View Official Web Advisory</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* LIGHTBOX MODAL FOR HIGH-RES PREVIEW */}
      {isPreviewOpen && item.previewImageUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl max-w-4xl max-h-[92vh] w-full flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 bg-slate-50">
              <div className="min-w-0 pr-2">
                <h4 className="text-sm font-bold text-slate-900 truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 truncate">
                  Official Sourced Graphic &bull; {item.agency} ({item.agencyWebsiteName})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="p-1 rounded-full hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                title="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 min-h-[300px] max-h-[70vh] bg-slate-100 p-2 overflow-auto flex items-center justify-center">
              <div className="relative w-full h-[65vh]">
                <Image
                  src={item.previewImageUrl}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 90vw, 1000px"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-slate-50 border-t border-slate-200 text-xs">
              <span className="text-slate-500">
                Format: <strong>{item.fileFormat}</strong> {item.fileSize && `(${item.fileSize})`}
              </span>
              <div className="flex items-center gap-2">
                {item.officialSourceFileUrl && (
                  <a
                    href={item.officialSourceFileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-700 bg-white border border-slate-300 px-3 py-1.5 rounded hover:bg-slate-100 font-medium"
                  >
                    <span>Open on Agency Server</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {item.downloadFileUrl && (
                  <a
                    href={item.downloadFileUrl}
                    download={item.downloadFileName || "official-infographic"}
                    className="inline-flex items-center gap-1.5 bg-[#7a1313] hover:bg-[#610f0f] text-white px-3.5 py-1.5 rounded font-bold transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Real File</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
