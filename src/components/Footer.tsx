import Link from "next/link";

import BrandMark from "@/components/BrandMark";

export default function Footer() {
  return (
    <footer className="footer-shell mt-24">
      <div className="container-shell flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <span className="soft-chip">Learner-first practice platform</span>
          <div className="mt-4 flex items-center gap-3">
            <BrandMark className="h-11 w-11 shrink-0" />
            <p className="text-2xl font-semibold tracking-tight text-slate-950">SkillUp MM</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Burmese-first practice exams, score feedback, and study recommendations for learners
            preparing for digital marketing platform exams.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          <Link href="/tracks" className="footer-link transition">
            Tracks
          </Link>
          <Link href="/mock-exams" className="footer-link transition">
            Mock Exams
          </Link>
          <Link href="/dashboard" className="footer-link transition">
            Dashboard
          </Link>
          <Link href="/my-learning" className="footer-link transition">
            Study Plan
          </Link>
          <Link href="/register" className="footer-link transition">
            Register
          </Link>
        </div>
      </div>
    </footer>
  );
}
