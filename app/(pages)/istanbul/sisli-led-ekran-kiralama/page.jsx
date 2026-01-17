import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo/site";
import { buildMeta, buildServiceGraph } from "@/lib/seo/page";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/istanbul/sisli-led-ekran-kiralama";
const TITLE = "Şişli LED Ekran Kiralama";
const DESCRIPTION =
  "Şişli’de etkinlik ve kurumsal organizasyonlar için LED ekran kiralama. Indoor/outdoor çözümler, hızlı kurulum ve teknik ekip.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

export default function SisliPage() {
  const pageUrl = `${SITE.url}${PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...buildServiceGraph({
        slug: "sisli-led-ekran-kiralama",
        serviceName: "Şişli LED Ekran Kiralama",
        path: PATH,
        title: TITLE,
        description: DESCRIPTION,
      }),
      buildBreadcrumbs({
        pageUrl,
        items: [
          { name: "Ana Sayfa", path: "/" },
          { name: "İstanbul", path: "/istanbul" },
          { name: "Şişli", path: PATH },
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
            Şişli, toplantı salonları, oteller ve lansman organizasyonlarıyla yoğun bir bölge. Bu tür kapalı alanlarda
            LED ekranın başarısı; piksel aralığı, panel parlaklığı ve sunum bağlantısının stabil olmasına bağlıdır.
            Led Ekranist ekibi, Şişli’de kurulum saatlerini mekânın akışına göre planlar, görüntüyü “sunum netliğinde”
            verir.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/iletisim" className="min-h-[44px] rounded-2xl bg-blue-500/90 px-6 py-3 font-extrabold text-black hover:bg-blue-500 focus-ring">
              Şişli İçin Teklif Al
            </Link>
            <Link href="/indoor-led-ekran-kiralama" className="min-h-[44px] rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 focus-ring">
              Indoor Çözümler
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Öne çıkan" title="Şişli’de En Sık İstenen Kurulumlar">
        <ul className="list-disc pl-5 space-y-2">
          <li>Hotel ballroom & toplantı salonu: sunum + canlı kamera karışık yayın</li>
          <li>AVM içi etkinlikler: yüksek netlik, düşük yansıma, kontrollü parlaklık</li>
          <li>Lansman sahnesi: arka plan görsel dünya ve zaman çizelgesi geçişleri</li>
          <li>Basın toplantısı: logolu backdrop, canlı yayın feed entegrasyonu</li>
        </ul>
      </Section>

      <Section eyebrow="İstanbul" title="İlçe Ağı">
        <p>
          Şişli merkezli kurulum ihtiyacınız varsa aynı gün planlama yapabiliriz. Diğer ilçeler için de sayfamızı
          inceleyebilirsiniz.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-2xl bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/15 focus-ring" href="/istanbul">
            İstanbul İlçeleri
          </Link>
          <Link className="rounded-2xl bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/15 focus-ring" href="/istanbul/kadikoy-led-ekran-kiralama">
            Kadıköy
          </Link>
          <Link className="rounded-2xl bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/15 focus-ring" href="/istanbul/besiktas-led-ekran-kiralama">
            Beşiktaş
          </Link>
        </div>
      </Section>
    </>
  );
}
