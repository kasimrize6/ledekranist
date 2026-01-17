import { IDS } from "@/lib/seo/ids";

export function buildService({ slug, name, pageUrl }) {
  return {
    "@type": "Service",
    "@id": IDS.service(slug),
    name,
    serviceType: name,
    areaServed: { "@type": "City", name: "İstanbul" },
    provider: { "@id": IDS.localBusiness },
    url: pageUrl,
  };
}
