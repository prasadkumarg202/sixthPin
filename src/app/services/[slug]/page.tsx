import React from "react";
import { notFound } from "next/navigation";
import { capabilitiesData } from "@/data/capabilities";
import { ServiceDetailClient } from "@/components/services/ServiceDetailClient";

export function generateStaticParams() {
  return capabilitiesData.map((c) => ({
    slug: c.id,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const service = capabilitiesData.find(
    (c) => c.id === slug || c.href.endsWith(slug)
  );

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
