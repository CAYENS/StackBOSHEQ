import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { AddToCart } from "@/components/shop/add-to-cart";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <section className="container-luxe pb-24 pt-28">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden border border-white/10"><Image fill src={`${product.images[0]}?auto=format&fit=crop&w=1200&q=80`} alt={product.name} className="object-cover" /></div>
        <div>
          <h1 className="font-heading text-5xl">{product.name}</h1>
          <p className="mt-2 text-milk/70">{product.subtitle}</p>
          <p className="mt-6 text-2xl">${product.price}</p>
          <p className="mt-6 max-w-xl text-milk/80">{product.description}</p>
          <AddToCart id={product.id} name={product.name} price={product.price} image={product.images[0]} />
          <div className="mt-8 grid gap-2 text-sm text-milk/75">
            <p>Burn time: {product.burnTime}</p><p>Wax type: {product.waxType}</p><p>Vessel: {product.vesselMaterial}</p><p>Weight: {product.weight}</p>
            <p>Notes: Top {product.notes.top} · Heart {product.notes.heart} · Base {product.notes.base}</p>
          </div>
          <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-milk/80">
            <p><strong className="font-heading">Atmosphere:</strong> {product.atmosphere}</p>
            <p><strong className="font-heading">Craftsmanship:</strong> {product.craftsmanship}</p>
            <p><strong className="font-heading">Burning Ritual:</strong> {product.ritual}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
