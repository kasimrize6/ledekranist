import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo/site";
import { buildMeta, buildServiceGraph } from "@/lib/seo/page";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/konser-led-ekran-kiralama";
const TITLE = "Konser İçin LED Ekran Kiralama";
const DESCRIPTION =
  "İstanbul’da konser LED ekran kiralama: sahne arkası görsel dünya, canlı kamera yayını ve sponsor içerikleri için stabil kurulum ve teknik ekip.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

export default function KonserPage() {
  const pageUrl = `${SITE.url}${PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...buildServiceGraph({
        slug: "konser-led-ekran-kiralama",
        serviceName: "Konser İçin LED Ekran Kiralama",
        path: PATH,
        title: TITLE,
        description: DESCRIPTION,
      }),
      buildBreadcrumbs({
        pageUrl,
        items: [
          { name: "Ana Sayfa", path: "/" },
          { name: "Konser LED Ekran", path: PATH },
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
            Konserde LED ekran, sahnedeki enerjiyi seyirciye taşır. Kamera görüntüsü, arka plan tasarımları ve sponsor
            görselleri aynı akışta çalışır. Bizim yaklaşımımız; önce yayın akışını ve kameraları netleştirmek, sonra panel
            yerleşimini sahne tasarımına göre kurmaktır.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/iletisim" className="min-h-[44px] rounded-2xl bg-blue-500/90 px-6 py-3 font-extrabold text-black hover:bg-blue-500 focus-ring">
              Konser Teklifi Al
            </Link>
            <Link href="/outdoor-led-ekran-kiralama" className="min-h-[44px] rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 focus-ring">
              Outdoor Çözümler
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Sahne" title="Konser Kurulumunda Öne Çıkan 4 Kural">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Yerleşim & Görüş Açısı</p>
            <p className="mt-2">Ekranlar, en arkadan izleyen seyircinin de net göreceği yükseklik ve açıya göre konumlanır.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Yayın Akışı</p>
            <p className="mt-2">Kamera, grafik ve sponsor içerikleri için kaynak planı yapılır; sahnede “sürpriz” olmaz.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Kablo & Yedekleme</p>
            <p className="mt-2">Kritik hatlar için yedek bağlantı ve sahada hızlı müdahale planı hazır tutulur.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Renk & Parlaklık</p>
            <p className="mt-2">Sahne ışığına göre renk dengesi ayarlanır; ten rengi ve kontrast doğal kalır.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="İpuçları" title="Konser Öncesi Sizden İstediğimiz Bilgiler">
        <ul className="list-disc pl-5 space-y-2">
          <li>Etkinlik tarihi ve mekan (açık/kapalı alan)</li>
          <li>Yaklaşık ekran ölçüsü (metrekare) veya hedeflenen boyut</li>
          <li>Kamera sistemi var mı? (SDI/HDMI)</li>
          <li>İçerik oynatma: laptop, medya oynatıcı, rejiden çıkış</li>
        </ul>
      </Section>
    </>
  );
}
