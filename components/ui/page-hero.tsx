export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="container-luxe">
        <h1 className="font-heading text-5xl uppercase tracking-[0.08em] md:text-7xl">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-3xl text-sm uppercase tracking-[0.16em] text-milk/70">{subtitle}</p> : null}
      </div>
    </section>
  );
}
