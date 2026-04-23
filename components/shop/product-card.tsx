"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article whileHover={{ y: -4 }} className="group text-current">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#d8d8d8]">
          <Image fill src={`${product.images[0]}?auto=format&fit=crop&w=1000&q=80`} alt={product.name} className="object-cover transition duration-500 group-hover:scale-[1.03]" />
        </div>
        <div className="pt-5 text-center font-heading uppercase">
          <h3 className="text-[34px] leading-[1.02] tracking-[0.03em]">{product.name}</h3>
          <p className="mt-2 text-[24px] opacity-70">{product.scentFamily}</p>
          <p className="text-[24px]">${product.price}</p>
        </div>
      </Link>
    </motion.article>
  );
}
