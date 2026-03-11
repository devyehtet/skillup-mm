import Link from "next/link";
import { notFound } from "next/navigation";

import SectionTitle from "@/components/SectionTitle";
import { getCourseBySlug, getMockExamById } from "@/lib/mock-data";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const relatedExam = course.relatedExamId ? getMockExamById(course.relatedExamId) : null;
  const relatedExamHref = relatedExam?.href ?? "/mock-exams";
  const relatedExamLabel = relatedExam ? `Start ${relatedExam.provider} mock exam` : "Browse mock exams";

  return (
    <div className="container-shell py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
        <SectionTitle eyebrow="Course detail" title={course.title} description={course.description} />

        <div className="card-surface rounded-[1.5rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Course highlights</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="info-tile rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Learning format</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">Short lessons, mini quizzes, and final exam prep</p>
            </div>
            <div className="info-tile rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Best use</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">Take this after reviewing your mock-exam weak areas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <section className="card-surface rounded-[1.5rem] p-8">
            <h2 className="text-2xl font-semibold text-slate-950">What learners will achieve</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              {course.learningOutcomes.map((outcome) => (
                <li key={outcome} className="info-tile rounded-2xl px-4 py-3">
                  {outcome}
                </li>
              ))}
            </ul>
          </section>

          <section className="card-surface rounded-[1.5rem] p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Module breakdown</h2>
            <div className="mt-6 space-y-4">
              {course.modules.map((module) => (
                <div key={module.title} className="info-tile rounded-3xl p-5">
                  <h3 className="text-lg font-semibold text-slate-950">{module.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {module.lessons.map((lesson) => (
                      <li key={lesson}>• {lesson}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="card-surface rounded-[1.5rem] p-8">
            <span className="soft-chip">Course snapshot</span>
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Course snapshot</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <p className="flex justify-between gap-4">
                <span>Level</span>
                <span className="font-semibold text-slate-950">{course.level}</span>
              </p>
              <p className="flex justify-between gap-4">
                <span>Lessons</span>
                <span className="font-semibold text-slate-950">{course.lessonCount}</span>
              </p>
              <p className="flex justify-between gap-4">
                <span>Mini quizzes</span>
                <span className="font-semibold text-slate-950">{course.quizCount}</span>
              </p>
              <p className="flex justify-between gap-4">
                <span>Final exam</span>
                <span className="font-semibold text-slate-950">{course.examDurationMinutes} min</span>
              </p>
            </div>
          </section>

          <section className="card-surface rounded-[1.5rem] p-8">
            <span className="soft-chip">Next steps</span>
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Next steps</h2>
            <div className="mt-5 space-y-3">
              <Link href={relatedExamHref} className="btn-primary w-full">
                {relatedExamLabel}
              </Link>
              {relatedExam ? (
                <p className="px-1 text-sm leading-6 text-slate-600">Opens: {relatedExam.title}</p>
              ) : null}
              <Link href="/dashboard" className="btn-secondary w-full">
                Open my study dashboard
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
