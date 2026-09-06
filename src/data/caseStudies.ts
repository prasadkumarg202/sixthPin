export interface CaseStudy {
  id: string;
  slug: string;
  clientIndustry: string;
  clientType: string;
  title: string;
  summary: string;
  challenge: string;
  architecturalSolution: string;
  technologiesUsed: string[];
  metrics: {
    primary: string;
    primaryLabel: string;
    secondary: string;
    secondaryLabel: string;
    tertiary: string;
    tertiaryLabel: string;
  };
  featured: boolean;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "bfsi-claims-automation",
    slug: "tier-1-insurer-agentic-claims-automation",
    clientIndustry: "Banking & Insurance (BFSI)",
    clientType: "Fortune 500 Commercial Insurer",
    title: "Autonomous Multi-Agent Claims Triage & Fraud Verification Pipeline",
    summary: "Re-engineered a manual 12-day commercial claims verification lifecycle into a 4-minute autonomous agentic workflow with human-in-the-loop escalation.",
    challenge: "The insurer processed over 40,000 monthly claims across unstructured police reports, medical bills, and repair estimates. Manual review caused customer churn and missed subtle collusion fraud rings.",
    architecturalSolution: "Architected a multi-agent swarm using LangGraph and AWS Bedrock. An OCR Agent extracts multimodal documents, a Graph-Linker checks historical claims in Neo4j for collusion patterns, and a Policy Agent verifies coverage limits before issuing an automated settlement recommendation.",
    technologiesUsed: ["AWS Bedrock", "Claude 3.5 Sonnet", "LangGraph", "Neo4j", "FastAPI", "Terraform", "PostgreSQL"],
    metrics: {
      primary: "94%",
      primaryLabel: "Processing Time Reduction (12 days → 4 mins)",
      secondary: "$4.2M",
      secondaryLabel: "Annual Fraud Prevention Savings",
      tertiary: "99.8%",
      tertiaryLabel: "Deterministic Policy Accuracy"
    },
    featured: true
  },
  {
    id: "healthcare-clinical-rag",
    slug: "global-health-system-deterministic-clinical-rag",
    clientIndustry: "Healthcare & Life Sciences",
    clientType: "Leading Healthcare Network (32 Hospitals)",
    title: "HIPAA-Compliant GraphRAG System for Clinical Trial Matching & Protocol Synthesis",
    summary: "Built a zero-hallucination clinical knowledge platform enabling 8,000+ physicians to query 15 million EHR records and FDA guidelines with verifiable source citations.",
    challenge: "Physicians spent 3.5 hours daily cross-referencing complex oncology protocols across disjointed hospital EHRs, delaying clinical trial enrollment and treatment planning.",
    architecturalSolution: "Constructed a private-VPC GraphRAG pipeline on Microsoft Azure. All protected health information (PHI) is redacted at the edge before semantic indexing in pgvector and Neo4j. An ensemble of cross-encoder rerankers ensures zero ungrounded clinical statements.",
    technologiesUsed: ["Azure OpenAI", "pgvector", "Neo4j", "LlamaIndex", "Docker", "Kubernetes", "OpenTelemetry"],
    metrics: {
      primary: "78%",
      primaryLabel: "Time Saved on Protocol Research",
      secondary: "3.2x",
      secondaryLabel: "Increase in Trial Enrollment Velocity",
      tertiary: "0%",
      tertiaryLabel: "Ungrounded Hallucinations in Clinical QA"
    },
    featured: true
  },
  {
    id: "retail-demand-lakehouse",
    slug: "omnichannel-retailer-realtime-lakehouse-modernization",
    clientIndustry: "Retail & E-Commerce",
    clientType: "Global Retailer (1,200 Stores)",
    title: "Real-Time Lakehouse & Dynamic Pricing Engine on Databricks & Apache Kafka",
    summary: "Modernized legacy nightly batch ETL into sub-second event streaming, powering automated dynamic replenishment and hyper-personalized SKU discounting.",
    challenge: "Nightly batch processing resulted in 18-hour data lag, leading to frequent out-of-stock events during flash sales and suboptimal markdown margins.",
    architecturalSolution: "Migrated legacy Oracle data warehouses to Databricks Lakehouse with Apache Iceberg tables. Deployed Kafka event streaming for real-time POS transaction ingest and trained low-latency ML feature stores for autonomous inventory reallocation.",
    technologiesUsed: ["Databricks", "Apache Iceberg", "Apache Kafka", "dbt", "Next.js", "Go", "GCP"],
    metrics: {
      primary: "18h → 800ms",
      primaryLabel: "Data Latency Compression",
      secondary: "14.6%",
      secondaryLabel: "Gross Margin Improvement",
      tertiary: "41%",
      tertiaryLabel: "Cloud Infrastructure Cost Reduction"
    },
    featured: true
  },
  {
    id: "manufacturing-predictive-vision",
    slug: "automotive-oem-edge-vision-defect-detection",
    clientIndustry: "Manufacturing & Automotive",
    clientType: "Tier-1 Automotive Component Manufacturer",
    title: "Edge Computer Vision & Real-Time Quality Control on Factory Lines",
    summary: "Deployed lightweight multimodal vision models on edge GPUs across 6 factory floors, detecting microscopic assembly defects at line speeds of 120 units/minute.",
    challenge: "Manual optical inspection suffered from human fatigue, leading to a 2.4% defect escape rate that triggered expensive customer warranty recalls.",
    architecturalSolution: "Architected a hybrid edge-cloud pipeline. Edge NVIDIA Jetson devices run quantized TensorRT vision models for sub-30ms defect classification. Defect telemetry is streamed to AWS for continuous synthetic model retraining via active learning loops.",
    technologiesUsed: ["PyTorch", "TensorRT", "NVIDIA Jetson", "AWS IoT Core", "Kubernetes", "Kafka"],
    metrics: {
      primary: "99.94%",
      primaryLabel: "Defect Detection Accuracy",
      secondary: "88%",
      secondaryLabel: "Warranty Recall Incidents Reduced",
      tertiary: "<25ms",
      tertiaryLabel: "Per-Unit Inference Latency"
    },
    featured: false
  }
];
