import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo/site";
import { buildMeta, buildServiceGraph } from "@/lib/seo/page";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/fuar-led-ekran-kiralama";
const TITLE = "Fuar İçin LED Ekran Kiralama";
const DESCRIPTION =
  "İstanbul fuar ve stand alanlarında LED ekran kiralama: dikkat çekici görüntü, stabil içerik yayını, hızlı kurulum ve teknik destek.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

export default function FuarPage() {
  const pageUrl = `${SITE.url}${PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...buildServiceGraph({
        slug: "fuar-led-ekran-kiralama",
        serviceName: "Fuar İçin LED Ekran Kiralama",
        path: PATH,
        title: TITLE,
        description: DESCRIPTION,
      }),
      buildBreadcrumbs({
        pageUrl,
        items: [
          { name: "Ana Sayfa", path: "/" },
          { name: "Fuar İçin LED Ekran Kiralama", path: PATH },
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
            Fuar alanında ziyaretçinin dikkatini ilk 3 saniyede yakalamak gerekir. LED ekran; ürün videosu, kampanya ve
            marka hikâyesini kalabalıkta bile görünür kılar. Led Ekranist, stand ölçüsüne ve izleme mesafesine uygun
            panel seçimiyle, içerik oynatımını stabil biçimde kurar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="min-h-[44px] rounded-2xl bg-blue-500/90 px-6 py-3 font-extrabold text-black hover:bg-blue-500 focus-ring"
            >
              Teklif Al
            </Link>
            <Link
              href="/indoor-led-ekran-kiralama"
              className="min-h-[44px] rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 focus-ring"
            >
              Indoor LED
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Plan" title="Fuar Kurulumunda Bizim Yaklaşımımız">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Stand Ölçüsü & Yön</p>
            <p className="mt-2">Ekran boyutu, ziyaretçi akışı ve görüş hattına göre belirlenir; mesajın okunurluğu korunur.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">İçerik Oynatım</p>
            <p className="mt-2">Medya oynatıcı veya laptop bağlantısı test edilir; çözünürlük/yenileme ayarı doğru yapılır.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Kablo Gizleme</p>
            <p className="mt-2">Stand estetiğini bozmadan kablo güzergâhı gizlenir; takılma riski azaltılır.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Sahada Destek</p>
            <p className="mt-2">Gün boyunca içerik değişimi ve yayın takibi için hızlı müdahale planı hazırdır.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="İpuçları" title="Ziyaretçiyi Durduran İçerik Fikirleri">
        <ul className="list-disc pl-5 space-y-2">
          <li>10–15 saniyelik kısa ürün döngü videoları (altyazılı)</li>
          <li>Fiyat/avantaj mesajı: tek cümle + büyük tipografi</li>
          <li>QR ile katalog/teklif formu yönlendirmesi</li>
          <li>Canlı demo akışı: kamera + ekran üzerinden eş zamanlı gösterim</li>
        </ul>
      </Section>
    </>
  );
}
