import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo/site";
import { buildMeta, buildWebPage } from "@/lib/seo/page";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/istanbul";
const TITLE = "İstanbul İlçelerinde LED Ekran Kiralama";
const DESCRIPTION =
  "Başakşehir merkezli ekibimizle İstanbul ilçe bazlı LED ekran kiralama. İlçenize göre kurulum planı ve hızlı teklif.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

const DISTRICTS = [
  { href: "/istanbul/besiktas-led-ekran-kiralama", name: "Beşiktaş" },
  { href: "/istanbul/sisli-led-ekran-kiralama", name: "Şişli" },
  { href: "/istanbul/kadikoy-led-ekran-kiralama", name: "Kadıköy" },
  { href: "/istanbul/atasehir-led-ekran-kiralama", name: "Ataşehir" },
  { href: "/istanbul/bakirkoy-led-ekran-kiralama", name: "Bakırköy" },
];

export default function IstanbulDistrictsHub() {
  const pageUrl = `${SITE.url}${PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPage({ title: TITLE, description: DESCRIPTION, path: PATH }),
      buildBreadcrumbs({
        pageUrl,
        items: [
          { name: "Ana Sayfa", path: "/" },
          { name: "İstanbul", path: PATH },
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
            İstanbul’da LED ekran kurulumunda trafik, yükleme alanı ve etkinlik saatleri planı belirler. Bu yüzden ilçe
            bazlı hareket ediyor, kurulum ekibimizi lokasyona göre optimize ediyoruz. Aşağıdan ilçenizi seçip hızlı teklif
            alabilirsiniz.
          </p>
        </div>
      </section>

      <Section eyebrow="İlçeler" title="Hızlı İlçe Seçimi">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DISTRICTS.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 focus-ring"
            >
              <p className="text-white font-semibold">{d.name} LED Ekran Kiralama</p>
              <p className="mt-2 text-white/70 text-sm">
                Kurulum planı, saha koşulları ve etkinlik türüne göre hızlı çözüm.
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Not" title="İlçeye Göre Neler Değişir?">
        <ul className="list-disc pl-5 space-y-2">
          <li>Yükleme/boşaltma alanı ve giriş saatleri</li>
          <li>Kurulum yüksekliği ve taşıyıcı sistem ihtiyacı</li>
          <li>Indoor/outdoor panel seçimi ve parlaklık ayarı</li>
          <li>Enerji altyapısı (sigorta/topraklama) ve kablolama güzergâhı</li>
        </ul>
      </Section>
    </>
  );
}
