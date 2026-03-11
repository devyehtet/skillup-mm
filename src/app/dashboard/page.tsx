import Link from "next/link";

import MockExamCard from "@/components/MockExamCard";
import ProgressBar from "@/components/ProgressBar";
import { requireLearner } from "@/lib/session";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import { getStudentDashboard } from "@/lib/db";

export default async function DashboardPage() {
  const learner = await requireLearner("/dashboard");

  const dashboard = await getStudentDashboard(learner);
  const [primaryFocus, secondaryFocus] = dashboard.focusCards;

  return (
    <div className="container-shell py-14 md:py-16">
      <div className="grid gap-8 xl:grid-cols-[1fr_0.78fr] xl:items-start">
        <SectionTitle
          eyebrow="Student Dashboard"
          title={`Welcome back, ${learner.fullName}`}
          description={
            dashboard.starterMode
              ? `You are starting as a ${learner.currentLevel.toLowerCase()} learner on the ${learner.targetPlatform} path. Begin with the foundation lessons, then take your first mock exam.`
              : `Track your readiness, recent scores, and what to study next for ${learner.targetPlatform}.`
          }
        />

        <div className="card-surface rounded-[1.5rem] p-6 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">This week focus</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="info-tile rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{primaryFocus.label}</p>
              <p className="mt-2 text-base font-semibold text-slate-900">{primaryFocus.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{primaryFocus.description}</p>
            </div>
            <div className="info-tile rounded-2xl p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{secondaryFocus.label}</p>
              <p className="mt-2 text-base font-semibold text-slate-900">{secondaryFocus.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{secondaryFocus.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {dashboard.metrics.map((metric) => (
          <StatCard key={metric.label} metric={metric} />
        ))}
      </div>

      <section className="mt-12 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="card-surface rounded-[1.5rem] p-6 sm:p-8">
          <span className="soft-chip">Study plan</span>
          <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-slate-950 sm:text-2xl">
            {dashboard.starterMode ? "Starter study plan" : "Recommended study plan"}
          </h2>
          <div className="mt-6 space-y-6">
            {dashboard.learningItems.map((item) => (
              <div key={item.title} className="info-tile rounded-3xl p-5">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-500">{item.subtitle}</p>
                  </div>
                  <Link href={item.href} className="brand-link text-sm">
                    Open course
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="mt-4">
                  <ProgressBar value={item.progress} />
                </div>
                <div className="mt-3 flex flex-col gap-1 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                  <span>{item.progress}% complete</span>
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <section className="card-surface rounded-[1.5rem] p-6 sm:p-8">
            <span className="soft-chip">Practice again</span>
            <h2 className="mt-5 text-[1.45rem] font-semibold leading-[1.24] tracking-tight text-slate-950 sm:text-xl">
              {dashboard.starterMode ? "Start your first mock exam" : "Try another mock exam"}
            </h2>
            <div className="mt-5 space-y-5">
              {dashboard.practiceExams.slice(0, 2).map((exam) => (
                <MockExamCard key={exam.id} exam={exam} />
              ))}
            </div>
          </section>

          <section className="card-surface rounded-[1.5rem] p-6 sm:p-8">
            <span className="soft-chip">Recent attempts</span>
            <h2 className="mt-5 text-[1.45rem] font-semibold leading-[1.24] tracking-tight text-slate-950 sm:text-xl">
              Recent results
            </h2>
            {dashboard.recentResults.length > 0 ? (
              <div className="mt-5 space-y-4">
                {dashboard.recentResults.map((result) => (
                  <div key={result.id} className="info-tile rounded-2xl p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-950">{result.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{result.date}</p>
                      </div>
                      <span className="brand-tag rounded-full px-3 py-1 text-xs font-semibold">
                        {result.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">Score: {result.score}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="info-tile mt-5 rounded-2xl p-4 text-sm leading-7 text-slate-600">
                No mock attempts yet. Finish your starter lessons, then take your first practice exam to unlock score feedback here.
              </div>
            )}
          </section>

          <section className="card-surface rounded-[1.5rem] p-6 sm:p-8">
            <span className="soft-chip">Revision guide</span>
            <h2 className="mt-5 text-[1.45rem] font-semibold leading-[1.24] tracking-tight text-slate-950 sm:text-xl">
              {dashboard.starterMode ? "How to begin" : "What to revise next"}
            </h2>
            <div className="mt-5 space-y-4">
              {dashboard.recommendations.map((recommendation) => (
                <div key={recommendation.title} className="info-tile rounded-2xl p-4 text-sm leading-7 text-slate-600">
                  <p className="font-semibold text-slate-950">{recommendation.title}</p>
                  <p className="mt-2">{recommendation.description}</p>
                  <p className="mt-2 text-slate-500">{recommendation.action}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
