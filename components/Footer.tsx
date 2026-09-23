import { brand } from "@/data/brand";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-cream/10 mt-20">
      <div className="mx-auto max-w-6xl px-5 py-10 grid gap-8 sm:grid-cols-3 font-body text-sm">
        <div>
          <p className="font-display text-lg text-maroon dark:text-gold-bright mb-2">{brand.nameHi}</p>
          <p className="text-ink/70 dark:text-cream/70">{brand.legalName}</p>
          <p className="text-ink/70 dark:text-cream/70 mt-3 leading-relaxed">
            {brand.address.line1}<br />
            {brand.address.line2}<br />
            {brand.address.line3}
          </p>
        </div>
        <div>
          <p className="text-ink/50 dark:text-cream/50 mb-2">Order enquiries</p>
          {brand.phones.map((p) => (
            <a key={p} href={`tel:+91${p}`} className="block hover:text-maroon dark:hover:text-gold-bright">
              +91 {p}
            </a>
          ))}
        </div>
        <div>
          <p className="text-ink/50 dark:text-cream/50 mb-2">Watch new arrivals</p>
          <a
            href={brand.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-maroon dark:hover:text-gold-bright"
          >
            @maarobiharclothing
          </a>
        </div>
      </div>
      <div className="divider-thread text-ink/30 dark:text-cream/30 mx-5" />
      <p className="text-center text-xs text-ink/40 dark:text-cream/40 py-4 font-body">
        © {new Date().getFullYear()} {brand.legalName}, Danapur, Patna.
      </p>
    </footer>
  );
}
