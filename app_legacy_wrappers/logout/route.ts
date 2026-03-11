import { NextResponse } from "next/server";

import { LEARNER_COOKIE_NAME } from "@/lib/session";

export async function POST(request: Request) {
  const redirectUrl = new URL("/register", request.url);
  const response = NextResponse.redirect(redirectUrl);

  response.cookies.set(LEARNER_COOKIE_NAME, "", {
    expires: new Date(0),
    path: "/",
  });

  return response;
}
