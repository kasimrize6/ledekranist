import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo/site";
import { buildMeta, buildServiceGraph } from "@/lib/seo/page";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/istanbul-led-ekran-kiralama";
const TITLE = "İstanbul LED Ekran Kiralama";
const DESCRIPTION =
  "İstanbul genelinde etkinliklere uygun indoor/outdoor LED ekran kiralama. Planlama, sevkiyat, kurulum ve teknik takip Led Ekranist ekibinden.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

export default function IstanbulLedPage() {
  const pageUrl = `${SITE.url}${PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...buildServiceGraph({
        slug: "istanbul-led-ekran-kiralama",
        serviceName: "İstanbul LED Ekran Kiralama",
        path: PATH,
        title: TITLE,
        description: DESCRIPTION,
      }),
      buildBreadcrumbs({
        pageUrl,
        items: [
          { name: "Ana Sayfa", path: "/" },
          { name: "İstanbul LED Ekran Kiralama", path: PATH },
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
            İstanbul’da LED ekran kiralama işi, sadece panel getirmek değildir: doğru pixel pitch seçimi, mekâna göre
            parlaklık/kontrast ayarı, güvenli enerji dağıtımı ve yayının kesintisiz akması gerekir. Başakşehir merkezli
            ekibimizle Avrupa Yakası’nda hızlı, Anadolu Yakası’nda planlı kurulum yapıyoruz.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/iletisim" className="min-h-[44px] rounded-2xl bg-blue-500/90 px-6 py-3 font-extrabold text-black hover:bg-blue-500 focus-ring">
              Teklif Al
            </Link>
            <Link href="/istanbul" className="min-h-[44px] rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 focus-ring">
              İlçe Sayfaları
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Kapsam" title="İstanbul’da Kurulum Planı Nasıl Çalışır?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">1) Keşif & Panel Seçimi</p>
            <p className="mt-2">
              İzleme mesafesine göre P2.6–P4.8 aralığında doğru paneli seçeriz. Indoor/outdoor ayrımı ve içerik kaynakları
              (kamera, sunum, yayın) netleştirilir.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">2) Kurulum & Güvenlik</p>
            <p className="mt-2">
              Taşıyıcı sistem, rüzgâr yükü ve kablo güzergâhı planlanır. Enerji dağıtımı, sigorta ve topraklama dahil
              güvenli altyapı kurulur.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">3) Yayın Entegrasyonu</p>
            <p className="mt-2">
              HDMI/SDI dönüştürücüler, dağıtıcılar veya medya oynatıcılarla stabil bağlantı sağlanır. Renk/Parlaklık
              kalibrasyonu sahne ışığına göre yapılır.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">4) Etkinlik Boyunca Teknik Takip</p>
            <p className="mt-2">
              Yayın sırasında operatör ve teknik ekip sahadadır. İhtiyaç halinde yedek modül/devreye alma planı hazırdır.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Hızlı yön" title="İstanbul’da En Çok İstenen Çözümler">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Link className="font-semibold text-white hover:underline" href="/outdoor-led-ekran-kiralama">
              Outdoor LED ekran kiralama
            </Link>
            <p className="mt-2 text-white/75">Gün ışığında okunabilirlik ve dış mekâna uygun kabin yapısı.</p>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Link className="font-semibold text-white hover:underline" href="/indoor-led-ekran-kiralama">
              Indoor LED ekran kiralama
            </Link>
            <p className="mt-2 text-white/75">Yakın izleme için yüksek netlik ve sunum odaklı kurulum.</p>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Link className="font-semibold text-white hover:underline" href="/konser-led-ekran-kiralama">
              Konser için LED ekran
            </Link>
            <p className="mt-2 text-white/75">Sahne arkası görsel dünya, canlı kamera ve sponsor içerikleri.</p>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Link className="font-semibold text-white hover:underline" href="/fuar-led-ekran-kiralama">
              Fuar & stand LED ekran
            </Link>
            <p className="mt-2 text-white/75">Kalabalıkta dikkat çeken mesaj ve stabil yayın entegrasyonu.</p>
          </li>
        </ul>
      </Section>
    </>
  );
}
