import type { Metadata } from "next";
import { Yatra_One, Mukta } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const display = Yatra_One({
  subsets: ["latin", "devanagari"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maaro Bihar Clothing — Delhi ka rate, ab Patna mein",
  description:
    "Maaro Bihar Clothing: wholesale & retail menswear from Danapur, Patna. T-shirts, shirts, denim and cotton suits at factory rates.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body className="font-body">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
