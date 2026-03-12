import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { mergeRegisteredLearners } from "@/lib/registered-learner-utils";
import type { AdminSession } from "@/lib/auth";
import type { RegisteredLearner } from "@/types";

export const LEARNER_COOKIE_NAME = "skillup_mm_learner";
export const ADMIN_COOKIE_NAME = "skillup_mm_admin";
export const REGISTERED_LEARNERS_CACHE_COOKIE_NAME = "skillup_mm_registered_learners";
const REGISTERED_LEARNERS_CACHE_LIMIT = 10;

export function encodeLearnerCookie(learner: RegisteredLearner) {
  return Buffer.from(JSON.stringify(learner)).toString("base64url");
}

export function decodeLearnerCookie(value?: string) {
  if (!value) {
    return null;
  }

  try {
    const parsedValue = Buffer.from(value, "base64url").toString("utf8");

    return JSON.parse(parsedValue) as RegisteredLearner;
  } catch {
    return null;
  }
}

export function encodeAdminCookie(admin: AdminSession) {
  return Buffer.from(JSON.stringify(admin)).toString("base64url");
}

export function decodeAdminCookie(value?: string) {
  if (!value) {
    return null;
  }

  try {
    const parsedValue = Buffer.from(value, "base64url").toString("utf8");

    return JSON.parse(parsedValue) as AdminSession;
  } catch {
    return null;
  }
}

export function encodeRegisteredLearnersCacheCookie(learners: RegisteredLearner[]) {
  return Buffer.from(JSON.stringify(learners.slice(0, REGISTERED_LEARNERS_CACHE_LIMIT))).toString("base64url");
}

export function decodeRegisteredLearnersCacheCookie(value?: string) {
  if (!value) {
    return [] as RegisteredLearner[];
  }

  try {
    const parsedValue = Buffer.from(value, "base64url").toString("utf8");
    const learners = JSON.parse(parsedValue);

    return Array.isArray(learners) ? (learners as RegisteredLearner[]) : [];
  } catch {
    return [] as RegisteredLearner[];
  }
}

export function appendRegisteredLearnerToBrowserCache(
  existingValue: string | undefined,
  learner: RegisteredLearner,
) {
  const cachedLearners = decodeRegisteredLearnersCacheCookie(existingValue);
  const nextLearners = mergeRegisteredLearners(cachedLearners, learner);

  return encodeRegisteredLearnersCacheCookie(nextLearners);
}

export async function getCachedRegisteredLearners() {
  const cookieStore = await cookies();

  return decodeRegisteredLearnersCacheCookie(cookieStore.get(REGISTERED_LEARNERS_CACHE_COOKIE_NAME)?.value);
}

export async function getCurrentLearner() {
  const cookieStore = await cookies();

  return decodeLearnerCookie(cookieStore.get(LEARNER_COOKIE_NAME)?.value);
}

export async function getCurrentAdmin() {
  const cookieStore = await cookies();

  return decodeAdminCookie(cookieStore.get(ADMIN_COOKIE_NAME)?.value);
}

export function normalizeReturnPath(value?: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return null;
  }

  return value;
}

export async function requireLearner(returnPath?: string) {
  const learner = await getCurrentLearner();

  if (!learner) {
    const normalizedReturnPath = normalizeReturnPath(returnPath);

    redirect(
      normalizedReturnPath ? `/register?next=${encodeURIComponent(normalizedReturnPath)}` : "/register",
    );
  }

  return learner;
}

export async function requireSuperAdmin() {
  const admin = await getCurrentAdmin();

  if (!admin || admin.role !== "superAdmin") {
    redirect("/admin/login");
  }

  return admin;
}
