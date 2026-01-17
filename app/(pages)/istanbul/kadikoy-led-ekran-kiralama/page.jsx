import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo/site";
import { buildMeta, buildServiceGraph } from "@/lib/seo/page";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/istanbul/kadikoy-led-ekran-kiralama";
const TITLE = "Kadıköy LED Ekran Kiralama";
const DESCRIPTION =
  "Kadıköy’de LED ekran kiralama: sahne, fuar, lansman ve kurumsal etkinlikler için indoor/outdoor kurulum ve teknik takip.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

export default function Page() {
  const pageUrl = `${SITE.url}${PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...buildServiceGraph({
        slug: "kadikoy-led-ekran-kiralama",
        serviceName: "Kadıköy LED Ekran Kiralama",
        path: PATH,
        title: TITLE,
        description: DESCRIPTION,
      }),
      buildBreadcrumbs({
        pageUrl,
        items: [
          { name: "Ana Sayfa", path: "/" },
          { name: "İstanbul", path: "/istanbul" },
          { name: "Kadıköy", path: PATH },
        ],
      }),
    ],
  };

  return (
    <>
      <JsonLd data={graph} />

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold">{TITLE}</h1>
          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            Kadıköy’de etkinlikler genellikle yoğun yaya trafiği ve sınırlı yükleme alanı ile gelir. Bu nedenle ekranın
            kurulacağı nokta, kablo güzergâhı ve enerji dağıtımı baştan planlanır. İçerik tarafında ise sunum + kamera
            geçişleri için stabil bağlantı ve yedekli hat yaklaşımı kullanırız.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/iletisim" className="min-h-[44px] rounded-2xl bg-blue-500/90 px-6 py-3 font-extrabold text-black hover:bg-blue-500 focus-ring">
              Teklif Al
            </Link>
            <Link href="/istanbul" className="min-h-[44px] rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 focus-ring">
              Diğer İlçeler
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Pratik" title="Kadıköy’de Sık Görülen Kurulum Senaryoları">
        <ul className="list-disc pl-5 space-y-2">
          <li>Kurumsal toplantı ve lansmanlarda indoor ekran + sunum entegrasyonu</li>
          <li>Açık hava etkinliklerinde outdoor ekran + yüksek parlaklık ayarı</li>
          <li>Sahne arkası ekranlarda renk kalibrasyonu ve kesintisiz yayın takibi</li>
        </ul>
      </Section>
    </>
  );
}
