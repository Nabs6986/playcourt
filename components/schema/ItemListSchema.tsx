import { JsonLd } from "./JsonLd";

interface ItemListEntry {
  name: string;
  url: string;
  description?: string;
}

interface ItemListSchemaProps {
  name: string;
  url: string;
  items: ItemListEntry[];
}

export function ItemListSchema({ name, url, items }: ItemListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.url,
      name: item.name,
      description: item.description,
    })),
  };

  return <JsonLd data={schema} />;
}
