import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { INDUSTRIES } from "../data";
import { 
  Dna, FlaskConical, Activity, HeartPulse, Cpu, Leaf, Globe, 
  AlertTriangle, HelpCircle, Briefcase, Landmark 
} from "lucide-react";

const iconMap: Record<string, any> = {
  Dna,
  FlaskConical,
  Activity,
  HeartPulse,
  Cpu,
  Leaf,
  Globe
};

export default function IndustriesView() {
  const [activeId, setActiveId] = useState<string>("life-sciences");

  const activeInd = INDUSTRIES.find(ind => ind.id === activeId) || INDUSTRIES[0];
  const ActiveIcon = iconMap[activeInd.iconName] || Briefcase;

  return (
    <div id="industries-view-section" className="space-y-12 py-6">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
          SECTOR EXPERTISE
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#0F172A]">
          Deep Sector Focus & Multi-Exchange Coverage
        </h2>
        <p className="text-base text-slate-600 leading-relaxed font-sans">
          We guide innovative, high-growth companies preparing for listings on major international exchanges including **NASDAQ (EGC)**, **NYSE American**, **TSX**, **LSE**, **HKEX**, **ASX**, and **SGX**.
        </p>
      </div>

      {/* Grid of Industry selectors */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Buttons List */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 border border-[#0F172A]/10 p-2 bg-[#F7F4EF]/40">
          {INDUSTRIES.map((ind) => {
            const ButtonIcon = iconMap[ind.iconName] || Briefcase;
            const isActive = ind.id === activeId;

            return (
              <button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                className={`text-left p-4 rounded-none border transition-all duration-150 flex items-center gap-4 cursor-pointer ${
                  isActive 
                    ? "bg-[#0F172A] text-white border-[#0F172A]" 
                    : "bg-[#FDFBF7] hover:bg-[#F7F4EF] border-[#0F172A]/10 text-[#0F172A]"
                }`}
              >
                <div className={`w-8 h-8 rounded-none flex items-center justify-center shrink-0 ${
                  isActive ? "bg-[#947D5C] text-white" : "bg-[#0F172A]/5 text-[#947D5C]"
                }`}>
                  <ButtonIcon className="w-4.5 h-4.5" />
                </div>
                <span className="text-xs md:text-sm font-semibold truncate tracking-tight uppercase font-sans">{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Description panel */}
        <div className="md:col-span-8 bg-[#FDFBF7] border border-[#0F172A]/10 rounded-none p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-[#0F172A]/10">
                <div className="w-14 h-14 rounded-none bg-[#0F172A] text-white flex items-center justify-center shrink-0">
                  <ActiveIcon className="w-7 h-7 text-[#947D5C]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
                    PRESCIENT COVERAGE VERTICAL
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0F172A]">
                    {activeInd.name} Sector Advisory
                  </h3>
                </div>
              </div>

              {/* Pitch */}
              <p className="text-base text-slate-700 leading-relaxed font-serif italic text-left">
                {activeInd.description}
              </p>

              {/* Challenge vs Solution layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-[#F7F4EF]/70 border border-[#0F172A]/10 p-6 rounded-none space-y-2 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#947D5C] uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-[#947D5C] shrink-0" />
                    <span>Sector Challenge</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {activeInd.challenge}
                  </p>
                </div>

                <div className="bg-[#F7F4EF]/70 border border-[#0F172A]/10 p-6 rounded-none space-y-2 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#947D5C] uppercase tracking-wider">
                    <Landmark className="w-4 h-4 text-[#947D5C] shrink-0" />
                    <span>Prescient Core Advisory</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {activeInd.solution}
                  </p>
                </div>
              </div>

              {/* Listing help note */}
              <div className="pt-6 border-t border-[#0F172A]/10 text-center text-xs text-[#947D5C]/80 font-mono tracking-wider">
                QUALIFIES UNDER EMERGING GROWTH COMPANY (EGC) FILING FRAMEWORKS ON GLOBAL EXCHANGES.
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
