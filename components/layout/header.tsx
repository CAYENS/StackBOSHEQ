"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLeft = [
  { href: "/catalog", label: "Catalog" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "Brand" }
];

export function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-500 ${
        solid ? "border-white/15 bg-blackish/90 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-16 items-center justify-between text-[11px] uppercase tracking-[0.16em] md:h-20">
        <div className="hidden items-center gap-8 md:flex">
          {navLeft.map((item) => (
            <Link key={item.href} href={item.href} className="text-milk/80 hover:text-milk">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/" className="font-heading text-xl tracking-[0.2em] md:absolute md:left-1/2 md:-translate-x-1/2">
          BOSHEQ
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/catalog">Search</Link>
          <Link href="/contact">Account</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </header>
  );
}
