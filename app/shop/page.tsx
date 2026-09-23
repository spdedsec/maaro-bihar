import { ProductGrid } from "@/components/ProductGrid";

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <p className="font-body text-sm text-maroon dark:text-gold-bright mb-2">पूरी दुकान</p>
      <h1 className="font-display text-4xl text-ink dark:text-cream mb-8">Catalog</h1>
      <ProductGrid />
    </section>
  );
}
