import { useState } from "react";
import { CASE_STUDIES } from "../data";
import { Award, CheckCircle, TrendingUp, ChevronRight, MessageSquareCode } from "lucide-react";

export default function CaseStudiesView() {
  const [activeStudyId, setActiveStudyId] = useState("medtech");

  const study = CASE_STUDIES.find(cs => cs.id === activeStudyId) || CASE_STUDIES[0];

  return (
    <div id="case-studies-section" className="space-y-12 py-6">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
          PERFORMANCE ARCHIVE
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#0F172A]">
          Proven Success, Absolute Discretion
        </h2>
        <p className="text-base text-slate-600 leading-relaxed font-sans">
          Even when confidentiality prevents naming high-performing clients, we deliver transparent, practical results. Review how we solve cap table, US GAAP, and cross-border tax frictions.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left selector sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-3 justify-start text-left">
          <h3 className="text-[10px] font-bold text-[#947D5C] uppercase tracking-[0.2em] pl-2 mb-1 font-mono">
            Anonymized ENGAGEMENTS
          </h3>
          <div className="space-y-2">
            {CASE_STUDIES.map((cs) => {
              const isActive = cs.id === activeStudyId;
              return (
                <button
                  key={cs.id}
                  onClick={() => setActiveStudyId(cs.id)}
                  className={`w-full text-left p-5 rounded-none border transition duration-150 cursor-pointer flex flex-col ${
                    isActive
                      ? "bg-[#0F172A] text-white border-[#0F172A]"
                      : "bg-[#FDFBF7] hover:bg-[#F7F4EF] border-[#0F172A]/10 text-[#0F172A]"
                  }`}
                >
                  <h4 className="font-serif font-bold text-sm tracking-tight">{cs.companyType}</h4>
                  <p className={`text-[10px] mt-1.5 font-mono uppercase tracking-wider ${isActive ? "text-[#947D5C]" : "text-[#0F172A]/50"}`}>
                    {cs.industry}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="bg-[#F7F4EF]/70 border border-[#0F172A]/10 p-5 rounded-none mt-4 text-left">
            <h5 className="font-serif font-bold text-xs text-[#0F172A] flex items-center gap-1.5 mb-1.5">
              <Award className="w-4 h-4 text-[#947D5C]" />
              Advisor Confidentiality
            </h5>
            <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
              We respect direct non-disclosure agreements. Anonymized reports are verified replicas representing actual corporate growth achievements.
            </p>
          </div>
        </div>

        {/* Right content panel */}
        <div className="lg:col-span-8 bg-[#FDFBF7] border border-[#0F172A]/10 rounded-none p-6 md:p-8 shadow-none flex flex-col justify-between text-left">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#0F172A]/10 pb-4">
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
                  ENGAGEMENT ARCHIVE
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0F172A] tracking-tight">
                  {study.companyType}
                </h3>
              </div>
            </div>

            {/* Structured Challenge -> Solution -> Outcome */}
            <div className="space-y-6">
              {/* Challenge */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#947D5C] uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#947D5C]"></span>
                  Corporate Challenge
                </h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-3.5 font-sans border-l border-[#0F172A]/10">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#947D5C] uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#947D5C]"></span>
                  Strategic Intervention
                </h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-3.5 font-sans border-l border-[#0F172A]/10">
                  {study.solution}
                </p>
              </div>

              {/* Outcome */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#947D5C] uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#947D5C]"></span>
                  Public Market Outcome
                </h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-3.5 font-sans border-l border-[#0F172A]/10">
                  {study.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Success metrics callout banner */}
          {study.metrics && (
            <div className="mt-8 pt-6 border-t border-[#0F172A]/10 grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#F7F4EF]/60 p-5 rounded-none">
              {study.metrics.map((m, idx) => (
                <div key={idx} className="text-center space-y-1.5">
                  <CheckCircle className="w-4 h-4 text-[#947D5C] mx-auto" />
                  <span className="text-[11px] font-mono font-bold text-[#0F172A] leading-tight block uppercase tracking-wider">
                    {m}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
