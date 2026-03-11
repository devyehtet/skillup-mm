import Link from "next/link";

import ProgressBar from "@/components/ProgressBar";
import { getStudentDashboard } from "@/lib/db";
import { requireLearner } from "@/lib/session";
import SectionTitle from "@/components/SectionTitle";

export default async function MyLearningPage() {
  const learner = await requireLearner("/my-learning");

  const dashboard = await getStudentDashboard(learner);

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Study Plan"
        title={dashboard.starterMode ? "Start your study plan from zero" : "Use your latest mock results to guide your next study session"}
        description={
          dashboard.starterMode
            ? `You registered as a ${learner.currentLevel.toLowerCase()} learner. Start with the foundation lessons first, then move into ${learner.targetPlatform}.`
            : "This page turns exam feedback into an actionable revision plan so you know exactly what to study before you retry."
        }
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {dashboard.learningItems.map((item) => (
            <article key={item.title} className="card-surface rounded-[1.5rem] p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">{item.title}</h2>
                  <p className="mt-2 text-sm text-slate-500">{item.subtitle}</p>
                </div>
                <Link href={item.href} className="brand-link text-sm">
                  View details
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="mt-6">
                <ProgressBar value={item.progress} />
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
                <span>{item.progress}% complete</span>
                <span>{item.status}</span>
              </div>
            </article>
          ))}
        </div>

        <aside className="card-surface rounded-[1.5rem] p-8">
          <span className="soft-chip">Revision checklist</span>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
            {dashboard.starterMode ? "First-week checklist" : "Revision checklist"}
          </h2>
          <div className="mt-6 space-y-5">
            {dashboard.recommendations.map((recommendation) => (
              <div key={recommendation.title} className="info-tile rounded-2xl p-4">
                <p className="font-semibold text-slate-950">{recommendation.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{recommendation.description}</p>
                <p className="mt-3 text-sm text-slate-500">{recommendation.action}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
