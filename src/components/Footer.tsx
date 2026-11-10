import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#030914] text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-electric flex items-center justify-center text-white font-bold shadow-md shadow-brand-500/30">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-wider text-white">
                  RECUPERE <span className="text-brand-300 font-semibold text-xs bg-white/10 px-1 py-0.5 rounded">Consulting</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">
                  Revisão Tributária & Recuperação de Créditos
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Especialistas em auditoria de PIS e COFINS para produtos monofásicos. 
              Recuperamos o dinheiro pago a mais nos últimos 5 anos de forma 100% administrativa, com rigor técnico e conformidade com a Receita Federal.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Conformidade com a IN RFB nº 2.055/2021</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#solucoes" className="hover:text-white transition-colors">
                  Nossas Soluções
                </Link>
              </li>
              <li>
                <Link href="#simulador" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Simulador de Créditos</span>
                  <span className="text-[9px] bg-brand-500/20 text-brand-300 border border-brand-500/30 px-1 rounded">NOVO</span>
                </Link>
              </li>
              <li>
                <Link href="#segmentos" className="hover:text-white transition-colors">
                  Segmentos Atendidos
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="hover:text-white transition-colors">
                  Por que a Recupere
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Soluções Principais
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300 font-medium">Revisão de PIS e COFINS</li>
              <li>Tributação Monofásica (NCM/CST)</li>
              <li>Segregação no Simples Nacional</li>
              <li>Diagnóstico de Oportunidades</li>
              <li>Auditoria de Cupons e XMLs</li>
              <li>Compensação e Restituição em Conta</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Atendimento Direto
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-white transition-colors text-slate-300 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span>(11) 97058-4040</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                <span>São Paulo / SP • Atendimento Nacional</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-8 text-[11px] text-slate-500 leading-relaxed border-b border-white/5 space-y-2">
          <p>
            <strong>Aviso de Conformidade Legal:</strong> Os trabalhos periciais e de revisão tributária desenvolvidos pela Recupere Consulting fundamentam-se na legislação federal vigente, incluindo o Código Tributário Nacional (Lei nº 5.172/1966), Lei Complementar nº 123/2006 (Estatuto da ME e EPP), Lei nº 10.147/2000, Lei nº 10.485/2002 e a Instrução Normativa RFB nº 2.055/2021.
          </p>
          <p>
            Todos os procedimentos de apuração e restituição de tributos monofásicos de PIS e COFINS recolhidos a maior são operados pela via puramente administrativa perante a Secretaria Especial da Receita Federal do Brasil (RFB), sem a necessidade de ingresso de ações judiciais de risco.
          </p>
        </div>

        {/* Copyright and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Recupere Consulting. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Honorários exclusivamente no êxito</span>
            <a
              href="#"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Topo</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

