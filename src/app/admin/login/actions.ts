"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { authenticateAdmin } from "@/lib/auth";
import { ADMIN_COOKIE_NAME, encodeAdminCookie, LEARNER_COOKIE_NAME } from "@/lib/session";

function readValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

export async function loginAdmin(formData: FormData) {
  const email = readValue(formData, "admin_email") || readValue(formData, "email");
  const password = readValue(formData, "admin_password") || readValue(formData, "password");
  const admin = authenticateAdmin(email, password);

  if (!admin) {
    redirect("/admin/login?error=invalid");
  }

  const cookieStore = await cookies();

  cookieStore.set(ADMIN_COOKIE_NAME, encodeAdminCookie(admin), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
  });
  cookieStore.set(LEARNER_COOKIE_NAME, "", {
    expires: new Date(0),
    path: "/",
  });

  redirect("/admin");
}
