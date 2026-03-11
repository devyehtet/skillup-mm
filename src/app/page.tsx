import Link from "next/link";

import CourseCard from "@/components/CourseCard";
import MockExamCard from "@/components/MockExamCard";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import TrackCard from "@/components/TrackCard";
import { getHomePageData } from "@/lib/db";
import { learnerJourneySteps } from "@/lib/mock-data";

export default async function Home() {
  const home = await getHomePageData();
  const featuredExams = [
    home.practiceExams.find((exam) => exam.id === "google-ads-search-certification"),
    home.practiceExams.find((exam) => exam.id === "meta-certified-media-buying-professional"),
    home.practiceExams.find((exam) => exam.id === "google-ads-measurement-certification"),
  ].flatMap((exam) => (exam ? [exam] : []));

  return (
    <div className="pb-24">
      <section className="container-shell py-14 md:py-20">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
          <div className="space-y-8">
            <div className="eyebrow-pill">Self-registration + official-style mock exams</div>

            <div className="space-y-5 md:space-y-6">
              <h1 className="max-w-3xl text-[2.7rem] font-semibold leading-[1.08] tracking-tight text-slate-950 md:text-[4.1rem] md:leading-[1.04]">
                Measure your readiness
                <span className="hero-highlight block">before the real exam</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-[1.14rem] md:leading-9">
                Google Skillshop နဲ့ Meta Blueprint format အတိုင်း Burmese-first mock exams
                ဖြေနိုင်မယ်။ Score report, weak-topic analysis, and next study plan ကို တစ်နေရာတည်းမှာ
                ရမယ်။
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-500 md:text-[1.02rem]">
                Real exam မဖြေခင် weak topics ကိုသိပြီး, ဘာကိုအရင်လေ့လာရမလဲဆိုတာကို result page က
                တိုက်ရိုက်ပြပေးမယ်။
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/register" className="btn-primary">
                Join for free
              </Link>
              <Link href="/mock-exams" className="btn-secondary">
                Explore exams
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Exam formats", value: "14 practice exams" },
                { label: "Question banks", value: "50-80 questions each" },
                { label: "Study support", value: "Instant topic guidance" },
              ].map((item) => (
                <div key={item.label} className="info-tile rounded-[1.25rem] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface rounded-[1.75rem]">
            <div className="gradient-panel px-8 py-8 text-white">
              <p className="soft-chip soft-chip-dark">Featured practice experience</p>
              <h2 className="mt-5 text-[2rem] font-semibold leading-[1.15] tracking-tight md:text-3xl">
                {featuredExams[0]?.title ?? "Google Ads Search Certification"}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-8 text-blue-50 md:text-[1rem]">
                Official-style pacing, full question navigator, and a result page that points you to
                exactly what you should study next.
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">
              {[
                { label: "Exam duration", value: `${featuredExams[0]?.durationMinutes ?? 120} minutes` },
                { label: "Question count", value: `${featuredExams[0]?.questionCount ?? 80} questions` },
                { label: "Pass target", value: `${featuredExams[0]?.passingScore ?? 80}%` },
                { label: "Best for", value: featuredExams[0]?.bestFor ?? "Learners preparing for Google Search Ads certification topics" },
              ].map((item) => (
                <div key={item.label} className="info-tile rounded-[1.1rem] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 px-6 py-5">
              <Link href="/dashboard" className="brand-link text-sm">
                See learner dashboard
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pb-10 md:pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          {home.metrics.map((metric) => (
            <StatCard key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      <section className="container-shell mt-28 space-y-10 pt-8 pb-14 md:mt-36 md:space-y-12 md:pt-10 md:pb-16">
        <SectionTitle
          eyebrow="Popular mock exams"
          title="Practice with the same exam families learners prepare for most"
          description="Choose the platform you want to practice, sit the timed mock, and use the score report to decide exactly what to revise next."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredExams.map((exam) => (
            <MockExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </section>

      <section className="container-shell mt-32 space-y-10 pt-8 md:mt-40 md:space-y-12 md:pt-10">
        <SectionTitle
          eyebrow="How it works"
          title="Simple flow for self-paced exam preparation"
          description="The product is built around one learner question: after I see my score, what should I study next?"
        />

        <div className="gradient-panel rounded-[1.75rem] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 2xl:grid-cols-[minmax(0,1fr)_23rem] 2xl:items-start">
            <div className="max-w-4xl space-y-6">
              <p className="soft-chip soft-chip-dark">Study workflow</p>
              <h2 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[2.6rem] lg:text-[3rem] lg:leading-[1.08]">
                A clean learning loop from attempt to improvement
              </h2>
              <p className="max-w-3xl text-[1rem] leading-8 text-white/88 sm:text-[1.08rem] sm:leading-9">
                Register, take the mock, review weak areas, and move directly into the lessons
                that improve your next score.
              </p>
            </div>

            <div className="dark-card rounded-[1.35rem] p-6 sm:p-7 2xl:ml-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                Ready in one flow
              </p>
              <div className="mt-6 space-y-5 text-sm leading-8 text-blue-50 sm:text-[1rem] sm:leading-9">
                {[
                  "50-question starter check or 80-question mock experience",
                  "Weak-topic score breakdown",
                  "Recommended Burmese lessons",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {learnerJourneySteps.map((step, index) => (
              <div key={step} className="dark-card rounded-[1.25rem] p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-white/14 text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                    Step {index + 1}
                  </p>
                </div>
                <p className="mt-5 text-[1rem] leading-9 text-white md:text-[1.02rem]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell mt-32 space-y-10 pt-8 md:mt-40 md:space-y-12 md:pt-10">
        <SectionTitle
          eyebrow="Study tracks"
          title="Follow focused Burmese lessons after each mock attempt"
          description="Each track contains short lessons and quizzes designed to repair the weak areas revealed by your mock-exam results."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {home.courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section className="container-shell mt-32 space-y-10 pt-8 md:mt-40 md:space-y-12 md:pt-10">
        <SectionTitle
          eyebrow="Tracks"
          title="Choose the platform you want to master first"
          description="Start with a mock exam, then dive into the track-specific lessons that raise your next score fastest."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {home.tracks.slice(0, 3).map((track) => (
            <TrackCard key={track.slug} track={track} />
          ))}
        </div>
      </section>
    </div>
  );
}
