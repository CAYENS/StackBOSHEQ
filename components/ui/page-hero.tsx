export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="pt-32 pb-14">
      <div className="container-luxe">
        <h1 className="font-heading text-4xl md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-milk/75">{subtitle}</p>}
      </div>
    </section>
  );
}
