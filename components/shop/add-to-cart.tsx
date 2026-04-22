"use client";

import { useCartStore } from "@/lib/cart-store";

export function AddToCart({ id, name, price, image }: { id: string; name: string; price: number; image: string }) {
  const add = useCartStore((s) => s.add);
  return <button className="btn-luxe mt-6" onClick={() => add({ id, name, price, image })}>Add to Cart</button>;
}
