import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ROADMAP_PHASES, BLUEPRINT_STEPS } from "../data";
import { 
  ChevronRight, ArrowRight, ShieldCheck, Award, Target, 
  Layers, Hammer, Users, HelpCircle, FileCheck, CheckCircle2 
} from "lucide-react";

export default function IPORoadmapView() {
  const [viewType, setViewType] = useState<"phases" | "steps">("phases");
  const [activePhaseId, setActivePhaseId] = useState(1);
  const [activeStepNum, setActiveStepNum] = useState(1);

  const activePhase = ROADMAP_PHASES.find(p => p.id === activePhaseId) || ROADMAP_PHASES[0];
  const activeStep = BLUEPRINT_STEPS.find(s => s.stepNumber === activeStepNum) || BLUEPRINT_STEPS[0];

  // Group steps by their Phase Name for easier navigation list grouping
  const stepPhases = Array.from(new Set(BLUEPRINT_STEPS.map(s => s.phaseName)));

  return (
    <div id="ipo-roadmap-section" className="space-y-12 py-6">
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
          OUR METHODOLOGY
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#0F172A]">
          The Prescient IPO Journey™
        </h2>
        <p className="text-base text-slate-600 leading-relaxed font-sans">
          Our methodology guarantees seamless preparation, institutional credibility, and years of supportive growth. We don't just guide you until the IPO closes—we stay with you to build an enduring public leader.
        </p>

        {/* View Toggle */}
        <div className="inline-flex p-1 bg-[#F7F4EF] rounded-none border border-[#0F172A]/10 mt-6 shadow-none">
          <button
            onClick={() => setViewType("phases")}
            className={`px-6 py-2.5 rounded-none text-xs uppercase tracking-[0.15em] font-bold transition duration-150 cursor-pointer ${
              viewType === "phases"
                ? "bg-[#0F172A] text-white"
                : "text-[#0F172A]/60 hover:text-[#0F172A]"
            }`}
          >
            7-Phase Executive Roadmap
          </button>
          <button
            onClick={() => setViewType("steps")}
            className={`px-6 py-2.5 rounded-none text-xs uppercase tracking-[0.15em] font-bold transition duration-150 cursor-pointer ${
              viewType === "steps"
                ? "bg-[#0F172A] text-white"
                : "text-[#0F172A]/60 hover:text-[#0F172A]"
            }`}
          >
            20-Step Deep Dive Blueprint
          </button>
        </div>
      </div>

      {/* 1. 7-PHASE EXECUTIVE ROADMAP VIEW */}
      {viewType === "phases" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vertical Timeline Navigation */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-[#947D5C] uppercase tracking-[0.2em] pl-2 mb-2 font-mono">
              Select Executive Phase
            </h3>
            <div className="space-y-2">
              {ROADMAP_PHASES.map((phase) => {
                const isActive = phase.id === activePhaseId;
                const isPostIpo = phase.id === 7;
                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhaseId(phase.id)}
                    className={`w-full text-left p-4 rounded-none border transition-all duration-150 relative cursor-pointer ${
                      isActive 
                        ? "bg-[#0F172A] text-white border-[#0F172A]" 
                        : "bg-[#FDFBF7] hover:bg-[#F7F4EF] border-[#0F172A]/10 text-[#0F172A]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-none ${
                          isActive 
                            ? "bg-[#947D5C] text-white" 
                            : "bg-[#0F172A]/5 text-[#947D5C]"
                        }`}>
                          P0{phase.id}
                        </span>
                        <h4 className="font-serif font-bold text-sm tracking-tight">{phase.title.replace(/Phase \w+:\s*/, '')}</h4>
                      </div>
                      {isPostIpo && (
                        <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-none font-bold ${
                          isActive ? "bg-white/10 text-slate-200" : "bg-[#947D5C]/10 text-[#947D5C]"
                        }`}>
                          Unique Strength
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Helper card */}
            <div className="bg-[#0F172A] text-white p-6 rounded-none border border-[#0F172A]/15 mt-6 shadow-none space-y-4 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#947D5C]" />
                <span className="text-[10px] uppercase font-mono font-bold tracking-[0.15em] text-[#947D5C]">
                  Full-Cycle Advisory
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Many boutique consultants exit as soon as the bell rings. Prescient Crossborder stays engaged during Phase 7 to secure ongoing reporting, SEC compliance, subsequent secondary listings, and acquisitions.
              </p>
              <div className="pt-3 border-t border-slate-800 text-xs text-slate-450 font-mono">
                Motto: <span className="text-[#947D5C] italic">"We build public companies."</span>
              </div>
            </div>
          </div>

          {/* Phase Detail Viewer */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhaseId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FDFBF7] rounded-none border border-[#0F172A]/10 p-6 md:p-8 shadow-none space-y-6 text-left"
              >
                {/* Header info */}
                <div className="space-y-2 border-b border-[#0F172A]/10 pb-5">
                  <span className="text-xs uppercase tracking-[0.15em] font-mono font-bold text-[#947D5C]">
                    {activePhase.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif font-light tracking-tight text-[#0F172A]">
                    {activePhase.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pt-2">
                    {activePhase.description}
                  </p>
                </div>

                {/* Sub-items Grid */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-[#947D5C] uppercase tracking-[0.2em] font-mono">
                    Core advisory scopes under this phase
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activePhase.topics.map((topic, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-2 text-slate-700 bg-[#F7F4EF]/60 p-4 rounded-none border border-[#0F172A]/10 hover:border-[#0F172A]/25 transition"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#947D5C] shrink-0 mt-0.5" />
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Callout */}
                {activePhase.deliverable && (
                  <div className="mt-6 bg-[#0F172A] text-white p-6 rounded-none border border-slate-800 shadow-none text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-[#947D5C]" />
                      <span className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#947D5C]">
                        Primary Value Deliverable
                      </span>
                    </div>
                    <p className="text-sm text-slate-200 font-serif leading-relaxed">
                      {activePhase.deliverable}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* 2. 20-STEP DEEP DIVE BLUEPRINT VIEW */}
      {viewType === "steps" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step list grouped by phase */}
          <div className="lg:col-span-5 space-y-6 h-[550px] overflow-y-auto pr-2 scrollbar-thin">
            {stepPhases.map((phaseGroup, pi) => {
              const groupSteps = BLUEPRINT_STEPS.filter(s => s.phaseName === phaseGroup);
              return (
                <div key={pi} className="space-y-2 text-left">
                  <h4 className="text-[10px] font-bold text-[#947D5C] uppercase tracking-[0.2em] bg-[#F7F4EF] py-1.5 px-3 rounded-none font-mono">
                    {phaseGroup}
                  </h4>
                  <div className="space-y-1">
                    {groupSteps.map((step) => {
                      const isActive = step.stepNumber === activeStepNum;
                      return (
                        <button
                          key={step.stepNumber}
                          onClick={() => setActiveStepNum(step.stepNumber)}
                          className={`w-full text-left px-4 py-3 rounded-none border text-xs transition flex items-center gap-3 cursor-pointer ${
                            isActive 
                              ? "bg-[#0F172A] text-white border-[#0F172A] font-semibold" 
                              : "bg-[#FDFBF7] hover:bg-[#F7F4EF] border-[#0F172A]/10 text-[#0F172A]"
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-none flex items-center justify-center text-[10px] font-mono shrink-0 ${
                            isActive ? "bg-[#947D5C] text-white" : "bg-[#0F172A]/5 text-[#947D5C]"
                          }`}>
                            {step.stepNumber}
                          </span>
                          <span className="truncate flex-1 font-sans">{step.title}</span>
                          <ChevronRight className={`w-3.5 h-3.5 opacity-50 shrink-0 ${isActive ? "text-[#947D5C]" : ""}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepNum}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0F172A] text-white rounded-none border border-slate-800 p-6 md:p-8 shadow-lg space-y-6 relative overflow-hidden text-left"
              >
                {/* Background ambient light */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-900 rounded-full blur-3xl opacity-20 -z-10"></div>

                {/* Header indicators */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-slate-900 text-[#947D5C] font-mono px-3 py-1 rounded-none border border-[#947D5C]/20 uppercase tracking-widest font-bold">
                      Step {activeStep.stepNumber} of 20
                    </span>
                    <span className="text-xs text-slate-400 font-sans font-medium">
                      {activeStep.phaseName}
                    </span>
                  </div>
                </div>

                {/* Step Title & Objective */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-serif font-light tracking-tight text-white leading-snug">
                    {activeStep.title}
                  </h3>
                  {activeStep.objective && (
                    <p className="text-sm text-slate-350 leading-relaxed italic font-serif">
                      Objective: {activeStep.objective}
                    </p>
                  )}
                </div>

                {/* Sub-topics list */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono font-bold text-[#947D5C] uppercase tracking-widest">
                    Topics & Reviews Required
                  </h4>
                  <ul className="space-y-2.5">
                    {activeStep.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span className="text-[#947D5C] font-bold shrink-0 mt-0.5">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specific Deliverable outcome */}
                {activeStep.deliverable && (
                  <div className="bg-[#0A0F1D] border border-slate-800 p-5 rounded-none mt-4">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono mb-2 tracking-wider">
                      <Target className="w-4 h-4 text-[#947D5C]" />
                      <span>KEY ADVISORY OUTCOME</span>
                    </div>
                    <p className="text-sm font-serif italic text-white">
                      {activeStep.deliverable}
                    </p>
                  </div>
                )}

                {/* Navigation helpers */}
                <div className="flex justify-between items-center pt-5 border-t border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveStepNum(prev => Math.max(1, prev - 1))}
                    disabled={activeStepNum === 1}
                    className="text-slate-400 hover:text-[#947D5C] disabled:opacity-30 disabled:hover:text-slate-400 transition cursor-pointer"
                  >
                    ← Previous Step
                  </button>
                  <button
                    onClick={() => setActiveStepNum(prev => Math.min(20, prev + 1))}
                    disabled={activeStepNum === 20}
                    className="text-slate-400 hover:text-[#947D5C] disabled:opacity-30 disabled:hover:text-slate-400 transition flex items-center gap-1 cursor-pointer"
                  >
                    Next Step →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
