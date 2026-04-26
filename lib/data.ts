import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    slug: "midnight-oud",
    name: "Midnight Oud",
    subtitle: "Resin. Charred Cedar. Quiet Opulence.",
    price: 118,
    images: ["https://images.unsplash.com/photo-1603006905003-be475563bc59"],
    scentFamily: "Woody",
    size: "300g",
    burnTime: "65 hours",
    waxType: "Coconut-Soy",
    vesselMaterial: "Smoked Glass",
    weight: "0.9kg",
    notes: { top: "Saffron", heart: "Oud", base: "Black Amber" },
    description: "Dark woods, softened by warm amber and restrained smoke.",
    atmosphere: "A private room after midnight where velvet absorbs every echo.",
    craftsmanship: "Hand-poured in small numbered runs.",
    ritual: "Trim wick to 4mm. Burn in full pools for a clean memory.",
    isBestseller: true
  },
  {
    id: "2", slug: "velvet-smoke", name: "Velvet Smoke", subtitle: "Tobacco Leaf. Iris. Ash.", price: 104,
    images: ["https://images.unsplash.com/photo-1608181831718-8f1403f4f291"], scentFamily: "Smoky", size: "280g", burnTime: "58 hours", waxType: "Coconut-Soy", vesselMaterial: "Ceramic", weight: "0.8kg",
    notes: { top: "Violet Leaf", heart: "Tobacco", base: "Smoke Accord" }, description: "Silk and ember in a restrained signature.", atmosphere: "Monochrome dusk and brushed concrete.", craftsmanship: "Polished by hand in graphite vessels.", ritual: "Allow first burn to reach vessel edge.", isNew: true
  },
  {
    id: "3", slug: "white-cashmere", name: "White Cashmere", subtitle: "Milk Musk. Sandalwood.", price: 98,
    images: ["https://images.unsplash.com/photo-1602872027162-c63a9f9f3ec6"], scentFamily: "Soft Wood", size: "250g", burnTime: "52 hours", waxType: "Coconut-Soy", vesselMaterial: "Porcelain", weight: "0.75kg",
    notes: { top: "Aldehydes", heart: "Cashmere Wood", base: "White Musk" }, description: "A clean glow with textured depth.", atmosphere: "Cream light against shadowed linen.", craftsmanship: "Precision fragrance loading for smooth diffusion.", ritual: "Rest 10 minutes before relighting."
  },
  {
    id: "4", slug: "noir-rose", name: "Noir Rose", subtitle: "Rose Oxide. Patchouli.", price: 122,
    images: ["https://images.unsplash.com/photo-1608181830548-fd3f8ea670fe"], scentFamily: "Floral Dark", size: "300g", burnTime: "64 hours", waxType: "Coconut-Soy", vesselMaterial: "Smoked Glass", weight: "0.92kg",
    notes: { top: "Rose Oxide", heart: "Geranium", base: "Patchouli" }, description: "Rose stripped to shadow.", atmosphere: "Night petals in black water.", craftsmanship: "Slow-cured for depth.", ritual: "Burn 2-3 hours sessions."
  },
  { id: "5", slug: "amber-ritual", name: "Amber Ritual", subtitle: "Labdanum. Tonka.", price: 110, images: ["https://images.unsplash.com/photo-1603006905393-c4f7c2778eb5"], scentFamily: "Amber", size: "300g", burnTime: "65 hours", waxType: "Coconut-Soy", vesselMaterial: "Ceramic", weight: "0.9kg", notes: { top: "Pink Pepper", heart: "Labdanum", base: "Tonka" }, description: "Warm architecture in scent form.", atmosphere: "Bronzed walls and low light.", craftsmanship: "High fragrance concentration.", ritual: "Keep away from drafts." },
  { id: "6", slug: "black-vanilla", name: "Black Vanilla", subtitle: "Vanilla Bean. Ink.", price: 95, images: ["https://images.unsplash.com/photo-1602872030490-4a484f42247c"], scentFamily: "Gourmand Dark", size: "250g", burnTime: "50 hours", waxType: "Coconut-Soy", vesselMaterial: "Glass", weight: "0.74kg", notes: { top: "Cardamom", heart: "Vanilla Absolute", base: "Inkwood" }, description: "Vanilla with graphite gravity.", atmosphere: "Dense velvet and black silk.", craftsmanship: "Wax rested for 14 days.", ritual: "Center wick after extinguishing." },
  { id: "7", slug: "cedar-silence", name: "Cedar Silence", subtitle: "Atlas Cedar. Tea.", price: 108, images: ["https://images.unsplash.com/photo-1608198093002-ad4e005484ec"], scentFamily: "Woody", size: "280g", burnTime: "55 hours", waxType: "Coconut-Soy", vesselMaterial: "Concrete", weight: "0.85kg", notes: { top: "Bergamot", heart: "Cedar", base: "Tea Smoke" }, description: "Austere and quietly magnetic.", atmosphere: "Gallery air and clean lines.", craftsmanship: "Matte vessel with tactile finish.", ritual: "Burn at least 90 minutes." },
  { id: "8", slug: "silent-ash", name: "Silent Ash", subtitle: "Birch Tar. Vetiver.", price: 126, images: ["https://images.unsplash.com/photo-1612198790700-0ff08cb726e5"], scentFamily: "Smoky", size: "320g", burnTime: "68 hours", waxType: "Coconut-Soy", vesselMaterial: "Obsidian Glass", weight: "0.95kg", notes: { top: "Juniper", heart: "Birch Tar", base: "Vetiver" }, description: "The final ember, rendered elegant.", atmosphere: "After-image of fire in stone interiors.", craftsmanship: "Individually inspected and boxed.", ritual: "Cap after cooling to preserve oils.", isBestseller: true }
];

export const collections = ["Evening Ritual", "Signature Line", "Limited Editions", "Gift Sets"];
