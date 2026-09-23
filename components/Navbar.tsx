import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { brand } from "@/data/brand";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 dark:border-cream/10 bg-cream/90 dark:bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-xl leading-none">
          <span className="block text-maroon dark:text-gold-bright">{brand.nameHi}</span>
          <span className="block text-[11px] tracking-wide font-body text-ink/60 dark:text-cream/60">
            {brand.nameEn}
          </span>
        </Link>
        <nav className="flex items-center gap-6 font-body text-sm">
          <Link href="/shop" className="hover:text-maroon dark:hover:text-gold-bright transition-colors">
            दुकान · Shop
          </Link>
          <Link href="/#founder" className="hidden sm:inline hover:text-maroon dark:hover:text-gold-bright transition-colors">
            Founder
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
