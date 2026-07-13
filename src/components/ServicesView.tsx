import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICE_GROUPS } from "../data";
import { 
  TrendingUp, DollarSign, Coins, Shield, Briefcase, 
  ChevronDown, ChevronUp, Plus, Minus, ArrowRight 
} from "lucide-react";

const iconMap: Record<string, any> = {
  TrendingUp,
  DollarSign,
  Coins,
  Shield,
  Briefcase
};

export default function ServicesView() {
  const [expandedId, setExpandedId] = useState<string | null>("ipo-advisory");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div id="services-grid-section" className="space-y-12 py-6">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
          OUR PRACTICE AREAS
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#0F172A]">
          Our Suite of Corporate Advisory Services
        </h2>
        <p className="text-base text-slate-600 leading-relaxed font-sans">
          We become your outsourced IPO Advisory Team. From early structuring diagnostics through capital markets placement and long-term public governance, we coordinate every single moving variable.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {SERVICE_GROUPS.map((group) => {
          const IconComponent = iconMap[group.iconName] || Briefcase;
          const isExpanded = expandedId === group.id;

          return (
            <div 
              key={group.id} 
              className="bg-[#FDFBF7] rounded-none border border-[#0F172A]/10 overflow-hidden shadow-none transition duration-150"
            >
              {/* Header Toggle Row */}
              <button
                onClick={() => toggleExpand(group.id)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none bg-[#F7F4EF]/40 hover:bg-[#F7F4EF]/80 transition duration-150"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-[#0F172A] text-white flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[#947D5C]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#0F172A] leading-tight">
                      {group.title}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1 line-clamp-1 md:line-clamp-none max-w-xl font-sans">
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-none bg-[#FDFBF7] border border-[#0F172A]/10 flex items-center justify-center shrink-0">
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-[#0F172A]" /> : <ChevronDown className="w-4 h-4 text-[#0F172A]" />}
                </div>
              </button>

              {/* Expandable Scopes */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-4 border-t border-[#0F172A]/10 bg-[#F7F4EF]/60 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {group.services.map((srv, idx) => (
                        <div 
                          key={idx} 
                          className="bg-[#FDFBF7] p-6 rounded-none border border-[#0F172A]/10 flex flex-col justify-between space-y-4"
                        >
                          <div className="space-y-2">
                            <h4 className="font-serif font-bold text-sm text-[#0F172A] flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#947D5C]"></span>
                              {srv.title}
                            </h4>
                            <p className="text-xs text-[#64748B] leading-relaxed">
                              {srv.description}
                            </p>
                          </div>
                          <div className="pt-4 border-t border-[#0F172A]/5">
                            <span className="text-[10px] font-mono font-bold uppercase text-[#947D5C] tracking-wider block mb-2">
                              Deliverable Scopes:
                            </span>
                            <ul className="space-y-1.5">
                              {srv.bulletPoints.map((bullet, bIdx) => (
                                <li key={bIdx} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                                  <Plus className="w-3.5 h-3.5 text-[#947D5C] shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
