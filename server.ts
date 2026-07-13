import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize Google Gen AI client lazily
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY") {
      try {
        aiClient = new GoogleGenAI({
          apiKey: key,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            }
          }
        });
        console.log("Gemini API client initialized successfully.");
      } catch (error) {
        console.error("Failed to initialize Gemini Client:", error);
      }
    } else {
      console.warn("GEMINI_API_KEY is not configured or placeholder detected. Falling back to rule-based expert answers.");
    }
  }
  return aiClient;
}

// ---------------------- API ROUTES ----------------------

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Confidential Consultation & Scorecard Submission
app.post("/api/consultation", async (req, res) => {
  try {
    const { 
      name, 
      email, 
      company, 
      phone, 
      exchange, 
      sector, 
      answers, // array of answers to questions
      score 
    } = req.body;

    if (!name || !email || !company) {
      res.status(400).json({ error: "Missing required contact details (Name, Email, and Company are required)" });
      return;
    }

    // Generate personalized AI review/feedback if API key is available
    let aiReview = "";
    const client = getGeminiClient();
    
    if (client) {
      try {
        const prompt = `
          Analyze the following preliminary IPO assessment request for a company looking to list publicly:
          - Company: ${company}
          - Sector: ${sector || "Not Specified"}
          - Target Exchange: ${exchange || "Not Specified"}
          - Preliminary IPO Readiness Score: ${score}/100 based on initial assessment
          - Detailed Answers: ${JSON.stringify(answers || {})}

          As a senior IPO Advisor at Prescient Crossborder, provide a high-impact, professional, 3-sentence summary highlighting:
          1. Their primary challenge based on their score of ${score}
          2. A specific regulatory or structural milestone they must prioritize (e.g., PCAOB Audits, SOX, Board restructuring, Delaware Corp)
          3. How Prescient Crossborder's full lifecycle advisory (from readiness through years after listing) will secure their long-term public success.
          
          Keep your response extremely professional, authoritative, Wall-Street-oriented, encouraging, and clear.
        `;

        const response = await client.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt,
          config: {
            systemInstruction: "You are a world-class cross-border IPO Advisory Partner at Prescient Crossborder. Your advice is precise, strategic, and practical.",
            temperature: 0.7
          }
        });

        aiReview = response.text || "";
      } catch (err) {
        console.error("Failed to generate AI consultation review:", err);
        aiReview = "An expert partner at Prescient Crossborder has been assigned to review your submission. We will examine your capital structure, governance framework, and audit preparedness.";
      }
    } else {
      // Fallback response when key is missing
      aiReview = `Based on your preliminary score of ${score}/100, your company shows key opportunities in establishing PCAOB audit readiness and a solid Delaware-holding structure. A Prescient Crossborder senior advisor will detail these in our confidential session.`;
    }

    // In a real application, this would save to a database or trigger an email.
    // We return a detailed receipt and roadmap.
    res.json({
      success: true,
      submissionId: "PCB-" + Math.floor(100000 + Math.random() * 900000),
      message: "Consultation requested successfully. A senior advisor will contact you within 24 hours.",
      submittedAt: new Date().toISOString(),
      report: {
        score,
        tier: score >= 80 ? "IPO-Eligible" : score >= 50 ? "IPO-Ready Preparation" : "Strategic Foundations Needed",
        review: aiReview.trim(),
        recommendedNextSteps: [
          score < 50 ? "Perform a rigorous corporate structure audit (Delaware transition)" : "Schedule PCAOB-compliant audit scheduling",
          score < 80 ? "Develop an offshore holding model and ESOP share allocations" : "Draft draft S-1 / F-1 registration statements",
          "Form Board Committees (Audit & Compensation) with independent directors",
          "Establish SEC-compliant internal disclosure controls and SOX preparation guidelines"
        ]
      }
    });
  } catch (error: any) {
    console.error("Consultation Submission Error:", error);
    res.status(500).json({ error: "Internal Server Error occurred during submission" });
  }
});

// Interactive AI Advisor Chat
app.post("/api/advisor/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: "Missing or invalid 'messages' array" });
      return;
    }

    const client = getGeminiClient();
    
    // Format conversation history for Gemini API
    const lastMessage = messages[messages.length - 1]?.content || "";
    
    // Create system prompt to instruct the AI
    const systemPrompt = `
      You are the "Prescient Crossborder AI IPO Advisor", a highly sophisticated, partner-level financial and legal consultant. 
      You speak with authority, clarity, and precision, using Wall Street and institutional finance terminology. 

      About Prescient Crossborder:
      - We guide companies from being "IPO-ready" through becoming a successful public company.
      - Core motto: "Your IPO is not our finish line. It is where our long-term partnership begins. We build public companies."
      - We stay with clients for YEARS—not just until the IPO closes (this is our unique strength and commitment).
      
      Target Exchanges:
      - NASDAQ (EGC), NYSE American, TSX (Toronto), London Stock Exchange, Hong Kong Stock Exchange, Australian Securities Exchange (ASX), and Singapore Exchange (SGX).

      Industries We Serve:
      - Healthcare, Biotechnology, Medical Devices, AI/Technology, CleanTech, Life Sciences, Manufacturing, and Agricultural Technology.

      Our 7-Phase IPO Journey:
      1. IPO Readiness Assessment (Corporate structure, Cap Table, Board, Audits, scorecards)
      2. Corporate Structuring / Building Foundation (Delaware holdings, option plans, ESOPs, offshore planning)
      3. Financial Readiness (Audited statements, PCAOB audits, ERPs, forecasting models, SOX preparation)
      4. Capital Raising (Seed, Series A/B, Private Equity, PIPE, Convertible debt, Strategic partners)
      5. IPO Preparation (Selecting investment banks, securities attorneys, auditors, EDGAR filing, IR)
      6. Executing the IPO (Due diligence, S-1/F-1 registration, SEC review, Roadshow coaching, listing bell)
      7. Life as a Public Company (Quarterly/annual reports, NYSE/NASDAQ compliance, M&A, secondary offerings, investor relations)

      Our Five Pillars of the Prescient IPO Blueprint™:
      1. PLAN: Determine if the company should go public.
      2. PREPARE: Address financials, governance, structure, and team.
      3. FINANCE: Raise growth capital.
      4. PUBLIC: Execute the IPO process.
      5. PROSPER: Operate as a successful, growing public company.

      Guidelines for Answers:
      - Be extremely professional, precise, and supportive. Use bullet points for structural clarity.
      - Address questions on GAAP/IFRS, PCAOB audits, S-1 vs F-1, SOX compliance, independent directors, and valuation.
      - Politely remind users that actual compliance requires formal consultations, and encourage scheduling a "Confidential IPO Readiness Consultation" using our built-in scorecard.
      - If the user asks general questions, connect them back to Prescient's years-long commitment.
    `;

    if (client) {
      try {
        // Map history to Google GenAI schema structure
        const contents = messages.map(msg => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }]
        }));

        const response = await client.models.generateContent({
          model: "gemini-3.5-flash",
          contents: contents,
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.6,
          }
        });

        res.json({ 
          role: "assistant", 
          content: response.text || "I apologize, I could not synthesize a detailed advisory report at this moment." 
        });
      } catch (err: any) {
        console.error("Gemini Generation Error:", err);
        res.status(500).json({ error: "Gemini API error occurred while processing chat" });
      }
    } else {
      // Return a highly tailored expert response system if API key is missing
      let responseText = "As your Prescient Crossborder advisor, I'm happy to help. Let's look at how we can assist you:\n\n";
      const q = lastMessage.toLowerCase();

      if (q.includes("cost") || q.includes("how much")) {
        responseText += "An IPO typically involves underwriters (3.5% to 7% of capital raised), legal fees ($1M–$3M), PCAOB auditors ($500k–$1.5M), filing, and exchange fees. Prescient Crossborder coordinates these service providers, helping reduce costs through rigorous preparation.\n\nWould you like to complete our IPO Readiness Scorecard to estimate your required roadmap?";
      } else if (q.includes("audit") || q.includes("pcaob") || q.includes("financial")) {
        responseText += "Under public standards, you must prepare financial statements compliant with PCAOB audits. This requires 2-3 years of audited financials, strong internal controls, and often an ERP upgrade. Prescient Crossborder's CFO Advisory assists your financial team in this transition.\n\nWhat is your current accounting standard (GAAP or IFRS)?";
      } else if (q.includes("delaware") || q.includes("structure") || q.includes("holding")) {
        responseText += "For US and international listings, transitioning to a Delaware Corporation or implementing an offshore holding structure is critical to optimize tax and legal frameworks. We specialize in cross-border reorganizations to ensure your structure satisfies institutional investors.";
      } else if (q.includes("s-1") || q.includes("f-1") || q.includes("sec")) {
        responseText += "The S-1 registration statement is the SEC registration filing for US companies, while F-1 is for Foreign Private Issuers (FPIs). Coordinating this requires drafting risk factors, business descriptions, MD&A, and financial exhibits. We guide your securities attorneys and bankers through this critical drafting phase.";
      } else if (q.includes("life") || q.includes("post-ipo") || q.includes("public")) {
        responseText += "Life as a public company demands quarterly (10-Q/6-K) and annual (10-K/20-F) reports, SEC disclosures, active investor relations, and rigorous corporate governance. Our core strength is our Phase 7 commitment—we guide your board and CFO through years of listing compliance, secondary offerings, and strategic M&A.";
      } else {
        responseText = `Thank you for reaching out to Prescient Crossborder. Under our "Five Pillars Blueprint" (Plan, Prepare, Finance, Public, Prosper), we provide end-to-end advisory services for listings on ${q.includes("exchange") ? "NASDAQ, NYSE, TSX, LSE, and HKEX" : "global public markets"}. 

For your query regarding "${lastMessage.substring(0, 50)}...", a senior advisor would evaluate your specific capitalization, business metrics, and listing goals. 

I highly recommend trying our **Confidential IPO Readiness Scorecard** in the dashboard to generate your custom preliminary rating and receive an 18-36 month milestone roadmap.`;
      }

      res.json({ role: "assistant", content: responseText });
    }
  } catch (error) {
    console.error("Advisor Chat Error:", error);
    res.status(500).json({ error: "Internal Server Error occurred in chat routing" });
  }
});

// ---------------------- VITE MIDDLWARE / PRODUCTION SERVING ----------------------

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Dynamic import to avoid loading Vite package in production
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static production assets from /dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Prescient Crossborder Full-Stack Server running on port ${PORT}`);
  });
}

startServer();
