import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-[11px] uppercase tracking-[0.14em] text-milk/70">
      <div className="container-luxe flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-heading text-base tracking-[0.08em] text-milk">BOSHEQ</p>
        <div className="flex flex-wrap gap-5">
          <Link href="/catalog">Stockists</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Legal</Link>
        </div>
        <p>© 2026 BOSHEQ</p>
      </div>
    </footer>
  );
}
