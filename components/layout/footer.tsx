import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/15 py-12 text-xs uppercase tracking-[0.2em] text-milk/70">
      <div className="container-luxe grid gap-5 md:grid-cols-3">
        <div>BOSHEQ · Crafted Atmosphere</div>
        <div className="flex gap-4 md:justify-center">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/delivery">Delivery</Link>
        </div>
        <div className="md:text-right">contact@bosheq.com</div>
      </div>
    </footer>
  );
}
