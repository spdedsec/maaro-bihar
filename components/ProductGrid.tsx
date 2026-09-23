"use client";

import { useMemo, useState } from "react";
import { products, type Product } from "@/data/products";
import { brand } from "@/data/brand";
import { ProductCard } from "./ProductCard";
import { OrderModal } from "./OrderModal";

export function ProductGrid({ limit }: { limit?: number }) {
  const [category, setCategory] = useState<string>("all");
  const [active, setActive] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const list = category === "all" ? products : products.filter((p) => p.category === category);
    return limit ? list.slice(0, limit) : list;
  }, [category, limit]);

  return (
    <div>
      {!limit && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setCategory("all")}
            className={`px-4 py-1.5 text-sm font-body border ${
              category === "all"
                ? "border-maroon bg-maroon text-cream dark:border-gold-bright dark:bg-gold-bright dark:text-ink"
                : "border-ink/20 dark:border-cream/20"
            }`}
          >
            सभी · All
          </button>
          {brand.categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.nameEn)}
              className={`px-4 py-1.5 text-sm font-body border ${
                category === c.nameEn
                  ? "border-maroon bg-maroon text-cream dark:border-gold-bright dark:bg-gold-bright dark:text-ink"
                  : "border-ink/20 dark:border-cream/20"
              }`}
            >
              {c.nameHi} · {c.nameEn}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onOrder={setActive} />
        ))}
      </div>

      {active && <OrderModal product={active} onClose={() => setActive(null)} />}
    </div>
  );
}
