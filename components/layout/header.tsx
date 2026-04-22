"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition ${solid ? "bg-graphite/95 backdrop-blur" : "bg-transparent"}`}>
      <div className="container-luxe flex h-16 items-center justify-between text-xs uppercase tracking-[0.2em]">
        <nav className="hidden gap-6 md:flex">
          <Link href="/catalog">Catalog</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link href="/" className="font-heading text-lg tracking-[0.35em]">BOSHEQ</Link>
        <div className="flex gap-5">
          <Link href="/catalog">Search</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </header>
  );
}
