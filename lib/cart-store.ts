"use client";

import { create } from "zustand";

type Item = { id: string; name: string; price: number; image: string; qty: number };

type CartState = {
  items: Item[];
  add: (item: Omit<Item, "qty">) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return { items: state.items.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i)) };
      }
      return { items: [...state.items, { ...item, qty: 1 }] };
    }),
  remove: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  updateQty: (id, qty) => set((state) => ({ items: state.items.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)) })),
  clear: () => set({ items: [] })
}));
