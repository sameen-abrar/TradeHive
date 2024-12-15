import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Define categories to be seeded
  const categories = [
    { name: 'ELECTRONICS', code: 'ELEC', description: 'Electronic gadgets and devices' },
    { name: 'FURNITURE', code: 'FURN', description: 'Furniture for home and office' },
    { name: 'HOMEAPPLIANCES', code: 'HOME', description: 'Appliances for home use' },
    { name: 'SPORTING GOODS', code: 'SPORT', description: 'Goods for sports and outdoor activities' },
    { name: 'OUTDOOR', code: 'OUTD', description: 'Outdoor equipment and gear' },
    { name: 'TOYS', code: 'TOYS', description: 'Toys and games for children' },
  ];

  // Seed the categories
  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category.name,
        code: category.code,
        description: category.description,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  console.log('Categories seeded successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    // process.exit(1);
  })
