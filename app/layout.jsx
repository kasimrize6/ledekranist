import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import JsonLd from "@/components/JsonLd";
import { buildGlobalGraph } from "@/lib/seo/schema/buildGlobalGraph";
import { SITE } from "@/lib/seo/site";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "İstanbul LED Ekran Kiralama | Led Ekranist",
    template: "%s | Led Ekranist",
  },
  description:
    "İstanbul’da indoor/outdoor LED ekran kiralama. Konser, fuar ve kurumsal etkinlikler için hızlı kurulum, stabil yayın, teknik ekip.",
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    images: [SITE.ogImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="min-h-screen text-white">
        <JsonLd data={buildGlobalGraph()} />
        <div className="pointer-events-none fixed inset-0 opacity-70 bg-grid" aria-hidden="true" />
        <div className="pointer-events-none fixed -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[90px]" aria-hidden="true" />

        <Navbar />
        <main className="pb-20 sm:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
