import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/shop/product-card";
import { collections, products } from "@/lib/data";

const atmosphereImages = [
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea"
];

export default function HomePage() {
  return (
    <>
      <section className="rail-grid min-h-screen border-b border-white/10">
        <aside className="hidden border-r border-white/10 px-7 py-8 md:flex md:flex-col md:justify-between">
          <p className="font-heading text-5xl leading-[0.9] tracking-tight">BOSHEQ</p>
          <p className="text-xs uppercase tracking-[0.2em] text-milk/70">Edition 01 · Crafted Atmosphere</p>
        </aside>

        <div className="relative film-grain flex min-h-screen items-end overflow-hidden px-6 pb-10 pt-24 md:p-14">
          <Image
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=2200&q=80"
            alt="BOSHEQ cinematic atmosphere"
            fill
            priority
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/15" />
          <div className="relative z-10 max-w-3xl">
            <p className="editorial-title leading-[1.05]">Objects of scent for nocturnal interiors.</p>
            <p className="mt-5 max-w-xl text-sm uppercase tracking-[0.18em] text-milk/70">
              Monochrome compositions in smoke, resin, milk musk, and graphite woods.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/catalog" className="btn-solid">
                Shop Collection
              </Link>
              <Link href="/about" className="btn-luxe">
                Discover Brand
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space container-luxe">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-heading text-3xl uppercase tracking-[0.1em] md:text-5xl">Signature Products</h2>
          <Link href="/catalog" className="text-xs uppercase tracking-[0.2em] text-milk/70 hover:text-milk">View All</Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 py-24">
        <div className="container-luxe">
          <p className="max-w-5xl font-heading text-4xl leading-tight text-milk md:text-6xl">
            BOSHEQ designs fragrance as architecture: disciplined notes, sculptural vessels, and deliberate silence.
          </p>
        </div>
      </section>

      <section className="section-space container-luxe">
        <h2 className="font-heading text-3xl uppercase tracking-[0.08em] md:text-5xl">Collections</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item) => (
            <div key={item} className="group border border-white/15 px-6 py-10 transition hover:border-milk/60 hover:bg-white/[0.03]">
              <p className="font-heading text-2xl uppercase tracking-[0.05em]">{item}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.17em] text-milk/70">Enter Collection</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space container-luxe">
        <h2 className="font-heading text-3xl uppercase tracking-[0.08em] md:text-5xl">Atmosphere</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-12">
          <div className="relative md:col-span-7 h-[560px]"><Image src={`${atmosphereImages[0]}?auto=format&fit=crop&w=1400&q=80`} alt="Campaign 1" fill className="object-cover" /></div>
          <div className="grid gap-4 md:col-span-5">
            <div className="relative h-[272px]"><Image src={`${atmosphereImages[1]}?auto=format&fit=crop&w=1000&q=80`} alt="Campaign 2" fill className="object-cover" /></div>
            <div className="relative h-[272px]"><Image src={`${atmosphereImages[2]}?auto=format&fit=crop&w=1000&q=80`} alt="Campaign 3" fill className="object-cover" /></div>
          </div>
        </div>
      </section>

      <section className="section-space container-luxe">
        <h2 className="font-heading text-3xl uppercase tracking-[0.08em] md:text-5xl">Reviews</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["A disciplined blend with couture-level restraint.", "Midnight Oud shifts the whole room in minutes.", "Packaging, burn, throw—everything feels intentional."].map((quote) => (
            <blockquote key={quote} className="border border-white/15 bg-white/[0.02] p-7 text-milk/85">
              “{quote}”
            </blockquote>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="container-luxe text-center">
          <h2 className="font-heading text-3xl uppercase tracking-[0.08em] md:text-5xl">Join the world of BOSHEQ</h2>
          <form className="mx-auto mt-8 flex max-w-xl gap-3">
            <input className="w-full border border-white/20 bg-transparent px-4 py-3" placeholder="Email" />
            <button className="btn-solid" type="submit">Join</button>
          </form>
        </div>
      </section>
    </>
  );
}
