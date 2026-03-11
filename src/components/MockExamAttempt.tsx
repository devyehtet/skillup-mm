"use client";

import Link from "next/link";
import { useState } from "react";

import type { MockExam, MockExamQuestion } from "@/types";

interface MockExamAttemptProps {
  exam: MockExam;
  questions: MockExamQuestion[];
}

export default function MockExamAttempt({ exam, questions }: MockExamAttemptProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string[]>>({});
  const [reviewQueue, setReviewQueue] = useState<Record<string, boolean>>({});

  const currentQuestion = questions[currentIndex];
  const selectedOptions = selectedAnswers[currentQuestion.id] ?? [];
  const answeredCount = Object.values(selectedAnswers).filter((answers) => answers.length > 0).length;
  const reviewCount = Object.values(reviewQueue).filter(Boolean).length;

  function handleSelectOption(option: string) {
    setSelectedAnswers((currentAnswers) => {
      const existingAnswers = currentAnswers[currentQuestion.id] ?? [];

      if (currentQuestion.selectionMode === "multiple") {
        const isSelected = existingAnswers.includes(option);

        if (isSelected) {
          return {
            ...currentAnswers,
            [currentQuestion.id]: existingAnswers.filter((answer) => answer !== option),
          };
        }

        if (currentQuestion.selectionCount && existingAnswers.length >= currentQuestion.selectionCount) {
          return currentAnswers;
        }

        return {
          ...currentAnswers,
          [currentQuestion.id]: [...existingAnswers, option],
        };
      }

      return {
        ...currentAnswers,
        [currentQuestion.id]: [option],
      };
    });
  }

  function toggleReview() {
    setReviewQueue((currentQueue) => ({
      ...currentQueue,
      [currentQuestion.id]: !currentQueue[currentQuestion.id],
    }));
  }

  function getNavigatorClass(questionId: string, index: number) {
    if (index === currentIndex) {
      return "nav-step-current font-semibold";
    }

    if (selectedAnswers[questionId]) {
      return "nav-step-answered font-semibold";
    }

    if (reviewQueue[questionId]) {
      return "nav-step-review font-semibold";
    }

    return "nav-step";
  }

  return (
    <div className="mt-8 grid gap-6 xl:grid-cols-[0.85fr_1.15fr] xl:gap-8">
      <aside className="order-2 space-y-6 xl:order-1">
        <section className="card-surface rounded-[1.5rem] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.18em] text-blue-700">Exam snapshot</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <p className="flex justify-between gap-4">
              <span>Provider</span>
              <span className="font-semibold text-slate-950">{exam.provider}</span>
            </p>
            <p className="flex justify-between gap-4">
              <span>Questions</span>
              <span className="font-semibold text-slate-950">{questions.length}</span>
            </p>
            <p className="flex justify-between gap-4">
              <span>Duration</span>
              <span className="font-semibold text-slate-950">{exam.durationMinutes} minutes</span>
            </p>
            <p className="flex justify-between gap-4">
              <span>Passing target</span>
              <span className="font-semibold text-slate-950">{exam.passingScore}%</span>
            </p>
          </div>
        </section>

        <section className="gradient-panel rounded-[1.5rem] p-6 text-white sm:p-8">
          <p className="text-sm uppercase tracking-[0.18em] text-blue-100">Time remaining</p>
          <p className="mt-3 text-[2.5rem] font-semibold leading-none text-white sm:text-5xl">01:42:18</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="dark-card rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-blue-100">Answered</p>
              <p className="mt-2 text-2xl font-semibold text-white">{answeredCount}</p>
            </div>
            <div className="dark-card rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-blue-100">Marked for review</p>
              <p className="mt-2 text-2xl font-semibold text-white">{reviewCount}</p>
            </div>
          </div>
        </section>

        <section className="card-surface rounded-[1.5rem] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-950">Question navigator</h2>
          <div className="mt-5 max-h-96 overflow-y-auto rounded-2xl border border-slate-200 p-3">
            <div className="grid grid-cols-5 gap-3 sm:grid-cols-6 xl:grid-cols-4">
              {questions.map((question, index) => (
                <button
                  key={question.id}
                  className={`rounded-2xl px-3 py-3 text-center text-sm transition ${getNavigatorClass(question.id, index)}`}
                  onClick={() => setCurrentIndex(index)}
                  type="button"
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </section>
      </aside>

      <section className="card-surface order-1 rounded-[1.5rem] p-6 sm:p-8 xl:order-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          Current question • {currentIndex + 1} / {questions.length}
        </p>
        <p className="mt-3 text-sm text-slate-500">Topic: {currentQuestion.topic}</p>
        {currentQuestion.helperText ? (
          <p className="mt-2 text-sm font-medium text-blue-700">{currentQuestion.helperText}</p>
        ) : null}
        <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.28] text-slate-950 md:text-2xl md:leading-[1.24]">
          {currentQuestion.question}
        </h2>

        <div className="mt-6 space-y-3 sm:space-y-4">
          {currentQuestion.options.map((option, optionIndex) => {
            const isSelected = selectedOptions.includes(option);
            const optionId = `${currentQuestion.id}-${option}`;
            const optionLabel = String.fromCharCode(65 + optionIndex);

            return (
              <label key={optionId} className="answer-choice block">
                <input
                  checked={isSelected}
                  className="answer-choice-input"
                  id={optionId}
                  name={
                    currentQuestion.selectionMode === "multiple" ? `${currentQuestion.id}-${optionIndex}` : currentQuestion.id
                  }
                  onChange={() => handleSelectOption(option)}
                  type={currentQuestion.selectionMode === "multiple" ? "checkbox" : "radio"}
                  value={option}
                />
                <span className="answer-choice-card">
                  <span className="answer-choice-key" aria-hidden="true">
                    {optionLabel}
                  </span>
                  <span className="answer-choice-copy">{option}</span>
                </span>
              </label>
            );
          })}
        </div>

        <div className="info-tile mt-8 rounded-3xl p-5 text-sm leading-8 text-slate-600">
          <span className="font-semibold text-slate-950">Why this matters:</span> {currentQuestion.explanation}
        </div>

        <div className="mt-6 flex flex-col gap-2 text-sm leading-7 text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <span className="min-w-0">
            {selectedOptions.length > 0
              ? `Selected answer${selectedOptions.length > 1 ? "s" : ""}: ${selectedOptions.join(", ")}`
              : "No answer selected yet"}
          </span>
          <span>{reviewQueue[currentQuestion.id] ? "Marked for review" : "Not marked for review"}</span>
        </div>

        <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
          <button type="button" className="btn-secondary w-full sm:w-auto" onClick={toggleReview}>
            {reviewQueue[currentQuestion.id] ? "Unmark review" : "Mark for review"}
          </button>
          <button
            type="button"
            className="btn-secondary w-full sm:w-auto"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((index) => Math.max(index - 1, 0))}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn-secondary w-full sm:w-auto"
            disabled={currentIndex === questions.length - 1}
            onClick={() => setCurrentIndex((index) => Math.min(index + 1, questions.length - 1))}
          >
            Next
          </button>
          <Link href={`/results/${exam.id}`} className="btn-primary w-full sm:w-auto">
            Finish mock exam
          </Link>
        </div>
      </section>
    </div>
  );
}
