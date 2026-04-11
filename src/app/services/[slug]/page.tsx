import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import ServiceDetail from "@/components/ServiceDetail";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found — Canada Decoded" };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: "article",
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    provider: {
      "@type": "Organization",
      name: "Canada Decoded",
      url: "https://sakshamgupta20.github.io/canada-decoded",
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetail service={service} />
    </>
  );
}
