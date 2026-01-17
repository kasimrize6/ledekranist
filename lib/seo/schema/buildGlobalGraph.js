import { SITE } from "@/lib/seo/site";
import { IDS } from "@/lib/seo/ids";
import { buildLocalBusiness } from "@/lib/seo/schema/buildLocalBusiness";

export function buildGlobalGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": IDS.org,
        name: SITE.name,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          "@id": IDS.logo,
          url: `${SITE.url}${SITE.logo}`,
        },
      },
      buildLocalBusiness(),
      {
        "@type": "WebSite",
        "@id": IDS.website,
        name: SITE.name,
        url: SITE.url,
        publisher: { "@id": IDS.org },
        inLanguage: "tr-TR",
      },
    ],
  };
}
