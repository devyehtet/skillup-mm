import { notFound } from "next/navigation";

import MockExamAttempt from "@/components/MockExamAttempt";
import SectionTitle from "@/components/SectionTitle";
import { getMockExamById, getMockExamQuestions } from "@/lib/mock-data";

interface ExamPageProps {
  params: Promise<{ id: string }>;
}

export default async function ExamPage({ params }: ExamPageProps) {
  const { id } = await params;
  const exam = getMockExamById(id);

  if (!exam) {
    notFound();
  }

  const questions = getMockExamQuestions(id);

  return (
    <div className="container-shell py-16">
      <SectionTitle
        eyebrow={exam.catalog}
        title={exam.title}
        description="This practice experience follows the official exam style: timed session, large question bank, and feedback that tells you what to study before the real exam."
      />
      <MockExamAttempt exam={exam} questions={questions} />
    </div>
  );
}
