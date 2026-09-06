export interface Capability {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  businessImpact: string;
  keyFeatures: string[];
  techStack: string[];
  architectureSnippet?: string;
  iconName: string;
  href: string;
}

export const capabilitiesData: Capability[] = [
  {
    id: "multi-agent-orchestration",
    title: "Multi-Agent Systems & Autonomous Swarms",
    category: "AI & Automation",
    tagline: "Autonomous execution of multi-step enterprise workflows with deterministic guardrails.",
    description: "We architect multi-agent swarms where specialized agents collaborate across CRM, ERP, and database APIs, bound by strict human-in-the-loop policies and zero-hallucination semantic fences.",
    businessImpact: "74% reduction in manual cross-department operational latency.",
    keyFeatures: [
      "Dynamic DAG workflow planning with LangGraph & CrewAI",
      "Persistent state memory across enterprise transactions",
      "Deterministic tool validation & sandbox execution",
      "Automated fallback to human operators for high-risk decisions"
    ],
    techStack: ["LangGraph", "CrewAI", "Python", "Temporal.io", "Redis", "FastAPI"],
    architectureSnippet: `User Request ──> [Orchestrator Agent] ──┬──> [Data Analyst Agent]
                                        ├──> [ERP Execution Agent]
                                        └──> [Security Red-Team Gate] ──> Verified Result`,
    iconName: "Cpu",
    href: "/services/multi-agent-systems-orchestration"
  },
  {
    id: "enterprise-rag-kg",
    title: "Enterprise RAG & Knowledge Graphs",
    category: "AI & Automation",
    tagline: "Petabyte-scale deterministic neural retrieval across siloed corporate intelligence.",
    description: "Traditional vector search suffers from semantic drift. SixthPin pairs dense vector indexing with symbolic Knowledge Graphs (GraphRAG) and hybrid rerankers to deliver 99.4% factual precision.",
    businessImpact: "Sub-second knowledge retrieval with 0% unverified citations.",
    keyFeatures: [
      "Hybrid dense-sparse retrieval (BM25 + Cohere/Voyage Embeddings)",
      "Automated Neo4j knowledge graph entity linking",
      "Hierarchical document chunking and metadata enrichment",
      "Enterprise RBAC query-time permission filtering"
    ],
    techStack: ["pgvector", "Neo4j", "Pinecone", "LlamaIndex", "LangChain", "Qdrant"],
    architectureSnippet: `Query ──> [RBAC Filter] ──> [Dense Vector + Graph Linker] ──> [Cross-Encoder Reranker] ──> Grounded Context`,
    iconName: "Network",
    href: "/services/enterprise-rag-and-knowledge-graphs"
  },
  {
    id: "legacy-modernization",
    title: "Legacy Monolith to Cloud-Native",
    category: "Digital Engineering",
    tagline: "Risk-free transformation of legacy systems into reactive, distributed microservices.",
    description: "Using the Strangler-Fig pattern, automated code transpilation, and synthetic regression suites, we modernize legacy monoliths (Java, .NET, COBOL) into high-throughput microservices.",
    businessImpact: "65% lower infrastructure TCO with zero business interruption during cutover.",
    keyFeatures: [
      "Domain-Driven Design (DDD) bounded context extraction",
      "Event-driven architecture with Apache Kafka / Redpanda",
      "Automated shadow-traffic validation and zero-downtime cutover",
      "Infrastructure as Code (Terraform) and Kubernetes Helm charts"
    ],
    techStack: ["Kubernetes", "Go", "Next.js", "Terraform", "Kafka", "Docker"],
    architectureSnippet: `Legacy Monolith ──> [API Ingress & Shadow Router] ──┬──> [Microservice A (Go)]
                                                    └──> [Microservice B (Next.js)]`,
    iconName: "Layers",
    href: "/services/legacy-application-modernization"
  },
  {
    id: "data-lakehouse",
    title: "Unified Data Lakehouse Platforms",
    category: "Data & Analytics",
    tagline: "Real-time streaming and governed analytical storage for AI-first enterprises.",
    description: "We build modern, low-latency lakehouses that unify transactional streaming with historical analytical querying, providing pristine feature stores for real-time ML and BI dashboards.",
    businessImpact: "10x query acceleration and 45% reduction in cloud compute spend.",
    keyFeatures: [
      "Delta Lake / Apache Iceberg table formatting",
      "Real-time event processing with Apache Flink and Spark",
      "Centralized governance, automated data lineage, and PII masking",
      "Automated dbt transformation pipelines with CI/CD data testing"
    ],
    techStack: ["Databricks", "Snowflake", "Apache Iceberg", "dbt", "Apache Spark", "BigQuery"],
    architectureSnippet: `Raw Streams / DB CDC ──> [Flink/Kafka] ──> [Iceberg Bronze -> Silver -> Gold] ──> [BI & Feature Store]`,
    iconName: "Database",
    href: "/services/modern-data-lakehouse-design"
  },
  {
    id: "cloud-devsecops",
    title: "Cloud FinOps & DevSecOps Engineering",
    category: "Cloud & Platform",
    tagline: "Self-healing, automated infrastructure with embedded zero-trust security.",
    description: "We design resilient multi-cloud foundations with automated GitOps deployment pipelines, dynamic GPU scheduling for AI models, and real-time FinOps cost governance.",
    businessImpact: "99.99% system availability with sub-15 minute deployment cycles.",
    keyFeatures: [
      "GitOps with ArgoCD and automated drift detection",
      "Dynamic Kubernetes node autoscaling (Karpenter) with spot GPU support",
      "Continuous compliance scanning (Trivy, SonarQube, OPA Gatekeeper)",
      "Unified observability with OpenTelemetry, Prometheus, and Datadog"
    ],
    techStack: ["AWS", "GCP", "Azure", "ArgoCD", "Terraform", "OpenTelemetry", "Datadog"],
    architectureSnippet: `Git Commit ──> [CI Lint & Security Gates] ──> [ArgoCD Sync] ──> [K8s Dynamic Cluster (Auto-scaled)]`,
    iconName: "ShieldCheck",
    href: "/services/devsecops-and-automated-cicd"
  },
  {
    id: "ai-governance",
    title: "AI Safety, Governance & Red-Teaming",
    category: "AI & Automation",
    tagline: "Deterministic security fences, prompt injection defenses, and compliance auditability.",
    description: "We implement rigorous enterprise AI guardrails that redact PII at the edge, block jailbreak/adversarial attacks, and log tamper-proof cryptographic audit trails for regulatory compliance.",
    businessImpact: "100% compliance with EU AI Act, HIPAA, and SOC2 Type II mandates.",
    keyFeatures: [
      "NeMo Guardrails & Llama-Guard real-time evaluation",
      "Deterministic regex & semantic PII scrubbing before LLM tokenization",
      "Automated adversarial penetration testing and red-teaming",
      "Granular cost caps and token rate-limiting per business unit"
    ],
    techStack: ["NeMo Guardrails", "Llama-Guard", "Presidio", "OpenTelemetry", "PostgreSQL"],
    architectureSnippet: `Inbound Prompt ──> [PII Redactor] ──> [Adversarial Guard] ──> [LLM] ──> [Output Verifier]`,
    iconName: "Lock",
    href: "/services/ai-governance-and-guardrails"
  }
];

export const enterpriseOutcomes = [
  {
    metric: "4-6 Weeks",
    label: "PoC-to-Production Velocity",
    detail: "From initial architecture blueprint to fully containerized, hardened production deployment."
  },
  {
    metric: "68%",
    label: "Operational Cycle Reduction",
    detail: "Eliminating manual data handoffs and repetitive workflow bottlenecks through agentic automation."
  },
  {
    metric: "99.4%",
    label: "Deterministic AI Accuracy",
    detail: "Grounding LLMs with Knowledge Graphs and semantic fences to eliminate hallucination risk."
  },
  {
    metric: "42%",
    label: "Cloud Compute Optimization",
    detail: "FinOps-driven microservice modernization and dynamic GPU workload provisioning."
  }
];

export const techEcosystemCategories = [
  {
    category: "AI & LLM Orchestration",
    technologies: [
      { name: "OpenAI", badge: "GPT-4o" },
      { name: "Anthropic", badge: "Claude 3.5 Sonnet" },
      { name: "Google Cloud", badge: "Gemini 1.5 Pro" },
      { name: "AWS Bedrock", badge: "Enterprise Hub" },
      { name: "LangGraph", badge: "Agentic DAG" },
      { name: "CrewAI", badge: "Multi-Agent" },
      { name: "LlamaIndex", badge: "RAG Engine" },
      { name: "Hugging Face", badge: "Open Weights" }
    ]
  },
  {
    category: "Data & Lakehouse",
    technologies: [
      { name: "Databricks", badge: "Lakehouse" },
      { name: "Snowflake", badge: "Data Warehouse" },
      { name: "Apache Iceberg", badge: "Open Table" },
      { name: "Apache Kafka", badge: "Event Streaming" },
      { name: "PostgreSQL / pgvector", badge: "Vector DB" },
      { name: "Neo4j", badge: "Knowledge Graph" },
      { name: "Pinecone", badge: "Vector Search" },
      { name: "dbt", badge: "Transformations" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    technologies: [
      { name: "Amazon Web Services", badge: "Premier Partner" },
      { name: "Google Cloud Platform", badge: "Premier Partner" },
      { name: "Microsoft Azure", badge: "Enterprise Gold" },
      { name: "Kubernetes", badge: "Orchestration" },
      { name: "Terraform", badge: "Infrastructure as Code" },
      { name: "ArgoCD", badge: "GitOps" },
      { name: "OpenTelemetry", badge: "Observability" },
      { name: "Datadog", badge: "APM & Telemetry" }
    ]
  },
  {
    category: "Modern Digital Engineering",
    technologies: [
      { name: "Next.js 15", badge: "Full-Stack Edge" },
      { name: "React 19", badge: "Frontend Engine" },
      { name: "TypeScript", badge: "Type Safety" },
      { name: "Go (Golang)", badge: "High Concurrency" },
      { name: "Python", badge: "AI Core & APIs" },
      { name: "Tailwind CSS", badge: "Design System" },
      { name: "GraphQL & gRPC", badge: "API Gateways" },
      { name: "Temporal.io", badge: "Workflow Engine" }
    ]
  }
];

export const complianceBadges = [
  { name: "SOC 2 Type II", description: "Certified Security & Operational Controls" },
  { name: "ISO 27001", description: "Information Security Management Standard" },
  { name: "HIPAA Compliant", description: "Healthcare Grade Data Protection & BAA Ready" },
  { name: "GDPR & EU AI Act", description: "Data Privacy & Algorithmic Transparency Ready" }
];
