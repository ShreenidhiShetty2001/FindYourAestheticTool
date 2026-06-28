import Link from "next/link";

export const metadata = { title: "Take the Quiz | Find Your Aesthetic" };

export default function QuizPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-16 text-center">
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight">
        Find Your Aesthetic Quiz
      </h1>
      <p className="max-w-xl text-lg text-zinc-600">
        20 quick questions about color, style, and vibe. We&apos;ll split your
        result into the aesthetic you fantasize about and the one you&apos;d
        actually wear.
      </p>
      <Link
        href="/quiz/find-your-aesthetic"
        className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 font-medium text-black hover:brightness-95"
      >
        Start the Quiz
      </Link>
    </main>
  );
}
