import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { PwaRegister } from "@/components/pwa/PwaRegister";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060911" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "SixthPin | Enterprise AI, Autonomous Digital Engineering & Cloud Platforms",
  description:
    "SixthPin is an elite enterprise digital engineering and AI platform partner. We architect production-grade enterprise systems, modern lakehouses, and high-velocity cloud engineering.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SixthPin",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  keywords: [
    "Enterprise AI",
    "Digital Engineering",
    "Generative AI",
    "Modern Data Lakehouse",
    "Cloud Architecture",
    "DevSecOps",
    "Kubernetes"
  ],
  authors: [{ name: "SixthPin Technologies Team" }],
  openGraph: {
    title: "SixthPin | Accelerating Digital Business Transformation",
    description:
      "Enterprise digital engineering, modern data platforms, and practical AI solutions driving measurable enterprise ROI.",
    url: "https://sixthpin.com",
    siteName: "SixthPin Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sixthpin.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SixthPin Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SixthPin | Enterprise AI & Digital Engineering",
    description: "Accelerating digital business transformation with cloud precision and practical enterprise AI.",
    images: ["https://sixthpin.com/logo.png"],
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
    "@graph": [
      {
        "@type": "Organization",
        "name": "SixthPin Technologies",
        "url": "https://sixthpin.pages.dev",
        "logo": "https://sixthpin.pages.dev/logo.png",
        "description":
          "Enterprise AI, Cloud Transformation, and Digital Engineering Services.",
        "sameAs": [
          "https://linkedin.com/company/sixthpin",
          "https://github.com/sixthpin"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "contact@sixthpin.com"
        },
        "knowsAbout": [
          "Artificial Intelligence",
          "Digital Engineering",
          "Cloud Modernization",
          "Data Lakehouse Architecture"
        ]
      },
      {
        "@type": "VideoObject",
        "name": "SixthPin Animated Logo & Brand Introduction",
        "description": "Official brand introduction and animated logo for SixthPin - AI & Digital Engineering: Ideas to Impact.",
        "thumbnailUrl": "https://sixthpin.pages.dev/logo.png",
        "uploadDate": "2026-09-08T08:00:00+08:00",
        "contentUrl": "https://sixthpin.pages.dev/videos/sixthpin-ai-digital-engineering-logo-animation.mp4",
        "embedUrl": "https://sixthpin.pages.dev",
        "publisher": {
          "@type": "Organization",
          "name": "SixthPin",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sixthpin.pages.dev/logo.png"
          }
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden">
        <ThemeProvider>
          {children}
          {/* PWA Service Worker & Mobile Install Banner */}
          <PwaRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
