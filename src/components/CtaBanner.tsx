"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

interface CtaBannerProps {
  onOpenModal: () => void;
}

export default function CtaBanner({ onOpenModal }: CtaBannerProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [segment, setSegment] = useState("Farmácia / Drogaria");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Fábio! Meu nome é ${name || "Cliente"}, empresa do segmento ${segment}. Telefone/WhatsApp: ${phone}. Gostaria de solicitar o diagnóstico preliminar gratuito de recuperação tributária.`;
    window.open(COMPANY_INFO.whatsappUrl(msg), "_blank");
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Gradient Conversion Container */}
        <div className="rounded-3xl bg-gradient-to-br from-[#040e1d] via-[#092244] to-[#04142b] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-brand-400/20">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-electric/25 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                <span>Auditoria Rápida & 100% Segura</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight-display text-white leading-tight">
                Pronto para colocar o dinheiro de volta no caixa da sua empresa?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Não deixe que valores legítimos prescrevam no calendário da Receita Federal. 
                Cada mês perdido é dinheiro que sua empresa deixa na mesa.
              </p>

              {/* Contact info list */}
              <div className="space-y-3 pt-2 text-sm text-slate-200">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors max-w-md"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Ligue ou chame no WhatsApp:</p>
                    <p className="font-bold text-white text-base">{COMPANY_INFO.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors max-w-md"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">E-mail Direto da Consultoria:</p>
                    <p className="font-bold text-white text-base">{COMPANY_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 max-w-md">
                  <div className="w-9 h-9 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Localização & Cobertura:</p>
                    <p className="font-bold text-white text-xs">{COMPANY_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Quick Form Box (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 shadow-2xl space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">
                    Solicitar Diagnóstico Preliminar
                  </h3>
                  <p className="text-xs text-slate-300">
                    Preencha para receber um contato consultivo direto do especialista.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Seu Nome ou da Empresa:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João Silva / Farmácia São José"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-brand-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      WhatsApp com DDD:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-brand-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Segmento:
                    </label>
                    <select
                      value={segment}
                      onChange={(e) => setSegment(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#092244] border border-white/20 text-white text-sm focus:outline-none focus:border-brand-cyan"
                    >
                      <option value="Farmácia / Drogaria">Farmácia / Drogaria</option>
                      <option value="Autopeças / Motopeças">Autopeças / Motopeças</option>
                      <option value="Supermercado / Mercearia">Supermercado / Mercearia</option>
                      <option value="Atacadista / Distribuidora">Atacadista / Distribuidora</option>
                      <option value="Posto de Combustíveis">Posto de Combustíveis</option>
                      <option value="Bar / Restaurante">Bar / Restaurante</option>
                      <option value="Outro Segmento">Outro Segmento</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-electric to-brand-500 hover:brightness-110 text-white font-bold text-sm tracking-wide shadow-lg shadow-brand-electric/40 transition-all flex items-center justify-center gap-2 pt-3"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Iniciar Diagnóstico no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Sem custos prévios • Honorários no êxito</span>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

