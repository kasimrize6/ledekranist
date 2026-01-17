import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo/site";
import { buildMeta, buildServiceGraph } from "@/lib/seo/page";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/istanbul/bakirkoy-led-ekran-kiralama";
const TITLE = "Bakırköy LED Ekran Kiralama";
const DESCRIPTION =
  "Bakırköy'de etkinlik ve kurumsal organizasyonlar için LED ekran kiralama. Indoor/outdoor panel seçimi, kurulum ve teknik takip.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

export default function BesiktasPage() {
  const pageUrl = `${SITE.url}${PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...buildServiceGraph({
        slug: "bakirkoy-led-ekran-kiralama",
        serviceName: TITLE,
        path: PATH,
        title: TITLE,
        description: DESCRIPTION,
      }),
      buildBreadcrumbs({
        pageUrl,
        items: [
          { name: "Ana Sayfa", path: "/" },
          { name: "İstanbul", path: "/istanbul" },
          { name: "Bakırköy", path: PATH },
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
            Bakırköy'de etkinlik kurulumu çoğu zaman dar yükleme alanları, belirli giriş saatleri ve yoğun trafikle
            planlanır. Bu yüzden kurulum planını “sahaya göre” çıkarırız: panel ölçüsü, taşıyıcı sistem ve kablo
            güzergâhı önceden netleşir. Böylece kurulum hızlı biter, yayın stabil akar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/iletisim" className="min-h-[44px] rounded-2xl bg-blue-500/90 px-6 py-3 font-extrabold text-black hover:bg-blue-500 focus-ring">
              Bakırköy İçin Teklif Al
            </Link>
            <Link href="/istanbul" className="min-h-[44px] rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 focus-ring">
              Diğer İlçeler
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Öne çıkan" title="Bakırköy'de En Çok Tercih Edilen Kurulumlar">
        <ul className="list-disc pl-5 space-y-2">
          <li>Kurumsal toplantı ve lansmanlarda sunum odaklı indoor LED ekran</li>
          <li>Açık hava etkinliklerinde yüksek parlaklıkla outdoor LED ekran</li>
          <li>Sahne arkası görsel dünya ve sponsor içerikleri için geniş ekran kurulum</li>
        </ul>
      </Section>

      <Section eyebrow="İpucu" title="Teklif İçin Hızlandıran Bilgiler">
        <p>
          İlçe bilgisine ek olarak etkinlik tarihi, yaklaşık metrekare ve içerik kaynağını (kamera/sunum/oynatıcı) yazman
          yeterli. Geri dönüşte panel önerisi ve net kurulum planını iletiriz.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-2xl bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/15 focus-ring" href="/indoor-led-ekran-kiralama">
            Indoor LED
          </Link>
          <Link className="rounded-2xl bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/15 focus-ring" href="/outdoor-led-ekran-kiralama">
            Outdoor LED
          </Link>
        </div>
      </Section>
    </>
  );
}
