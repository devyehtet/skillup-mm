import Link from "next/link";

import BrandMark from "@/components/BrandMark";
import { getCurrentAdmin, getCurrentLearner } from "@/lib/session";
import { primaryNavigation } from "@/lib/mock-data";

export default async function Navbar() {
  const [admin, learner] = await Promise.all([getCurrentAdmin(), getCurrentLearner()]);

  return (
    <header className="nav-shell sticky top-0 z-40">
      <div className="container-shell flex flex-wrap items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <BrandMark className="h-11 w-11 shrink-0" />
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight text-slate-950 md:text-xl">
              SkillUp MM
            </Link>
            <p className="hidden text-sm text-slate-500 lg:block">
              Official-style mock exams and guided study paths
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-2 text-sm font-medium text-slate-600 md:flex">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link transition">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          {admin ? (
            <>
              <span className="brand-pill hidden rounded-full px-4 py-2 text-sm font-semibold md:inline-flex">
                {admin.name}
              </span>
              <Link href="/admin" className="btn-primary">
                Open Admin
              </Link>
              <form action="/logout" method="post" className="hidden md:block">
                <button type="submit" className="btn-secondary">
                  Sign out
                </button>
              </form>
            </>
          ) : learner ? (
            <>
              <span className="brand-pill hidden rounded-full px-4 py-2 text-sm font-semibold md:inline-flex">
                {learner.fullName}
              </span>
              <Link href="/dashboard" className="btn-primary">
                Open Dashboard
              </Link>
              <form action="/logout" method="post" className="hidden md:block">
                <button type="submit" className="btn-secondary">
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="/admin/login" className="nav-link hidden md:inline-flex">
                Admin login
              </Link>
              <Link href="/register" className="btn-secondary hidden md:inline-flex">
                Register
              </Link>
              <Link href="/register" className="btn-primary">
                Start Practice
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
