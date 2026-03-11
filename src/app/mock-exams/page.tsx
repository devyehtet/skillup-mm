import MockExamCard from "@/components/MockExamCard";
import SectionTitle from "@/components/SectionTitle";
import { googlePracticeExams, metaPracticeExams, starterPracticeExams, studyRecommendations } from "@/lib/mock-data";
import { requireLearner } from "@/lib/session";

export default async function MockExamsPage() {
  await requireLearner("/mock-exams");

  return (
    <div className="container-shell py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Mock exams"
            title="Choose the exam format you want to practice today"
            description="Google Skillshop, Meta Blueprint, နဲ့ beginner self-check exam တွေကို တစ်နေရာတည်းမှာ စုထားပါတယ်။ Certification mocks တွေက 80-question sets ဖြစ်ပြီး starter self-check က 50-question fundamentals check အဖြစ်ဝင်စမ်းလို့ရပါတယ်။"
          />
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            {["Google Ads", "Meta Blueprint", "Starter self-check", "50-80 question sets"].map((item) => (
              <span key={item} className="brand-tag rounded-full px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="card-surface rounded-[1.5rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">What you get</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Practice mode", value: "Timed official-style experience" },
              { label: "After submission", value: "Topic-level breakdown" },
              { label: "Question bank", value: "50-question starter check + 80-question certification mocks" },
              { label: "Study help", value: "Burmese recommendations" },
            ].map((item) => (
              <div key={item.label} className="info-tile rounded-2xl p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-10 space-y-6">
        <SectionTitle
          eyebrow="Google Skillshop"
          title="Google Ads certifications"
          description="Search, Display, Video, Shopping, Apps, Measurement, Creative, and AI-powered performance exam practice."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {googlePracticeExams.map((exam) => (
            <MockExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </section>

      <section className="mt-14 space-y-6">
        <SectionTitle
          eyebrow="Meta Blueprint"
          title="Meta certifications"
          description="Associate, Media Buying, Media Planning, Marketing Science, and Creative Strategy mock exams."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {metaPracticeExams.map((exam) => (
            <MockExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </section>

      <section className="mt-14 space-y-6">
        <SectionTitle
          eyebrow="Beginner Self-Check"
          title="Digital marketing fundamentals"
          description="For learners who are just starting. Use this self-check to see whether you already understand funnels, SEO, content, social media, and analytics basics."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {starterPracticeExams.map((exam) => (
            <MockExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </section>

      <section className="card-surface mt-12 rounded-[1.5rem] p-8">
        <span className="soft-chip">Score report</span>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
          How the score report helps you
        </h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {studyRecommendations.map((recommendation) => (
            <article key={recommendation.title} className="info-tile rounded-3xl p-5">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{recommendation.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{recommendation.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
