import Link from "next/link";
import { AESTHETICS_CONTENT } from "@/lib/aesthetics-content";

export const metadata = {
  title: "Aesthetic Guides — What Each Style Means",
  description:
    "Browse every aesthetic in the Find Your Aesthetic quiz: what it means, its vibe, and the key traits that define it.",
};

export default function AestheticsIndexPage() {
  const aesthetics = Object.values(AESTHETICS_CONTENT);

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 p-8 sm:p-12">
      <p className="text-sm uppercase tracking-[0.2em] text-gold">Aesthetic Guides</p>
      <h1 className="text-3xl font-semibold tracking-tight">
        Every aesthetic, explained
      </h1>
      <p className="text-zinc-600">
        Not sure what your quiz result actually means? Here&apos;s the full
        list of aesthetics we score for, each with a short guide.
      </p>

      <ul className="mt-2 flex flex-col gap-4">
        {aesthetics.map((aesthetic) => (
          <li key={aesthetic.slug}>
            <Link
              href={`/aesthetics/${aesthetic.slug}`}
              className="block rounded-xl border border-zinc-200 p-5 hover:border-gold"
            >
              <p className="font-medium">{aesthetic.name}</p>
              <p className="mt-1 text-sm text-zinc-500">{aesthetic.tagline}</p>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/quiz/find-your-aesthetic"
        className="self-start rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 font-medium text-black hover:brightness-95"
      >
        Take the Quiz
      </Link>
    </main>
  );
}
