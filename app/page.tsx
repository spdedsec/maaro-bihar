import { Hero } from "@/components/Hero";
import { AboutFounder } from "@/components/AboutFounder";
import { ProductGrid } from "@/components/ProductGrid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutFounder />
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl text-ink dark:text-cream">कुछ पसंदीदा · A few favourites</h2>
          <Link href="/shop" className="font-body text-sm underline underline-offset-4 text-maroon dark:text-gold-bright">
            पूरा कैटलॉग · Full catalog
          </Link>
        </div>
        <ProductGrid limit={6} />
      </section>
    </>
  );
}
