import type { Product } from "@/data/products";

export interface OrderDetails {
  product: Product;
  size: string;
  quantity: number;
  name: string;
  address: string;
  phone: string;
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917070080808";

export function buildOrderMessage(order: OrderDetails): string {
  const lines = [
    "Naya order — MAARO BIHAR Clothing",
    "",
    `Item: ${order.product.name}`,
    `Category: ${order.product.category}`,
    `Size: ${order.size}`,
    `Quantity: ${order.quantity}`,
    `Price: ₹${order.product.price} / piece`,
    "",
    `Name: ${order.name}`,
    `Delivery address: ${order.address}`,
    `Contact number: ${order.phone}`,
  ];
  return lines.join("\n");
}

export function buildWhatsAppLink(order: OrderDetails): string {
  const text = encodeURIComponent(buildOrderMessage(order));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
