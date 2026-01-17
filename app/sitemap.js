import { SITE } from "@/lib/seo/site";

const routes = [
  "/",
  "/istanbul-led-ekran-kiralama",
  "/outdoor-led-ekran-kiralama",
  "/indoor-led-ekran-kiralama",
  "/konser-led-ekran-kiralama",
  "/fuar-led-ekran-kiralama",
  "/istanbul",
  "/istanbul/besiktas-led-ekran-kiralama",
  "/istanbul/sisli-led-ekran-kiralama",
  "/istanbul/kadikoy-led-ekran-kiralama",
  "/istanbul/atasehir-led-ekran-kiralama",
  "/istanbul/bakirkoy-led-ekran-kiralama",
  "/iletisim",
];

export default function sitemap() {
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
