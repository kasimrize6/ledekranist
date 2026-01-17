export default function Section({ title, eyebrow, children }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {eyebrow ? (
          <p className="text-sm font-semibold tracking-wide text-blue-200/90">{eyebrow}</p>
        ) : null}
        {title ? (
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">{title}</h2>
        ) : null}
        <div className="mt-6 text-white/80 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}
