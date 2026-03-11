import { PrismaClient } from "@prisma/client";

declare global {
  var __skillupPrisma__: PrismaClient | undefined;
}

export const prisma =
  global.__skillupPrisma__ ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.__skillupPrisma__ = prisma;
}
