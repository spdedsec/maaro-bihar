"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function OrderModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [size, setSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const canSubmit = name.trim() && address.trim() && phone.trim().length >= 10;

  function handleSubmit() {
    if (!canSubmit) return;
    const link = buildWhatsAppLink({ product, size, quantity, name, address, phone });
    window.open(link, "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-ink/60 backdrop-blur-sm p-0 sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md bg-cream dark:bg-ink-soft border-t sm:border border-ink/15 dark:border-cream/15 p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="font-body text-xs text-ink/50 dark:text-cream/50">{product.category}</p>
            <h3 className="font-display text-2xl text-ink dark:text-cream">{product.name}</h3>
            <p className="font-display text-xl text-maroon dark:text-gold-bright mt-1">₹{product.price} / piece</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close order form"
            className="font-body text-sm text-ink/50 dark:text-cream/50 hover:text-maroon dark:hover:text-gold-bright"
          >
            बंद करें
          </button>
        </div>

        <div className="divider-thread text-ink/25 dark:text-cream/25 my-5" />

        <div className="grid gap-4">
          <div>
            <label className="font-body text-xs text-ink/60 dark:text-cream/60">Size · साइज़</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1.5 text-sm font-body border ${
                    size === s
                      ? "border-maroon bg-maroon text-cream dark:border-gold-bright dark:bg-gold-bright dark:text-ink"
                      : "border-ink/20 dark:border-cream/20 text-ink/80 dark:text-cream/80"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-body text-xs text-ink/60 dark:text-cream/60">Quantity · मात्रा</label>
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="h-9 w-9 border border-ink/20 dark:border-cream/20 font-body"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="font-display text-lg w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="h-9 w-9 border border-ink/20 dark:border-cream/20 font-body"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <label className="font-body text-xs text-ink/60 dark:text-cream/60">
            Your name · नाम
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full bg-transparent border border-ink/20 dark:border-cream/20 px-3 py-2 font-body text-ink dark:text-cream focus:border-maroon dark:focus:border-gold-bright outline-none"
              placeholder="Full name"
            />
          </label>

          <label className="font-body text-xs text-ink/60 dark:text-cream/60">
            Delivery address · पता
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="mt-1 w-full bg-transparent border border-ink/20 dark:border-cream/20 px-3 py-2 font-body text-ink dark:text-cream focus:border-maroon dark:focus:border-gold-bright outline-none resize-none"
              placeholder="House, street, landmark, city, PIN"
            />
          </label>

          <label className="font-body text-xs text-ink/60 dark:text-cream/60">
            Contact number · मोबाइल नंबर
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              className="mt-1 w-full bg-transparent border border-ink/20 dark:border-cream/20 px-3 py-2 font-body text-ink dark:text-cream focus:border-maroon dark:focus:border-gold-bright outline-none"
              placeholder="10-digit mobile number"
            />
          </label>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="mt-6 w-full bg-maroon text-cream dark:bg-gold-bright dark:text-ink py-3 font-body text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-maroon-deep dark:hover:bg-gold transition-colors"
        >
          WhatsApp पर भेजें · Send order on WhatsApp
        </button>
        <p className="font-body text-xs text-ink/45 dark:text-cream/45 mt-3 text-center">
          Opens WhatsApp with your order filled in. Our team confirms and delivers.
        </p>
      </div>
    </div>
  );
}
