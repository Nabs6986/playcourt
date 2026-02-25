import { JsonLd } from "./JsonLd";

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  rating?: number;
  ratingCount?: number;
  price: string;
  url: string;
}

export function SoftwareApplicationSchema({
  name,
  description,
  rating,
  ratingCount,
  price,
  url,
}: SoftwareApplicationSchemaProps) {
  const numericPrice = price.replace(/[^0-9.]/g, "") || "0";

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: numericPrice,
      priceCurrency: "USD",
    },
    aggregateRating: rating
      ? {
          "@type": "AggregateRating",
          ratingValue: rating,
          ratingCount: ratingCount || 1,
        }
      : undefined,
    url,
  };

  return <JsonLd data={schema} />;
}
