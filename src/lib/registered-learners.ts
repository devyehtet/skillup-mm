import "server-only";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { adminUsers } from "@/lib/mock-data";
import type { RegisteredLearner, TableRow } from "@/types";

const REGISTERED_LEARNERS_FILE = path.join(process.cwd(), "data", "registered-learners.json");
let memoryRegisteredLearners: RegisteredLearner[] = [];

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

function mergeRegisteredLearner(learners: RegisteredLearner[], learner: RegisteredLearner) {
  const normalizedEmail = learner.email.trim().toLowerCase();
  const nextLearners = [...learners];
  const existingIndex = nextLearners.findIndex((item) => item.email.trim().toLowerCase() === normalizedEmail);

  if (existingIndex >= 0) {
    nextLearners[existingIndex] = learner;
  } else {
    nextLearners.unshift(learner);
  }

  return nextLearners;
}

export async function getRegisteredLearners() {
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
  const learners = await getRegisteredLearners();
  const nextLearners = mergeRegisteredLearner(learners, learner);
  memoryRegisteredLearners = nextLearners;

  try {
    await writeFile(REGISTERED_LEARNERS_FILE, JSON.stringify(nextLearners, null, 2), "utf8");
  } catch (error) {
    console.error("Unable to persist registered learners to disk. Falling back to in-memory storage.", error);
  }
}

function formatRegisteredLearnerRow(learner: RegisteredLearner): TableRow {
  return {
    name: learner.fullName,
    email: learner.email,
    role: "Student",
    organization: "Self-registered",
    status: learner.currentLevel,
  };
}

export async function getAdminUserRows() {
  const registeredLearners = await getRegisteredLearners();
  const learnerRows = registeredLearners
    .sort((left, right) => new Date(right.registeredAt).getTime() - new Date(left.registeredAt).getTime())
    .map(formatRegisteredLearnerRow);

  return [...learnerRows, ...adminUsers];
}
