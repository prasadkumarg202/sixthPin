export interface AssessmentOption {
  text: string;
  score: number; // 0 to 10
  pillar: "ai" | "data" | "cloud" | "engineering" | "governance";
}

export interface AssessmentQuestion {
  id: number;
  category: string;
  pillar: "ai" | "data" | "cloud" | "engineering" | "governance";
  question: string;
  explanation: string;
  options: AssessmentOption[];
}

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    category: "AI & Autonomous Agents",
    pillar: "ai",
    question: "Where does your organization currently stand with Generative AI & Autonomous Agents?",
    explanation: "Assesses your enterprise operationalization stage for LLMs and agentic workflows.",
    options: [
      { text: "Informal exploration / Individual employees using public ChatGPT/Claude", score: 2, pillar: "ai" },
      { text: "Isolated sandbox PoCs without production integration or security guardrails", score: 4, pillar: "ai" },
      { text: "1-2 production GenAI features (e.g. internal summarizer) with basic vector search", score: 7, pillar: "ai" },
      { text: "Autonomous multi-agent swarms with tool execution, persistent state & red-teaming", score: 10, pillar: "ai" }
    ]
  },
  {
    id: 2,
    category: "Data Infrastructure & Architecture",
    pillar: "data",
    question: "How is your enterprise data structured and made accessible to AI models?",
    explanation: "Evaluates whether your data foundation can support low-latency, deterministic AI retrieval.",
    options: [
      { text: "Siloed relational databases, spreadsheets, and disconnected legacy ERPs", score: 2, pillar: "data" },
      { text: "Centralized data warehouse with nightly batch ETL jobs and significant latency", score: 5, pillar: "data" },
      { text: "Unified Lakehouse (Snowflake/Databricks) with streaming pipelines and vector embeddings", score: 8, pillar: "data" },
      { text: "Decentralized Data Mesh with real-time Knowledge Graphs & automated lineage governance", score: 10, pillar: "data" }
    ]
  },
  {
    id: 3,
    category: "Cloud & Infrastructure Modernization",
    pillar: "cloud",
    question: "What is the operational maturity of your cloud and compute infrastructure?",
    explanation: "Measures scalability, automated provisioning, and GPU/workload efficiency.",
    options: [
      { text: "On-premises legacy data centers or un-optimized virtual machines", score: 2, pillar: "cloud" },
      { text: "Basic public cloud lift-and-shift with static VMs and manual deployments", score: 4, pillar: "cloud" },
      { text: "Containerized microservices running on managed Kubernetes (EKS/GKE/AKS)", score: 8, pillar: "cloud" },
      { text: "Multi-cloud GitOps with dynamic auto-scaling GPU nodes & FinOps cost optimization", score: 10, pillar: "cloud" }
    ]
  },
  {
    id: 4,
    category: "Software Engineering & Delivery Velocity",
    pillar: "engineering",
    question: "How frequently does your engineering team ship verified code to production?",
    explanation: "Gauges CI/CD automation, testing coverage, and engineering agility.",
    options: [
      { text: "Monthly or quarterly releases with heavy manual QA cycles and high rollback rates", score: 2, pillar: "engineering" },
      { text: "Bi-weekly sprints with automated unit tests but manual staging approvals", score: 5, pillar: "engineering" },
      { text: "Multiple daily deployments with automated CI/CD pipelines and 80%+ test coverage", score: 8, pillar: "engineering" },
      { text: "AI-augmented continuous delivery with synthetic regression tests & self-healing runs", score: 10, pillar: "engineering" }
    ]
  },
  {
    id: 5,
    category: "AI Governance, Security & Guardrails",
    pillar: "governance",
    question: "How do you protect enterprise data, prevent hallucinations, and ensure compliance?",
    explanation: "Assesses regulatory readiness (SOC2, HIPAA, EU AI Act) and prompt injection safety.",
    options: [
      { text: "No formal AI security policy or guardrail implementation in place", score: 1, pillar: "governance" },
      { text: "Basic company guidelines advising staff not to paste confidential customer data", score: 3, pillar: "governance" },
      { text: "Edge PII redacting, basic API key management, and vendor zero-data-retention agreements", score: 7, pillar: "governance" },
      { text: "Deterministic semantic guardrails, real-time red-teaming, and immutable audit logging", score: 10, pillar: "governance" }
    ]
  },
  {
    id: 6,
    category: "Business Alignment & ROI Tracking",
    pillar: "ai",
    question: "How are your digital engineering and AI investments tied to measurable business KPIs?",
    explanation: "Evaluates executive sponsorship and financial tracking of technology transformation.",
    options: [
      { text: "Technology initiatives are viewed as cost centers with ambiguous ROI metrics", score: 2, pillar: "ai" },
      { text: "Projects have qualitative goals but lack automated telemetry or financial attribution", score: 5, pillar: "ai" },
      { text: "Clear executive sponsorship with target KPIs (e.g. cycle time reduction, cost per query)", score: 8, pillar: "ai" },
      { text: "Full financial telemetry tracking unit economics, operational velocity, and direct revenue lift", score: 10, pillar: "ai" }
    ]
  }
];

export interface BenchmarkResult {
  overallScore: number;
  maturityTier: "Nascent" | "Emerging" | "Operational" | "Transformative";
  pillarBreakdown: {
    ai: number;
    data: number;
    cloud: number;
    engineering: number;
    governance: number;
  };
  keyGaps: string[];
  recommendedRoadmap: string[];
}

export function calculateBenchmark(answers: Record<number, AssessmentOption>): BenchmarkResult {
  let totalScore = 0;
  const pillarScores: Record<string, { sum: number; count: number }> = {
    ai: { sum: 0, count: 0 },
    data: { sum: 0, count: 0 },
    cloud: { sum: 0, count: 0 },
    engineering: { sum: 0, count: 0 },
    governance: { sum: 0, count: 0 },
  };

  Object.values(answers).forEach((option) => {
    totalScore += option.score;
    if (pillarScores[option.pillar]) {
      pillarScores[option.pillar].sum += option.score;
      pillarScores[option.pillar].count += 1;
    }
  });

  const maxPossible = Object.keys(answers).length * 10;
  const normalizedOverall = Math.round((totalScore / Math.max(maxPossible, 1)) * 100);

  const pillarNormalized = {
    ai: Math.round(((pillarScores.ai.sum / Math.max(pillarScores.ai.count * 10, 1)) * 100) || 0),
    data: Math.round(((pillarScores.data.sum / Math.max(pillarScores.data.count * 10, 1)) * 100) || 0),
    cloud: Math.round(((pillarScores.cloud.sum / Math.max(pillarScores.cloud.count * 10, 1)) * 100) || 0),
    engineering: Math.round(((pillarScores.engineering.sum / Math.max(pillarScores.engineering.count * 10, 1)) * 100) || 0),
    governance: Math.round(((pillarScores.governance.sum / Math.max(pillarScores.governance.count * 10, 1)) * 100) || 0),
  };

  let tier: BenchmarkResult["maturityTier"] = "Nascent";
  if (normalizedOverall >= 85) tier = "Transformative";
  else if (normalizedOverall >= 65) tier = "Operational";
  else if (normalizedOverall >= 40) tier = "Emerging";

  const keyGaps: string[] = [];
  const recommendedRoadmap: string[] = [];

  if (pillarNormalized.ai < 60) {
    keyGaps.push("Lack of multi-agent orchestration and deterministic execution guardrails.");
    recommendedRoadmap.push("Phase 1: Deploy a 4-week PoC-to-Production framework for high-value workflow automation.");
  }
  if (pillarNormalized.data < 60) {
    keyGaps.push("Siloed data pipelines causing high latency and inaccurate AI retrieval.");
    recommendedRoadmap.push("Phase 2: Implement a unified Lakehouse (Snowflake/Databricks) with GraphRAG entity linking.");
  }
  if (pillarNormalized.governance < 60) {
    keyGaps.push("Unprotected LLM touchpoints vulnerable to data leakage and prompt injection.");
    recommendedRoadmap.push("Phase 3: Install edge PII redaction and NeMo semantic safety fences.");
  }
  if (pillarNormalized.cloud < 60 || pillarNormalized.engineering < 60) {
    keyGaps.push("Monolithic architecture and manual deployments constraining engineering speed.");
    recommendedRoadmap.push("Phase 4: Modernize core services via Kubernetes, Terraform IaC, and GitOps pipelines.");
  }

  if (recommendedRoadmap.length === 0) {
    recommendedRoadmap.push("Scale autonomous multi-agent swarms across cross-border supply chains and automated trading operations.");
    recommendedRoadmap.push("Deploy specialized domain-adapted SLMs (Small Language Models) on private VPC infrastructure for sub-10ms inference.");
  }

  return {
    overallScore: normalizedOverall,
    maturityTier: tier,
    pillarBreakdown: pillarNormalized,
    keyGaps,
    recommendedRoadmap
  };
}
