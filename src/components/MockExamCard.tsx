import Link from "next/link";

import type { MockExam } from "@/types";

interface MockExamCardProps {
  exam: MockExam;
}

export default function MockExamCard({ exam }: MockExamCardProps) {
  return (
    <article className="card-surface group flex h-full flex-col rounded-[1.6rem] p-7 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="soft-chip">{exam.provider}</span>
        <span className="brand-badge rounded-full px-3 py-1 text-xs font-medium">
          {exam.difficulty}
        </span>
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{exam.catalog}</p>
      <h3 className="mt-4 text-[1.55rem] font-semibold leading-[1.26] tracking-tight text-slate-950 sm:text-[1.7rem]">
        {exam.title}
      </h3>
      <p className="mt-4 text-[0.98rem] leading-9 text-slate-600 md:text-[1.02rem]">{exam.summary}</p>

      <div className="mt-7 grid gap-4 text-sm sm:grid-cols-2 xl:grid-cols-3">
        <div className="info-tile rounded-[1.1rem] p-4 sm:p-5">
          <p className="text-slate-500">Duration</p>
          <p className="mt-2 text-[1rem] font-semibold leading-7 text-slate-950">{exam.durationMinutes} min</p>
        </div>
        <div className="info-tile rounded-[1.1rem] p-4 sm:p-5">
          <p className="text-slate-500">Questions</p>
          <p className="mt-2 text-[1rem] font-semibold leading-7 text-slate-950">{exam.questionCount}</p>
        </div>
        <div className="info-tile rounded-[1.1rem] p-4 sm:p-5">
          <p className="text-slate-500">Pass target</p>
          <p className="mt-2 text-[1rem] font-semibold leading-7 text-slate-950">{exam.passingScore}%</p>
        </div>
      </div>

      <p className="mt-6 max-w-[34ch] text-[0.98rem] leading-9 text-slate-500">{exam.bestFor}</p>

      <Link href={exam.href} className="brand-link mt-7 text-sm">
        Open mock exam
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
