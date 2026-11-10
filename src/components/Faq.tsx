"use client";

import { useState } from "react";
import { FAQS } from "@/data/content";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight-display text-slate-900 leading-tight">
            Tire suas dúvidas antes de começar
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Respostas diretas e transparentes sobre o processo de auditoria e recuperação de tributos.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg transition-colors ${
                    isOpen
                      ? "bg-brand-50/70 text-brand-900"
                      : "bg-white text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-brand-600 text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 py-5 bg-white border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <h4 className="text-lg font-bold text-slate-900">
            Ainda tem alguma dúvida específica sobre sua empresa?
          </h4>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Nossa equipe técnica atende diretamente no WhatsApp para tirar dúvidas sobre o seu regime tributário ou segmentos atendidos.
          </p>
          <a
            href={COMPANY_INFO.whatsappUrl("Olá! Gostaria de tirar uma dúvida sobre a recuperação de tributos para a minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com um Consultor Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
}

