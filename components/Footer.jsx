import Link from "next/link";
import { CONTACT } from "@/lib/contact";
import { BUSINESS } from "@/lib/business";

const quick = [
  { href: "/outdoor-led-ekran-kiralama", label: "Outdoor LED" },
  { href: "/indoor-led-ekran-kiralama", label: "Indoor LED" },
  { href: "/konser-led-ekran-kiralama", label: "Konser" },
  { href: "/fuar-led-ekran-kiralama", label: "Fuar" },
  { href: "/istanbul", label: "İstanbul İlçeleri" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-2">
            <p className="text-white font-extrabold text-lg">{BUSINESS.brand}</p>
            <p className="text-white/70 text-sm">
              İstanbul’da indoor & outdoor LED ekran kiralama. Kurulum, işletim ve teknik destek tek ekipten.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold">Hızlı Bağlantılar</p>
            <ul className="mt-3 space-y-2 text-sm">
              {quick.map((q) => (
                <li key={q.href}>
                  <Link className="text-white/70 hover:text-white" href={q.href}>
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-white font-semibold">İletişim</p>
            <p className="text-white/70 text-sm">
              {BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality} / {BUSINESS.address.addressRegion} {BUSINESS.address.postalCode}
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a className="text-white/80 hover:text-white underline" href={CONTACT.telHref}>
                {CONTACT.phoneLocal}
              </a>
              <a className="text-white/80 hover:text-white underline" href={CONTACT.waHref} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/50">
          © {new Date().getFullYear()} {BUSINESS.brand}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
