import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { ADMIN_COOKIE_NAME, LEARNER_COOKIE_NAME } from "@/lib/session";

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const redirectUrl = new URL(cookieStore.get(ADMIN_COOKIE_NAME)?.value ? "/admin/login" : "/register", request.url);
  const response = NextResponse.redirect(redirectUrl);

  response.cookies.set(LEARNER_COOKIE_NAME, "", {
    expires: new Date(0),
    path: "/",
  });
  response.cookies.set(ADMIN_COOKIE_NAME, "", {
    expires: new Date(0),
    path: "/",
  });

  return response;
}
