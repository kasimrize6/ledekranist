import Link from "next/link";
import { CONTACT } from "@/lib/contact";

export default function ContactCTAs({ compact = false }) {
  const base =
    "min-h-[44px] inline-flex items-center justify-center rounded-2xl px-4 py-3 font-bold transition focus-ring";
  return (
    <div className={compact ? "flex gap-2" : "flex flex-wrap gap-2"} aria-label="Hızlı iletişim">
      <a className={`${base} bg-white/10 text-white hover:bg-white/15`} href={CONTACT.telHref}>
        Ara: {CONTACT.phoneLocal}
      </a>
      <Link
        className={`${base} bg-emerald-500/90 text-black hover:bg-emerald-500`}
        href={CONTACT.waHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </Link>
    </div>
  );
}
