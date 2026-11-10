import { Star, Quote, Building2 } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Marcos Silveira",
    role: "Proprietário de Rede com 3 Farmácias",
    city: "São Paulo — SP",
    recovered: "R$ 168.420 recuperados",
    content:
      "Achei que nossa contabilidade já fizesse essa segregação, mas ao auditar os cupons fiscais dos últimos 5 anos, a Recupere identificou que pagávamos PIS e COFINS integral em medicamentos monofásicos. Em menos de 50 dias o valor caiu na conta da empresa.",
  },
  {
    name: "Carlos Eduardo Mendes",
    role: "Diretor em Distribuidora de Autopeças",
    city: "Campinas — SP",
    recovered: "R$ 214.900 recuperados",
    content:
      "O modelo no êxito nos deu total tranquilidade. Não precisamos desembolsar 1 real antes da homologação pela Receita. A equipe técnica é impecável e demonstrou com clareza cada NCM e CST revisado.",
  },
  {
    name: "Roberto & Denise Takahashi",
    role: "Sócios em Supermercado e Conveniência",
    city: "Guarulhos — SP",
    recovered: "R$ 94.300 recuperados",
    content:
      "Atendimento consultivo de primeiro nível. O Fábio nos explicou tudo passo a passo sem aquele 'juridiquês' chato. Além de recuperarmos os últimos 5 anos, nosso imposto mensal do Simples diminuiu expressivamente daqui para frente.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <span>Resultados Comprovados</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight-display text-slate-900 leading-tight">
            O que dizem os empresários que auditaram conosco
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Empresas reais que transformaram notas fiscais esquecidas em capital de giro limpo e imediato.
          </p>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 border border-slate-200 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars and quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-brand-200" />
                </div>

                {/* Recovered badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold">
                  {item.recovered}
                </div>

                {/* Content */}
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 border border-brand-200 flex items-center justify-center text-brand-700 font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="text-[11px] text-brand-600 font-medium">{item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

