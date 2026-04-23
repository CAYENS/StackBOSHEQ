import Image from "next/image";
import Link from "next/link";

const heroTiles = [
  {
    href: "/catalog",
    label: "Shop Homme",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=80"
  },
  {
    href: "/collections",
    label: "Shop Femme",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80"
  }
];

export default function HomePage() {
  return (
    <section className="site-offset h-screen overflow-hidden bg-black pt-20">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        {heroTiles.map((tile) => (
          <Link key={tile.label} href={tile.href} className="group relative h-full overflow-hidden border-t border-white/10 md:border-l md:border-t-0 first:md:border-l-0">
            <Image
              src={tile.image}
              alt={tile.label}
              fill
              priority
              className="object-cover saturate-[0.88] contrast-[0.96] brightness-[0.9] transition duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/24 transition group-hover:bg-black/10" />
            <div className="absolute bottom-7 left-8 right-8 flex items-center justify-between">
              <p className="font-heading text-[34px] uppercase tracking-[0.03em] text-white">{tile.label}</p>
              <span className="font-heading text-[30px] text-white/85">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
