import { PrismaClient } from "@prisma/client";

declare global {
  var __skillupPrisma__: PrismaClient | undefined;
}

const databaseUrl =
  process.env.DATABASE_URL ??
  process.env.POSTGRES_PRISMA_URL ??
  process.env.POSTGRES_URL_NON_POOLING ??
  process.env.POSTGRES_URL;

if (databaseUrl && !process.env.DATABASE_URL) {
  process.env.DATABASE_URL = databaseUrl;
}

export const hasConfiguredDatabaseUrl = Boolean(databaseUrl);

export const prisma =
  global.__skillupPrisma__ ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.__skillupPrisma__ = prisma;
}
