export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  iconName?: string;
}

export interface MegaMenuCategory {
  category: string;
  items: NavItem[];
}

export interface NavMenu {
  label: string;
  href?: string;
  megaMenu?: {
    type?: "standard" | "solutions-columns";
    featured?: {
      title: string;
      description: string;
      href: string;
      ctaText: string;
    };
    sections: MegaMenuCategory[];
  };
}

export const navigationData: NavMenu[] = [
  {
    label: "Solutions",
    megaMenu: {
      type: "solutions-columns",
      sections: [
        {
          category: "BY OUTCOME",
          items: [
            {
              title: "Reduce unplanned downtime",
              href: "/services/devsecops-and-automated-cicd",
              description: "Autonomous SRE and self-healing system recovery",
              iconName: "Activity",
            },
            {
              title: "Accelerate release velocity",
              href: "/services/custom-product-engineering",
              description: "AI-augmented testing and microservices CI/CD",
              iconName: "Zap",
            },
            {
              title: "Continuous compliance & GRC",
              href: "/services/ai-governance-and-guardrails",
              description: "Deterministic guardrails, SOC2 & EU AI Act audits",
              iconName: "ShieldCheck",
            },
            {
              title: "Modernize legacy cores",
              href: "/services/legacy-application-modernization",
              description: "Zero-downtime monolith to cloud-native migration",
              iconName: "Cloud",
            },
            {
              title: "Reduce cloud & operating cost",
              href: "/services/cloud-migration-and-finops",
              description: "FinOps optimization and dynamic GPU node scheduling",
              iconName: "TrendingDown",
            },
          ],
        },
        {
          category: "BY TEAM",
          items: [
            {
              title: "Engineering Leaders & CTOs",
              href: "/services/custom-product-engineering",
              description: "Outcome-driven squads shipping verified code",
              iconName: "Code2",
            },
            {
              title: "Platform & SRE Teams",
              href: "/services/kubernetes-and-serverless-platforms",
              description: "Kubernetes GitOps and multi-region resilience",
              iconName: "Server",
            },
            {
              title: "Data & AI Platform Teams",
              href: "/services/modern-data-lakehouse-design",
              description: "Databricks/Snowflake Lakehouse & GraphRAG pipelines",
              iconName: "Database",
            },
            {
              title: "Security & Risk Officers",
              href: "/services/ai-governance-and-guardrails",
              description: "Edge PII redaction and red-teaming defenses",
              iconName: "Lock",
            },
            {
              title: "Operations & Business Leads",
              href: "/services/multi-agent-systems-orchestration",
              description: "Autonomous multi-agent operational swarms",
              iconName: "Users",
            },
          ],
        },
        {
          category: "BY INDUSTRY",
          items: [
            {
              title: "Banking & Capital Markets",
              href: "/industries/banking-financial-services-insurance",
              description: "Real-time AML, fraud graphs and algorithmic credit",
              iconName: "Landmark",
            },
            {
              title: "Insurance",
              href: "/industries/banking-financial-services-insurance",
              description: "Autonomous multi-agent claims triage",
              iconName: "Shield",
            },
            {
              title: "Healthcare & Life Sciences",
              href: "/industries/healthcare-and-life-sciences",
              description: "HIPAA-compliant clinical GraphRAG retrieval",
              iconName: "HeartPulse",
            },
            {
              title: "Manufacturing & Supply Chain",
              href: "/industries/manufacturing-and-supply-chain",
              description: "Edge vision defect detection and ERP buffers",
              iconName: "Factory",
            },
            {
              title: "Telecommunications & Media",
              href: "/industries/telecom-media-and-technology",
              description: "Network telemetry triage and automated support",
              iconName: "Radio",
            },
          ],
        },
      ],
    },
  },
  {
    label: "AI & Automation",
    megaMenu: {
      type: "standard",
      featured: {
        title: "Enterprise Multi-Agent Orchestration",
        description: "Scale autonomous reasoning loops, secure tool-execution engines, and deterministic guardrails across core enterprise systems.",
        href: "/services/multi-agent-systems-orchestration",
        ctaText: "Explore Agent Architecture →",
      },
      sections: [
        {
          category: "Agentic AI & LLMs",
          items: [
            {
              title: "Multi-Agent Orchestration",
              href: "/services/multi-agent-systems-orchestration",
              description: "LangGraph, CrewAI & AutoGen frameworks with human-in-the-loop controls",
              badge: "Flagship",
              iconName: "Cpu",
            },
            {
              title: "Generative AI Engineering",
              href: "/services/generative-ai-engineering",
              description: "Custom fine-tuning, domain adaptation, and multi-modal pipeline engineering",
              iconName: "Sparkles",
            },
            {
              title: "Enterprise RAG & Knowledge Graphs",
              href: "/services/enterprise-rag-and-knowledge-graphs",
              description: "Deterministic retrieval across petabyte-scale structured & unstructured silos",
              iconName: "Network",
            },
            {
              title: "AI Governance & Guardrails",
              href: "/services/ai-governance-and-guardrails",
              description: "Zero-hallucination policies, PII anonymization, and red-teaming defenses",
              iconName: "ShieldAlert",
            },
          ],
        },
        {
          category: "Cognitive Automation",
          items: [
            {
              title: "Intelligent Document Processing (IDP)",
              href: "/services/intelligent-document-processing",
              description: "Multi-modal extraction from complex contracts, invoices, and schematics",
              iconName: "FileText",
            },
            {
              title: "Autonomous Customer Support Agents",
              href: "/services/autonomous-customer-support",
              description: "Tier-1/2 resolution bots with deterministic CRM & transactional API execution",
              iconName: "Bot",
            },
            {
              title: "AI Software Engineering (DevOps AI)",
              href: "/services/ai-software-engineering",
              description: "Automated test synthesis, legacy code transpilations, and PR validation bots",
              iconName: "Terminal",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Digital Engineering",
    megaMenu: {
      type: "standard",
      featured: {
        title: "Legacy-to-Cloud Transformation",
        description: "Decompose monolithic architectures into event-driven, containerized microservices with zero downtime.",
        href: "/services/legacy-application-modernization",
        ctaText: "Modernization Blueprint →",
      },
      sections: [
        {
          category: "Modern Software Systems",
          items: [
            {
              title: "Custom Product Engineering",
              href: "/services/custom-product-engineering",
              description: "High-throughput, reactive SaaS platforms built with Next.js, Node & Go",
              iconName: "Layers",
            },
            {
              title: "Legacy Modernization",
              href: "/services/legacy-application-modernization",
              description: "Strangler-fig migrations, COBOL/.NET refactoring to cloud-native stacks",
              iconName: "RefreshCw",
            },
            {
              title: "Microservices & API Gateways",
              href: "/services/microservices-and-api-architecture",
              description: "High-concurrency GraphQL and gRPC distributed architectures",
              iconName: "Network",
            },
          ],
        },
        {
          category: "Quality & Platform",
          items: [
            {
              title: "Synthetic QA & Test Automation",
              href: "/services/qa-automation-and-synthetic-testing",
              description: "AI-generated test suites with 99.8% coverage and self-healing test runs",
              iconName: "CheckCircle2",
            },
            {
              title: "Cloud-Native Infrastructure",
              href: "/services/kubernetes-and-serverless-platforms",
              description: "Multi-tenant Kubernetes, Terraform IaC, and ArgoCD GitOps pipelines",
              iconName: "Server",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Data & Cloud",
    megaMenu: {
      type: "standard",
      sections: [
        {
          category: "Enterprise Data Platforms",
          items: [
            {
              title: "Data Lakehouse Engineering",
              href: "/services/modern-data-lakehouse-design",
              description: "Unified Snowflake, Databricks & BigQuery transactional analytics",
              iconName: "Database",
            },
            {
              title: "Real-Time Streaming Pipelines",
              href: "/services/real-time-streaming-pipelines",
              description: "Sub-second event ingestion using Apache Kafka, Flink & Redpanda",
              iconName: "Zap",
            },
            {
              title: "Data Mesh & Metadata Governance",
              href: "/services/data-mesh-and-governance",
              description: "Decentralized domain data products with automated lineage & RBAC",
              iconName: "Shield",
            },
          ],
        },
        {
          category: "Cloud Engineering",
          items: [
            {
              title: "Cloud Migration & FinOps",
              href: "/services/cloud-migration-and-finops",
              description: "Predictable, multi-cloud cost governance and workload migration",
              iconName: "TrendingDown",
            },
            {
              title: "DevSecOps & SRE",
              href: "/services/devsecops-and-automated-cicd",
              description: "Zero-trust automated security gates, observability, and chaos engineering",
              iconName: "Lock",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Company",
    href: "/company/about",
  },
];
