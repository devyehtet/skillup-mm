import "server-only";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { adminUsers } from "@/lib/mock-data";
import type { RegisteredLearner, TableRow } from "@/types";

const REGISTERED_LEARNERS_FILE = path.join(process.cwd(), "data", "registered-learners.json");

async function ensureRegisteredLearnersFile() {
  await mkdir(path.dirname(REGISTERED_LEARNERS_FILE), { recursive: true });

  try {
    await readFile(REGISTERED_LEARNERS_FILE, "utf8");
  } catch {
    await writeFile(REGISTERED_LEARNERS_FILE, "[]\n", "utf8");
  }
}

export async function getRegisteredLearners() {
  await ensureRegisteredLearnersFile();

  try {
    const fileContents = await readFile(REGISTERED_LEARNERS_FILE, "utf8");
    const parsedValue = JSON.parse(fileContents);

    return Array.isArray(parsedValue) ? (parsedValue as RegisteredLearner[]) : [];
  } catch {
    return [];
  }
}

export async function saveRegisteredLearner(learner: RegisteredLearner) {
  const learners = await getRegisteredLearners();
  const normalizedEmail = learner.email.trim().toLowerCase();
  const nextLearners = [...learners];
  const existingIndex = nextLearners.findIndex((item) => item.email.trim().toLowerCase() === normalizedEmail);

  if (existingIndex >= 0) {
    nextLearners[existingIndex] = learner;
  } else {
    nextLearners.unshift(learner);
  }

  await writeFile(REGISTERED_LEARNERS_FILE, JSON.stringify(nextLearners, null, 2), "utf8");
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
