"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { QUIZ_RESULT_STORAGE_KEY, type QuizResult } from "@/lib/quiz";
import { AESTHETICS_CONTENT } from "@/lib/aesthetics-content";
import { decodeShareableResult, encodeShareableResult, type ShareableResult } from "@/lib/share";

type DisplayMatch = { slug: string; name: string; percentage: number };
type DisplayResult = {
  dna: DisplayMatch[];
  fantasy: { slug: string; name: string }[];
  wearable: { slug: string; name: string }[];
  style_formula: string;
};

function nameFor(slug: string): string {
  return AESTHETICS_CONTENT[slug]?.name ?? slug;
}

function fromQuizResult(result: QuizResult): DisplayResult {
  return {
    dna: result.dna.filter((m) => m.slug),
    fantasy: result.fantasy,
    wearable: result.wearable,
    style_formula: result.style_formula,
  };
}

function fromShareable(shareable: ShareableResult): DisplayResult {
  return {
    dna: shareable.dna.map((m) => ({ ...m, name: nameFor(m.slug) })),
    fantasy: shareable.fantasy.map((slug) => ({ slug, name: nameFor(slug) })),
    wearable: shareable.wearable.map((slug) => ({ slug, name: nameFor(slug) })),
    style_formula: shareable.style_formula,
  };
}

function toShareable(result: DisplayResult): ShareableResult {
  return {
    dna: result.dna.map((m) => ({ slug: m.slug, percentage: m.percentage })),
    fantasy: result.fantasy.map((m) => m.slug),
    wearable: result.wearable.map((m) => m.slug),
    style_formula: result.style_formula,
  };
}

function readResult(sharedParam: string | null): DisplayResult | null {
  if (sharedParam) {
    const decoded = decodeShareableResult(sharedParam);
    if (decoded) return fromShareable(decoded);
  }
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(QUIZ_RESULT_STORAGE_KEY);
  return raw ? fromQuizResult(JSON.parse(raw)) : null;
}

function MatchBar({ match }: { match: DisplayMatch }) {
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

function NameList({ items }: { items: { slug: string; name: string }[] }) {
  return (
    <>
      {items.map((m, i) => (
        <span key={m.slug}>
          {i > 0 && " x "}
          <Link href={`/aesthetics/${m.slug}`} className="hover:underline">
            {m.name}
          </Link>
        </span>
      ))}
    </>
  );
}

export default function ResultClient() {
  const searchParams = useSearchParams();
  const [result] = useState<DisplayResult | null>(() => readResult(searchParams.get("r")));
  const [copied, setCopied] = useState(false);

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

  const encoded = encodeShareableResult(toShareable(result));
  const shareUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/result?r=${encoded}`;
  const ogImageUrl = `/api/og?r=${encoded}`;
  const primaryName = result.dna[0]?.name ?? "Find Your Aesthetic";

  async function handleShare() {
    const shareData = {
      title: `My aesthetic is ${primaryName}`,
      text: `I just took the Find Your Aesthetic quiz and got ${primaryName}. What's yours?`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled the native share sheet — no action needed
      }
      return;
    }

    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-10 p-8">
      <header className="flex flex-col gap-2 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-gold">Your Aesthetic DNA</p>
        <h1 className="bg-gradient-to-r from-gold to-gold-soft bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
          {primaryName}
        </h1>
      </header>

      <section className="flex flex-col gap-4">
        {result.dna.map((match) => (
          <MatchBar key={match.slug} match={match} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 border-t-4 border-t-gold p-5">
          <p className="text-sm uppercase tracking-wide text-gold">Fantasy aesthetic</p>
          <p className="mt-1 text-lg font-medium">
            <NameList items={result.fantasy} />
          </p>
          <p className="mt-1 text-sm text-zinc-500">What you&apos;re drawn to</p>
        </div>
        <div className="rounded-xl border border-zinc-200 border-t-4 border-t-zinc-400 p-5">
          <p className="text-sm uppercase tracking-wide text-zinc-500">Wearable aesthetic</p>
          <p className="mt-1 text-lg font-medium">
            <NameList items={result.wearable} />
          </p>
          <p className="mt-1 text-sm text-zinc-500">What you&apos;d actually wear</p>
        </div>
      </section>

      <section className="rounded-xl border border-gold-soft bg-zinc-50 p-5 text-zinc-900">
        <p className="text-sm uppercase tracking-wide text-gold">Your style formula</p>
        <p className="mt-1 text-lg">{result.style_formula}</p>
      </section>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={handleShare}
          className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 font-medium text-black hover:brightness-95"
        >
          {copied ? "Link copied!" : "Share my result"}
        </button>
        <a
          href={ogImageUrl}
          download="my-aesthetic.png"
          className="rounded-full border border-zinc-200 px-6 py-3 font-medium hover:border-gold"
        >
          Save as image
        </a>
        <Link
          href="/quiz/find-your-aesthetic"
          className="rounded-full border border-zinc-200 px-6 py-3 font-medium hover:border-gold"
        >
          Retake the Quiz
        </Link>
      </div>
    </main>
  );
}
