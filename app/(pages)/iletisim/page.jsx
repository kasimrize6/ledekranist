import JsonLd from "@/components/JsonLd";
import Section from "@/components/Section";
import { SITE } from "@/lib/seo/site";
import { CONTACT } from "@/lib/contact";
import { BUSINESS } from "@/lib/business";
import { buildMeta, buildWebPage } from "@/lib/seo/page";
import { buildBreadcrumbs } from "@/lib/seo/schema/buildBreadcrumbs";

const PATH = "/iletisim";
const TITLE = "İletişim & Hızlı Teklif";
const DESCRIPTION = "Led Ekranist iletişim: İstanbul (Başakşehir) LED ekran kiralama için telefon ve WhatsApp üzerinden hızlı teklif.";

export const metadata = buildMeta({
  title: `${TITLE} | Led Ekranist`,
  description: DESCRIPTION,
  path: PATH,
});

export default function ContactPage() {
  const pageUrl = `${SITE.url}${PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPage({ title: TITLE, description: DESCRIPTION, path: PATH }),
      buildBreadcrumbs({
        pageUrl,
        items: [
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: PATH },
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
            Tarih, ilçe ve yaklaşık metrekare bilgisini yazmanız yeterli. İhtiyaca göre indoor/outdoor panel önerisini, kurulum planını
            ve net fiyatı aynı gün iletiriz.
          </p>
        </div>
      </section>

      <Section eyebrow="İletişim" title="Telefon / WhatsApp">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white font-semibold">Tek Hat</p>
            <p className="mt-2 text-white/80">Telefon: <a className="underline hover:no-underline" href={CONTACT.telHref}>{CONTACT.phoneLocal}</a></p>
            <p className="mt-1 text-white/80">
              WhatsApp: <a className="underline hover:no-underline" href={CONTACT.waHref} target="_blank" rel="noopener noreferrer">Mesaj gönder</a>
            </p>
            <div className="mt-4 text-sm text-white/70">
              <p className="font-semibold text-white">Hızlı teklif için kopyala:</p>
              <pre className="mt-2 whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/30 p-4">
Tarih:
İlçe:
Indoor / Outdoor:
Yaklaşık m²:
İçerik kaynağı (kamera/sunum/oynatıcı):
              </pre>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white font-semibold">Adres</p>
            <p className="mt-2 text-white/80">{BUSINESS.address.streetAddress}</p>
            <p className="mt-1 text-white/80">{BUSINESS.address.addressLocality} / {BUSINESS.address.addressRegion} {BUSINESS.address.postalCode}</p>
            <p className="mt-4 text-sm text-white/70">
              Not: Harita bağlantısını Google Business Profile açtığımız anda buraya ekleyeceğiz. Şimdilik adres, NAP tutarlılığı için
              schema ve footer’da sabit.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Süreç" title="Tekliften Kuruluma">
        <ol className="list-decimal pl-5 space-y-2">
          <li>İhtiyaç analizi: mekan, izleme mesafesi, kullanım alanı</li>
          <li>Panel önerisi: P2.6–P4.8 aralığında doğru çözünürlük</li>
          <li>Kurulum: taşıyıcı sistem, enerji dağıtımı, bağlantılar</li>
          <li>Yayın: içerik entegrasyonu ve etkinlik boyunca teknik takip</li>
        </ol>
      </Section>
    </>
  );
}
