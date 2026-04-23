"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article whileHover={{ y: -4 }} className="group">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
          <Image
            fill
            src={`${product.images[0]}?auto=format&fit=crop&w=800&q=80`}
            alt={product.name}
            className="object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-75"
          />
        </div>
        <div className="pt-5 text-center">
          <h3 className="font-heading text-[29px] leading-none uppercase tracking-[0.04em]">{product.name}</h3>
          <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-milk/70">{product.subtitle}</p>
          <p className="mt-2 text-[12px] uppercase tracking-[0.14em]">${product.price}</p>
        </div>
      </Link>
    </motion.article>
  );
}
