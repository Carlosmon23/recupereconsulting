import {
  ShieldCheck,
  Zap,
  Target,
  BadgeDollarSign,
  Award,
  Users,
  Check,
  X,
} from "lucide-react";

export default function WhyUs() {
  const differentials = [
    {
      icon: ShieldCheck,
      title: "100% em Conformidade Fiscal",
      description:
        "Atuamos exclusivamente dentro do que preconiza a Receita Federal do Brasil (IN RFB 2055/2021). Sem teses arriscadas ou 'aventuras jurídicas'.",
    },
    {
      icon: BadgeDollarSign,
      title: "Honorários Apenas no Êxito",
      description:
        "Risco financeiro zero para sua empresa. Se não encontrarmos créditos legítimos para recuperar, você não paga absolutamente nada.",
    },
    {
      icon: Zap,
      title: "Auditoria com Tecnologia Própria",
      description:
        "Cruzamos milhões de linhas de cupons e notas fiscais eletrônicas em segundos, garantindo precisão cirúrgica de cada NCM e CST.",
    },
    {
      icon: Target,
      title: "Atendimento Consultivo e Humano",
      description:
        "Nada de robôs impessoais. Um consultor especialista acompanha todo o processo do diagnóstico até o dinheiro cair na sua conta.",
    },
  ];

  const comparisonRows = [
    {
      feature: "Foco em Monofásicos & NCMs por IA",
      recupere: true,
      contabilidade: false,
      advocacia: false,
    },
    {
      feature: "Custo inicial zero (100% no êxito)",
      recupere: true,
      contabilidade: false,
      advocacia: false,
    },
    {
      feature: "Prazo de retorno (30 a 60 dias)",
      recupere: true,
      contabilidade: false,
      advocacia: false,
    },
    {
      feature: "Via Administrativa e-CAC (Sem Juiz)",
      recupere: true,
      contabilidade: true,
      advocacia: false,
    },
    {
      feature: "Auditoria retroativa de 5 anos de XML",
      recupere: true,
      contabilidade: false,
      advocacia: false,
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <span>Segurança & Vantagens</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight-display text-slate-900 leading-tight">
            Por que confiar na Recupere Consulting?
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Unimos inteligência de dados, profundo conhecimento das normas da Receita Federal e uma política intransigente de transparência.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4 hover:border-brand-300 hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-600/20">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl overflow-hidden">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
              Comparativo Direto
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Recupere Consulting vs. Métodos Tradicionais
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="pb-4 font-semibold">Critério</th>
                  <th className="pb-4 font-bold text-brand-cyan text-base">Recupere Consulting</th>
                  <th className="pb-4 font-medium">Contabilidade Diária</th>
                  <th className="pb-4 font-medium">Ações Judiciais</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-4 text-slate-300 font-medium">{row.feature}</td>
                    <td className="py-4 font-bold text-emerald-400">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Sim (Garantido)</span>
                      </div>
                    </td>
                    <td className="py-4 text-slate-400">
                      {row.contabilidade ? (
                        <div className="flex items-center gap-1 text-slate-300">
                          <Check className="w-3.5 h-3.5" />
                          <span>Sim</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-slate-500">
                          <X className="w-3.5 h-3.5" />
                          <span>Raro / Incompleto</span>
                        </div>
                      )}
                    </td>
                    <td className="py-4 text-slate-400">
                      {row.advocacia ? (
                        <div className="flex items-center gap-1 text-slate-300">
                          <Check className="w-3.5 h-3.5" />
                          <span>Sim</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-red-400/80">
                          <X className="w-3.5 h-3.5" />
                          <span>Não / Demorado (anos)</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

