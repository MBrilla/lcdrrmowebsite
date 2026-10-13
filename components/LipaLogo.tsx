import React from "react";
import Image from "next/image";

export default function LipaLogo({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src="/logopng.png"
        alt="Lipa City Disaster Risk Reduction and Management Office Seal"
        width={128}
        height={128}
        priority
        unoptimized
        className="w-full h-full object-contain drop-shadow-sm select-none"
      />
    </div>
  );
}
