import { PrismaClient } from "@prisma/client";

import { singleton } from "./singleton.server";

// Hard-code a unique key, so we can look up the client when this module gets re-imported
const prisma = singleton(
  "prisma",
  () =>
    new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_PRIVATE_URL || process.env.DATABASE_URL,
        },
      },
    }),
);
prisma.$connect();

export { prisma };
