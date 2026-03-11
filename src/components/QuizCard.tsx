"use client";

import { useState } from "react";

import type { QuizQuestion } from "@/types";

interface QuizCardProps {
  question: QuizQuestion;
}

export default function QuizCard({ question }: QuizCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <article className="card-surface rounded-[1.5rem] p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
        Question {question.id}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-slate-950">{question.question}</h3>

      <div className="mt-5 space-y-3">
        {question.options.map((option, optionIndex) => {
          const isSelected = selectedOption === option;
          const optionId = `${question.id}-${option}`;
          const optionLabel = String.fromCharCode(65 + optionIndex);

          return (
            <label key={optionId} className="answer-choice block">
              <input
                checked={isSelected}
                className="answer-choice-input"
                id={optionId}
                name={question.id}
                onChange={() => setSelectedOption(option)}
                type="radio"
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

      <p className="mt-4 text-sm text-slate-500">
        {selectedOption ? `Selected answer: ${selectedOption}` : "No answer selected yet"}
      </p>

      <p className="info-tile mt-5 rounded-2xl p-4 text-sm leading-7 text-slate-600">
        <span className="font-semibold text-slate-900">Explanation:</span> {question.explanation}
      </p>
    </article>
  );
}
