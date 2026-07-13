export interface IPOPhase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  deliverable?: string;
}

export interface BlueprintStep {
  stepNumber: number;
  phaseName: string;
  title: string;
  objective?: string;
  topics: string[];
  deliverable?: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface ServiceGroup {
  id: string;
  title: string;
  iconName: string; // Used to map to Lucide icons
  description: string;
  services: ServiceDetail[];
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  challenge: string;
  solution: string;
}

export interface CaseStudy {
  id: string;
  companyType: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics?: string[];
}

export interface ResourceArticle {
  id: string;
  question: string;
  answer: string;
  readTime: string;
  category: "Costs" | "Regulation" | "Timeline" | "Strategy";
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ScorecardAnswer {
  questionId: number;
  score: number; // 0 to 15 or 20
  text: string;
}

export interface ConsultationSubmission {
  name: string;
  email: string;
  company: string;
  phone?: string;
  exchange: string;
  sector: string;
  answers: Record<string, string>;
  score: number;
}
