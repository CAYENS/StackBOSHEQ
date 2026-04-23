"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const centerNav = [
  { href: "/catalog", label: "Homme" },
  { href: "/collections", label: "Femme" },
  { href: "/about", label: "Archive" },
  { href: "/contact", label: "Stores" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <>
      <aside className="brand-rail hidden lg:flex lg:flex-col lg:justify-between lg:px-8 lg:py-8">
        <Link href="/" className="font-heading text-[36px] leading-[0.9] tracking-[0.02em] uppercase text-white/85">
          BOSHEQ
        </Link>
        <p className="text-xs uppercase tracking-[0.1em] text-milk/80">Printemps / Été 26</p>
      </aside>

      <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-white/10 bg-black/40 backdrop-blur-[1px] site-offset">
        <div className="container-luxe flex h-full items-center justify-between font-heading text-[17px] uppercase tracking-[0.03em] text-white/90">
          <nav className="hidden items-center gap-7 md:flex">
            {centerNav.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? "text-white" : "text-white/70 hover:text-white"}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-6">
            <Link href="/catalog">Search</Link>
            <Link href="/contact">Account</Link>
            <Link href="/cart">Cart (0)</Link>
          </div>
        </div>
      </header>
    </>
  );
}
