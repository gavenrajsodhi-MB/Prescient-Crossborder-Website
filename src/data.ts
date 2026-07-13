import { IPOPhase, BlueprintStep, ServiceGroup, IndustryItem, CaseStudy, ResourceArticle } from "./types";

export const ROADMAP_PHASES: IPOPhase[] = [
  {
    id: 1,
    title: "Phase One: IPO Readiness Assessment",
    subtitle: "Objective Assessment & Pre-planning",
    description: "Before engaging investment bankers or preparing registration documents, companies need an objective assessment of their readiness to align internal capabilities with external requirements.",
    topics: [
      "Corporate Structure Analysis",
      "Business Model Scalability Verification",
      "Financial Reporting Capabilities & Quality Check",
      "Historical Financial Statement Integrity",
      "Internal Controls Audit Preparedness",
      "Governance Framework Review",
      "Board Composition & Independence Planning",
      "Executive Leadership Team Evaluation",
      "Legal Structure & Shareholder Agreements Evaluation",
      "Capitalization Table & SEC Readiness Analysis",
      "Regulatory Considerations & Risk Management Assessment"
    ],
    deliverable: "Customized IPO Readiness Scorecard and Detailed Roadmap identifying strengths, key issues, recommended priorities, estimated timelines, and anticipated costs."
  },
  {
    id: 2,
    title: "Phase Two: Building the Foundation",
    subtitle: "Corporate Structuring & Governance Setup",
    description: "An IPO begins long before filing an S-1. During this stage we assist management with creating the organizational and corporate framework expected of a top-tier public company.",
    topics: [
      "Corporate Restructuring & Share Reorganization",
      "Holding Company Formation & Delaware Corporate Structures",
      "International Subsidiary & Tax Planning Integration",
      "Capital Structure & Debt-to-Equity Optimization",
      "Employee Equity Incentive Plans (ESOP) & Share Restructuring",
      "Board Recruitment & Independent Director Selection",
      "Audit Committee Formation & Board Committee Charters Development",
      "Corporate Governance Policies Drafting",
      "Executive Compensation Planning & Risk Management Frameworks"
    ],
    deliverable: "A fully optimized corporate and governance structure designed for long-term growth rather than simply satisfying minimum listing requirements."
  },
  {
    id: 3,
    title: "Phase Three: Financial Readiness",
    subtitle: "Accounting, Auditing & Internal Controls Setup",
    description: "Sophisticated investors expect accurate financial reporting, reliable forecasting, and transparent governance. We help management prepare financial operations that satisfy public company standards.",
    topics: [
      "Financial Modeling & 3-to-5-Year Detailed Forecasts",
      "Budget Development & Cash Flow Planning Systems",
      "PCAOB Audit Preparation (Pre-Audit readiness checks)",
      "Accounting Policy Development (GAAP / IFRS conversions)",
      "Internal Controls Framework & SOX Preparation",
      "ERP System Implementation & Upgrade Coordination",
      "Monthly Reporting Packages & Management Dashboards Setup",
      "Key Performance Indicators (KPIs) Tracking Systems",
      "Board Reporting & Finance Department Competency Development"
    ],
    deliverable: "CFO-level financial systems, audited/pre-audited financial reports, and forecasting models capable of supporting institutional investor due diligence."
  },
  {
    id: 4,
    title: "Phase Four: Capital Raising",
    subtitle: "Evaluating & Pursuing Pre-IPO Financing",
    description: "Preparing for an IPO frequently requires raising growth capital before entering the public markets. We assist companies in evaluating, pricing, and executing strategic funding alternatives.",
    topics: [
      "Seed Financing & Angel Investor Advisory",
      "Venture Capital (VC) & Private Equity (PE) Sourcing",
      "Family Offices & Strategic Partnerships Coordination",
      "Convertible Notes, SAFE, and Bridge Financing Structures",
      "Strategic Investors Identification & Negotiation Support",
      "PIPE (Private Investment in Public Equity) Structuring",
      "Investor Pitch Coaching & Management Credibility Building"
    ],
    deliverable: "Structured, non-dilutive, or strategic capital injection to fund expansion and finance listing costs while positioning leadership for public markets."
  },
  {
    id: 5,
    title: "Phase Five: Managing the IPO Process",
    subtitle: "Selecting & Coordinating the IPO Team",
    description: "An IPO involves coordinating multiple elite professional firms working toward a common objective. Rather than letting the process become fragmented, we manage timelines, accountability, and coordination.",
    topics: [
      "Investment Bank / Underwriter Selection & Negotiation",
      "Securities Attorney Selection & Engagement Coordination",
      "Independent PCAOB Auditor Integration",
      "Transfer Agent & EDGAR Filing Agent Engagement",
      "Investor Relations (IR) Firm Selection",
      "Valuation Specialists & Compensation Consultants Sourcing",
      "Financial Printers & D&O Insurance Providers Coordination"
    ],
    deliverable: "Assembled and fully unified syndicate and professional support network with a centralized, accountable master schedule."
  },
  {
    id: 6,
    title: "Phase Six: Executing the IPO",
    subtitle: "Filing, Roadshow, Pricing & Listing Day",
    description: "During the offering process, we guide and support management through every major milestone. We lead the execution with disciplined preparation to ensure a successful listing.",
    topics: [
      "Due Diligence Coordination & Virtual Data Room (VDR) Management",
      "S-1 / F-1 Registration Statement Drafting & Exhibits Support",
      "SEC Comment Coordination & Amending Filings",
      "Business Plan Refinement & Financial Model Packaging",
      "Investor Presentation Coaching & Roadshow Materials Drafting",
      "Management Q&A / Interview Preparation (Mock Q&As)",
      "Pricing, Share Allocation, and Closing Coordination",
      "Exchange Listing Coordination (NASDAQ Bell-Ringing Ceremony)",
      "Investor Announcements & Initial Public Communications"
    ],
    deliverable: "Seamless listing execution, optimal valuation pricing, and a memorable Listing Day ceremony capturing global market attention."
  },
  {
    id: 7,
    title: "Phase Seven: Life as a Public Company",
    subtitle: "Compliance, Growth, & Investor Value",
    description: "Going public is not the end of the journey; it is the beginning of a new level of accountability. Our unique strength is our commitment to staying with clients for years to secure long-term public success.",
    topics: [
      "Quarterly (10-Q/6-K) and Annual (10-K/20-F) Reports Preparation",
      "Board of Directors Meetings & Audit/Compensation Committee Oversight",
      "Ongoing Corporate Governance Compliance (NASDAQ & NYSE rules)",
      "Investor Relations Maintenance & Analyst Communications",
      "Internal Controls Maintenance & Public Disclosures Strategy",
      "Secondary Offerings & Follow-on Capital Financings Sourcing",
      "Acquisition Strategy (M&A) & International Expansion Advisory",
      "Long-Term Strategic Planning & ESG Initiatives Structuring"
    ],
    deliverable: "A respected, well-governed public company positioned for sustained growth, market liquidity, and long-term shareholder value creation."
  }
];

export const BLUEPRINT_STEPS: BlueprintStep[] = [
  // Phase I
  {
    stepNumber: 1,
    phaseName: "Phase I – Strategic Foundation",
    title: "Initial Consultation",
    objective: "Understand your company, goals, timeline, and financing needs.",
    topics: ["Business overview", "Growth strategy", "Management objectives", "Current capitalization", "Potential listing exchange", "Estimated timeline"],
    deliverable: "Preliminary IPO Assessment"
  },
  {
    stepNumber: 2,
    phaseName: "Phase I – Strategic Foundation",
    title: "IPO Readiness Assessment",
    objective: "Evaluate whether the company is ready to begin the IPO journey.",
    topics: ["Business model evaluation", "Financial reporting quality", "Management team capabilities", "Corporate governance standards", "Legal structures & encumbrances", "Technology systems audit", "Operational scalability check"],
    deliverable: "IPO Readiness Score (1–100)"
  },
  {
    stepNumber: 3,
    phaseName: "Phase I – Strategic Foundation",
    title: "Strategic IPO Roadmap",
    objective: "Develop a customized roadmap to guide subsequent corporate preparation.",
    topics: ["Detailed execution timeline", "Critical milestones tracking", "Detailed advisor/process budget", "Advisors required listing", "Capital requirements evaluation", "Risk identification & mitigation", "Exit strategy options"],
    deliverable: "18–36 Month IPO Plan"
  },
  // Phase II
  {
    stepNumber: 4,
    phaseName: "Phase II – Corporate Preparation",
    title: "Corporate Structure",
    objective: "Establish an investor-favorable legal entity framework.",
    topics: ["Holding company formation", "Subsidiaries reorganization", "International entities structuring", "Delaware incorporation optimization", "Tax efficiency planning", "ESOP structure creation", "Cap table clean-up"],
    deliverable: "Optimized corporate structure"
  },
  {
    stepNumber: 5,
    phaseName: "Phase II – Corporate Preparation",
    title: "Governance",
    objective: "Establish public-standard corporate oversight and protection.",
    topics: ["Board of Directors composition", "Independent Directors selection", "Audit Committee establishment", "Compensation Committee establishment", "Governance Committee establishment", "Corporate policies drafting", "Code of Ethics formulation", "Insider Trading Policy drafting", "Whistleblower Policy implementation"],
    deliverable: "Charter documents and governance policies"
  },
  {
    stepNumber: 6,
    phaseName: "Phase II – Corporate Preparation",
    title: "Financial Readiness",
    objective: "Prepare the accounting systems for public reporting pressure.",
    topics: ["Historical financial statements audit preparation", "Accounting systems upgrades", "ERP installation/reconfiguration", "Internal controls design", "Budget process formalization", "Cash flow reporting structure", "Financial forecasting engines", "KPI definitions", "PCAOB audit readiness"],
    deliverable: "Public-ready accounting infrastructure"
  },
  {
    stepNumber: 7,
    phaseName: "Phase II – Corporate Preparation",
    title: "Valuation Strategy",
    objective: "Determine pricing dynamics and capital needs.",
    topics: ["Enterprise value calculations", "Capital requirements forecasting", "Pre-money valuation scenarios", "Post-money valuation scenarios", "Share pricing strategies", "IPO valuation strategic positioning"],
    deliverable: "IPO Valuation Strategy Document"
  },
  // Phase III
  {
    stepNumber: 8,
    phaseName: "Phase III – Building the IPO Team",
    title: "Select Advisors",
    objective: "Coordinate and hire top-tier professionals for the syndicate.",
    topics: ["Investment Bank / Lead Underwriter", "Securities Attorney", "PCAOB Certified Auditor", "Transfer Agent", "Investor Relations Firm", "Financial Printer", "EDGAR Filing Agent", "D&O Insurance Providers", "Compensation Consultants", "Valuation Firm"],
    deliverable: "Unified, fully contracted advisory syndicate"
  },
  {
    stepNumber: 9,
    phaseName: "Phase III – Building the IPO Team",
    title: "Due Diligence",
    objective: "Perform comprehensive internal vetting before investor inspection.",
    topics: ["Corporate documents collection", "Contract review & verification", "Intellectual Property validation", "Employment agreements audit", "Customer contracts verification", "Financial records scrubbing", "Tax returns audit", "Board minutes verification", "Litigation history review", "Virtual Data Room (VDR) setup"],
    deliverable: "Populated and verified Virtual Data Room (VDR)"
  },
  {
    stepNumber: 10,
    phaseName: "Phase III – Building the IPO Team",
    title: "Business Plan & Equity Story",
    objective: "Develop a compelling investment narrative for the public markets.",
    topics: ["Why this company?", "Why now?", "Why this market?", "Why this management team?", "Why will institutional investors care?"],
    deliverable: "Core Equity Story Deck"
  },
  // Phase IV
  {
    stepNumber: 11,
    phaseName: "Phase IV – Capital Markets",
    title: "Pre-IPO Financing",
    objective: "Secure necessary growth and transition capital.",
    topics: ["Angel Investors & VC outreach", "Private Equity (PE) networks", "Family Offices allocations", "Strategic Investors selection", "Convertible Notes terms", "SAFE financing", "Bridge financing structures", "PIPE financing preparation"],
    deliverable: "Secured Pre-IPO funding rounds"
  },
  {
    stepNumber: 12,
    phaseName: "Phase IV – Capital Markets",
    title: "Financial Modeling",
    objective: "Formulate public-standard financial forecasting engines.",
    topics: ["3-Year detailed forecast model", "5-Year detailed forecast model", "Sensitivity analysis under multiple scenarios", "Working capital adequacy model", "Direct cash flow forecast model", "Scenario planning variables"],
    deliverable: "Dynamic Financial Model"
  },
  {
    stepNumber: 13,
    phaseName: "Phase IV – Capital Markets",
    title: "Investor Presentation",
    objective: "Draft and design documents that capture investor interest.",
    topics: ["Corporate Presentation", "Executive Summary", "Key Fact Sheet", "Frequently Asked Questions (FAQs)", "Roadshow Deck draft", "Management Presentation coaching"],
    deliverable: "Complete Investor Roadshow Toolkit"
  },
  // Phase V
  {
    stepNumber: 14,
    phaseName: "Phase V – IPO Execution",
    title: "Registration Statement",
    objective: "Coordinate preparation of official legal disclosures.",
    topics: ["Form S-1 / F-1 prospectus drafting", "Financial statements formatting", "Risk factors disclosure drafting", "MD&A drafting", "Corporate governance descriptions", "Executive compensation disclosures", "Share ownership schedule description"],
    deliverable: "Submitted Registration Statement Draft"
  },
  {
    stepNumber: 15,
    phaseName: "Phase V – IPO Execution",
    title: "SEC Review",
    objective: "Navigate regulatory responses and revisions successfully.",
    topics: ["SEC comments review", "Formulating and drafting responses", "Filing S-1 / F-1 amendments", "Updating quarterly financials", "Disclosure improvements drafting"],
    deliverable: "SEC Clearance / Effectiveness Order"
  },
  {
    stepNumber: 16,
    phaseName: "Phase V – IPO Execution",
    title: "Roadshow",
    objective: "Execute presentations to lock in institutional orders.",
    topics: ["Presentation coaching for management", "Mock Q&A drills", "Key messaging refinement", "Investor meetings scheduling", "Order book building coordination", "Diligence feedback analysis"],
    deliverable: "Fully subscribed order book"
  },
  {
    stepNumber: 17,
    phaseName: "Phase V – IPO Execution",
    title: "Pricing & Listing",
    objective: "Conclude the transaction and celebrate listing.",
    topics: ["Pricing discovery meetings", "Share allocation planning", "Transaction closing coordination", "Exchange listing setup", "Ticker symbol reservation", "NASDAQ/NYSE Bell Ceremony", "Investor announcement release"],
    deliverable: "Successfully priced IPO & public trading debut"
  },
  // Phase VI
  {
    stepNumber: 18,
    phaseName: "Phase VI – Life as a Public Company",
    title: "Public Company Compliance",
    objective: "Comply with ongoing regulatory and disclosures oversight.",
    topics: ["Quarterly reporting (10-Q/6-K)", "Annual reports (10-K/20-F)", "Ad-hoc materiality filings (8-K)", "NASDAQ Compliance monitoring", "NYSE Compliance monitoring", "Formulating Board/Committee structures", "Independent internal controls reviews", "Investor relations outreach"],
    deliverable: "First-year compliant public operations"
  },
  {
    stepNumber: 19,
    phaseName: "Phase VI – Life as a Public Company",
    title: "Growth Through Capital Markets",
    objective: "Leverage public status to fund growth.",
    topics: ["Secondary Public Offerings", "PIPE financing rounds", "Convertible Debt issue", "Share buybacks programs", "Stock splits strategy", "Strategic M&A transactions", "International expansion implementation", "Strategic partnerships deals"],
    deliverable: "Executed secondary growth transactions"
  },
  {
    stepNumber: 20,
    phaseName: "Phase VI – Life as a Public Company",
    title: "Building Long-Term Shareholder Value",
    objective: "Align corporate operations with long-term capital preservation.",
    topics: ["Consistent financial performance strategies", "Transparent investor communications", "Robust corporate governance practices", "Strategic asset acquisitions", "Global expansion initiatives", "Innovation and product R&D support", "Optimal capital allocation structures", "ESG & Sustainability programs", "Ongoing Board effectiveness", "Long-term strategic visioning"],
    deliverable: "Highly respected, liquid public company"
  }
];

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "ipo-advisory",
    title: "IPO Advisory Services",
    iconName: "TrendingUp",
    description: "Your comprehensive advisor leading the IPO process from readiness assessment through successful transaction closure.",
    services: [
      {
        title: "IPO Readiness Assessment",
        description: "Evaluating your corporate, financial, and legal structures to locate gap opportunities.",
        bulletPoints: ["Pre-IPO audit and gap analysis", "Capitalization structure review", "Executive leadership alignment", "18-36 month milestone preparation"]
      },
      {
        title: "IPO Project Management",
        description: "Acting as the central PMO to keep multiple advisors, attorneys, and bankers moving on schedule.",
        bulletPoints: ["Syndicate master scheduler", "Advisor task tracking & accountability", "Transaction process tracking"]
      },
      {
        title: "IPO Timeline & Budgeting",
        description: "Controlling the expensive transaction process with strict timelines and clear capital allocation budgets.",
        bulletPoints: ["Comprehensive cost planning", "Underwriter commission budgeting", "Filing and registry fee control"]
      },
      {
        title: "IPO Team & Advisor Selection",
        description: "Matching your company with the perfect underwriters, PCAOB auditors, and legal counsel.",
        bulletPoints: ["Banker beauty-parade management", "Securities counsel selection", "Advisory contract negotiations"]
      }
    ]
  },
  {
    id: "cfo-advisory",
    title: "CFO Advisory Services",
    iconName: "DollarSign",
    description: "CFO-level financial leadership to prepare and support your existing finance team for the pressure of public markets.",
    services: [
      {
        title: "Fractional CFO Leadership",
        description: "Bringing elite, listing-experienced CFO leadership on a fractional basis.",
        bulletPoints: ["Strategic investor presentations support", "Capital allocation planning", "Due diligence representation"]
      },
      {
        title: "Financial Reporting & ERP Setup",
        description: "Building reporting packages that support prompt public disclosure requirements.",
        bulletPoints: ["GAAP and IFRS conversions", "ERP software upgrades selection", "Monthly reporting packages implementation"]
      },
      {
        title: "Budgeting & Forecasting",
        description: "Designing dynamic modeling engines that provide accurate 3-to-5-year projections.",
        bulletPoints: ["Detailed forecast models", "Cash flow planning templates", "Variance analysis systems"]
      },
      {
        title: "Board & KPI Reporting",
        description: "Synthesizing massive internal metrics into clean management dashboards for direct board oversight.",
        bulletPoints: ["Key performance indicators setup", "Standardized board reporting formats", "Liquidity tracking gauges"]
      }
    ]
  },
  {
    id: "capital-markets",
    title: "Capital Markets Services",
    iconName: "Coins",
    description: "Guiding companies in evaluating, pricing, and securing capital through private placements or institutional syndicates.",
    services: [
      {
        title: "Growth Capital Sourcing",
        description: "Connecting your business with top-tier private capital networks prior to listing.",
        bulletPoints: ["Private placements planning", "Venture capital and private equity sourcing", "Family offices matching"]
      },
      {
        title: "Debt & Structured Finance",
        description: "Drafting flexible convertible notes or SAFE agreements to bridge capital requirements.",
        bulletPoints: ["Convertible debt terms", "Bridge financing structures", "PIPE financing integration"]
      },
      {
        title: "Follow-on Offerings",
        description: "Helping public companies leverage listing status to access massive secondary capital rounds.",
        bulletPoints: ["Secondary offerings planning", "Strategic block-sales management", "Warrants execution advisory"]
      }
    ]
  },
  {
    id: "corporate-governance",
    title: "Corporate Governance Services",
    iconName: "Shield",
    description: "Establishing public-standard board oversight and internal controls that fulfill SEC requirements.",
    services: [
      {
        title: "Board of Directors Development",
        description: "Recruiting independent, specialized directors to populate your oversight board.",
        bulletPoints: ["Independent director screening", "Board diversity structures planning", "Director onboarding guidelines"]
      },
      {
        title: "Oversight Committee Setup",
        description: "Establishing Audit and Compensation committees with compliant structural charters.",
        bulletPoints: ["Committee charters drafting", "Oversight protocol setup", "Executive compensation audits"]
      },
      {
        title: "Internal Controls & SOX Compliance",
        description: "Fulfilling Sarbanes-Oxley (SOX) Section 404 requirements with rigorous reporting rules.",
        bulletPoints: ["SOX readiness preparation", "Internal control testing", "Whistleblower and ethical code drafting"]
      }
    ]
  },
  {
    id: "mna-advisory",
    title: "M&A Advisory Services",
    iconName: "Briefcase",
    description: "Strategic transaction guidance for cross-border buy-side, sell-side, due diligence, and valuation.",
    services: [
      {
        title: "Buy-Side & Sell-Side Advisory",
        description: "Representing buyers and sellers in multi-jurisdictional growth transactions.",
        bulletPoints: ["Target identification", "Deal structuring & pricing negotiations", "LOI & MOU coordination"]
      },
      {
        title: "Due Diligence & Valuation",
        description: "Performing rigorous corporate, legal, and tax audits to locate transaction risks.",
        bulletPoints: ["Enterprise valuation models", "Diligence checklist management", "Synergy projections evaluation"]
      },
      {
        title: "Cross-Border Integration",
        description: "Merging cross-border subsidiaries with tax-efficient Delaware or offshore holding entities.",
        bulletPoints: ["Holding company conversions", "International subsidiary optimization", "Post-merger system integration"]
      }
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "life-sciences",
    name: "Life Sciences",
    iconName: "Dna",
    description: "Empowering advanced pharmaceutical and clinical organizations to secure the massive research capital required for breakthrough discoveries.",
    challenge: "High cash-burn rates during long regulatory clinical trials, combined with highly complex patent portfolios that institutional investors find difficult to price.",
    solution: "We draft detailed R&D equity stories, structure non-dilutive bridge financing, and secure strategic healthcare-focused venture partners to support listing preparation."
  },
  {
    id: "biotech",
    name: "Biotechnology",
    iconName: "FlaskConical",
    description: "Guiding genetic, molecular, and biological innovation firms as they transition to international public markets.",
    challenge: "Pre-revenue structures requiring Early Growth Company (EGC) registration rules and extensive patent disclosures before the SEC.",
    solution: "We build valuation models based on future pipeline addressable markets and manage SEC S-1 disclosure descriptions for intellectual property."
  },
  {
    id: "medical-devices",
    name: "Medical Devices",
    iconName: "Activity",
    description: "Preparing diagnostic, therapeutic, and imaging hardware innovators to finance global commercial scaling.",
    challenge: "Multi-jurisdictional regulatory compliance (FDA/CE approvals) and physical manufacturing supply-chain scale capital requirements.",
    solution: "We optimize international corporate structures (Delaware holdings) and secure pre-IPO working capital financing via PIPE and structured convertibles."
  },
  {
    id: "healthcare",
    name: "Healthcare",
    iconName: "HeartPulse",
    description: "Guiding hospital chains, telemedicine networks, and healthcare providers to leverage public markets for consolidation.",
    challenge: "Fulfilling dense regional healthcare compliance, insurance structures, and patient privacy protections while integrating multiple acquired practices.",
    solution: "We perform pre-IPO CFO advisory to build unified financial reporting controls and integrate cash flow reporting across acquired entities."
  },
  {
    id: "ai-technology",
    name: "AI & Technology",
    iconName: "Cpu",
    description: "Supporting SaaS, machine learning, and hardware technology companies as they commercialize and scale publicly.",
    challenge: "Fast product lifecycles, massive computing/GPU capital needs, and high reliance on key technical talent which can threaten cap-table alignment.",
    solution: "We build transparent employee option plans (ESOP), draft clear growth equity narratives for tech underwriters, and evaluate valuation multipliers."
  },
  {
    id: "clean-technology",
    name: "Clean Technology",
    iconName: "Leaf",
    description: "Financing solar, battery, green energy, and carbon-capture industrial scaling through public capital pools.",
    challenge: "Heavy physical asset capital requirements (Capex) and fluctuating government subsidy risks that affect long-term forecasts.",
    solution: "We design robust 5-year budgeting models and secure green-focused institutional capital pools and strategic energy partners."
  },
  {
    id: "cross-border",
    name: "Cross-Border Businesses",
    iconName: "Globe",
    description: "Unlocking US and European exchanges for companies headquartered across Asia-Pacific and Latin America.",
    challenge: "Complying with cross-border tax withholding, foreign ownership restrictions, multi-currency reporting, and PCAOB audit oversight.",
    solution: "We establish Delaware holding companies, offshore legal structures, and lead international PCAOB auditors to streamline the dual-listing process."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "medtech",
    companyType: "Medical Device Company (Anonymized)",
    industry: "Medical Devices / Life Sciences",
    challenge: "A pre-revenue medical diagnostic hardware firm needed $45M to fund clinical trials and physical factory scaling. Their existing capitalization table was highly fragmented with angel debt, and they had no formal internal accounting controls or PCAOB audited financials.",
    solution: "Prescient Crossborder acted as the outsourced IPO advisory team. We restructured their holding company under a Delaware corporation, cleaned up the cap table by converting debt into equity, upgraded their ERP software, recruited three independent directors to form an Audit Committee, and negotiated a $15M pre-IPO mezzanine convertible round.",
    outcome: "The company successfully completed a NASDAQ listing, raising $52M at an optimal valuation. Prescient Crossborder continues to guide their quarterly SEC filings, compliance reporting, and subsequent strategic buy-side acquisition in Germany.",
    metrics: ["$52M Capital Raised", "NASDAQ Listing Achieved", "Successful Delaware Restructure", "Active Post-IPO Advisory Partner"]
  },
  {
    id: "ai-software",
    companyType: "AI Software Company (Anonymized)",
    industry: "Artificial Intelligence / Enterprise Software",
    challenge: "An APAC-based machine learning enterprise software firm with $18M in ARR wanted to list on the NYSE American exchange. They faced severe cross-border tax compliance friction, lacked US GAAP consolidated financial reporting, and had key-person talent retention risks.",
    solution: "We designed a tax-efficient offshore holding structure with a US listing entity. Our CFO Advisory team converted their international reports into US GAAP-compliant financial statements, drafted a public-standard ESOP allocation to lock in critical AI engineers, and prepared executive leadership through comprehensive roadshow presentation coaching.",
    outcome: "NYSE American listing completed successfully, trading under a highly liquid ticker symbol. Their investor roadshow was fully oversubscribed, pricing at the top of the range.",
    metrics: ["ARR Consolidated under GAAP", "Oversubscribed NYSE Listing", "100% Core Engineer ESOP Retention", "Phase 7 Ongoing Compliance Lead"]
  }
];

export const RESOURCES: ResourceArticle[] = [
  {
    id: "ipo-cost",
    question: "How Much Does an IPO Cost?",
    answer: "An IPO is a major financial transaction. Typically, total costs range from 10% to 15% of the capital raised. This includes underwriter fees (typically 3.5% to 7% of gross proceeds), legal counsel fees ($1.5M to $3M+ for both company and underwriters), independent PCAOB auditor fees ($500k to $1.5M), registration/filing fees with the SEC and exchanges, transfer agent fees, financial printing for the prospectus, and Directors & Officers (D&O) liability insurance. Prescient Crossborder specializes in coordinating these advisors, optimizing budgets to prevent cost overrun.",
    readTime: "5 min read",
    category: "Costs"
  },
  {
    id: "12-steps",
    question: "What are the Core Phases of Going Public?",
    answer: "A successful IPO relies on a highly disciplined path. It starts with (1) objective readiness evaluation, (2) formalizing corporate structure (Delaware or offshore), (3) financial system upgrades and conversions to US GAAP/IFRS, (4) establishing PCAOB audit streams, (5) recruiting independent board members, (6) drafting the S-1/F-1 registration prospectus, (7) coordinating the syndicate (Investment Bank selection), (8) executing due diligence, (9) filing and responding to SEC comments, (10) launching the investor roadshow, (11) pricing and listing coordination, and (12) transitioning into post-listing compliance. Prescient stays with you through all of these phases.",
    readTime: "7 min read",
    category: "Strategy"
  },
  {
    id: "what-is-s1",
    question: "What is an S-1 Registration Statement?",
    answer: "Form S-1 is the primary registration statement required by the SEC for US-based companies going public. It consists of two parts: Part I is the prospectus, containing detailed disclosures regarding the business model, risk factors, executive compensation, use of proceeds, financial statements, and management discussion & analysis (MD&A). Part II contains supplementary information like underwriting agreements, exhibits, and recent sales of unregistered securities. Non-US companies listing in the US file a similar Form F-1 as Foreign Private Issuers.",
    readTime: "4 min read",
    category: "Regulation"
  },
  {
    id: "nasdaq-reqs",
    question: "What are the NASDAQ Listing Requirements?",
    answer: "NASDAQ has multiple tiers (Global Select, Global, Capital Market) with distinct criteria. Generally, listing requires: (1) meeting financial metrics such as at least $4M to $15M in stockholders' equity, or specific net income or revenue thresholds, (2) a minimum bid price of $4.00, (3) at least 1 million publicly held shares, (4) a minimum of 300 to 400 round-lot shareholders, and (5) rigorous corporate governance compliance, including a board composed of a majority of independent directors and independent Audit and Compensation committees.",
    readTime: "5 min read",
    category: "Regulation"
  },
  {
    id: "ipo-duration",
    question: "How Long Does an IPO Take?",
    answer: "The complete journey from kickoff to trading day typically takes 12 to 24 months. The preparation stage (readiness, corporate restructuring, GAAP conversions, internal control audits) consumes the first 6 to 12 months. Draft registration statement preparation and auditor review takes another 3 months. Once filed, the SEC review and response process consumes 2 to 3 months. Finally, the marketing roadshow, pricing, and trading debut take 3 to 4 weeks. Thoughtful, early preparation with an advisor like Prescient Crossborder often shortens this timeline and avoids costly delays.",
    readTime: "6 min read",
    category: "Timeline"
  },
  {
    id: "what-is-pcaob",
    question: "What is a PCAOB Audit and Why is it Mandatory?",
    answer: "The Public Company Accounting Oversight Board (PCAOB) establishes strict auditing standards for public companies in the US. A standard commercial CPA audit is NOT sufficient for an IPO. A public offering requires financial statements audited by an independent CPA firm registered with the PCAOB. These audits review internal controls, revenue recognition, tax provisions, and transactions with greater scrutiny. Transitioning to PCAOB standards requires experienced financial advisory to ensure your accounting records withstand this audit level.",
    readTime: "5 min read",
    category: "Regulation"
  },
  {
    id: "min-revenue",
    question: "How Much Revenue Does a Company Need to Go Public?",
    answer: "While there is no legal minimum revenue requirement under SEC rules, public market investors typically expect a track record. For traditional companies, a recommended baseline is at least $50M to $100M+ in annual revenue, showing strong growth. However, under the Emerging Growth Company (EGC) rules, biotechnology, medical devices, and clean tech companies often list pre-revenue if they have exceptional clinical assets, breakthrough technology, and a robust capital structure. We evaluate your unique revenue and asset profile during our Initial Assessment.",
    readTime: "4 min read",
    category: "Costs"
  },
  {
    id: "what-is-sox",
    question: "What is SOX (Sarbanes-Oxley) Compliance?",
    answer: "The Sarbanes-Oxley Act of 2002 (SOX) was enacted to protect investors from financial fraud. Section 404 is the most critical part, requiring public companies to establish, maintain, and assess an adequate internal control structure and procedures for financial reporting. While smaller companies and Emerging Growth Companies (EGCs) may receive temporary phase-in exemptions from the external auditor attestation requirement, they must still design and implement robust internal controls from day one. Prescient helps you build these compliant accounting trails early.",
    readTime: "6 min read",
    category: "Regulation"
  },
  {
    id: "fractional-cfo",
    question: "What Does a Fractional CFO Do During an IPO?",
    answer: "An IPO-experienced Fractional CFO fills the expertise gap in your existing finance team. They lead the conversion of historical financials to GAAP, coordinate with PCAOB auditors, assist in drafting the financial sections (MD&A) of the prospectus, design the public-ready financial forecasting models, present your equity story to investment bank underwriters, and build board-reporting dashboards. This allows your existing accounting team to stay focused on running and growing the day-to-day operations.",
    readTime: "5 min read",
    category: "Strategy"
  },
  {
    id: "what-is-governance",
    question: "What is Corporate Governance and Board Advisory?",
    answer: "Corporate governance is the system of rules, practices, and processes by which a firm is directed and controlled. In public markets, it is a key metric of institutional trust. It requires establishing a Board of Directors with a majority of independent members, appointing specialized Audit, Compensation, and Governance committees, drafting formal charters, adopting codes of business conduct, and implementing insider-trading and whistleblower protections. We guide CEOs and boards in transitioning from private-owner rules to public-stewardship responsibilities.",
    readTime: "5 min read",
    category: "Strategy"
  }
];
