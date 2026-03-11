import Link from "next/link";

import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="card-surface flex h-full flex-col rounded-[1.6rem] p-7 sm:p-8">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
        <span className="soft-chip">{course.level}</span>
        <span>{course.durationHours} hours</span>
        <span className="text-slate-300">•</span>
        <span>{course.lessonCount} lessons</span>
      </div>

      <h3 className="mt-6 text-[1.58rem] font-semibold leading-[1.26] tracking-tight text-slate-950 sm:text-[1.72rem]">
        {course.title}
      </h3>
      <p className="mt-4 text-[0.98rem] leading-9 text-slate-600 md:text-[1.02rem]">{course.description}</p>

      <div className="mt-7 grid gap-4 text-sm sm:grid-cols-2">
        <div className="info-tile rounded-[1.1rem] p-4 sm:p-5">
          <p className="text-slate-500">Mini quizzes</p>
          <p className="mt-2 font-semibold leading-7 text-slate-950">{course.quizCount}</p>
        </div>
        <div className="info-tile rounded-[1.1rem] p-4 sm:p-5">
          <p className="text-slate-500">Final exam</p>
          <p className="mt-2 font-semibold leading-7 text-slate-950">{course.examDurationMinutes} minutes</p>
        </div>
      </div>

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-slate-500">{course.enrollmentCount}+ learners</p>
        <Link href={`/courses/${course.slug}`} className="brand-link text-sm">
          View course
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
