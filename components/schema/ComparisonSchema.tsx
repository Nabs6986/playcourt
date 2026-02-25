import { JsonLd } from "./JsonLd";

interface ComparisonProduct {
  name: string;
  description: string;
}

interface ComparisonSchemaProps {
  products: ComparisonProduct[];
  url: string;
}

export function ComparisonSchema({ products, url }: ComparisonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${products[0].name} vs ${products[1].name} Comparison`,
    url,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: product.name,
        description: product.description,
      },
    })),
  };

  return <JsonLd data={schema} />;
}
