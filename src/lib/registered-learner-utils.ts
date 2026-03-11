import type { RegisteredLearner, TableRow } from "@/types";

export const REGISTERED_LEARNERS_STORAGE_KEY = "skillup-mm-registered-learners";

export function normalizeLearnerEmail(email: string) {
  return email.trim().toLowerCase();
}

export function mergeRegisteredLearners(learners: RegisteredLearner[], learner: RegisteredLearner) {
  const normalizedEmail = normalizeLearnerEmail(learner.email);
  const nextLearners = [...learners];
  const existingIndex = nextLearners.findIndex((item) => normalizeLearnerEmail(item.email) === normalizedEmail);

  if (existingIndex >= 0) {
    nextLearners[existingIndex] = {
      ...learner,
      email: normalizedEmail,
    };
  } else {
    nextLearners.unshift({
      ...learner,
      email: normalizedEmail,
    });
  }

  return nextLearners;
}

export function formatRegisteredLearnerRow(learner: RegisteredLearner): TableRow {
  return {
    name: learner.fullName,
    email: normalizeLearnerEmail(learner.email),
    role: "Student",
    organization: "Self-registered",
    status: learner.currentLevel,
  };
}
