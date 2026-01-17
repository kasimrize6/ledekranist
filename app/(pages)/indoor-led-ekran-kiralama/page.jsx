import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo/site";
import { buildMeta, buildServiceGraph } from "@/lib/seo/page";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/indoor-led-ekran-kiralama";
const TITLE = "Indoor LED Ekran Kiralama";
const DESCRIPTION =
  "İstanbul’da indoor LED ekran kiralama: yakın izleme mesafeleri için yüksek netlik, sunum odaklı bağlantı ve şık kurulum.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

export default function IndoorPage() {
  const pageUrl = `${SITE.url}${PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...buildServiceGraph({
        slug: "indoor-led-ekran-kiralama",
        serviceName: "Indoor LED Ekran Kiralama",
        path: PATH,
        title: TITLE,
        description: DESCRIPTION,
      }),
      buildBreadcrumbs({
        pageUrl,
        items: [
          { name: "Ana Sayfa", path: "/" },
          { name: "Indoor LED Ekran Kiralama", path: PATH },
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
            Indoor LED ekran, izleyiciye daha yakın kurulduğu için detay ve keskinlik ön plana çıkar. Bu nedenle piksel
            aralığı, renk doğruluğu ve bağlantı stabilitesi kritik olur. Led Ekranist, İstanbul’daki salon etkinliklerinde
            sahne yerleşimine uygun şık ve temiz kablolamalı kurulum yapar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/iletisim" className="min-h-[44px] rounded-2xl bg-blue-500/90 px-6 py-3 font-extrabold text-black hover:bg-blue-500 focus-ring">
              Teklif Al
            </Link>
            <Link href="/istanbul" className="min-h-[44px] rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 focus-ring">
              İlçe Kapsama
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Avantaj" title="Indoor LED ile Ne Kazanırsınız?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Yakın İzlemede Netlik</p>
            <p className="mt-2">Sunumlarda yazılar, tablolar ve detay görseller daha keskin görünür.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Temiz Kurulum</p>
            <p className="mt-2">Kablo yönetimi ve sahne arkasında düzenli yerleşim ile kurumsal görüntü.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Sunum & Canlı Yayın Uyum</p>
            <p className="mt-2">Laptop, switcher ve kamera kaynaklarıyla stabil bağlantı ve çözünürlük eşleştirme.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Işıkla Uyumlu Kalibrasyon</p>
            <p className="mt-2">Sahne ışığına göre renk/kontrast ayarı yapılarak göz yormayan görüntü elde edilir.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Kullanım" title="Indoor LED Nerelerde Uygun?">
        <ul className="list-disc pl-5 space-y-2">
          <li>Kurumsal toplantı ve konferans salonları</li>
          <li>Otel balo salonu etkinlikleri</li>
          <li>Lansman, ödül töreni ve gala geceleri</li>
          <li>Fuar stand içi sunum alanları</li>
        </ul>
      </Section>
    </>
  );
}
