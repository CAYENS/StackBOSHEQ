import { PageHero } from "@/components/ui/page-hero";
import { ProductCard } from "@/components/shop/product-card";
import { products } from "@/lib/data";

export default function CatalogPage() {
  return (
    <>
      <PageHero title="Catalog" subtitle="Sculpted scent objects across woody, smoky, and amber compositions." />
      <section className="container-luxe pb-24">
        <div className="mb-10 grid gap-3 border border-white/10 bg-white/[0.02] p-4 text-[10px] uppercase tracking-[0.18em] md:grid-cols-6">
          <div>Filter · Price</div>
          <div>Scent Family</div>
          <div>Size</div>
          <div>Bestseller</div>
          <div>New Arrivals</div>
          <div>Sort · Newest</div>
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
