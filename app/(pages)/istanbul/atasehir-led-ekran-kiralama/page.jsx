import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo/site";
import { buildMeta, buildServiceGraph } from "@/lib/seo/page";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/istanbul/atasehir-led-ekran-kiralama";
const TITLE = "Ataşehir LED Ekran Kiralama";
const DESCRIPTION =
  "Ataşehir’de LED ekran kiralama: AVM etkinlikleri, lansmanlar ve kurumsal sahneler için indoor/outdoor çözümler.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

export default function AtasehirPage() {
  const pageUrl = `${SITE.url}${PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...buildServiceGraph({
        slug: "atasehir-led-ekran-kiralama",
        serviceName: "Ataşehir LED Ekran Kiralama",
        path: PATH,
        title: TITLE,
        description: DESCRIPTION,
      }),
      buildBreadcrumbs({
        pageUrl,
        items: [
          { name: "Ana Sayfa", path: "/" },
          { name: "İstanbul", path: "/istanbul" },
          { name: "Ataşehir", path: PATH },
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
            Ataşehir’de etkinlikler çoğunlukla kapalı alanlarda ve yoğun ziyaretçi akışının olduğu lokasyonlarda yapılır.
            Bu yüzden ekranın netliği, kablo yönetimi ve sahne önünde güvenli geçiş alanları önem kazanır. Kurulum planını
            mekânın giriş-çıkış saatlerine göre yapar, yayın bağlantılarını (sunum/kamera/oynatıcı) etkinlik başlamadan
            test ederek riski düşürürüz.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/iletisim" className="min-h-[44px] rounded-2xl bg-blue-500/90 px-6 py-3 font-extrabold text-black hover:bg-blue-500 focus-ring">
              Teklif Al
            </Link>
            <Link href="/istanbul" className="min-h-[44px] rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 focus-ring">
              İstanbul İlçeleri
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Ataşehir" title="Saha Koşullarına Göre Kurulum">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">AVM & Otel Etkinlikleri</p>
            <p className="mt-2">Yükleme alanı saatleri, asansör ölçüleri ve zemin koruması önceden planlanır.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Sunum Odaklı Yayın</p>
            <p className="mt-2">Keskin metinler için indoor panel, doğru çözünürlük ve ölçeklendirme ayarları yapılır.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Hızlı yön" title="Önerilen Sayfalar">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link className="text-white hover:underline" href="/indoor-led-ekran-kiralama">Indoor LED ekran kiralama</Link>
          </li>
          <li>
            <Link className="text-white hover:underline" href="/istanbul-led-ekran-kiralama">İstanbul LED ekran kiralama</Link>
          </li>
        </ul>
      </Section>
    </>
  );
}
