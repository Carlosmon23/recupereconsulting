import {
  Pill,
  Wrench,
  ShoppingCart,
  Boxes,
  Fuel,
  UtensilsCrossed,
  Building2,
  Sparkles,
} from "lucide-react";

const TRUST_ITEMS = [
  { name: "Farmácias & Drogarias", icon: Pill, tag: "+85% de itens monofásicos" },
  { name: "Autopeças & Motopeças", icon: Wrench, tag: "Pneus, baterias & peças" },
  { name: "Supermercados & Empórios", icon: ShoppingCart, tag: "Bebidas & higiene" },
  { name: "Atacadistas & Distribuição", icon: Boxes, tag: "Alto volume de créditos" },
  { name: "Postos & Conveniências", icon: Fuel, tag: "Combustíveis & loja" },
  { name: "Bares & Restaurantes", icon: UtensilsCrossed, tag: "Bebidas frias s/ PIS" },
];

export default function TrustBar() {
  return (
    <section className="relative py-8 bg-[#040e1d] border-y border-white/10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Label */}
          <div className="flex items-center gap-2 shrink-0 text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-cyan" />
            <span>Segmentos de Alta Recuperação:</span>
          </div>

          {/* List of segment pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            {TRUST_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-brand-400/40 hover:bg-white/10 transition-all text-xs text-slate-200 group cursor-default"
                >
                  <Icon className="w-3.5 h-3.5 text-brand-400 group-hover:text-brand-cyan transition-colors" />
                  <span className="font-medium">{item.name}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

