"use client";

import { useState } from "react";
import { SEGMENTS } from "@/data/content";
import {
  Pill,
  Wrench,
  ShoppingCart,
  Boxes,
  Fuel,
  Utensils,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

interface SegmentsProps {
  onOpenModal: () => void;
}

export default function Segments({ onOpenModal }: SegmentsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const iconMap: { [key: string]: typeof Pill } = {
    Pill: Pill,
    Wrench: Wrench,
    ShoppingCart: ShoppingCart,
    Boxes: Boxes,
    Fuel: Fuel,
    Utensils: Utensils,
  };

  const currentSegment = SEGMENTS[activeTab];
  const CurrentIcon = iconMap[currentSegment.icon] || Pill;

  return (
    <section id="segmentos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <span>Segmentos Atendidos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight-display text-slate-900 leading-tight">
            Especialistas em setores com tributação concentrada
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Cada nicho possui particularidades fiscais na legislação de PIS/COFINS. Conheça as oportunidades ocultas no seu setor:
          </p>
        </div>

        {/* Segment Selector Tabs (Horizontal Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {SEGMENTS.map((seg, index) => {
            const Icon = iconMap[seg.icon] || Pill;
            const isActive = activeTab === index;
            return (
              <button
                key={seg.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-brand-900 text-white shadow-md shadow-brand-950/20 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-brand-300" : "text-slate-500"}`} />
                <span>{seg.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Segment Feature Panel */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-600/30">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                    {currentSegment.impact}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {currentSegment.name}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {currentSegment.description}
              </p>

              {/* Problem vs Opportunity box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Onde está o erro:</span>
                  </div>
                  <p className="text-xs text-amber-900/90 leading-relaxed">
                    Sistemas emitem cupons fiscais com CST 01 (tributação integral), forçando o pagamento em duplicidade nas guias mensais.
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>A solução da Recupere:</span>
                  </div>
                  <p className="text-xs text-emerald-900/90 leading-relaxed">
                    Auditoria de 100% dos cupons (NFC-e e NF-e), segregação da receita monofásica e restituição direta na conta bancária.
                  </p>
                </div>
              </div>

              {/* Examples */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Itens comumente bitributados neste setor:
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentSegment.examples.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-xs"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: CTA card for this segment (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-8 shadow-card text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
                <CurrentIcon className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900">
                  Tem uma empresa deste segmento?
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Realizamos a triagem sem custos. Em 48 horas dizemos se a sua empresa possui créditos a receber.
                </p>
              </div>

              <button
                onClick={onOpenModal}
                className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm tracking-wide shadow-md shadow-brand-600/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Solicitar Avaliação para {currentSegment.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400">
                Cada empresa passa por avaliação individual considerando faturamento e histórico fiscal.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

