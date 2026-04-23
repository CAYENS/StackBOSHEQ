import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="site-offset relative min-h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=2400&q=80"
          alt="BOSHEQ cinematic"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="container-luxe relative z-10 flex min-h-screen flex-col justify-between pb-12 pt-32">
          <div className="mx-auto flex items-center gap-8 text-[34px] uppercase tracking-[0.03em] font-heading text-milk/90">
            <Link href="/catalog">Homme</Link>
            <Link href="/catalog">Femme</Link>
          </div>
          <div className="max-w-5xl">
            <h1 className="font-heading text-[84px] uppercase leading-[0.9]">Crafted Atmosphere</h1>
            <p className="mt-4 max-w-2xl text-lg uppercase tracking-[0.06em] text-milk/75">
              Dark woods, restrained smoke, and luminous wax sculpted for architectural interiors.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/catalog" className="btn-luxe">Shop Collection</Link>
              <Link href="/about" className="btn-luxe">Discover Brand</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="site-offset grid min-h-[82vh] grid-cols-1 border-t border-white/10 md:grid-cols-2">
        <Link href="/catalog" className="group relative min-h-[500px] overflow-hidden border-r border-white/10">
          <Image src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80" alt="Shop Homme" fill className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/30" />
          <p className="absolute bottom-8 left-8 font-heading text-[34px] uppercase">Shop Signature</p>
        </Link>
        <Link href="/collections" className="group relative min-h-[500px] overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1400&q=80" alt="Shop Femme" fill className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/30" />
          <p className="absolute bottom-8 left-8 font-heading text-[34px] uppercase">Shop Limited</p>
        </Link>
      </section>
    </>
  );
}
