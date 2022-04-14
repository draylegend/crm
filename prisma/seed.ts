import { PrismaClient } from '@prisma/client';

const p = new PrismaClient();

(async () =>
  p.appointment.create({
    data: {
      start: new Date().getTime(),
      duration: 30,
      client: {
        create: {
          firstName: 'Boris',
        },
      },
    },
  }))()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await p.$disconnect());
