"use client";

import { useState } from "react";
import {
  Calculator,
  Pill,
  Wrench,
  ShoppingCart,
  UtensilsCrossed,
  Fuel,
  Building,
  ArrowRight,
  Sparkles,
  TrendingUp,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

interface SegmentRate {
  id: string;
  name: string;
  icon: typeof Pill;
  baseRate: number; // Percentage of monthly revenue estimated as recoverable monofasic
  defaultRevenue: number;
  highlight: string;
}

const SEGMENT_OPTIONS: SegmentRate[] = [
  {
    id: "farmacia",
    name: "Farmácia / Drogaria",
    icon: Pill,
    baseRate: 0.042, // ~4.2%
    defaultRevenue: 150000,
    highlight: "80%+ do mix monofásico",
  },
  {
    id: "autopecas",
    name: "Autopeças / Motopeças",
    icon: Wrench,
    baseRate: 0.035, // ~3.5%
    defaultRevenue: 120000,
    highlight: "Pneus, baterias & peças",
  },
  {
    id: "supermercado",
    name: "Supermercado / Mercado",
    icon: ShoppingCart,
    baseRate: 0.024, // ~2.4%
    defaultRevenue: 250000,
    highlight: "Bebidas e produtos de higiene",
  },
  {
    id: "restaurante",
    name: "Bar / Restaurante",
    icon: UtensilsCrossed,
    baseRate: 0.02, // ~2.0%
    defaultRevenue: 90000,
    highlight: "Bebidas frias s/ PIS/COFINS",
  },
  {
    id: "posto",
    name: "Posto / Conveniência",
    icon: Fuel,
    baseRate: 0.022, // ~2.2%
    defaultRevenue: 200000,
    highlight: "Combustíveis e loja",
  },
  {
    id: "outro",
    name: "Outros Comércios / Atacado",
    icon: Building,
    baseRate: 0.025, // ~2.5%
    defaultRevenue: 100000,
    highlight: "Produtos com NCM monofásico",
  },
];

export default function TaxCalculator() {
  const [selectedSegment, setSelectedSegment] = useState<SegmentRate>(SEGMENT_OPTIONS[0]);
  const [revenue, setRevenue] = useState<number>(150000);
  const [regime, setRegime] = useState<"simples" | "presumido" | "real">("simples");

  // Regime adjustment multiplier
  const regimeMultiplier = regime === "simples" ? 1.0 : regime === "presumido" ? 1.15 : 1.25;

  // Monthly estimate
  const monthlyEstimate = revenue * selectedSegment.baseRate * regimeMultiplier;

  // 60-month (5 years) total estimate
  const fiveYearsEstimate = monthlyEstimate * 60;

  // Format currency in BRL
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const getWhatsAppSimMessage = () => {
    return `Olá Fábio! Fiz a simulação no site da Recupere Consulting:
- Segmento: ${selectedSegment.name}
- Faturamento Mensal Aprox.: ${formatCurrency(revenue)}
- Regime Tributário: ${
      regime === "simples" ? "Simples Nacional" : regime === "presumido" ? "Lucro Presumido" : "Lucro Real"
    }
- Potencial 5 Anos Estimado: ${formatCurrency(fiveYearsEstimate)}

Gostaria de solicitar o diagnóstico preliminar gratuito para validar esses valores com meus XMLs.`;
  };

  return (
    <section id="simulador" className="py-24 bg-[#051329] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador Interativo de Créditos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight-display leading-tight">
            Descubra quanto sua empresa pode ter a recuperar
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Selecione seu segmento e informe sua média de faturamento mensal para estimar os créditos acumulados nos últimos 60 meses.
          </p>
        </div>

        {/* Main Interactive Card */}
        <div className="max-w-5xl mx-auto rounded-3xl glass-dark border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Segment Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  1. Selecione o segmento da sua empresa:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {SEGMENT_OPTIONS.map((seg) => {
                    const Icon = seg.icon;
                    const isSelected = selectedSegment.id === seg.id;
                    return (
                      <button
                        key={seg.id}
                        type="button"
                        onClick={() => {
                          setSelectedSegment(seg);
                          setRevenue(seg.defaultRevenue);
                        }}
                        className={`flex flex-col items-center justify-center text-center p-3 rounded-xl border text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-brand-electric text-white border-brand-cyan shadow-lg shadow-brand-electric/30 scale-[1.02]"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? "text-white" : "text-brand-300"}`} />
                        <span className="font-semibold leading-tight">{seg.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Revenue Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    2. Faturamento Médio Mensal:
                  </label>
                  <span className="text-lg sm:text-xl font-extrabold text-brand-cyan bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                    {formatCurrency(revenue)}
                  </span>
                </div>

                <input
                  type="range"
                  min={30000}
                  max={1500000}
                  step={10000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />

                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>R$ 30.000 / mês</span>
                  <span>R$ 750.000</span>
                  <span>R$ 1.500.000+ / mês</span>
                </div>
              </div>

              {/* Step 3: Tax Regime Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  3. Regime Tributário Atual:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "simples", label: "Simples Nacional" },
                    { id: "presumido", label: "Lucro Presumido" },
                    { id: "real", label: "Lucro Real" },
                  ].map((r) => {
                    const isSelected = regime === r.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setRegime(r.id as any)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                          isSelected
                            ? "bg-white text-brand-950 border-white shadow"
                            : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {r.label}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Output Box (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#0c2b53] to-[#081e3a] p-6 sm:p-8 border border-brand-400/30 text-center relative shadow-2xl flex flex-col justify-between space-y-6">
              
              {/* Top tag */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                  Estimativa Preliminar
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                  60 Meses Retroativos
                </span>
              </div>

              {/* Huge Estimate Display */}
              <div className="space-y-2 py-2">
                <p className="text-xs uppercase font-medium text-slate-300">
                  Potencial Total de Restituição:
                </p>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-brand-cyan">
                  {formatCurrency(fiveYearsEstimate)}
                </div>
                <p className="text-[11px] text-slate-300">
                  Valores pagos a mais nos últimos 5 anos passíveis de recuperação direta no e-CAC.
                </p>
              </div>

              {/* Monthly Savings Info */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-left space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Alívio futuro no imposto mensal:</span>
                  <strong className="text-emerald-400 font-bold">{formatCurrency(monthlyEstimate)} / mês</strong>
                </div>
                <div className="flex justify-between items-center text-slate-400 text-[11px]">
                  <span>Prazo estimado para homologação:</span>
                  <span className="text-white font-medium">30 a 60 dias</span>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="space-y-2.5">
                <a
                  href={COMPANY_INFO.whatsappUrl(getWhatsAppSimMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-electric to-brand-500 hover:brightness-110 text-white font-bold text-sm tracking-wide shadow-lg shadow-brand-electric/40 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Validar Esta Simulação Grátis</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                  <HelpCircle className="w-3 h-3 text-brand-300" />
                  <span>Análise sem compromisso e sem custos iniciais.</span>
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

