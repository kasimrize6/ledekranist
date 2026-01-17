import { SITE } from "@/lib/seo/site";

export function buildBreadcrumbs({ items, pageUrl }) {
  // items: [{name, path}]
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
    url: pageUrl,
  };
}
