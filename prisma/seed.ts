import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const category = await prisma.category.upsert({
    where: { slug: "signature-line" },
    update: {},
    create: { name: "Signature Line", slug: "signature-line" }
  });

  const demoProducts = [
    ["Midnight Oud", "midnight-oud", "BOS-MID-001", 118],
    ["Velvet Smoke", "velvet-smoke", "BOS-VEL-002", 104],
    ["White Cashmere", "white-cashmere", "BOS-WHI-003", 98],
    ["Noir Rose", "noir-rose", "BOS-NOI-004", 122],
    ["Amber Ritual", "amber-ritual", "BOS-AMB-005", 110],
    ["Black Vanilla", "black-vanilla", "BOS-BLA-006", 95],
    ["Cedar Silence", "cedar-silence", "BOS-CED-007", 108],
    ["Silent Ash", "silent-ash", "BOS-SIL-008", 126]
  ];

  for (const [name, slug, sku, price] of demoProducts) {
    await prisma.product.upsert({
      where: { slug: slug as string },
      update: {},
      create: {
        name: name as string,
        slug: slug as string,
        sku: sku as string,
        price: price as number,
        subtitle: "Crafted Atmosphere",
        description: "Luxury candle object.",
        scentNotesTop: "Bergamot",
        scentNotesHeart: "Oud",
        scentNotesBase: "Amber",
        burnTime: "60 hours",
        waxType: "Coconut-Soy",
        vesselMaterial: "Smoked glass",
        weight: "300g",
        stock: 24,
        categoryId: category.id
      }
    });
  }
}

main().finally(() => prisma.$disconnect());
