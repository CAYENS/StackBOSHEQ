import { products } from "@/lib/data";
import { ProductCard } from "@/components/shop/product-card";

export default function CatalogPage() {
  return (
    <section className="light-surface min-h-screen">
      <div className="container-luxe pb-20 pt-10">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="font-heading text-[64px] uppercase tracking-[0.04em]">Homme {`>`} New Arrivals</h1>
          <button className="bg-[#111] px-5 py-3 font-heading text-[28px] uppercase text-white">Filters</button>
        </div>
        <div className="grid gap-x-14 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
