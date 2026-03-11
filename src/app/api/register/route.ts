import { NextResponse } from "next/server";

import { saveRegisteredLearner } from "@/lib/registered-learners";
import { encodeLearnerCookie, LEARNER_COOKIE_NAME } from "@/lib/session";
import type { RegisteredLearner } from "@/types";

interface RegisterPayload {
  currentLevel?: string;
  email?: string;
  fullName?: string;
  purpose?: string;
  targetPlatform?: string;
}

function normalizeValue(value?: string) {
  return value?.trim() ?? "";
}

export async function POST(request: Request) {
  const payload = (await request.json()) as RegisterPayload;

  const learner: RegisteredLearner = {
    currentLevel: normalizeValue(payload.currentLevel),
    email: normalizeValue(payload.email),
    fullName: normalizeValue(payload.fullName),
    purpose: normalizeValue(payload.purpose),
    registeredAt: new Date().toISOString(),
    targetPlatform: normalizeValue(payload.targetPlatform),
  };

  if (!learner.fullName || !learner.email || !learner.targetPlatform || !learner.currentLevel) {
    return NextResponse.json(
      { error: "Please fill in full name, email, target platform, and current level." },
      { status: 400 },
    );
  }

  await saveRegisteredLearner(learner);

  const response = NextResponse.json({ ok: true });

  response.cookies.set(LEARNER_COOKIE_NAME, encodeLearnerCookie(learner), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
  });

  return response;
}
