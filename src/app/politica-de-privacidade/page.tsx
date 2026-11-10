import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Recupere Consulting",
  description:
    "Política de Privacidade da Recupere Consulting, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
};

// TODO: substituir pelos dados reais da empresa
const CNPJ = "00.000.000/0001-00";
const EMAIL = "fabio.souza@grupovillela.com";

const sections = [
  {
    t: "1. Quem somos (Controlador)",
    p: [
      `A Recupere Consulting, inscrita no CNPJ sob o nº ${CNPJ}, é a controladora dos dados pessoais tratados por meio deste site, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD).`,
    ],
  },
  {
    t: "2. Dados que coletamos",
    p: [
      "Coletamos apenas os dados necessários para atender você: nome, e-mail, telefone, nome da empresa e as informações que você nos enviar por WhatsApp, e-mail ou formulário de contato.",
      "Podemos coletar também dados de navegação (endereço IP, tipo de dispositivo, páginas acessadas) por meio de cookies e tecnologias semelhantes.",
    ],
  },
  {
    t: "3. Finalidades do tratamento",
    p: [
      "Responder solicitações e prestar atendimento consultivo; elaborar propostas e diagnósticos; cumprir obrigações legais e regulatórias; e melhorar a experiência e a segurança do site.",
    ],
  },
  {
    t: "4. Bases legais",
    p: [
      "O tratamento ocorre com base no consentimento do titular, na execução de procedimentos preliminares relacionados a contrato, no cumprimento de obrigação legal ou regulatória e no legítimo interesse, conforme o art. 7º da LGPD.",
    ],
  },
  {
    t: "5. Compartilhamento de dados",
    p: [
      "Não vendemos dados pessoais. Podemos compartilhá-los apenas com prestadores de serviço essenciais à operação (hospedagem, comunicação), com autoridades quando exigido por lei e sempre sob dever de confidencialidade.",
    ],
  },
  {
    t: "6. Armazenamento e segurança",
    p: [
      "Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, perda ou alteração. Os dados são mantidos pelo tempo necessário às finalidades descritas ou conforme exigido por lei.",
    ],
  },
  {
    t: "7. Seus direitos como titular",
    p: [
      "Nos termos do art. 18 da LGPD, você pode solicitar: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos ou desatualizados; anonimização, bloqueio ou eliminação; portabilidade; informação sobre compartilhamentos; e revogação do consentimento.",
    ],
  },
  {
    t: "8. Cookies",
    p: [
      "Utilizamos cookies para o funcionamento do site e para análises de uso. Você pode gerenciá-los ou bloqueá-los nas configurações do seu navegador.",
    ],
  },
  {
    t: "9. Encarregado (DPO) e contato",
    p: [
      `Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail ${EMAIL}.`,
    ],
  },
  {
    t: "10. Alterações desta política",
    p: [
      "Esta política pode ser atualizada a qualquer momento. A versão vigente estará sempre disponível nesta página.",
    ],
  },
];

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-[#f3f7ff] text-[#0b1b3a] font-sans antialiased">
      <header className="bg-[#061a45] text-white">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-[#3dd6ff] text-[#06214d] grid place-items-center font-black text-lg">
              R
            </span>
            <span className="text-lg font-bold tracking-tight">
              Recupere<span className="text-[#3dd6ff]">.</span>
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao site
          </Link>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-5 sm:px-8 py-14">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em]">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Em conformidade com a Lei nº 13.709/2018 (LGPD) · Última atualização: novembro de 2026
        </p>

        <div className="mt-10 rounded-3xl bg-white border border-slate-100 shadow-sm p-7 sm:p-10 space-y-8">
          {sections.map((s) => (
            <section key={s.t}>
              <h2 className="text-lg font-semibold">{s.t}</h2>
              {s.p.map((txt) => (
                <p key={txt} className="mt-2 text-slate-600 leading-relaxed">
                  {txt}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-[#061a45] text-white/60 py-8 text-xs">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 text-center">
          © {new Date().getFullYear()} Recupere Consulting · CNPJ {CNPJ}
        </div>
      </footer>
    </div>
  );
}
