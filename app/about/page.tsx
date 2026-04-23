import { PageHero } from "@/components/ui/page-hero";

export default function AboutPage() {
  return (
    <>
      <PageHero title="About BOSHEQ" subtitle="A niche fragrance house composing atmosphere through wax, smoke, and shadow." />
      <section className="container-luxe pb-24">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-milk/85 leading-8">
            BOSHEQ was built for interiors that value silence, proportion, and material depth. Each candle is developed as an art object,
            balancing scent architecture with sculptural presentation.
          </p>
          <p className="text-milk/75 leading-8">
            Every batch is hand-poured in constrained runs, then rested for a slow cure. The result is controlled throw, cleaner combustion,
            and a signature atmosphere designed to transform a room without noise.
          </p>
        </div>
      </section>
    </>
  );
}
