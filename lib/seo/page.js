import { SITE } from "@/lib/seo/site";
import { IDS } from "@/lib/seo/ids";
import { buildService } from "@/lib/seo/schema/buildService";

export function buildMeta({ title, description, path, ogImage }) {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description,
      images: [ogImage || SITE.ogImage],
    },
  };
}

export function buildWebPage({ title, description, path }) {
  const url = `${SITE.url}${path}`;
  return {
    "@type": "WebPage",
    "@id": IDS.webPage(path),
    url,
    name: title,
    description,
    isPartOf: { "@id": IDS.website },
    about: { "@id": IDS.localBusiness },
    inLanguage: "tr-TR",
  };
}

export function buildServiceGraph({ slug, serviceName, path, title, description }) {
  const pageUrl = `${SITE.url}${path}`;
  return [
    buildWebPage({ title, description, path }),
    buildService({ slug, name: serviceName, pageUrl }),
  ];
}
