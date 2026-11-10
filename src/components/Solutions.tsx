"use client";

import { SOLUTIONS } from "@/data/content";
import {
  FileSpreadsheet,
  Layers,
  Scale,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

interface SolutionsProps {
  onOpenModal: () => void;
}

export default function Solutions({ onOpenModal }: SolutionsProps) {
  const icons = [FileSpreadsheet, Layers, Scale, Sparkles];

  return (
    <section id="solucoes" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background grid and soft gradient wash */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-50 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <span>Nossas Soluções Especializadas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight-display text-slate-900 leading-tight">
            Recuperação Tributária com rigor técnico e conformidade total
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminamos bitributações invisíveis que drenam o lucro do seu negócio. 
            Auditoria item a item nos documentos fiscais com segurança jurídica assegurada.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS.map((sol, index) => {
            const Icon = icons[index];
            return (
              <div
                key={sol.id}
                className="group relative rounded-2xl bg-white p-8 sm:p-10 border border-slate-200/80 hover:border-brand-400 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                      {sol.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-3">
                    {sol.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {sol.description}
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      O que entregamos:
                    </p>
                    {sol.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-8 mt-6 border-t border-slate-100">
                  <button
                    onClick={onOpenModal}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 group-hover:text-brand-700 transition-colors"
                  >
                    <span>Solicitar auditoria para este serviço</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner for peace of mind */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-cyan shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Seu contador é nosso parceiro, não um concorrente.
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Nosso trabalho é estritamente pericial e complementar, focado no cruzamento de dados que a rotina contábil mensal não contempla.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-brand-cyan text-brand-950 font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
          >
            Falar com Especialista
          </button>
        </div>

      </div>
    </section>
  );
}

