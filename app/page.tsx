import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/shop/product-card";
import { collections, products } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80" alt="BOSHEQ hero" fill priority className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <p className="font-heading text-6xl tracking-[0.35em] md:text-8xl">BOSHEQ</p>
          <p className="mt-5 text-sm uppercase tracking-[0.35em]">Crafted Atmosphere</p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/catalog" className="btn-luxe">Shop Collection</Link>
            <Link href="/about" className="btn-luxe">Discover Brand</Link>
          </div>
        </div>
      </section>

      <section className="section-space container-luxe">
        <h2 className="font-heading text-3xl">Signature Products</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="section-space border-y border-white/10">
        <div className="container-luxe max-w-4xl">
          <p className="font-heading text-4xl leading-tight md:text-5xl">Objects of scent designed to transform space.</p>
        </div>
      </section>

      <section className="section-space container-luxe grid gap-5 md:grid-cols-4">
        {collections.map((c) => <div key={c} className="border border-white/10 p-8 font-heading text-2xl">{c}</div>)}
      </section>

      <section className="section-space container-luxe">
        <h2 className="font-heading text-3xl">Atmosphere Gallery</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Image key={i} src={`https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=${800 + i * 10}&q=80`} alt="Campaign" width={700} height={850} className="h-[420px] w-full object-cover" />
          ))}
        </div>
      </section>

      <section className="section-space container-luxe">
        <h2 className="font-heading text-3xl">Reviews</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["A controlled, architectural scent.", "Every detail feels couture.", "Understated and unforgettable."].map((r) => (
            <blockquote key={r} className="border border-white/10 p-6">“{r}”</blockquote>
          ))}
        </div>
      </section>

      <section className="section-space container-luxe text-center">
        <h2 className="font-heading text-3xl">Join the world of BOSHEQ</h2>
        <form className="mx-auto mt-6 flex max-w-xl gap-3">
          <input className="w-full border border-white/20 bg-transparent px-4 py-3" placeholder="Email" />
          <button className="btn-luxe" type="submit">Join</button>
        </form>
      </section>
    </>
  );
}
