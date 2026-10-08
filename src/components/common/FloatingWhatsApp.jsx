import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND } from '../../data/brand';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      aria-label="WhatsApp quick order"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-end flex-col gap-2 pointer-events-auto"
    >
      {/* Optional dismissible badge */}
      {showTooltip && (
        <div className="bg-[#142E20] text-[#FFFDF9] text-xs px-3.5 py-2 rounded-2xl shadow-xl border border-[#2B543D] flex items-center gap-2 max-w-[200px] animate-fade-in sm:opacity-90 hover:opacity-100 transition-opacity">
          <div className="flex-1">
            <span className="block font-semibold text-[11px] text-[#A8D3BC]">Fresh Daily Batch</span>
            <span className="text-[10px] text-[#D1E0D7]">Mogappair, Chennai</span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white p-0.5 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Dismiss hint"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main floating button: compact icon that expands to "ORDER NOW" on hover */}
      <a
        href={BRAND.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat and order on WhatsApp"
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20BA5A] text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:pr-5.5 active:scale-95"
      >
        {/* Pulsing online indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 fill-current text-white shrink-0 group-hover:rotate-6 transition-transform duration-200" />

        {/* Expandable text container on hover */}
        <span className="max-w-0 opacity-0 group-hover:max-w-48 group-hover:opacity-100 group-hover:ml-2.5 overflow-hidden transition-all duration-300 ease-out whitespace-nowrap text-xs sm:text-sm font-extrabold tracking-wider font-sans uppercase">
          ORDER NOW
        </span>
      </a>
    </aside>
  );
}
