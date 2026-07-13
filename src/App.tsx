import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, Globe, ShieldCheck, Users, Milestone, ArrowRight, 
  HelpCircle, Sparkles, ChevronRight, Calculator, CheckCircle2, 
  Layers, Landmark, Flame, Send, Star, Zap, Phone 
} from "lucide-react";

// Import modular components
import IPORoadmapView from "./components/IPORoadmapView";
import IPOCalculator from "./components/IPOCalculator";
import ServicesView from "./components/ServicesView";
import IndustriesView from "./components/IndustriesView";
import ResourcesView from "./components/ResourcesView";
import CaseStudiesView from "./components/CaseStudiesView";
import AIAssistant from "./components/AIAssistant";

type NavigationTab = 
  | "home" 
  | "about" 
  | "roadmap" 
  | "services" 
  | "industries" 
  | "case-studies" 
  | "resources" 
  | "calculator";

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>("home");
  const [hoveredFlowIndex, setHoveredFlowIndex] = useState<number | null>(null);

  // IPO Lifecycle Flow Steps for Homepage Graphic
  const lifecycleSteps = [
    { title: "Private Company", desc: "Formulate business scalability and capital plans." },
    { title: "IPO Readiness", desc: "Rigorous corporate and financial gap audits." },
    { title: "Capital Raising", desc: "Secure Seed, VC, or Mezzanine growth funding." },
    { title: "Corporate Governance", desc: "Establish independent board oversight." },
    { title: "IPO Execution", desc: "Coordinate S-1 prospectus drafts & roadshows." },
    { title: "Public Company", desc: "Execute listing, ring the exchange bell, and trade." },
    { title: "Growth & M&A", desc: "Leverage public capital to acquire market competitors." },
    { title: "Secondary Offerings", desc: "Raise additional follow-on capital rounds." },
    { title: "Global Expansion", desc: "Launch dual-listings on major international exchanges." }
  ];

  // The Prescient Five Pillars
  const blueprintPillars = [
    { name: "PLAN", desc: "Determine if the company should go public.", color: "border-slate-800" },
    { name: "PREPARE", desc: "Financials, governance, structure, team.", color: "border-slate-700" },
    { name: "FINANCE", desc: "Raise growth capital.", color: "border-slate-600" },
    { name: "PUBLIC", desc: "Execute the IPO.", color: "border-slate-500" },
    { name: "PROSPER", desc: "Operate as a successful public company.", color: "border-slate-400" }
  ];

  const handleConsultationClick = () => {
    setActiveTab("calculator");
    const el = document.getElementById("main-nav");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0F172A] font-sans flex flex-col justify-between selection:bg-[#0F172A] selection:text-white antialiased">
      
      {/* Top Banner Bar */}
      <div className="bg-[#0F172A] text-white/90 py-2 px-6 text-center text-[10px] font-mono tracking-[0.2em] border-b border-[#0F172A]/10 flex items-center justify-between">
        <span className="hidden md:inline text-slate-300">PRESCIENT CROSSBORDER • GLOBAL IPO ADVISORY</span>
        <span className="mx-auto md:mx-0 font-medium">
          "WE BUILD PUBLIC COMPANIES." • GLOBAL COVERAGE (US, UK, APAC)
        </span>
        <span className="hidden md:inline text-[#947D5C] font-semibold">● ONLINE ADVISORY NODE</span>
      </div>

      {/* Primary Header Navbar */}
      <header id="main-nav" className="bg-[#FDFBF7]/95 backdrop-blur border-b border-[#0F172A]/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo Brand */}
          <button 
            onClick={() => setActiveTab("home")}
            className="flex items-center gap-3 hover:opacity-95 transition text-left cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-none bg-[#0F172A] flex items-center justify-center border border-[#0F172A]/10">
              <Landmark className="w-5 h-5 text-[#947D5C]" />
            </div>
            <div>
              <span className="font-serif font-bold text-xl text-[#0F172A] tracking-tighter block uppercase">
                Prescient <span className="text-[#947D5C] font-normal italic lowercase">Crossborder</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-[#0F172A]/50 block -mt-1">
                Trusted IPO Advisory
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Us" },
              { id: "roadmap", label: "IPO Roadmap" },
              { id: "services", label: "Advisory Services" },
              { id: "industries", label: "Industries Focus" },
              { id: "case-studies", label: "Case Studies" },
              { id: "resources", label: "Resources & Insights" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as NavigationTab)}
                className={`py-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition duration-150 cursor-pointer ${
                  activeTab === tab.id
                    ? "text-[#0F172A] border-b border-[#0F172A]"
                    : "text-[#0F172A]/50 hover:text-[#0F172A] border-b border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Core Action Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleConsultationClick}
              className={`px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-widest transition duration-150 cursor-pointer flex items-center gap-2 ${
                activeTab === "calculator"
                  ? "bg-[#947D5C] text-white"
                  : "bg-[#0F172A] hover:bg-[#1E293B] text-white"
              }`}
            >
              <Calculator className="w-4 h-4 text-[#947D5C]" />
              <span>Diagnostic</span>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="xl:hidden bg-[#F7F4EF] border-t border-[#0F172A]/10 py-2.5 px-4 overflow-x-auto flex gap-1.5 scrollbar-none scroll-smooth">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "roadmap", label: "Roadmap" },
            { id: "services", label: "Services" },
            { id: "industries", label: "Industries" },
            { id: "case-studies", label: "Cases" },
            { id: "resources", label: "Insights" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as NavigationTab)}
              className={`px-3 py-1.5 rounded-none text-[10px] font-bold uppercase tracking-[0.15em] shrink-0 transition cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#0F172A] text-white"
                  : "bg-[#FDFBF7] border border-[#0F172A]/10 text-[#0F172A]/70 hover:bg-[#F7F4EF]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Responsive Canvas Content container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            
            {/* 1. HOMEPAGE VIEW */}
            {activeTab === "home" && (
              <div className="space-y-16">
                {/* HERO BANNER SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Editorial Headline */}
                  <div className="lg:col-span-7 bg-[#FDFBF7] p-8 md:p-12 flex flex-col justify-center border border-[#0F172A]/10 rounded-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(148,125,92,0.08)_0%,transparent_70%)]"></div>
                    <span className="text-[#947D5C] font-serif italic text-xl md:text-2xl mb-4 block">
                      The Bridge to Global Capital
                    </span>
                    <h1 className="text-4xl md:text-[68px] font-serif font-light leading-[0.95] tracking-tight mb-8 text-[#0F172A]">
                      Guiding the Journey <br/>
                      <span className="italic">from Private to Public.</span>
                    </h1>
                    <p className="max-w-xl text-sm md:text-base text-slate-600 mb-10 leading-relaxed font-sans">
                      Prescient Crossborder is the trusted IPO advisor specializing in the high-stakes transition from "IPO-ready" to a flourishing public enterprise. We synchronize accounting standards, restructure international holdings, and lead roadshows on major global exchanges.
                    </p>
                    <div className="flex flex-wrap gap-4 items-center">
                      <button
                        onClick={handleConsultationClick}
                        className="bg-[#0F172A] hover:bg-[#1E293B] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition duration-150 rounded-none cursor-pointer"
                      >
                        Evaluate Readiness
                      </button>
                      <button
                        onClick={() => setActiveTab("roadmap")}
                        className="border border-[#0F172A] hover:bg-[#0F172A]/5 text-[#0F172A] px-8 py-4 text-xs font-bold uppercase tracking-widest transition duration-150 rounded-none cursor-pointer"
                      >
                        Our Track Record
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Investor Metrics & Data overlayed on bright, fresh Ocean background */}
                  <div className="lg:col-span-5 relative border border-[#0F172A]/10 rounded-none overflow-hidden h-[500px] lg:h-auto min-h-[450px] flex flex-col justify-between group">
                    {/* Background Ocean Image */}
                    <img 
                      src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80" 
                      alt="Modern vessel cruising in pristine bright blue ocean" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Ocean brightness overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-black/10"></div>
                    
                    {/* Top Accent */}
                    <div className="relative p-6 md:p-8 z-10 flex justify-between items-start">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/90 bg-[#0F172A]/30 backdrop-blur-sm px-3 py-1 border border-white/10">
                        GLOBAL MARITIME ROUTE
                      </span>
                      <div className="text-[10px] font-mono text-[#FDFBF7]/80 flex items-center gap-1.5 bg-[#947D5C]/80 backdrop-blur-sm px-2.5 py-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                        APAC-GCC-AMER CONNECTED
                      </div>
                    </div>

                    {/* Glassmorphic Metrics Card */}
                    <div className="relative p-6 md:p-8 z-10 space-y-6">
                      <div className="bg-[#FDFBF7]/90 backdrop-blur-md p-6 border border-white/20 shadow-xl space-y-6 text-left">
                        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#947D5C]">
                          PRESCIENT PERFORMANCE
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between border-b border-[#0F172A]/10 pb-3">
                            <div className="text-[10px] uppercase tracking-[0.15em] font-bold font-sans text-[#0F172A]/70">
                              Aggregate IPO Value
                            </div>
                            <div className="text-3xl font-serif font-bold italic text-[#0F172A]">$4.8B</div>
                          </div>
                          
                          <div className="flex items-center justify-between border-b border-[#0F172A]/10 pb-3">
                            <div className="text-[10px] uppercase tracking-[0.15em] font-bold font-sans text-[#0F172A]/70">
                              Public Listings Managed
                            </div>
                            <div className="text-3xl font-serif font-bold italic text-[#0F172A]">32+</div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-[10px] uppercase tracking-[0.15em] font-bold font-sans text-[#0F172A]/70">
                              Global Exchange Partners
                            </div>
                            <div className="text-3xl font-serif font-bold italic text-[#0F172A]">14</div>
                          </div>
                        </div>
                      </div>

                      {/* Editorial quote */}
                      <p className="font-serif italic text-sm text-white drop-shadow-md leading-relaxed text-left">
                        "Success in the public market is like navigating the deep ocean—demanding clear visibility, structural integrity, and perfect timing."
                      </p>
                    </div>
                  </div>
                </div>

                {/* DYNAMIC REGIONAL CORRIDORS SECTION - CHINA, VIETNAM, GCC */}
                <div className="space-y-8 bg-gradient-to-b from-[#FDFBF7] to-[#F7F4EF]/30 py-6">
                  <div className="max-w-3xl space-y-2 text-left">
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C] bg-[#947D5C]/10 px-2.5 py-1">
                      GLOBAL REGIONAL FOOTPRINT
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-[#0F172A]">
                      Strategic Cross-Border Corridors
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans">
                      Our capital market experts connect high-growth companies with dual-listing exchanges in major financial hubs. We specialize in cross-border reorganizations and regulatory requirements across the world's most dynamic trade regions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* CARD 1: CHINA */}
                    <div className="border border-[#0F172A]/10 bg-[#FDFBF7] flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#947D5C]/30 text-left">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80" 
                          alt="Greater China & Hong Kong - Beautiful sunny daytime skyline showing the financial district and Victoria Harbour" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <span className="absolute bottom-4 left-4 text-xs font-mono font-bold text-white uppercase tracking-widest bg-[#0F172A]/70 px-2 py-1">
                          EAST ASIA CORRIDOR
                        </span>
                      </div>
                      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h4 className="font-serif font-bold text-lg text-[#0F172A] tracking-tight group-hover:text-[#947D5C] transition-colors">
                            Greater China & Hong Kong
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-sans">
                            Restructuring high-tech and healthcare enterprise giants for SEC filings and dual listings. We pave direct pathways for listing on HKEX and NYSE/NASDAQ, clearing regulatory audits seamlessly.
                          </p>
                        </div>
                        <div className="pt-4 border-t border-[#0F172A]/5 space-y-2">
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-slate-400">EXCHANGES:</span>
                            <span className="text-[#0F172A] font-bold">HKEX, NASDAQ, NYSE</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-slate-400">FOCUS AREAS:</span>
                            <span className="text-[#947D5C] font-semibold">GAAP Conversions, S-1 Filings</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARD 2: VIETNAM */}
                    <div className="border border-[#0F172A]/10 bg-[#FDFBF7] flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#947D5C]/30 text-left">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" 
                          alt="Vietnam - Sunny coastal Halong Bay with pristine blue-green water and mountains" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <span className="absolute bottom-4 left-4 text-xs font-mono font-bold text-white uppercase tracking-widest bg-[#0F172A]/70 px-2 py-1">
                          SOUTHEAST ASIA CORRIDOR
                        </span>
                      </div>
                      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h4 className="font-serif font-bold text-lg text-[#0F172A] tracking-tight group-hover:text-[#947D5C] transition-colors">
                            Vietnam & ASEAN Growth
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-sans">
                            Unlocking global liquidity pools for prominent Vietnamese exporters, software developers, and green industrial logistics leaders. We build pre-IPO corporate structures for offshore investments.
                          </p>
                        </div>
                        <div className="pt-4 border-t border-[#0F172A]/5 space-y-2">
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-slate-400">EXCHANGES:</span>
                            <span className="text-[#0F172A] font-bold">SGX, NASDAQ, ASX</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-slate-400">FOCUS AREAS:</span>
                            <span className="text-[#947D5C] font-semibold">Offshore HoldCos, VC Sourcing</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARD 3: GCC */}
                    <div className="border border-[#0F172A]/10 bg-[#FDFBF7] flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#947D5C]/30 text-left">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" 
                          alt="GCC - Stunning sunny high-contrast Dubai coastal skyline with blue water" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <span className="absolute bottom-4 left-4 text-xs font-mono font-bold text-white uppercase tracking-widest bg-[#0F172A]/70 px-2 py-1">
                          MIDDLE EAST & GCC CORRIDOR
                        </span>
                      </div>
                      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h4 className="font-serif font-bold text-lg text-[#0F172A] tracking-tight group-hover:text-[#947D5C] transition-colors">
                            Gulf Cooperation Council (GCC)
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-sans">
                            Advising distinguished family offices, state-backed logistics enterprises, and technology titans across Saudi Arabia and the UAE. Establishing dual listings in New York, London, and Abu Dhabi.
                          </p>
                        </div>
                        <div className="pt-4 border-t border-[#0F172A]/5 space-y-2">
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-slate-400">EXCHANGES:</span>
                            <span className="text-[#0F172A] font-bold">LSE, ADX, DFM, NYSE</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-slate-400">FOCUS AREAS:</span>
                            <span className="text-[#947D5C] font-semibold">ADGM/DIFC Setups, Sovereign Wealth</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* THE OUTSOURCED IPO ADVISORY LIFECYCLE PATH */}
                <div className="space-y-6">
                  <div className="max-w-3xl space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
                      We become your outsourced IPO Advisory Team
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-[#0F172A]">
                      The Cross-Border IPO Lifecycle
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      An IPO is a multi-year journey of continuous accountability. Hover or click on each lifecycle milestone below to understand how Prescient Crossborder stays with you for years beyond listing.
                    </p>
                  </div>

                  {/* Horizontal/Vertical Interactive Lifecycle Path Flowchart */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
                    {lifecycleSteps.map((step, index) => {
                      const isHovered = hoveredFlowIndex === index;
                      return (
                        <div
                          key={index}
                          onMouseEnter={() => setHoveredFlowIndex(index)}
                          onMouseLeave={() => setHoveredFlowIndex(null)}
                          className={`p-5 rounded-none border text-left transition-all duration-200 relative overflow-hidden cursor-pointer ${
                            isHovered
                              ? "bg-[#0F172A] text-white border-[#0F172A] scale-103 shadow-md"
                              : "bg-[#F7F4EF]/50 border-[#0F172A]/15 text-[#0F172A]"
                          }`}
                        >
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-2 ${
                            isHovered ? "text-[#947D5C]" : "text-[#947D5C]/80"
                          }`}>
                            PHASE 0{index + 1}
                          </span>
                          <h4 className="font-serif font-bold text-sm leading-tight tracking-tight mb-2">
                            {step.title}
                          </h4>
                          <AnimatePresence>
                            {isHovered ? (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-[11px] text-slate-300 leading-relaxed mt-2"
                              >
                                {step.desc}
                              </motion.p>
                            ) : (
                              <div className="text-[11px] text-[#64748B] leading-relaxed line-clamp-2">
                                {step.desc}
                              </div>
                            )}
                          </AnimatePresence>
                          <div className={`absolute bottom-0 left-0 h-[3px] transition-all duration-200 ${isHovered ? "w-full bg-[#947D5C]" : "w-1/4 bg-[#0F172A]/20"}`}></div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* THE PRESCIENT IPO BLUEPRINT - FIVE PILLARS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0F172A] text-white p-8 md:p-12 rounded-none border border-[#0F172A]/10 shadow-lg">
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
                      The Prescient IPO Blueprint™
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-white">
                      Our Five Pillars framework
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                      A simple, structured framework designed to guide companies from early operational plan to public-market prosperity. It's a formula investors remember.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setActiveTab("roadmap")}
                        className="text-xs font-semibold uppercase tracking-[0.15em] text-[#947D5C] hover:text-white transition duration-150 flex items-center gap-1.5 cursor-pointer"
                      >
                        Explore detailed blueprint steps
                        <ChevronRight className="w-4 h-4 text-[#947D5C]" />
                      </button>
                    </div>
                  </div>

                  {/* 5 columns of chevrons/stacked bars */}
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-5 gap-3">
                    {blueprintPillars.map((pillar, idx) => (
                      <div 
                        key={idx}
                        className={`bg-[#0A0F1D] p-5 rounded-none border border-slate-800 shadow-sm space-y-2 text-left hover:scale-103 hover:border-[#947D5C] transition duration-150`}
                      >
                        <span className="text-[10px] font-mono font-bold text-[#947D5C] block">
                          0{idx + 1}
                        </span>
                        <h4 className="font-serif font-bold text-sm tracking-widest text-white uppercase">
                          {pillar.name}
                        </h4>
                        <p className="text-[11px] text-slate-450 leading-normal font-sans">
                          {pillar.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CONFIDENTIAL DIAGNOSTIC TEASER ROW */}
                <div className="bg-[#F7F4EF] rounded-none border border-[#0F172A]/10 p-8 flex flex-col md:flex-row gap-6 justify-between items-center shadow-none">
                  <div className="space-y-2 max-w-2xl text-left">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C] bg-[#0F172A]/5 border border-[#0F172A]/10 px-2 py-1">
                      Pre-Filing Diagnostic Checks
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-light tracking-tight text-[#0F172A] leading-tight">
                      Confidential IPO Readiness Scorecard (1-100)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                      Answer 5 quick multiple-choice questions on structure, accounting standards, board composition, and internal auditing. Receive an immediate AI diagnostic and printable milestones list.
                    </p>
                  </div>
                  <button
                    onClick={handleConsultationClick}
                    className="w-full md:w-auto bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-none shadow-none transition duration-150 shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Assess Readiness Now</span>
                    <Calculator className="w-4 h-4 text-[#947D5C]" />
                  </button>
                </div>

                {/* LISTING EXCHANGES GRID BAR */}
                <div className="text-center space-y-4 pt-6 border-t border-[#0F172A]/10">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
                    Trusted Dual-Listing Exchanges We Support
                  </h4>
                  <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8 text-xs font-semibold text-[#0F172A]/60 uppercase tracking-[0.15em]">
                    <span>NASDAQ (EGC)</span>
                    <span className="text-[#0F172A]/15">•</span>
                    <span>NYSE American</span>
                    <span className="text-[#0F172A]/15">•</span>
                    <span>TSX</span>
                    <span className="text-[#0F172A]/15">•</span>
                    <span>London Stock Exchange</span>
                    <span className="text-[#0F172A]/15">•</span>
                    <span>HKEX</span>
                    <span className="text-[#0F172A]/15">•</span>
                    <span>ASX</span>
                    <span className="text-[#0F172A]/15">•</span>
                    <span>SGX</span>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ABOUT US VIEW */}
            {activeTab === "about" && (
              <div className="space-y-12">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#947D5C]">
                    WHO WE ARE
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#0F172A]">
                    Guiding Vision to Public Leadership
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed font-sans">
                    Prescient Crossborder coordinates the many moving parts of an IPO while helping management continue to focus on growing the core business. Rather than acting as another consultant, we become an extension of your executive team.
                  </p>
                </div>

                {/* Immersive Panoramic Ocean Banner */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden border border-[#0F172A]/10 rounded-none group max-w-5xl mx-auto shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80" 
                    alt="Bright pristine sunny ocean harbor" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/75 to-[#0F172A]/10"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-left space-y-3">
                    <span className="text-[10px] font-mono font-bold text-[#947D5C] uppercase tracking-[0.25em]">
                      OUR NAVIGATIONAL COMPASS
                    </span>
                    <h3 className="text-xl md:text-3xl font-serif text-white max-w-lg leading-tight font-light">
                      Steering enterprises through turbulent capital waters into clear, liquid horizons.
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="bg-[#F7F4EF] p-8 rounded-none border border-[#0F172A]/10 space-y-4 text-left">
                    <Globe className="w-10 h-10 text-[#947D5C]" />
                    <h4 className="font-serif font-bold text-lg text-[#0F172A]">Cross-Border Expertise</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We specialize in cross-border reorganizations across North America and Asia-Pacific. We help set up Delaware holdings and tax-routing subsidiaries.
                    </p>
                  </div>
                  <div className="bg-[#F7F4EF] p-8 rounded-none border border-[#0F172A]/10 space-y-4 text-left">
                    <ShieldCheck className="w-10 h-10 text-[#947D5C]" />
                    <h4 className="font-serif font-bold text-lg text-[#0F172A]">CFO-Level Leadership</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Our fractional CFOs bring years of listing experience. We coordinate US GAAP/IFRS conversions, PCAOB certified audits, and SOX preparation.
                    </p>
                  </div>
                  <div className="bg-[#F7F4EF] p-8 rounded-none border border-[#0F172A]/10 space-y-4 text-left">
                    <Users className="w-10 h-10 text-[#947D5C]" />
                    <h4 className="font-serif font-bold text-lg text-[#0F172A]">Enduring Partnerships</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      An IPO is not a transaction; it's a structural transformation. We stay engaged during Phase 7 to lead ongoing board compliance, disclosures, and M&A.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0F172A] text-white rounded-none p-8 md:p-12 max-w-4xl mx-auto border border-[#0F172A]/10 shadow-lg text-left grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-serif font-light tracking-tight text-white">
                      Why Companies Partner with Prescient Crossborder
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Taking a company public is one of the most significant milestones in its history. It requires much more than preparing regulatory filings. It demands careful planning, experienced leadership, and a deep understanding of capital markets.
                    </p>
                  </div>
                  <ul className="space-y-4 text-xs text-slate-200">
                    <li className="flex items-start gap-3">
                      <span className="text-[#947D5C] font-bold text-sm">•</span>
                      <span>Established relationships with investment banks, legal counsel, PCAOB auditors, IR firms, and capital providers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#947D5C] font-bold text-sm">•</span>
                      <span>Practical, hands-on execution rather than theoretical consulting slide decks.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#947D5C] font-bold text-sm">•</span>
                      <span>Deep experience in corporate governance, board recruitment, and board oversight.</span>
                    </li>
                  </ul>
                </div>

                {/* Slogan card */}
                <div className="text-center py-8">
                  <div className="text-3xl md:text-4xl font-serif italic text-[#0F172A] tracking-tight">
                    "We build public companies."
                  </div>
                </div>
              </div>
            )}

            {/* 3. ROADMAP VIEW */}
            {activeTab === "roadmap" && (
              <IPORoadmapView />
            )}

            {/* 4. SERVICES VIEW */}
            {activeTab === "services" && (
              <ServicesView />
            )}

            {/* 5. INDUSTRIES VIEW */}
            {activeTab === "industries" && (
              <IndustriesView />
            )}

            {/* 6. CASE STUDIES VIEW */}
            {activeTab === "case-studies" && (
              <CaseStudiesView />
            )}

            {/* 7. RESOURCES & INSIGHTS VIEW */}
            {activeTab === "resources" && (
              <ResourcesView />
            )}

            {/* 8. CALCULATOR ASSESSMENT VIEW */}
            {activeTab === "calculator" && (
              <IPOCalculator />
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Interactive AI Advisor Widg      {/* Corporate Premium Footer */}
      <footer className="bg-[#F7F4EF] text-[#0F172A] border-t border-[#0F172A]/10 pt-16 pb-10 px-6 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-left">
          
          {/* Column 1: Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-[#0F172A] flex items-center justify-center text-white">
                <Landmark className="w-4.5 h-4.5 text-[#947D5C]" />
              </div>
              <span className="font-serif font-bold text-base tracking-tight text-[#0F172A] uppercase">
                Prescient <span className="text-[#947D5C] font-normal italic lowercase">Crossborder</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-sans">
              The trusted IPO advisor guiding global companies from being "IPO-ready" through becoming a successful public company. Partner-level CFO, financial, governance, and capital markets advisory.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-mono text-[#947D5C]">
              <span>PHASE 01: Audit & Prep</span>
              <span className="opacity-40">•</span>
              <span>PHASE 02: Strategic Roadshow</span>
              <span className="opacity-40">•</span>
              <span>PHASE 03: Post-IPO Alpha</span>
            </div>
          </div>

          {/* Column 2: Directory Links */}
          <div className="space-y-3">
            <h5 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#947D5C]">
              Advisory Focus
            </h5>
            <ul className="space-y-2 text-xs text-[#0F172A]/70">
              <li>
                <button onClick={() => setActiveTab("services")} className="hover:text-[#947D5C] transition cursor-pointer">
                  IPO Advisory
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("services")} className="hover:text-[#947D5C] transition cursor-pointer">
                  CFO Advisory
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("services")} className="hover:text-[#947D5C] transition cursor-pointer">
                  Capital Markets
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("services")} className="hover:text-[#947D5C] transition cursor-pointer">
                  Corporate Governance
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("services")} className="hover:text-[#947D5C] transition cursor-pointer">
                  M&A Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Direct */}
          <div className="space-y-4">
            <h5 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#947D5C]">
              Confidential Sourcing
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Vetted securely across North America and Asia-Pacific. Connect confidentially with our partners.
            </p>
            <div className="pt-1">
              <button
                onClick={handleConsultationClick}
                className="bg-[#0F172A] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-none hover:bg-[#1E293B] transition duration-150 cursor-pointer flex items-center gap-1.5"
              >
                <Calculator className="w-3.5 h-3.5 text-[#947D5C]" />
                <span>Begin diagnostic</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom regulatory block */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#0F172A]/10 text-[10px] text-[#0F172A]/50 space-y-4 text-left">
          <p className="leading-relaxed font-sans font-normal">
            Legal Note: Prescient Crossborder is an independent strategic corporate advisory firm. We perform management preparation, CFO advisory, corporate restructuring, and governance modeling. Prescient Crossborder is not a registered broker-dealer under FINRA or SEC rules and does not sell or distribute securities directly. Brokerage or syndicate services are cleared through fully licensed partner institutions.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-slate-500 font-mono">
            <span>© 2026 Prescient Crossborder. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
              <span>MARKET LIVE • NYSE & NASDAQ & LSE</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
