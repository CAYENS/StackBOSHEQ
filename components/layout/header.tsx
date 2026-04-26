"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const centerNav = [
  { href: "/catalog", label: "Homme" },
  { href: "/collections", label: "Femme" },
  { href: "/about", label: "Archive" },
  { href: "/contact", label: "Stores" }
];

export function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="container-luxe flex h-full items-center justify-between font-heading text-[17px] uppercase tracking-[0.03em] text-white/90">
        <Link href="/" className="relative h-9 w-[170px]">
          <Image src="/logo-bosheq.svg" alt="BOSHEQ" fill priority className="object-contain object-left" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {centerNav.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "text-white" : "text-white/70 hover:text-white"}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link href="/catalog">Search</Link>
          {session ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>
          ) : (
            <Link href="/account/login">Account</Link>
          )}
          <Link href="/cart">Cart (0)</Link>
        </div>
      </div>
    </header>
  );
}
