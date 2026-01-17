import { CONTACT } from "@/lib/contact";
import { SITE } from "@/lib/seo/site";
import { IDS } from "@/lib/seo/ids";
import { BUSINESS } from "@/lib/business";

export function buildLocalBusiness() {
  return {
    "@type": "LocalBusiness",
    "@id": IDS.localBusiness,
    name: BUSINESS.brand,
    url: SITE.url,
    telephone: CONTACT.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "İstanbul" },
      { "@type": "Place", name: "Başakşehir" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT.phoneE164,
        contactType: "customer service",
        availableLanguage: ["tr"],
        areaServed: "TR",
      },
    ],
  };
}
