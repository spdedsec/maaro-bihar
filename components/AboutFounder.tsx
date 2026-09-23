import { brand } from "@/data/brand";

export function AboutFounder() {
  return (
    <section id="founder" className="mx-auto max-w-6xl px-5 py-16 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
      <div>
        <p className="font-body text-sm text-maroon dark:text-gold-bright mb-3">संस्थापक</p>
        <h2 className="font-display text-4xl leading-tight text-ink dark:text-cream">
          Founded on one habit:<br />checking the factory rate yourself.
        </h2>
      </div>
      <div className="border-l-2 border-maroon dark:border-gold-bright pl-6">
        <p className="font-body text-lg leading-relaxed text-ink/85 dark:text-cream/85">
          {brand.founderNote}
        </p>
        <div className="divider-thread text-ink/30 dark:text-cream/30 my-6 max-w-xs" />
        <p className="font-body text-sm text-ink/60 dark:text-cream/60">
          15+ years in product research &amp; e-commerce selling · Patna, Bihar
        </p>
      </div>
    </section>
  );
}
