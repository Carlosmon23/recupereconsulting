import { STATS } from "@/data/content";
import { ShieldCheck, MapPin, Award, Clock } from "lucide-react";

export default function StatsCounter() {
  const icons = [Award, Clock, ShieldCheck, Award];

  return (
    <section className="relative py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top small badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>Base em São Paulo com atendimento ágil em todo o território nacional</span>
          </div>
        </div>

        {/* 4-column Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {STATS.map((stat, index) => {
            return (
              <div
                key={index}
                className={`pt-6 sm:pt-0 ${
                  index !== 0 ? "sm:pl-6 lg:pl-8" : ""
                } space-y-2 text-center sm:text-left`}
              >
                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight-display text-brand-950">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 to-brand-600">
                    {stat.value}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-800">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

