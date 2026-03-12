"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { saveRegisteredLearner } from "@/lib/registered-learners";
import {
  appendRegisteredLearnerToBrowserCache,
  encodeLearnerCookie,
  LEARNER_COOKIE_NAME,
  normalizeReturnPath,
  REGISTERED_LEARNERS_CACHE_COOKIE_NAME,
} from "@/lib/session";
import type { RegisteredLearner } from "@/types";

export interface RegisterActionState {
  error?: string;
  values?: {
    currentLevel: string;
    email: string;
    fullName: string;
    purpose: string;
    targetPlatform: string;
  };
}

function readValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

export async function registerLearner(
  _previousState: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> {
  const requestedPath = normalizeReturnPath(readValue(formData, "nextPath")) ?? "/mock-exams";
  const values = {
    currentLevel: readValue(formData, "currentLevel"),
    email: readValue(formData, "email"),
    fullName: readValue(formData, "fullName"),
    purpose: readValue(formData, "purpose"),
    targetPlatform: readValue(formData, "targetPlatform"),
  };

  if (!values.fullName || !values.email || !values.targetPlatform || !values.currentLevel) {
    return {
      error: "Please fill in full name, email, target platform, and current level.",
      values,
    };
  }

  const learner: RegisteredLearner = {
    ...values,
    registeredAt: new Date().toISOString(),
  };

  const cookieStore = await cookies();

  await saveRegisteredLearner(learner);
  revalidatePath("/admin/users");

  cookieStore.set(LEARNER_COOKIE_NAME, encodeLearnerCookie(learner), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
  });
  cookieStore.set(
    REGISTERED_LEARNERS_CACHE_COOKIE_NAME,
    appendRegisteredLearnerToBrowserCache(
      cookieStore.get(REGISTERED_LEARNERS_CACHE_COOKIE_NAME)?.value,
      learner,
    ),
    {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "lax",
    },
  );

  redirect(requestedPath === "/register" ? "/mock-exams" : requestedPath);
}
