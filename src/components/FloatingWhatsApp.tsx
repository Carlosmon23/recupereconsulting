"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on desktop */}
      <div className="hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-lg border border-white/10 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2" />
        <span>Fale com o especialista</span>
      </div>

      <a
        href={COMPANY_INFO.whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Abrir WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
        </span>
        <MessageCircle className="w-6 h-6 fill-white/20" />
      </a>
    </div>
  );
}

