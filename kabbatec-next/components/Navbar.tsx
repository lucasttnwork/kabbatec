"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 transition-[height,background,box-shadow] duration-300 ${
        scrolled ? "bg-[rgba(12,17,24,.65)] h-16 shadow-[0_6px_24px_rgba(0,0,0,.25)]" : "bg-[rgba(12,17,24,.35)] h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/30 border border-primary/40" />
          <span className="font-semibold tracking-tight">Kabbatec</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
          <a href="#como-funciona" className="hover:text-foreground transition">Como funciona</a>
          <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href="#contato"
          className="cta-primary inline-flex items-center rounded-full text-sm"
          aria-label="Fale Conosco"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
