"use client";

import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { useCartStore } from "@/lib/cart-store";

export default function CartPage() {
  const { items, remove, updateQty } = useCartStore();
  const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <>
      <PageHero title="Cart" subtitle="Your selected atmospheric objects." />
      <section className="container-luxe pb-24">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between border border-white/10 p-4">
              <div>
                <p className="font-heading text-2xl">{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center gap-3">
                <input className="w-20 border border-white/20 bg-transparent p-2" type="number" min={1} value={item.qty} onChange={(e) => updateQty(item.id, Number(e.target.value))} />
                <button onClick={() => remove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 border border-white/10 p-6">
          <p className="text-xl">Subtotal: ${subtotal.toFixed(2)}</p>
          <input placeholder="Promo code" className="mt-4 w-full border border-white/20 bg-transparent p-3" />
          <Link href="/checkout" className="btn-luxe mt-4">Proceed to Checkout</Link>
        </div>
      </section>
    </>
  );
}
