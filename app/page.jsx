import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo/site";
import { buildMeta, buildServiceGraph } from "@/lib/seo/page";
import { buildFaq } from "@/lib/seo/schema/buildFaq";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/";
const TITLE = "İstanbul LED Ekran Kiralama";
const DESCRIPTION =
  "Başakşehir merkezli ekibimizle İstanbul genelinde indoor/outdoor LED ekran kiralama. Konser, fuar ve kurumsal etkinlikler için hızlı kurulum ve teknik destek.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

const QA = [
  {
    q: "LED ekran kiralama fiyatı nasıl belirlenir?",
    a: "Fiyatı metrekare, pixel pitch (ör. P2.6/P3.9), kullanım alanı (indoor/outdoor), kurulum yüksekliği, içerik kaynakları ve etkinlik süresi belirler. Net fiyat için tarih ve lokasyonla hızlı teklif veriyoruz.",
  },
  {
    q: "İstanbul’da aynı gün kurulum mümkün mü?",
    a: "Uygun stok ve ekip planlaması varsa aynı gün kurulum yapabiliyoruz. Yoğun tarihlerde ise 1–3 gün önceden rezervasyonla ilerlemek en sağlıklısıdır.",
  },
  {
    q: "Outdoor LED ekran yağmurda çalışır mı?",
    a: "Outdoor sistemlerde dış mekâna uygun kabin ve koruma sınıfları kullanılır. Kablo ve enerji altyapısı doğru kurulduğunda yağmur ve nem koşullarında stabil yayın sağlanır.",
  },
  {
    q: "Kurulumda teknik personel bulunuyor mu?",
    a: "Evet. Kurulum, yayın masası/oynatıcı bağlantısı ve etkinlik boyunca teknik takip için ekip sahada olur.",
  },
];

export default function HomePage() {
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
        items: [{ name: "Ana Sayfa", path: "/" }],
      }),
      buildFaq({ pageUrl, qa: QA }),
    ],
  };

  return (
    <>
      <JsonLd data={graph} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-10 sm:pt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                Başakşehir merkezli • İstanbul geneli kurulum
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                İstanbul’da <span className="text-blue-200">LED Ekran Kiralama</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Etkinliğinizde görüntüyü “büyük” yapmak yetmez; netlik, parlaklık ve kesintisiz yayın gerekir.
                Led Ekranist, doğru panel seçimi ve stabil altyapıyla konserden fuara, lansmandan sahne arkasına kadar
                profesyonel kurulum sağlar.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="min-h-[44px] rounded-2xl bg-blue-500/90 px-6 py-3 font-extrabold text-black hover:bg-blue-500 focus-ring"
                >
                  Hızlı Teklif Al
                </Link>
                <Link
                  href="/istanbul"
                  className="min-h-[44px] rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 focus-ring"
                >
                  İlçe Kapsama Alanı
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-glow">
                  <p className="font-semibold text-white">Indoor</p>
                  <p className="mt-1">Yakın izleme için yüksek netlik</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-glow">
                  <p className="font-semibold text-white">Outdoor</p>
                  <p className="mt-1">Güneşte güçlü parlaklık</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-glow">
                  <p className="font-semibold text-white">Teknik Ekip</p>
                  <p className="mt-1">Kurulum + canlı takip</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-glow">
                <Image
                  src="/img/hero/hero-led.webp"
                  alt="İstanbul LED ekran kiralama - sahne ve etkinlik görüntüsü"
                  width={1920}
                  height={1080}
                  priority
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/70 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm text-white/80">
                    “Doğru panel + doğru kurulum” = izleyicinin gördüğü kalite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <Section eyebrow="Hizmet" title="Nerelerde Kullanılır?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Konser & Sahne Arkası</p>
            <p className="mt-2">
              Kamera görüntüsü, sanatçı arka planı ve sponsor içerikleri için geniş açıdan okunur kurulum.
              Panel birleşim çizgileri ve renk geçişleri doğru kalibre edilir.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Fuar & Lansman</p>
            <p className="mt-2">
              Stand önünde kalabalığa karşı mesajı tek bakışta veren yüksek parlaklık ve doğru piksel aralığı.
              İçerik yönetimi için yayın bilgisayarı/oynatıcı entegrasyonu yapılır.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Kurumsal Etkinlikler</p>
            <p className="mt-2">
              Sunum, canlı yayın ve sahne grafikleri için güvenilir bağlantı ve yedekli kablolama.
              Etkinlik boyunca teknik takip ile kesinti riski azaltılır.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Açık Hava Organizasyonları</p>
            <p className="mt-2">
              Outdoor kabin yapısı, doğru enerji dağıtımı ve kablo koruması ile yağmur/nem koşullarına uygun kurulum.
              Gün ışığında okunabilirlik için parlaklık ve kontrast optimizasyonu yapılır.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="İstanbul" title="Başakşehir’den İstanbul Geneline">
        <p>
          Operasyon merkezimiz Başakşehir’dedir. Bu sayede Avrupa Yakası’nda hızlı erişim, Anadolu Yakası’nda ise planlı
          sevkiyat ve kurulumla verimli hareket ederiz. İlçe sayfalarımız üzerinden kapsama alanını görebilir, konumunuza
          göre en uygun panel ve kurulum planını hızlıca alabilirsiniz.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-2xl bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/15 focus-ring" href="/istanbul">
            İstanbul İlçeleri
          </Link>
          <Link className="rounded-2xl bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/15 focus-ring" href="/outdoor-led-ekran-kiralama">
            Outdoor LED
          </Link>
          <Link className="rounded-2xl bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/15 focus-ring" href="/indoor-led-ekran-kiralama">
            Indoor LED
          </Link>
        </div>
      </Section>

      <Section eyebrow="SSS" title="Sık Sorulan Sorular">
        <div className="space-y-4">
          {QA.map((item) => (
            <details key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer font-semibold text-white">{item.q}</summary>
              <p className="mt-3 text-white/75">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-glow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-sm font-semibold text-blue-200/90">Hazır mıyız?</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold">İstanbul için hızlı teklif</h2>
                <p className="mt-3 text-white/80">
                  Tarih + ilçe + yaklaşık metrekare bilgisini iletin, size aynı gün net plan ve fiyat dönüşü yapalım.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/iletisim" className="min-h-[44px] rounded-2xl bg-blue-500/90 px-6 py-3 font-extrabold text-black hover:bg-blue-500 focus-ring">
                  Teklif Formuna Git
                </Link>
                <Link href="/istanbul-led-ekran-kiralama" className="min-h-[44px] rounded-2xl bg-white/10 px-6 py-3 font-extrabold text-white hover:bg-white/15 focus-ring">
                  İstanbul Sayfası
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
