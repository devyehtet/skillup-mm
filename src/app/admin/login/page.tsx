import { redirect } from "next/navigation";

import SectionTitle from "@/components/SectionTitle";
import { loginAdmin } from "@/app/admin/login/actions";
import { getCurrentAdmin } from "@/lib/session";

interface AdminLoginPageProps {
  searchParams: Promise<{ error?: string }>;
}

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const [admin, resolvedSearchParams] = await Promise.all([getCurrentAdmin(), searchParams]);

  if (admin?.role === "superAdmin") {
    redirect("/admin");
  }

  const showError = resolvedSearchParams.error === "invalid";

  return (
    <div className="container-shell py-16">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Admin Login"
            title="Access the SkillUp MM admin console"
            description="Use your admin email and password to open the super-admin dashboard, questions, approvals, and reports."
          />

          <div className="card-surface rounded-[1.5rem] p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-slate-950">What you can manage</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li className="info-tile rounded-2xl px-4 py-3">Organizations, school performance, and approval backlog</li>
              <li className="info-tile rounded-2xl px-4 py-3">Global course catalog and question-bank quality</li>
              <li className="info-tile rounded-2xl px-4 py-3">Cross-platform reports and certification operations</li>
            </ul>
          </div>
        </div>

        <div className="card-surface rounded-[1.75rem] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Sign in as admin</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            This login is separate from learner registration and opens the protected admin routes.
          </p>

          {showError ? (
            <div className="mt-5 rounded-2xl border border-[rgba(190,56,92,0.18)] bg-[rgba(255,235,239,0.78)] px-4 py-3 text-sm font-medium text-[color:var(--danger)]">
              Invalid admin email or password.
            </div>
          ) : null}

          <form action={loginAdmin} className="mt-6 space-y-5">
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                defaultValue="info@yehtet.com"
                className="brand-input mt-2 rounded-2xl px-4 py-3"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-semibold text-slate-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                defaultValue="12345"
                className="brand-input mt-2 rounded-2xl px-4 py-3"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Open admin dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
