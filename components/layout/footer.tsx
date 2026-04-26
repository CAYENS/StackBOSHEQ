import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#151515] py-8 text-[24px] uppercase tracking-[0.03em] font-heading">
      <div className="container-luxe flex flex-wrap items-center justify-between gap-5">
        <div className="flex gap-6 text-milk/90">
          <span>BOSHEQ © 2026</span>
          <Link href="/catalog">Stockists</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Legal</Link>
        </div>
        <p className="text-milk/75">Site by BOSHEQ Atelier</p>
      </div>
    </footer>
  );
}
