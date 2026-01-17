import { SITE } from "@/lib/seo/site";
import { IDS } from "@/lib/seo/ids";

export function buildWebPage({ path, title, description }) {
  return {
    "@type": "WebPage",
    "@id": IDS.webPage(path),
    url: `${SITE.url}${path}`,
    name: title,
    description,
    isPartOf: { "@id": IDS.website },
    about: { "@id": IDS.localBusiness },
    inLanguage: SITE.locale,
  };
}
