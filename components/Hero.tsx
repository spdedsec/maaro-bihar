import Link from "next/link";
import { brand } from "@/data/brand";

export function Hero() {
  return (
    <section className="texture border-b border-ink/10 dark:border-cream/10">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-16 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div>
          <p className="font-body text-sm text-maroon dark:text-gold-bright mb-4">
            पटना का अपना कपड़ा घर
          </p>
          <h1 className="font-display text-[13vw] leading-[0.95] sm:text-6xl lg:text-7xl text-ink dark:text-cream">
            {brand.nameHi}
          </h1>
          <p className="font-display text-2xl sm:text-3xl text-maroon dark:text-gold-bright mt-2">
            {brand.nameEn}
          </p>
          <p className="font-body text-lg mt-6 max-w-md text-ink/80 dark:text-cream/80 leading-relaxed">
            {brand.tagline} — {brand.taglineEn}.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="bg-maroon text-cream dark:bg-gold-bright dark:text-ink px-6 py-3 font-body text-sm hover:bg-maroon-deep dark:hover:bg-gold transition-colors"
            >
              कैटलॉग देखें · Browse the catalog
            </Link>
            <a
              href="/#founder"
              className="font-body text-sm text-ink/70 dark:text-cream/70 hover:text-maroon dark:hover:text-gold-bright underline underline-offset-4"
            >
              हमारी कहानी
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between border border-ink/15 dark:border-cream/15 p-6">
          <div>
            <p className="font-body text-xs text-ink/50 dark:text-cream/50">Starting from</p>
            <p className="font-display text-5xl text-maroon dark:text-gold-bright mt-1">₹120</p>
            <p className="font-body text-sm text-ink/60 dark:text-cream/60 mt-1">basic wear, factory rate</p>
          </div>
          <div className="divider-thread text-ink/30 dark:text-cream/30 my-6" />
          <div>
            <p className="font-body text-xs text-ink/50 dark:text-cream/50">Where we are</p>
            <p className="font-body text-sm mt-1 leading-relaxed text-ink/80 dark:text-cream/80">
              {brand.address.line1}, {brand.address.line3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
