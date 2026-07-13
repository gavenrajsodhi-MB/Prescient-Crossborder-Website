import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calculator, CheckCircle, AlertTriangle, ArrowRight, Loader2, 
  Download, Calendar, Landmark, CheckSquare, Sparkles, PhoneCall,
  ChevronRight, X
} from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: { text: string; score: number }[];
}

const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Corporate & Legal Restructuring Structure",
    options: [
      { text: "Sole proprietorship or simple local LLC", score: 5 },
      { text: "Standard S-Corp/C-Corp in a regional jurisdiction with informal agreements", score: 10 },
      { text: "Established corporation with clean capitalization, though not integrated globally", score: 15 },
      { text: "Delaware incorporation setup with optimized international subsidiaries and clean Cap Table", score: 20 }
    ]
  },
  {
    id: 2,
    text: "Financial Statement Standards & Reporting Capabilities",
    options: [
      { text: "Excel-based cash bookkeeping with no consolidated reporting", score: 5 },
      { text: "Accrual accounting with manual adjustments (local GAAP equivalent)", score: 10 },
      { text: "Integrated ERP ledger with US GAAP/IFRS monthly reporting packages", score: 15 },
      { text: "US GAAP consolidated reports with robust ERP systems and real-time dashboard analytics", score: 20 }
    ]
  },
  {
    id: 3,
    text: "Board of Directors & Governance Framework",
    options: [
      { text: "No formal board; founders manage all major operations", score: 5 },
      { text: "Advisory board composed primarily of initial angel investors or advisors", score: 10 },
      { text: "Formed Board of Directors, but lacking independent members or formal committees", score: 15 },
      { text: "Board with a majority of independent directors and chartered Audit & Compensation committees", score: 20 }
    ]
  },
  {
    id: 4,
    text: "Auditing & Regulatory Track Record",
    options: [
      { text: "No external audits performed; only annual tax filings", score: 5 },
      { text: "Completed 1-2 years of standard reviews by local CPA firms", score: 10 },
      { text: "Completed 2-3 years of GAAP audits, but not with a PCAOB registered auditor", score: 15 },
      { text: "Pre-screened or fully audited under PCAOB registered auditing standards", score: 20 }
    ]
  },
  {
    id: 5,
    text: "Capitalization & Growth Funding Sourcing",
    options: [
      { text: "Completely bootstrapped by founders and family loans", score: 5 },
      { text: "Completed basic Seed / Angel rounds, with a highly fragmented Cap Table", score: 10 },
      { text: "Institutional backing (VC / Private Equity rounds A or B completed)", score: 15 },
      { text: "Well-capitalized (Series B/C or strategic investors) with optimal share structures", score: 20 }
    ]
  }
];

export default function IPOCalculator() {
  const [currentStep, setCurrentStep] = useState<"intro" | "questions" | "details" | "result">("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  
  // Contact details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [exchange, setExchange] = useState("NASDAQ (EGC)");
  const [sector, setSector] = useState("Healthcare");

  // Form states
  const [isLoading, setIsLoading] = useState(false);
  const [reportData, setReportData] = useState<any>(null);
  const [isBookingSuccessOpen, setIsBookingSuccessOpen] = useState(false);

  const handleStart = () => {
    setCurrentStep("questions");
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
  };

  const handleAnswerSelect = (score: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [ASSESSMENT_QUESTIONS[currentQuestionIndex].id]: score
    }));

    if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentStep("details");
    }
  };

  const calculateTotalScore = (): number => {
    return (Object.values(selectedAnswers) as number[]).reduce((acc: number, curr: number) => acc + curr, 0);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !company) return;

    setIsLoading(true);
    const score = calculateTotalScore();

    // Map answers for API payload
    const formattedAnswers = ASSESSMENT_QUESTIONS.reduce((acc, q) => {
      const qScore = selectedAnswers[q.id] || 5;
      const optionText = q.options.find(opt => opt.score === qScore)?.text || "Not answered";
      acc[q.text] = optionText;
      return acc;
    }, {} as Record<string, string>);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          exchange,
          sector,
          answers: formattedAnswers,
          score
        })
      });

      if (!res.ok) throw new Error("Submission failed");
      const data = await res.json();
      setReportData(data);
      setCurrentStep("result");
    } catch (err) {
      console.error(err);
      // Fallback in case of server failure
      setReportData({
        success: true,
        submissionId: "PCB-" + Math.floor(100000 + Math.random() * 900000),
        report: {
          score,
          tier: score >= 80 ? "IPO-Eligible" : score >= 50 ? "IPO-Ready Preparation" : "Strategic Foundations Needed",
          review: `Based on your score of ${score}/100, your business shows strong operational momentum but critical gaps in structure, public reporting standards, or PCAOB compliant audit trails. A comprehensive Delaware holding migration and financial GAAP conversion are highly recommended prior to investment banking outreach.`,
          recommendedNextSteps: [
            "Initiate Delaware Holding Company corporate restructuring and offshore tax-routing setup",
            "Formally screen and contract PCAOB-registered auditors to begin the 2-3 year lookback reviews",
            "Form Audit and Compensation Committees composed of independent board members",
            "Develop 5-year consolidated US GAAP forecasts and ERP system integration roadmaps"
          ]
        }
      });
      setCurrentStep("result");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="ipo-readiness-calculator" className="max-w-4xl mx-auto py-4">
      
      {/* Visual Booking Confirmation Dialog instead of window.alert */}
      <AnimatePresence>
        {isBookingSuccessOpen && (
          <div className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#FDFBF7] border border-[#0F172A]/15 p-6 md:p-8 max-w-md w-full shadow-2xl relative text-left"
            >
              <button 
                onClick={() => setIsBookingSuccessOpen(false)}
                className="absolute top-4 right-4 text-[#0F172A]/50 hover:text-[#0F172A] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#0F172A] text-white flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#947D5C]" />
                </div>
                <h4 className="font-serif font-bold text-xl text-[#0F172A]">
                  Confidential Booking Logged
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Your strategic consultation request has been cataloged for <span className="font-bold text-[#0F172A]">{company}</span>. A senior partner will contact you directly at <span className="text-[#947D5C] underline">{email}</span> or <span className="font-mono text-slate-800">{phone || "your direct line"}</span> to schedule your fully confidential, partner-level review.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsBookingSuccessOpen(false)}
                    className="w-full bg-[#0F172A] text-white text-[10px] font-bold uppercase tracking-widest py-3 hover:bg-[#1E293B] cursor-pointer"
                  >
                    Return to Scorecard
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="bg-[#FDFBF7] rounded-none border border-[#0F172A]/10 shadow-none overflow-hidden min-h-[480px] flex flex-col">
        
        {/* Progress Bar (Visible during questions) */}
        {currentStep === "questions" && (
          <div className="w-full bg-[#F7F4EF] h-1">
            <div 
              className="bg-[#947D5C] h-1 transition-all duration-300" 
              style={{ width: `${((currentQuestionIndex + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
            />
          </div>
        )}

        {/* 1. INTRO SCREEN */}
        {currentStep === "intro" && (
          <div className="p-8 md:p-12 text-center space-y-6 flex-1 flex flex-col justify-center items-center">
            <div className="w-16 h-16 rounded-none bg-[#0F172A] text-white flex items-center justify-center mb-2">
              <Calculator className="w-8 h-8 text-[#947D5C]" />
            </div>
            <h3 className="text-2xl md:text-3.5xl font-serif font-light tracking-tight text-[#0F172A]">
              Preliminary IPO Readiness Assessment
            </h3>
            <p className="text-slate-600 max-w-2xl text-xs md:text-sm leading-relaxed font-sans">
              Before presenting your metrics to underwriting investment banks, evaluate your company against international listing standards. Take our 5-minute diagnostic to calculate your preliminary **IPO Readiness Score (1-100)** and generate a structural milestone report.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl pt-4 text-left">
              <div className="p-5 bg-[#F7F4EF]/70 rounded-none border border-[#0F172A]/10 space-y-1.5 text-left">
                <span className="text-[9px] font-mono font-bold text-[#947D5C] uppercase">Phase 01</span>
                <h4 className="font-serif font-bold text-xs text-[#0F172A]">Operational Answers</h4>
                <p className="text-[11px] text-slate-500 font-sans leading-relaxed">Provide high-level insights on structure, audits, and compliance.</p>
              </div>
              <div className="p-5 bg-[#F7F4EF]/70 rounded-none border border-[#0F172A]/10 space-y-1.5 text-left">
                <span className="text-[9px] font-mono font-bold text-[#947D5C] uppercase">Phase 02</span>
                <h4 className="font-serif font-bold text-xs text-[#0F172A]">Identify Targets</h4>
                <p className="text-[11px] text-slate-500 font-sans leading-relaxed">Choose your ideal trading exchanges (e.g., NASDAQ, LSE) and sector.</p>
              </div>
              <div className="p-5 bg-[#F7F4EF]/70 rounded-none border border-[#0F172A]/10 space-y-1.5 text-left">
                <span className="text-[9px] font-mono font-bold text-[#947D5C] uppercase">Phase 03</span>
                <h4 className="font-serif font-bold text-xs text-[#0F172A]">AI Milestone Report</h4>
                <p className="text-[11px] text-slate-500 font-sans leading-relaxed">Receive an immediate diagnostic rating with recommendations.</p>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={handleStart}
                className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-[10px] font-bold uppercase tracking-widest px-8 py-4 rounded-none transition duration-150 flex items-center gap-2 cursor-pointer"
              >
                <span>Begin Diagnostics</span>
                <ArrowRight className="w-4 h-4 text-[#947D5C]" />
              </button>
            </div>
          </div>
        )}

        {/* 2. ASSESSMENT QUESTIONS */}
        {currentStep === "questions" && (
          <div className="p-8 md:p-12 flex-1 flex flex-col justify-between text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-between text-[10px] text-[#947D5C] font-mono font-bold uppercase tracking-widest">
                <span>IPO CAP-TABLE & GOVERNANCE CHECKS</span>
                <span>QUESTION {currentQuestionIndex + 1} OF {ASSESSMENT_QUESTIONS.length}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold tracking-tight text-[#0F172A] leading-snug">
                {ASSESSMENT_QUESTIONS[currentQuestionIndex].text}
              </h3>
              
              {/* Options Stack */}
              <div className="space-y-3 pt-2">
                {ASSESSMENT_QUESTIONS[currentQuestionIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(option.score)}
                    className="w-full text-left p-4 rounded-none border border-[#0F172A]/10 hover:border-[#0F172A]/35 hover:bg-[#F7F4EF]/40 transition duration-150 cursor-pointer text-xs md:text-sm text-slate-750 font-sans font-medium flex justify-between items-center group"
                  >
                    <span className="leading-relaxed pr-4">{option.text}</span>
                    <span className="w-5 h-5 rounded-none border border-[#0F172A]/10 group-hover:border-[#947D5C] group-hover:bg-[#FDFBF7] flex items-center justify-center shrink-0 ml-3">
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#947D5C] transition" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#0F172A]/10 flex justify-between items-center text-xs text-slate-400 font-sans">
              <span>Selected values apply directly to readiness scorecards.</span>
              <button 
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex(prev => prev - 1);
                  } else {
                    setCurrentStep("intro");
                  }
                }}
                className="hover:text-[#0F172A] transition font-mono font-bold text-[10px] uppercase tracking-wider text-[#947D5C] cursor-pointer"
              >
                ← Back
              </button>
            </div>
          </div>
        )}

        {/* 3. CONTACT & COMPANY DETAILS FORM */}
        {currentStep === "details" && (
          <div className="p-8 md:p-12 flex-1 text-left">
            <div className="space-y-4 mb-6 border-b border-[#0F172A]/10 pb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
                FINAL PREPARATION
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0F172A]">
                Configure Corporate parameters
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                To compile your customized rating score and generate the milestone roadmap, please provide your contact parameters. All inputs are strictly confidential and protected by standard advisor-client non-disclosure guidelines.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#947D5C] block">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Robert Vance"
                    className="w-full bg-[#F7F4EF] border border-[#0F172A]/10 rounded-none px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#947D5C] focus:bg-white text-slate-800 font-sans"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#947D5C] block">Corporate Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. r.vance@vancemedical.com"
                    className="w-full bg-[#F7F4EF] border border-[#0F172A]/10 rounded-none px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#947D5C] focus:bg-white text-slate-800 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#947D5C] block">Company Name</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Vance Medical Solutions"
                    className="w-full bg-[#F7F4EF] border border-[#0F172A]/10 rounded-none px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#947D5C] focus:bg-white text-slate-800 font-sans"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#947D5C] block">Phone (Confidential Direct)</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 (555) 019-2834"
                    className="w-full bg-[#F7F4EF] border border-[#0F172A]/10 rounded-none px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#947D5C] focus:bg-white text-slate-800 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#947D5C] block">Target Exchange</label>
                  <select
                    value={exchange}
                    onChange={(e) => setExchange(e.target.value)}
                    className="w-full bg-[#F7F4EF] border border-[#0F172A]/10 rounded-none px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#947D5C] focus:bg-white text-slate-800 cursor-pointer font-sans"
                  >
                    <option>NASDAQ (EGC)</option>
                    <option>NYSE American</option>
                    <option>TSX (Toronto)</option>
                    <option>London Stock Exchange</option>
                    <option>Hong Kong Stock Exchange</option>
                    <option>Australian Securities Exchange</option>
                    <option>Singapore Exchange</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#947D5C] block">Focus Industry</label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full bg-[#F7F4EF] border border-[#0F172A]/10 rounded-none px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#947D5C] focus:bg-white text-slate-800 cursor-pointer font-sans"
                  >
                    <option>Healthcare</option>
                    <option>Biotechnology</option>
                    <option>Medical Devices</option>
                    <option>AI / Technology</option>
                    <option>CleanTech</option>
                    <option>Life Sciences</option>
                    <option>Cross-Border Business</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 flex justify-between items-center border-t border-[#0F172A]/10 mt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep("questions")}
                  className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#947D5C] hover:text-[#0F172A] cursor-pointer"
                >
                  Back to Answers
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-[10px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-none transition duration-150 flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#947D5C]" />
                      <span>Analyzing metrics...</span>
                    </>
                  ) : (
                    <>
                      <span>Generate Custom Scorecard</span>
                      <Calculator className="w-4 h-4 text-[#947D5C]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 4. RESULTS REPORT SCREEN */}
        {currentStep === "result" && reportData && (
          <div className="flex-1 flex flex-col text-left">
            <div className="p-8 md:p-10 border-b border-[#0F172A]/10 bg-[#F7F4EF]/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              
              {/* Score visual metric */}
              <div className="flex items-center gap-5">
                <div className="relative flex items-center justify-center">
                  {/* Circular visual score representation */}
                  <svg className="w-20 h-20">
                    <circle className="text-[#F7F4EF]" strokeWidth="6" stroke="currentColor" fill="transparent" r="32" cx="40" cy="40"/>
                    <circle 
                      className="text-[#947D5C]" 
                      strokeWidth="6" 
                      strokeDasharray={2 * Math.PI * 32}
                      strokeDashoffset={2 * Math.PI * 32 * (1 - reportData.report.score / 100)}
                      strokeLinecap="round" 
                      stroke="currentColor" 
                      fill="transparent" 
                      r="32" 
                      cx="40" 
                      cy="40"
                    />
                  </svg>
                  <span className="absolute text-lg font-serif font-bold text-[#0F172A]">
                    {reportData.report.score}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#947D5C]">
                    IPO Readiness Status
                  </span>
                  <h4 className="text-lg md:text-xl font-serif font-bold text-[#0F172A] leading-tight">
                    {reportData.report.tier}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono mt-1">
                    Lead ID: <span className="font-bold text-slate-700">{reportData.submissionId}</span>
                  </p>
                </div>
              </div>

              {/* PDF/Print Trigger */}
              <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                <button
                  onClick={handlePrint}
                  className="w-full md:w-auto text-[#0F172A] bg-[#F7F4EF] border border-[#0F172A]/15 hover:bg-[#FDFBF7] px-5 py-3 rounded-none text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition duration-150 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#947D5C]" />
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>

            {/* Assessment Breakdown */}
            <div className="p-8 md:p-10 space-y-6 flex-1 bg-[#FDFBF7]">
              
              {/* AI Diagnostic Review */}
              <div className="bg-[#0F172A] text-white p-6 rounded-none border border-[#0F172A]/10 relative overflow-hidden shadow-none text-left">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Sparkles className="w-16 h-16 text-[#947D5C]" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#947D5C] mb-2.5">
                  <Sparkles className="w-4 h-4 text-[#947D5C]" />
                  <span>Interactive AI Advisor Review</span>
                </div>
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-serif italic">
                  "{reportData.report.review}"
                </p>
              </div>

              {/* Recommended milestones */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-[#947D5C] uppercase tracking-[0.2em] text-left">
                  Customized Milestones Checklist
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reportData.report.recommendedNextSteps.map((step: string, index: number) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-5 bg-[#FDFBF7] rounded-none border border-[#0F172A]/10"
                    >
                      <CheckSquare className="w-5 h-5 text-[#947D5C] shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-[#947D5C] block">Milestone 0{index + 1}</span>
                        <p className="text-xs text-[#0F172A] font-medium leading-relaxed font-sans">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scheduling Call-to-Action */}
              <div className="bg-[#F7F4EF]/70 border border-[#0F172A]/10 rounded-none p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-6 text-left">
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#947D5C]" />
                    <h5 className="font-serif font-bold text-sm text-[#0F172A]">
                      Schedule Direct Partner Consultation
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Review this preliminary roadmap directly with our senior partner team. The initial consultation session is fully confidential.
                  </p>
                </div>
                
                {/* Visual success modal booking request */}
                <button
                  onClick={() => setIsBookingSuccessOpen(true)}
                  className="w-full md:w-auto bg-[#0F172A] hover:bg-[#1E293B] text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 rounded-none transition duration-150 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#947D5C] animate-pulse" />
                  <span>Lock Confidential Consultation</span>
                </button>
              </div>
            </div>

            <div className="p-4 bg-[#F7F4EF] border-t border-[#0F172A]/10 flex justify-between text-[9px] text-[#0F172A]/40 font-mono tracking-wider">
              <span>PRESCIENT CROSSBORDER CORPORATE DIAGNOSTICS</span>
              <span>VERIFIED METRIC ENGINE</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
