"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-8 w-16" />;

  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Switch colour mode"
      className="flex items-center gap-2 border border-ink/30 dark:border-cream/30 px-3 py-1.5 text-sm font-body hover:border-maroon dark:hover:border-gold transition-colors"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-maroon dark:bg-gold" />
      {isDark ? "उजाला" : "अंधेरा"}
    </button>
  );
}
