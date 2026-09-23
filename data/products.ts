export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  sizes: string[];
  image: string;
  note?: string;
}

export const products: Product[] = [
  {
    id: "ts-01",
    name: "Round-Neck Basic Tee",
    category: "T-Shirts",
    price: 150,
    sizes: ["S", "M", "L", "XL"],
    image: "/products/tshirt-1.svg",
    note: "Everyday cotton, 5 colourways",
  },
  {
    id: "ts-02",
    name: "Oversized Drop-Shoulder Tee",
    category: "T-Shirts",
    price: 220,
    sizes: ["M", "L", "XL", "XXL"],
    image: "/products/tshirt-2.svg",
  },
  {
    id: "sh-01",
    name: "Checked Casual Shirt",
    category: "Casual Shirts",
    price: 349,
    sizes: ["M", "L", "XL"],
    image: "/products/shirt-1.svg",
  },
  {
    id: "sh-02",
    name: "Plain Poplin Shirt",
    category: "Casual Shirts",
    price: 299,
    sizes: ["S", "M", "L", "XL"],
    image: "/products/shirt-2.svg",
  },
  {
    id: "dn-01",
    name: "Slim-Fit Denim Jeans",
    category: "Denim & Trousers",
    price: 499,
    sizes: ["30", "32", "34", "36"],
    image: "/products/denim-1.svg",
  },
  {
    id: "dn-02",
    name: "Chino Trousers",
    category: "Denim & Trousers",
    price: 449,
    sizes: ["30", "32", "34", "36"],
    image: "/products/trouser-1.svg",
  },
  {
    id: "et-01",
    name: "Pure Cotton Kurta-Pyjama Suit",
    category: "Cotton Suits",
    price: 599,
    sizes: ["M", "L", "XL", "XXL"],
    image: "/products/suit-1.svg",
    note: "Roz ka aaram, tyohaar ki shaan",
  },
  {
    id: "et-02",
    name: "Cotton Ethnic Suit — Festive",
    category: "Cotton Suits",
    price: 799,
    sizes: ["M", "L", "XL"],
    image: "/products/suit-2.svg",
  },
];
