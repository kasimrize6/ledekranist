import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo/site";
import { buildMeta, buildServiceGraph } from "@/lib/seo/page";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/outdoor-led-ekran-kiralama";
const TITLE = "Outdoor LED Ekran Kiralama";
const DESCRIPTION =
  "İstanbul’da outdoor LED ekran kiralama: yüksek parlaklık, dış mekâna uygun kabin, güvenli enerji dağıtımı ve teknik takip.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

export default function OutdoorPage() {
  const pageUrl = `${SITE.url}${PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...buildServiceGraph({
        slug: "outdoor-led-ekran-kiralama",
        serviceName: "Outdoor LED Ekran Kiralama",
        path: PATH,
        title: TITLE,
        description: DESCRIPTION,
      }),
      buildBreadcrumbs({
        pageUrl,
        items: [
          { name: "Ana Sayfa", path: "/" },
          { name: "Outdoor LED Ekran Kiralama", path: PATH },
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
            Outdoor LED ekran, gün ışığında okunabilirlik ve hava koşullarına dayanım ister. Bu yüzden panel seçimi kadar
            enerji altyapısı, kablo koruması ve taşıyıcı sistem de kritiktir. Led Ekranist, İstanbul’da dış mekân
            organizasyonları için sahaya uygun kurulum planı hazırlar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/iletisim" className="min-h-[44px] rounded-2xl bg-blue-500/90 px-6 py-3 font-extrabold text-black hover:bg-blue-500 focus-ring">
              Teklif Al
            </Link>
            <Link href="/istanbul-led-ekran-kiralama" className="min-h-[44px] rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 focus-ring">
              İstanbul Sayfası
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Teknik" title="Outdoor Kurulumda Dikkat Ettiğimiz Detaylar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Parlaklık & Kontrast</p>
            <p className="mt-2">Güneş altında net görüntü için yüksek parlaklık ve sahne ışığına göre ayarlı kontrast.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Hava Koşullarına Uygunluk</p>
            <p className="mt-2">Kabin yapısı, konektör koruması ve kablo güzergâhı yağmur/nem koşullarına göre planlanır.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Enerji & Topraklama</p>
            <p className="mt-2">Doğru sigorta, dağıtım ve topraklama ile hem güvenlik hem stabil yayın sağlanır.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Taşıyıcı Sistem</p>
            <p className="mt-2">Rüzgâr yükü, yükseklik ve zemine göre uygun truss/ayak sistemleriyle kurulum yapılır.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Kullanım" title="Outdoor LED Nerelerde Tercih Edilir?">
        <ul className="list-disc pl-5 space-y-2">
          <li>Açık hava konserleri, festival sahneleri</li>
          <li>Meydan etkinlikleri, belediye organizasyonları</li>
          <li>Stadyum çevresi, spor etkinlikleri</li>
          <li>Açık alanda fuar/sergi ve lansmanlar</li>
        </ul>
      </Section>
    </>
  );
}
