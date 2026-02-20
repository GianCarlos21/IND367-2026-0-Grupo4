import React from 'react';

export const ZapataConcretoIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`bg-amber-50/50 flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ground Pit */}
      <path d="M10 20 H90 V85 H10 Z" fill="#D97706" fillOpacity="0.1" />
      <path d="M10 20 V85 H90 V20" stroke="#92400E" strokeWidth="1.5" strokeLinejoin="round" />
      
      {/* Concrete (Vaciado) */}
      <rect x="20" y="55" width="60" height="25" rx="2" fill="#94A3B8" />
      <path d="M20 55 H80 V80 H20 Z" fill="#CBD5E1" />
      <rect x="20" y="55" width="60" height="25" rx="2" stroke="#475569" strokeWidth="1.5" />
      
      {/* Rebar (Acero visible) */}
      <path d="M40 40 V65 M50 40 V65 M60 40 V65" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M35 50 H65 M35 58 H65" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
      
      {/* Texture/Soil */}
      <path d="M15 30 H25 M75 35 H85 M12 70 H18" stroke="#92400E" strokeWidth="0.5" strokeLinecap="round" />
    </svg>
  </div>
);

export const ColumnaArmadoIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <div className={`bg-blue-50/50 flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base */}
      <rect x="20" y="80" width="60" height="10" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
      
      {/* Vertical Rebars (Longitudinales) */}
      <path d="M35 10 V80 M45 10 V80 M55 10 V80 M65 10 V80" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      
      {/* Stirrups (Estribos) */}
      <rect x="32" y="20" width="36" height="4" rx="1" stroke="#475569" strokeWidth="1" />
      <rect x="32" y="35" width="36" height="4" rx="1" stroke="#475569" strokeWidth="1" />
      <rect x="32" y="50" width="36" height="4" rx="1" stroke="#475569" strokeWidth="1" />
      <rect x="32" y="65" width="36" height="4" rx="1" stroke="#475569" strokeWidth="1" />
      
      {/* Detail lines on rebars */}
      <path d="M35 15 L37 17 M35 25 L37 27 M35 35 L37 37" stroke="#94A3B8" strokeWidth="0.5" />
      <path d="M65 15 L67 17 M65 25 L67 27 M65 35 L67 37" stroke="#94A3B8" strokeWidth="0.5" />
    </svg>
  </div>
);
