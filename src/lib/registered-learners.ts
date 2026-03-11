import "server-only";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { adminUsers } from "@/lib/mock-data";
import { formatRegisteredLearnerRow, mergeRegisteredLearners, normalizeLearnerEmail } from "@/lib/registered-learner-utils";
import { hasConfiguredDatabaseUrl, prisma } from "@/lib/prisma";
import type { RegisteredLearner } from "@/types";

const REGISTERED_LEARNERS_FILE = path.join(process.cwd(), "data", "registered-learners.json");
let memoryRegisteredLearners: RegisteredLearner[] = [];
const hasDatabaseUrl = hasConfiguredDatabaseUrl;

async function ensureRegisteredLearnersFile() {
  try {
    await mkdir(path.dirname(REGISTERED_LEARNERS_FILE), { recursive: true });

    await readFile(REGISTERED_LEARNERS_FILE, "utf8");
  } catch {
    try {
      await writeFile(REGISTERED_LEARNERS_FILE, "[]\n", "utf8");
      return true;
    } catch {
      return false;
    }
  }

  return true;
}

function mapRecordToLearner(record: {
  currentLevel: string;
  email: string;
  fullName: string;
  purpose: string | null;
  registeredAt: Date;
  targetPlatform: string;
}): RegisteredLearner {
  return {
    currentLevel: record.currentLevel,
    email: record.email,
    fullName: record.fullName,
    purpose: record.purpose ?? "",
    registeredAt: record.registeredAt.toISOString(),
    targetPlatform: record.targetPlatform,
  };
}

async function ensureRegisteredLearnerTable() {
  if (!hasDatabaseUrl) {
    return false;
  }

  try {
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "RegisteredLearnerRecord" (
        "id" TEXT PRIMARY KEY,
        "fullName" TEXT NOT NULL,
        "email" TEXT NOT NULL UNIQUE,
        "targetPlatform" TEXT NOT NULL,
        "currentLevel" TEXT NOT NULL,
        "purpose" TEXT,
        "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    await prisma.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS "RegisteredLearnerRecord_registeredAt_idx"
      ON "RegisteredLearnerRecord" ("registeredAt")
    `);

    return true;
  } catch (error) {
    console.error("Unable to prepare registered learner database table.", error);

    return false;
  }
}

async function getDatabaseRegisteredLearners() {
  const canUseDatabase = await ensureRegisteredLearnerTable();

  if (!canUseDatabase) {
    return null;
  }

  try {
    const learners = await prisma.registeredLearnerRecord.findMany({
      orderBy: { registeredAt: "desc" },
    });

    return learners.map(mapRecordToLearner);
  } catch (error) {
    console.error("Unable to read registered learners from database.", error);

    return null;
  }
}

export async function getRegisteredLearners() {
  const databaseLearners = await getDatabaseRegisteredLearners();

  if (databaseLearners) {
    memoryRegisteredLearners = databaseLearners;

    return [...databaseLearners];
  }

  const canUseFileSystem = await ensureRegisteredLearnersFile();

  if (!canUseFileSystem) {
    return [...memoryRegisteredLearners];
  }

  try {
    const fileContents = await readFile(REGISTERED_LEARNERS_FILE, "utf8");
    const parsedValue = JSON.parse(fileContents);

    if (Array.isArray(parsedValue)) {
      memoryRegisteredLearners = parsedValue as RegisteredLearner[];

      return [...memoryRegisteredLearners];
    }

    return [...memoryRegisteredLearners];
  } catch {
    return [...memoryRegisteredLearners];
  }
}

export async function saveRegisteredLearner(learner: RegisteredLearner) {
  if (await ensureRegisteredLearnerTable()) {
    try {
      await prisma.registeredLearnerRecord.upsert({
        where: { email: learner.email.trim().toLowerCase() },
        update: {
          currentLevel: learner.currentLevel,
          fullName: learner.fullName,
          purpose: learner.purpose || null,
          registeredAt: new Date(learner.registeredAt),
          targetPlatform: learner.targetPlatform,
        },
        create: {
          currentLevel: learner.currentLevel,
          email: learner.email.trim().toLowerCase(),
          fullName: learner.fullName,
          purpose: learner.purpose || null,
          registeredAt: new Date(learner.registeredAt),
          targetPlatform: learner.targetPlatform,
        },
      });

      memoryRegisteredLearners = mergeRegisteredLearners(memoryRegisteredLearners, {
        ...learner,
        email: normalizeLearnerEmail(learner.email),
      });

      return;
    } catch (error) {
      console.error("Unable to persist registered learner to database. Falling back to local storage.", error);
    }
  }

  const learners = await getRegisteredLearners();
  const nextLearners = mergeRegisteredLearners(learners, learner);
  memoryRegisteredLearners = nextLearners;

  try {
    await writeFile(REGISTERED_LEARNERS_FILE, JSON.stringify(nextLearners, null, 2), "utf8");
  } catch (error) {
    console.error("Unable to persist registered learners to disk. Falling back to in-memory storage.", error);
  }
}

export async function getAdminUserRows() {
  const registeredLearners = await getRegisteredLearners();
  const learnerRows = registeredLearners
    .sort((left, right) => new Date(right.registeredAt).getTime() - new Date(left.registeredAt).getTime())
    .map(formatRegisteredLearnerRow);

  return [...learnerRows, ...adminUsers];
}
