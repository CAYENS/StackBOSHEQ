import { PageHero } from "@/components/ui/page-hero";
import { ProductCard } from "@/components/shop/product-card";
import { products } from "@/lib/data";

export default function CatalogPage() {
  return (
    <>
      <PageHero title="Catalog" subtitle="Curated compositions in wax and smoke." />
      <section className="container-luxe pb-20">
        <div className="mb-8 grid gap-4 border border-white/10 p-4 md:grid-cols-6 text-xs uppercase tracking-[0.15em]">
          <div>Filter: price</div><div>scent family</div><div>size</div><div>bestseller</div><div>new arrivals</div><div>Sort: newest</div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
