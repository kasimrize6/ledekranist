import Link from "next/link";
import Image from "next/image";
import ContactCTAs from "@/components/ContactCTAs";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/istanbul-led-ekran-kiralama", label: "İstanbul" },
  { href: "/outdoor-led-ekran-kiralama", label: "Outdoor" },
  { href: "/indoor-led-ekran-kiralama", label: "Indoor" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B1120]/80 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center gap-2 text-white font-extrabold">
            <Image src="/img/logo.png" alt="Led Ekranist" width={34} height={34} className="rounded-xl" priority />
             </Link>

          <nav className="hidden lg:flex items-center gap-4 text-sm">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-white/80 hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:block">
            <ContactCTAs compact />
          </div>
        </div>
      </div>
    </header>
  );
}
