"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowUpRight, Menu, X, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#061427]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10 py-3.5"
          : "bg-[#061427]/80 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-electric flex items-center justify-center text-white font-bold shadow-md shadow-brand-500/30 group-hover:scale-105 transition-transform">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-white flex items-center gap-1.5">
                RECUPERE
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-300 px-1.5 py-0.5 rounded bg-white/10">
                  Consulting
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Revisão Tributária & Créditos
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#solucoes"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Soluções
            </Link>
            <Link
              href="#simulador"
              className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors group"
            >
              <span>Simulador</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-500/40 px-1.5 py-0.5 rounded-full group-hover:bg-brand-500 group-hover:text-white transition-colors">
                Novo
              </span>
            </Link>
            <Link
              href="#segmentos"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Segmentos
            </Link>
            <Link
              href="#como-funciona"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Como Funciona
            </Link>
            <Link
              href="#diferenciais"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Diferenciais
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Dúvidas
            </Link>
          </nav>

          {/* Contact & CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>(11) 97058-4040</span>
            </a>

            <button
              onClick={onOpenModal}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-brand-electric to-brand-500 p-[1px] shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transition-all active:scale-95"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-[11px] bg-gradient-to-r from-brand-electric to-brand-600 text-white text-xs font-bold tracking-wide group-hover:brightness-110 transition-all">
                <span>Diagnóstico Gratuito</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenModal}
              className="px-3 py-1.5 rounded-lg bg-brand-electric text-white text-xs font-bold"
            >
              Diagnóstico
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061427] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            <Link
              href="#solucoes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-brand-300 py-1"
            >
              Soluções
            </Link>
            <Link
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-brand-300 py-1 flex items-center justify-between"
            >
              <span>Simulador de Créditos</span>
              <span className="text-[10px] bg-brand-500/20 text-brand-300 border border-brand-500/40 px-2 py-0.5 rounded-full font-bold">
                NOVO
              </span>
            </Link>
            <Link
              href="#segmentos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-brand-300 py-1"
            >
              Segmentos Atendidos
            </Link>
            <Link
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-brand-300 py-1"
            >
              Como Funciona
            </Link>
            <Link
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-brand-300 py-1"
            >
              Por que a Recupere
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-brand-300 py-1"
            >
              Dúvidas Frequentes
            </Link>
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% em conformidade com a Receita Federal</span>
            </div>
            <a
              href={COMPANY_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-electric to-brand-500 text-white font-bold text-sm shadow-lg shadow-brand-500/30"
            >
              Falar no WhatsApp Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

