"use client";

import Image from "next/image";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  onOrder,
}: {
  product: Product;
  onOrder: (p: Product) => void;
}) {
  return (
    <div className="tag-card border border-ink/15 dark:border-cream/15 bg-parchment/40 dark:bg-ink-soft/40 p-4 flex flex-col">
      <span className="tag-hole" />
      <div className="aspect-[4/5] bg-cream dark:bg-ink flex items-center justify-center overflow-hidden">
        <Image src={product.image} alt={product.name} width={200} height={200} className="h-full w-full object-contain p-4" />
      </div>
      <div className="mt-4 flex-1">
        <p className="font-body text-xs text-ink/50 dark:text-cream/50">{product.category}</p>
        <h3 className="font-display text-xl mt-1 text-ink dark:text-cream">{product.name}</h3>
        {product.note && (
          <p className="font-body text-sm text-ink/60 dark:text-cream/60 mt-1">{product.note}</p>
        )}
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="font-display text-2xl text-maroon dark:text-gold-bright">₹{product.price}</p>
        <button
          onClick={() => onOrder(product)}
          className="border border-maroon dark:border-gold-bright text-maroon dark:text-gold-bright px-4 py-2 text-sm font-body hover:bg-maroon hover:text-cream dark:hover:bg-gold-bright dark:hover:text-ink transition-colors"
        >
          ऑर्डर करें
        </button>
      </div>
    </div>
  );
}
