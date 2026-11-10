import { PROCESS_STEPS } from "@/data/content";
import {
  MessageSquare,
  FileSearch,
  Cpu,
  BarChart3,
  Coins,
  CheckCircle,
} from "lucide-react";

export default function ProcessTimeline() {
  const stepIcons = [MessageSquare, FileSearch, Cpu, BarChart3, Coins];

  return (
    <section id="como-funciona" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
            <span>Passo a Passo Transparente</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight-display leading-tight">
            Como funciona a recuperação do seu dinheiro
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Processo 100% digital, sem complicações e sem demandar tempo da sua equipe operacional.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-brand-electric via-brand-cyan to-emerald-400 opacity-40 z-0" />

          {PROCESS_STEPS.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={step.step}
                className="relative z-10 flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/[0.08] hover:border-brand-400/40 transition-all duration-300 group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold tracking-tight-display text-white/40 group-hover:text-brand-300 transition-colors">
                      {step.step}
                    </span>

                    <div className="w-11 h-11 rounded-xl bg-brand-electric/20 border border-brand-electric/40 text-brand-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-electric group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Tag */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10 mb-3">
                    {step.tag}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-400 mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Etapa {index + 1} de 5</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

