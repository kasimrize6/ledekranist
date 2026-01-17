import ContactCTAs from "@/components/ContactCTAs";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-2 sm:hidden">
      <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-2 shadow-glow">
        <div className="grid grid-cols-2 gap-2">
          <ContactCTAs compact />
        </div>
      </div>
    </div>
  );
}
