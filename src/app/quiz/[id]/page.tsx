import SectionTitle from "@/components/SectionTitle";
import QuizCard from "@/components/QuizCard";
import { quizQuestions } from "@/lib/mock-data";

export default function QuizPage() {
  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow="Lesson Quiz"
        title="Short assessment after lesson completion"
        description="The quiz scaffold supports MCQ, multi-select, true/false, and short-answer models later. For now it shows the card structure and explanation panel."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {quizQuestions.map((question) => (
            <QuizCard key={question.id} question={question} />
          ))}
        </div>

        <aside className="card-surface rounded-[1.5rem] p-8">
          <span className="soft-chip">Attempt summary</span>
          <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Attempt summary</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-600">
            <p className="flex justify-between gap-4">
              <span>Quiz type</span>
              <span className="font-semibold text-slate-950">Lesson checkpoint</span>
            </p>
            <p className="flex justify-between gap-4">
              <span>Questions</span>
              <span className="font-semibold text-slate-950">5</span>
            </p>
            <p className="flex justify-between gap-4">
              <span>Passing score</span>
              <span className="font-semibold text-slate-950">80%</span>
            </p>
            <p className="flex justify-between gap-4">
              <span>Remaining attempts</span>
              <span className="font-semibold text-slate-950">2</span>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
