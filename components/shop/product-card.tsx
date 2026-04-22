"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="group border border-white/10 p-3">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image fill src={`${product.images[0]}?auto=format&fit=crop&w=800&q=80`} alt={product.name} className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="pt-4">
          <h3 className="font-heading text-xl">{product.name}</h3>
          <p className="mt-1 text-sm text-milk/70">{product.subtitle}</p>
          <p className="mt-3 text-sm">${product.price}</p>
        </div>
      </Link>
    </motion.article>
  );
}
