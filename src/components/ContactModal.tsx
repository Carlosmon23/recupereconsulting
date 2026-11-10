"use client";

import { useState } from "react";
import { X, ShieldCheck, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [segment, setSegment] = useState("Farmácia / Drogaria");
  const [regime, setRegime] = useState("Simples Nacional");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Fábio Souza!
Gostaria de agendar o diagnóstico gratuito na Recupere Consulting:
- Nome/Responsável: ${name}
- Empresa: ${company || "Não informado"}
- WhatsApp: ${phone}
- Segmento: ${segment}
- Regime Tributário: ${regime}

Aguardo as orientações para o envio dos arquivos fiscais.`;

    window.open(COMPANY_INFO.whatsappUrl(msg), "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#07172e] border border-brand-400/30 text-white p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow behind */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Diagnóstico Preliminar Sem Custos</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            Solicitar Análise Gratuita
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Descubra em 48 horas se sua empresa tem créditos a restituir nos últimos 5 anos.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block font-semibold text-slate-300 mb-1">
              Nome do Responsável:
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Carlos Eduardo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-brand-cyan"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-300 mb-1">
                Nome da Empresa:
              </label>
              <input
                type="text"
                placeholder="Ex: Drogaria Saúde Ltda"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-brand-cyan"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-300 mb-1">
                WhatsApp com DDD:
              </label>
              <input
                type="tel"
                required
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-brand-cyan"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-300 mb-1">
                Segmento de Atuação:
              </label>
              <select
                value={segment}
                onChange={(e) => setSegment(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#092244] border border-white/20 text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="Farmácia / Drogaria">Farmácia / Drogaria</option>
                <option value="Autopeças / Motopeças">Autopeças / Motopeças</option>
                <option value="Supermercado / Mercado">Supermercado / Mercado</option>
                <option value="Atacadista / Distribuição">Atacadista / Distribuição</option>
                <option value="Posto / Conveniência">Posto / Conveniência</option>
                <option value="Bar / Restaurante">Bar / Restaurante</option>
                <option value="Outro Segmento">Outro Segmento</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-300 mb-1">
                Regime Tributário:
              </label>
              <select
                value={regime}
                onChange={(e) => setRegime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#092244] border border-white/20 text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="Simples Nacional">Simples Nacional</option>
                <option value="Lucro Presumido">Lucro Presumido</option>
                <option value="Lucro Real">Lucro Real</option>
                <option value="Não Tenho Certeza">Não Tenho Certeza</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-electric to-brand-500 hover:brightness-110 text-white font-bold text-sm shadow-lg shadow-brand-electric/40 transition-all flex items-center justify-center gap-2 mt-2"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Enviar Solicitação no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Atendimento humano com Fábio Souza • Risco zero</span>
          </div>
        </form>
      </div>
    </div>
  );
}

