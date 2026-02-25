import { JsonLd } from "./JsonLd";

interface ReviewSchemaProps {
  name: string;
  reviewBody: string;
  ratingValue: number;
  softwareName: string;
  softwareUrl: string;
  price: string;
}

export function ReviewSchema({
  name,
  reviewBody,
  ratingValue,
  softwareName,
  softwareUrl,
  price,
}: ReviewSchemaProps) {
  const numericPrice = price.replace(/[^0-9.]/g, "") || "0";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    name,
    reviewBody,
    datePublished: "2026-02-01",
    dateModified: "2026-02-24",
    author: {
      "@type": "Organization",
      name: "PlayCourt",
      url: "https://playcourt.io",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: softwareName,
      url: softwareUrl,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: numericPrice,
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue,
        reviewCount: 1,
        bestRating: 5,
        worstRating: 1,
      },
    },
  };

  return <JsonLd data={schema} />;
}
