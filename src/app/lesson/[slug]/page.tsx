import Link from "next/link";

import { notFound } from "next/navigation";

import SectionTitle from "@/components/SectionTitle";
import { courses, lessonResources } from "@/lib/mock-data";

interface LessonPageProps {
  params: Promise<{ slug: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const course = courses[0];

  if (!slug) {
    notFound();
  }

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Lesson View"
        title={`Lesson: ${slug.replaceAll("-", " ")}`}
        description="This layout is ready for video embeds, Burmese lesson content, attachments, and lesson completion logic."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="card-surface rounded-[1.5rem] p-8">
          <h2 className="text-xl font-semibold text-slate-950">{course.title}</h2>
          <div className="mt-6 space-y-4">
            {course.modules.map((module) => (
              <div key={module.title} className="info-tile rounded-2xl p-4">
                <p className="font-semibold text-slate-950">{module.title}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {module.lessons.map((lesson) => (
                    <li key={lesson}>• {lesson}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <div className="space-y-6">
          <section className="card-surface rounded-[1.5rem] p-8">
            <div className="gradient-panel rounded-[1.5rem] p-8 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Video / Reading</p>
              <h2 className="mt-3 text-3xl font-semibold">Campaign structure and measurement basics</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50">
                Replace this placeholder with a video player, transcript viewer, and downloadable files.
                The intent is to keep lesson content server-rendered and Burmese-friendly.
              </p>
            </div>
          </section>

          <section className="card-surface rounded-[1.5rem] p-8">
            <h2 className="text-xl font-semibold text-slate-950">Lesson resources</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {lessonResources.map((resource) => (
                <li key={resource} className="info-tile rounded-2xl px-4 py-3">
                  {resource}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/quiz/QZ-101" className="btn-primary">
                Start lesson quiz
              </Link>
              <button type="button" className="btn-secondary">
                Mark complete
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
