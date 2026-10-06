import React from "react";

export default function LipaLogo({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Official styled seal badge for Lipa City & CDRRMO */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Outer Ring - Lipa Maroon */}
        <circle cx="100" cy="100" r="96" fill="#7a1313" stroke="#c68a18" strokeWidth="4" />
        
        {/* Inner Gold Ring with Rope/Dotted Pattern */}
        <circle cx="100" cy="100" r="86" fill="#560a0a" stroke="#fef3c7" strokeWidth="1.5" strokeDasharray="4 2" />
        
        {/* Inner Circle Base */}
        <circle cx="100" cy="100" r="70" fill="#ffffff" stroke="#c68a18" strokeWidth="2.5" />
        
        {/* Split shield background (Navy Blue & Maroon) */}
        <path d="M100 40 L145 60 V105 C145 130 100 155 100 155 C100 155 55 130 55 105 V60 Z" fill="#0e274a" />
        <path d="M100 40 L145 60 V105 C145 130 100 155 100 155 V40 Z" fill="#7a1313" />
        
        {/* Gold Shield Border */}
        <path
          d="M100 40 L145 60 V105 C145 130 100 155 100 155 C100 155 55 130 55 105 V60 Z"
          fill="none"
          stroke="#c68a18"
          strokeWidth="3"
        />

        {/* DRRM / Life-saving Star of Life & Cross Symbol in Gold & White */}
        {/* Vertical beam */}
        <rect x="94" y="65" width="12" height="60" rx="3" fill="#ffffff" />
        {/* Horizontal beam */}
        <rect x="70" y="89" width="60" height="12" rx="3" fill="#ffffff" />

        {/* Central Core Flame / Alert Beacon */}
        <circle cx="100" cy="95" r="13" fill="#c68a18" stroke="#ffffff" strokeWidth="2" />
        {/* Shield Heart / Faith Cross / Anchor miniature icon */}
        <path d="M100 87 L103 94 H108 L104 98 L106 104 L100 100 L94 104 L96 98 L92 94 H97 Z" fill="#ffffff" />

        {/* Life preserver / rescue ring accents */}
        <circle cx="100" cy="95" r="22" stroke="#ea580c" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />

        {/* Circular Text Path Simulation (Curved Top & Bottom) */}
        {/* Lipa City Seal Stars */}
        <circle cx="100" cy="18" r="3" fill="#fef3c7" />
        <circle cx="86" cy="20" r="2.5" fill="#fef3c7" />
        <circle cx="114" cy="20" r="2.5" fill="#fef3c7" />

        {/* Text around outer ring */}
        <text
          x="100"
          y="29"
          textAnchor="middle"
          fill="#fef3c7"
          fontSize="9"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
          letterSpacing="2.5"
        >
          LIPA CITY • BATANGAS
        </text>

        <text
          x="100"
          y="180"
          textAnchor="middle"
          fill="#fef3c7"
          fontSize="8.5"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
          letterSpacing="1.5"
        >
          CDRRMO • RESCUE
        </text>

        {/* Ribbon banner at bottom with "VIRTUD Y TRABAJO" */}
        <rect x="48" y="146" width="104" height="14" rx="3" fill="#c68a18" stroke="#560a0a" strokeWidth="1" />
        <text
          x="100"
          y="156.5"
          textAnchor="middle"
          fill="#560a0a"
          fontSize="7"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          letterSpacing="1"
        >
          VIRTUD Y TRABAJO
        </text>
      </svg>
    </div>
  );
}
