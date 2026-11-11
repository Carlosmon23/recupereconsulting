"use client";

import Link from "next/link";
import {
  FileText,
  Percent,
  TrendingUp,
  ShieldCheck,
  Handshake,
  Target,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Search,
  Layers,
  ClipboardCheck,
  Check,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511970584040?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20equipe%20da%20Recupere%20Consulting.";


const CNPJ = "66.347.256/0001-88";

const ACCENT = "bg-[#3dd6ff] hover:bg-[#6ee3ff] text-[#06214d]";

const solutions = [
  {
    icon: FileText,
    title: "Revisão de PIS e COFINS",
    text: "Análise das apurações e recolhimentos para identificar inconsistências, pagamentos indevidos ou valores recolhidos a maior.",
  },
  {
    icon: Percent,
    title: "Tributação monofásica",
    text: "Verificação da classificação fiscal dos produtos, NCM, CST e tratamento tributário aplicável às operações.",
  },
  {
    icon: Layers,
    title: "Segregação tributária",
    text: "Análise do tratamento das receitas e da correta segregação das operações, inclusive no Simples Nacional, quando aplicável.",
  },
  {
    icon: Search,
    title: "Diagnóstico de oportunidades",
    text: "Levantamento documental e fiscal para avaliar possíveis créditos ou valores passíveis de restituição ou compensação.",
  },
];

const segments = [
  "Farmácias e drogarias",
  "Supermercados e mercados",
  "Empresas de autopeças",
  "Atacadistas e distribuidores",
  "Operações com produtos monofásicos",
];

const steps = [
  { t: "Contato inicial", d: "Conhecemos a empresa e suas atividades." },
  { t: "Levantamento documental", d: "Identificamos os documentos fiscais e tributários necessários à análise." },
  { t: "Revisão técnica", d: "Avaliamos produtos, NCM, CST, operações, apurações e recolhimentos." },
  { t: "Diagnóstico", d: "Apresentamos resultados, inconsistências e oportunidades tecnicamente fundamentadas." },
  { t: "Encaminhamento", d: "Quando houver fundamento, avaliamos os procedimentos legais para restituição ou compensação." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0b1b3a] font-sans antialiased selection:bg-[#3dd6ff] selection:text-[#06214d]">
      {/* ================= HERO WRAPPER (header + hero + trust) ================= */}
      <div
        id="inicio"
        className="relative overflow-hidden bg-[#061a45] text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), radial-gradient(1200px 600px at 80% 20%, #0f4bd6 0%, rgba(6,26,69,0) 60%)",
          backgroundSize: "72px 72px, 72px 72px, 100% 100%",
        }}
      >
        {/* Header */}
        <header className="relative z-20">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-[#3dd6ff] text-[#06214d] grid place-items-center font-black text-lg">
                R
              </span>
              <span className="text-lg font-bold tracking-tight">
                Recupere<span className="text-[#3dd6ff]">.</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
              <Link href="#solucoes" className="hover:text-white transition-colors">Soluções</Link>
              <Link href="#segmentos" className="hover:text-white transition-colors">Segmentos</Link>
              <Link href="#como-funciona" className="hover:text-white transition-colors">Como funciona</Link>
              <Link href="#contato" className="hover:text-white transition-colors">Contato</Link>
            </nav>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 ${ACCENT}`}
            >
              Falar com especialista
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 pt-6 pb-12 lg:pt-10 lg:pb-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#9be8ff]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3dd6ff]" />
                Revisão tributária e recuperação de créditos
              </span>

              <h1 className="mt-5 text-[30px] sm:text-5xl lg:text-[48px] font-semibold leading-[1.08] tracking-[-0.03em]">
                Pague{" "}
                <span className="relative inline-block px-2">
                  <span className="absolute inset-0 rounded-[999px] border border-[#3dd6ff]/70 -rotate-2" />
                  <span className="relative">só o justo</span>
                </span>{" "}
                de tributos. Recupere o que é seu.
              </h1>

              <p className="mt-4 text-sm sm:text-base text-white/70 max-w-lg leading-relaxed">
                Revisão especializada em PIS/COFINS, produtos monofásicos e identificação de
                recolhimentos indevidos ou a maior, com análise técnica e transparência.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl text-sm">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all active:scale-95 ${ACCENT}`}
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale com nossa equipe
                </a>
                <Link
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/10 transition-colors"
                >
                  Como funciona
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                <MapPin className="w-4 h-4 text-[#3dd6ff]" />
                São Paulo inicialmente, com expansão nacional
              </div>
            </div>

            {/* Visual */}
            <div className="relative h-[300px] sm:h-[340px] hidden sm:block">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-[#3dd6ff] via-[#2a8cff] to-[#1442c9]" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[230px] h-[230px] rounded-full bg-[#061a45]/40 backdrop-blur-sm border border-white/20 grid place-items-center">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-white/70">Foco</p>
                  <p className="text-3xl font-semibold mt-1">PIS/COFINS</p>
                  <p className="text-sm text-white/70 mt-2">Créditos tributários</p>
                </div>
              </div>

              <div className="absolute left-0 top-4 w-44 rounded-2xl bg-white text-[#0b1b3a] p-3.5 shadow-2xl shadow-black/30">
                <p className="text-xs font-semibold text-slate-500">Diagnóstico</p>
                <p className="text-2xl font-bold mt-1">NCM + CST</p>
                <div className="mt-3 h-1.5 rounded-full bg-slate-100">
                  <div className="h-full w-4/5 rounded-full bg-[#1f6bff]" />
                </div>
              </div>

              <div className="absolute right-0 top-0 w-44 rounded-2xl bg-white text-[#0b1b3a] p-3.5 shadow-2xl shadow-black/30">
                <p className="text-xs font-semibold text-slate-500">Conformidade fiscal</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[#e6f6ff] text-[#1f6bff] grid place-items-center">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <span className="font-bold">Revisão técnica</span>
                </div>
              </div>

              <div className="absolute left-4 bottom-2 w-56 rounded-2xl bg-white text-[#0b1b3a] p-3.5 shadow-2xl shadow-black/30">
                <p className="text-xs font-semibold text-slate-500">Oportunidades</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="font-bold">Restituição / compensação</span>
                  <TrendingUp className="w-5 h-5 text-[#1f6bff]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-white/70">
            {[
              { i: FileText, t: "Revisão de PIS/COFINS" },
              { i: Percent, t: "Tributação monofásica" },
              { i: TrendingUp, t: "Análise de NCM e CST" },
              { i: ShieldCheck, t: "Pagamentos indevidos" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="flex items-center gap-3 font-semibold">
                <Icon className="w-6 h-6 text-[#3dd6ff]" />
                <span className="text-sm sm:text-base">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SOLUÇÕES ================= */}
      <section id="solucoes" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#3dd6ff] text-[#06214d]">
              Nossas soluções
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-[-0.03em]">
              Análise técnica para recuperar o que foi pago a mais
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-3xl bg-[#f3f7ff] p-7 border border-transparent hover:border-[#1f6bff]/30 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all"
              >
                <span className="w-12 h-12 rounded-2xl bg-[#1f6bff] text-white grid place-items-center">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="mt-6 text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SEGMENTOS ================= */}
      <section id="segmentos" className="pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="rounded-[36px] bg-[#061a45] text-white p-8 sm:p-14 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
            <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[#1f6bff]/40 blur-3xl" />
            <div className="relative">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#3dd6ff] text-[#06214d]">
                Segmentos atendidos
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-[-0.03em]">
                Cada empresa passa por uma avaliação individual
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Consideramos atividades, produtos, regime tributário e histórico fiscal antes de
                qualquer recomendação.
              </p>
            </div>
            <ul className="relative grid gap-3">
              {segments.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 px-5 py-4 font-medium"
                >
                  <span className="w-6 h-6 rounded-full bg-[#3dd6ff] text-[#06214d] grid place-items-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COMO FUNCIONA ================= */}
      <section id="como-funciona" className="py-24 bg-[#f3f7ff]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#3dd6ff] text-[#06214d]">
              Como funciona
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-[-0.03em]">
              Do primeiro contato ao diagnóstico
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s, i) => (
              <div key={s.t} className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
                <span className="w-10 h-10 rounded-full bg-[#061a45] text-[#3dd6ff] grid place-items-center font-bold">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-semibold text-lg leading-snug">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-[#0b1b3a]/80">
            <span className="inline-flex items-center gap-2"><Handshake className="w-4 h-4 text-[#1f6bff]" />Atendimento consultivo</span>
            <span className="inline-flex items-center gap-2"><ClipboardCheck className="w-4 h-4 text-[#1f6bff]" />Transparência nos resultados</span>
            <span className="inline-flex items-center gap-2"><Target className="w-4 h-4 text-[#1f6bff]" />Foco na conformidade fiscal</span>
          </div>
        </div>
      </section>

      {/* ================= CONTATO ================= */}
      <section id="contato" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div
            className="rounded-[36px] text-white text-center px-6 py-16 sm:py-20 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,#0b3bb8 0%,#1f6bff 55%,#3dd6ff 130%)" }}
          >
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] max-w-3xl mx-auto">
              Sua empresa pode estar pagando mais do que deveria.
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Atendimento consultivo e transparente. Fale direto com a nossa equipe.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#06214d] font-bold hover:bg-[#e6f6ff] transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
              <a
                href="mailto:fabio.souza@grupovillela.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/40 font-semibold hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Enviar e-mail
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/80">
              <a href="tel:5511970584040" className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> +55 11 97058-4040
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" /> São Paulo, com expansão nacional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className="relative overflow-hidden bg-[#061a45] text-white/70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px), radial-gradient(700px 300px at 10% 0%, rgba(31,107,255,0.45) 0%, rgba(6,26,69,0) 70%)",
          backgroundSize: "72px 72px, 72px 72px, 100% 100%",
        }}
      >
        <div className="h-1 bg-gradient-to-r from-[#1f6bff] via-[#3dd6ff] to-[#1f6bff]" />

        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 pt-14 pb-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            {/* Marca */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 rounded-xl bg-[#3dd6ff] text-[#06214d] grid place-items-center font-black text-xl">
                  R
                </span>
                <span className="text-xl font-bold tracking-tight text-white">
                  Recupere<span className="text-[#3dd6ff]">.</span>
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed max-w-sm">
                Revisão tributária e recuperação de créditos, com análise técnica, transparência e
                foco na conformidade fiscal.
              </p>
              <div className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                <span className="w-9 h-9 rounded-lg bg-white/10 text-[#3dd6ff] grid place-items-center">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">FM Consulting</p>
                  <p className="text-xs text-white/60">Gestão Empresarial</p>
                </div>
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#3dd6ff]">
                Navegação
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><Link href="#solucoes" className="hover:text-white transition-colors">Soluções</Link></li>
                <li><Link href="#segmentos" className="hover:text-white transition-colors">Segmentos</Link></li>
                <li><Link href="#como-funciona" className="hover:text-white transition-colors">Como funciona</Link></li>
                <li><Link href="#contato" className="hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#3dd6ff]">
                Contato
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="tel:5511970584040" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-[#3dd6ff]" /> +55 11 97058-4040
                  </a>
                </li>
                <li>
                  <a href="mailto:fabio.souza@grupovillela.com" className="inline-flex items-center gap-2 hover:text-white transition-colors break-all">
                    <Mail className="w-4 h-4 text-[#3dd6ff] shrink-0" /> fabio.souza@grupovillela.com
                  </a>
                </li>
                <li className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#3dd6ff]" /> São Paulo, com expansão nacional
                </li>
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 ${ACCENT}`}
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Linha legal */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-center md:text-left space-y-1">
              <p>
                © {new Date().getFullYear()} Recupere Consulting · Todos os direitos reservados.
              </p>
              <p className="text-white/50">
                <span className="font-semibold text-white/70">FM Consulting Gestão Empresarial</span>{" "}
                · CNPJ {CNPJ}
              </p>
            </div>
            <Link
              href="/politica-de-privacidade"
              className="px-5 py-2.5 rounded-full border border-white/25 text-white/90 font-semibold hover:bg-white/10 hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
