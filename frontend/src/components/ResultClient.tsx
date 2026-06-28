"use client";

import { useState } from "react";
import Link from "next/link";
import { QUIZ_RESULT_STORAGE_KEY, type AestheticMatch, type QuizResult } from "@/lib/quiz";

function readStoredResult(): QuizResult | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(QUIZ_RESULT_STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

function MatchBar({ match }: { match: AestheticMatch }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline justify-between text-sm">
        <Link href={`/aesthetics/${match.slug}`} className="font-medium hover:underline">
          {match.name}
        </Link>
        <span className="text-zinc-500">{match.percentage}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-zinc-100">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-gold to-gold-soft"
          style={{ width: `${match.percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function ResultClient() {
  const [result] = useState<QuizResult | null>(readStoredResult);

  if (!result) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
        <p className="text-zinc-600">We couldn&apos;t find a quiz result for you.</p>
        <Link
          href="/quiz/find-your-aesthetic"
          className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 font-medium text-black hover:brightness-95"
        >
          Take the Quiz
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-10 p-8">
      <header className="flex flex-col gap-2 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-gold">Your Aesthetic DNA</p>
        <h1 className="bg-gradient-to-r from-gold to-gold-soft bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
          {result.primary.name}
        </h1>
      </header>

      <section className="flex flex-col gap-4">
        {result.dna.filter((m) => m.slug).map((match) => (
          <MatchBar key={match.slug} match={match} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 border-t-4 border-t-gold p-5">
          <p className="text-sm uppercase tracking-wide text-gold">Fantasy aesthetic</p>
          <p className="mt-1 text-lg font-medium">
            {result.fantasy.map((m) => m.name).join(" x ")}
          </p>
          <p className="mt-1 text-sm text-zinc-500">What you&apos;re drawn to</p>
        </div>
        <div className="rounded-xl border border-zinc-200 border-t-4 border-t-zinc-400 p-5">
          <p className="text-sm uppercase tracking-wide text-zinc-500">Wearable aesthetic</p>
          <p className="mt-1 text-lg font-medium">
            {result.wearable.map((m) => m.name).join(" x ")}
          </p>
          <p className="mt-1 text-sm text-zinc-500">What you&apos;d actually wear</p>
        </div>
      </section>

      <section className="rounded-xl border border-gold-soft bg-zinc-50 p-5 text-zinc-900">
        <p className="text-sm uppercase tracking-wide text-gold">Your style formula</p>
        <p className="mt-1 text-lg">{result.style_formula}</p>
      </section>

      <Link
        href="/quiz/find-your-aesthetic"
        className="self-center rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 font-medium text-black hover:brightness-95"
      >
        Retake the Quiz
      </Link>
    </main>
  );
}
