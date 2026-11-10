"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Sparkles,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden bg-[#051329] text-white flex items-center">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Ambient gradient orbs (like in SalesSync reference) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-brand-electric/30 via-brand-500/20 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-brand-700/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Copy Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-brand-400/30 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-ping" />
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan -ml-4" />
              <Sparkles className="w-4 h-4 text-brand-300" />
              <span className="text-xs sm:text-sm font-semibold text-brand-200 tracking-wide">
                Diagnóstico Fiscal 100% Gratuito & Sem Compromisso
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight-display text-white leading-[1.08]">
              Sua empresa pode estar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-cyan to-brand-400 underline decoration-brand-cyan/40 decoration-wavy underline-offset-8">
                pagando mais tributos
              </span>{" "}
              do que deveria.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Revisão tributária de alta precisão em <strong className="text-white font-semibold">PIS/COFINS</strong> e{" "}
              <strong className="text-white font-semibold">produtos monofásicos</strong>. 
              Identificamos e recuperamos créditos pagos indevidamente nos últimos 5 anos — procedimento 
              <span className="text-brand-300 font-semibold"> 100% administrativo</span>, 
              homologado direto no e-CAC da Receita Federal.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-electric to-brand-500 text-white font-bold text-base shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:brightness-110 transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Solicitar Diagnóstico Gratuito</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-base border border-white/15 backdrop-blur-sm transition-all"
              >
                <span>Simular Meus Créditos</span>
                <span className="text-xs bg-brand-500/20 text-brand-300 border border-brand-500/30 px-2 py-0.5 rounded-full">
                  Calculadora
                </span>
              </Link>
            </div>

            {/* Quick Guarantees / Bullets */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Últimos 60 meses retroativos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero custo prévio (no êxito)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>São Paulo e todo o Brasil</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Visual & Interactive Floating Cards (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Glowing Backdrop Circle behind card stack (like SalesSync circle) */}
            <div className="relative mx-auto max-w-[420px] aspect-square rounded-full border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6 flex flex-col justify-center items-center">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-400/20 animate-[spin_60s_linear_infinite]" />
              
              {/* Main Center Card (Executive Overview) */}
              <div className="relative w-full rounded-2xl glass-dark p-6 shadow-2xl border border-white/20 text-left space-y-4 animate-float-slow">
                
                {/* Header of the card */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-300">
                        Painel de Oportunidades
                      </h4>
                      <p className="text-[11px] text-slate-400">Auditoria Fiscal Concluída</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Homologável
                  </span>
                </div>

                {/* Big Metric Display */}
                <div>
                  <p className="text-xs text-slate-400 font-medium">Créditos de PIS/COFINS Apurados</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold text-white tracking-tight">
                      R$ 148.720,50
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      +100% no Caixa
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Base: 60 meses retroativos em produtos monofásicos
                  </p>
                </div>

                {/* Progress breakdown */}
                <div className="space-y-2 pt-1">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Taxa de Conformidade RFB</span>
                    <span className="font-bold text-brand-300">100% Administrativo</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-electric to-brand-cyan rounded-full w-[99%]" />
                  </div>
                </div>

                {/* Card footer CTA */}
                <button
                  onClick={onOpenModal}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold tracking-wide border border-white/15 transition-all flex items-center justify-center gap-1.5"
                >
                  <FileCheck2 className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Descubra o valor da sua empresa</span>
                </button>
              </div>

              {/* Floating Widget 1: Top-Right (Speed & Simples Nacional) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 glass-dark rounded-xl p-3 border border-brand-400/30 shadow-xl max-w-[200px] animate-float-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-300 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">Sem Ação Judicial</p>
                    <p className="text-[10px] text-slate-400">100% via e-CAC da Receita</p>
                  </div>
                </div>
              </div>

              {/* Floating Widget 2: Bottom-Left (Success fee badge) */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 glass-dark rounded-xl p-3 border border-emerald-500/30 shadow-xl max-w-[210px] animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-emerald-300">Risco Zero Absoluto</p>
                    <p className="text-[10px] text-slate-400">Só pague com êxito</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

