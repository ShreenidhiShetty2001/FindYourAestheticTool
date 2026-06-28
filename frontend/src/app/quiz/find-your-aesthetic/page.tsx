"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  fetchQuestions,
  submitQuiz,
  loadQuizProgress,
  saveQuizProgress,
  clearQuizProgress,
  QUIZ_RESULT_STORAGE_KEY,
  type Question,
} from "@/lib/quiz";

export default function FindYourAestheticQuizPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions()
      .then((loaded) => {
        setQuestions(loaded);
        const saved = loadQuizProgress();
        if (saved) {
          setAnswers(saved.answers);
          setStep(Math.min(saved.step, loaded.length - 1));
        }
      })
      .catch(() => setError("Couldn't load the quiz. Please refresh and try again."));
  }, []);

  if (error) {
    return <main className="flex min-h-screen items-center justify-center p-8 text-center text-zinc-600">{error}</main>;
  }

  if (!questions) {
    return <main className="flex min-h-screen items-center justify-center p-8 text-zinc-500">Loading quiz…</main>;
  }

  const allQuestions = questions;
  const question = allQuestions[step];
  const progress = Math.round(((step + 1) / allQuestions.length) * 100);
  const currentAnswer = answers[question.id];
  const isLastQuestion = step === allQuestions.length - 1;

  function selectOption(optionId: string) {
    const next = { ...answers, [question.id]: optionId };
    setAnswers(next);
    saveQuizProgress({ answers: next, step });
  }

  function handleBack() {
    if (step === 0) return;
    const prevStep = step - 1;
    setStep(prevStep);
    saveQuizProgress({ answers, step: prevStep });
  }

  async function handleNext() {
    if (!currentAnswer) return;

    if (!isLastQuestion) {
      const nextStep = step + 1;
      setStep(nextStep);
      saveQuizProgress({ answers, step: nextStep });
      return;
    }

    setSubmitting(true);
    try {
      const result = await submitQuiz(answers);
      sessionStorage.setItem(QUIZ_RESULT_STORAGE_KEY, JSON.stringify(result));
      clearQuizProgress();
      router.push("/result");
    } catch {
      setError("Couldn't score your quiz. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-8 p-8">
      <div className="h-2 w-full rounded-full bg-zinc-100">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-gold to-gold-soft transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-right text-sm text-zinc-500">
        Question {step + 1} of {allQuestions.length}
      </p>

      <h2 className="text-2xl font-semibold tracking-tight">{question.text}</h2>

      <div className="flex flex-col gap-3">
        {question.options.map((option) => {
          const selected = currentAnswer === option.id;
          return (
            <button
              key={option.id}
              disabled={submitting}
              onClick={() => selectOption(option.id)}
              className={`rounded-xl border-2 px-5 py-4 text-left transition-colors hover:border-transparent hover:bg-gradient-to-r hover:from-gold hover:to-gold-soft hover:text-black disabled:opacity-50 ${
                selected ? "border-transparent bg-gradient-to-r from-gold to-gold-soft font-medium text-black" : "border-zinc-200"
              }`}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={step === 0 || submitting}
          className="rounded-full border border-zinc-200 px-5 py-2 text-sm disabled:opacity-40"
        >
          ← Back
        </button>
        <button
          onClick={handleNext}
          disabled={!currentAnswer || submitting}
          className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-2 text-sm font-medium text-black hover:brightness-95 disabled:opacity-40"
        >
          {submitting ? "Scoring…" : isLastQuestion ? "See Results" : "Next →"}
        </button>
      </div>
    </main>
  );
}
