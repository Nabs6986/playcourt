import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const club = await prisma.club.upsert({
    where: { slug: "demo-club" },
    update: {},
    create: {
      name: "Demo Tennis Club",
      slug: "demo-club",
      address: "123 Center Ct, Austin, TX",
      phone: "512-555-0100",
      timezone: "America/Chicago",
      settings: {
        create: {
          maxAdvanceDays: 7,
          maxHoursPerMemberPerDay: 2,
          cancellationWindowHours: 12,
          allowGuestBooking: true,
          bookingDurations: [60, 90]
        }
      },
      courts: {
        create: [
          { name: "Court 1", surfaceType: "Hard", sortOrder: 1 },
          { name: "Court 2", surfaceType: "Hard", sortOrder: 2 }
        ]
      },
      members: {
        create: [
          { name: "Admin User", email: "admin@demo.club", role: "admin" },
          { name: "Member User", email: "member@demo.club", role: "member" }
        ]
      }
    }
  });

  const existingHours = await prisma.operatingHour.count({ where: { clubId: club.id } });
  if (existingHours === 0) {
    await prisma.operatingHour.createMany({
      data: Array.from({ length: 7 }).map((_, i) => ({
        clubId: club.id,
        dayOfWeek: i,
        openTime: "07:00",
        closeTime: "22:00",
        isClosed: false
      }))
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
