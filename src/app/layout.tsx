import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "SixthPin | Enterprise AI, Autonomous Multi-Agent Systems & Cloud Engineering",
  description:
    "SixthPin is an elite enterprise digital engineering and AI platform partner. We architect production-grade multi-agent systems, modernize legacy monoliths, and scale cloud data lakehouses.",
  keywords: [
    "Enterprise AI",
    "Multi-Agent Orchestration",
    "LangGraph",
    "Generative AI",
    "GraphRAG",
    "Legacy Application Modernization",
    "Data Lakehouse",
    "Databricks",
    "Snowflake",
    "Cloud Engineering",
    "DevSecOps",
    "Kubernetes"
  ],
  authors: [{ name: "SixthPin Technologies Architecture Team" }],
  openGraph: {
    title: "SixthPin | Engineering Autonomous Enterprises",
    description:
      "Move beyond GenAI sandbox prototypes to production-grade multi-agent automation, modern lakehouses, and high-velocity cloud engineering.",
    url: "https://sixthpin.com",
    siteName: "SixthPin Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SixthPin | Enterprise AI & Digital Engineering",
    description: "Architecting autonomous digital enterprises with verifiable SLAs and deterministic AI guardrails.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SixthPin Technologies",
    url: "https://sixthpin.com",
    logo: "https://sixthpin.com/logo.png",
    description:
      "Enterprise AI, Multi-Agent Systems Orchestration, Cloud Transformation, and Digital Engineering Services.",
    sameAs: [
      "https://linkedin.com/company/sixthpin",
      "https://github.com/sixthpin"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@sixthpin.com"
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Multi-Agent Systems",
      "LangGraph",
      "Retrieval-Augmented Generation",
      "Cloud Modernization",
      "Data Lakehouse Architecture"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-blue-600 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
