import Link from "next/link";

export const metadata = {
  title: "Find Your Aesthetic: Free Aesthetic Quiz & Style Archetype Test",
  description:
    "Take the free Find Your Aesthetic quiz to discover your fashion, makeup, and style archetype in 3 minutes.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-16 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
        Style &amp; Aesthetic DNA
      </p>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight">
        Find Your Aesthetic: Free Aesthetic Quiz &amp; Style Archetype Test
      </h1>
      <p className="max-w-xl text-lg text-zinc-600">
        Discover your fashion, makeup, and style archetype in 3 minutes.
      </p>
      <Link
        href="/quiz"
        className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 font-medium text-black hover:brightness-95"
      >
        Take the Quiz
      </Link>
    </main>
  );
}
