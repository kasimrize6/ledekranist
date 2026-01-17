import { SITE } from "@/lib/seo/site";

export function meta({ title, description, path = "/", images = [SITE.ogImage] }) {
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
      images,
    },
  };
}
