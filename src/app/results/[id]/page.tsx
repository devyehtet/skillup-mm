import Link from "next/link";
import { notFound } from "next/navigation";

import DataTable from "@/components/DataTable";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import {
  getMockExamById,
  getResultBreakdownForExam,
  getResultHighlightsForExam,
  getResultSummaryByExamId,
  resultBreakdownColumns,
  studyRecommendations,
} from "@/lib/mock-data";
import { requireLearner } from "@/lib/session";

interface ResultPageProps {
  params: Promise<{ id: string }>;
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { id } = await params;
  await requireLearner(`/results/${id}`);
  const exam = getMockExamById(id);
  const result = getResultSummaryByExamId(id);
  const resultHighlights = getResultHighlightsForExam(id);
  const resultBreakdown = getResultBreakdownForExam(id);

  if (!exam) {
    notFound();
  }

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Result"
        title={`${exam.title} • ${result.status}`}
        description="Your result should do more than show a score. It should explain which topics are weak and exactly what you should revise before the next attempt."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {resultHighlights.map((metric) => (
          <StatCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="gradient-panel rounded-[1.5rem] p-8 text-white">
          <p className="text-sm uppercase tracking-[0.18em] text-blue-100">Final score</p>
          <p className="mt-3 text-6xl font-semibold text-white">{result.score}</p>
          <p className="mt-4 text-sm text-blue-50">
            Mock exam {exam.title} • Submitted on {result.date}
          </p>
        </section>

        <section className="card-surface rounded-[1.5rem] p-8">
          <span className="soft-chip">Next actions</span>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">Next actions</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/my-learning" className="btn-primary">
              Open study plan
            </Link>
            <Link href={`/exam/${exam.id}`} className="btn-secondary">
              Retry this mock exam
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Passing score", value: `${exam.passingScore}%` },
              { label: "Time spent", value: `${Math.max(exam.durationMinutes - 23, 42)} min` },
              { label: "Recommended study", value: resultBreakdown[resultBreakdown.length - 1]?.area ?? "Measurement" },
            ].map((item) => (
              <div key={item.label} className="info-tile rounded-2xl p-4">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-2 font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-10">
        <DataTable
          title="Topic breakdown"
          description="These sections show where your score is below the target and what to revise before the next attempt."
          columns={resultBreakdownColumns}
          rows={resultBreakdown}
        />
      </div>

      <section className="card-surface mt-10 rounded-[1.5rem] p-8">
        <span className="soft-chip">Recommended lessons</span>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
          Recommended lessons after this result
        </h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {studyRecommendations.map((recommendation) => (
            <article key={recommendation.title} className="info-tile rounded-3xl p-5">
              <h3 className="text-lg font-semibold text-slate-950">{recommendation.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{recommendation.description}</p>
              <p className="mt-4 text-sm text-slate-500">{recommendation.action}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
