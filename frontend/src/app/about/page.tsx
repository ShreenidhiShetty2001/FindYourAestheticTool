export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 p-8 sm:p-12">
      <h1 className="text-3xl font-semibold tracking-tight">About Find Your Aesthetic</h1>

      <p className="text-zinc-600">
        Aesthetic labels move fast — clean girl, dark academia, coquette, office
        siren — and most of us are drawn to more than one at the same time. Find
        Your Aesthetic is a free, quick quiz built to make sense of that overlap
        instead of forcing you into a single box.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">What makes it different</h2>
      <p className="text-zinc-600">
        Most style quizzes give you one result. Ours splits the answer into two:
        the <strong>fantasy aesthetic</strong> you&apos;re visually drawn to (think
        Pinterest boards and mood boards), and the <strong>wearable aesthetic</strong>{" "}
        you&apos;d actually put on for a normal day. Most people&apos;s answers to
        those two questions don&apos;t match — and that&apos;s the whole point.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">How it works</h2>
      <p className="text-zinc-600">
        You answer 20 short questions about color, outfits, beauty habits, and
        vibe. Your answers are scored against a set of aesthetic profiles to
        produce a personalized breakdown — your top aesthetic, a secondary and
        accent aesthetic, your fantasy vs. wearable split, and a short style
        formula you can use as a starting point for your own wardrobe.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Who built this</h2>
      <p className="text-zinc-600">
        Find Your Aesthetic is an independent project built by one person who
        got tired of style quizzes that don&apos;t hold up past the first
        question. It&apos;s a side project, not a styling service or a
        substitute for professional fashion advice — just a fun way to get a
        clearer read on your own taste.
      </p>

      <p className="text-zinc-600">
        Questions or feedback? Visit the{" "}
        <a href="/contact" className="text-gold hover:underline">
          contact page
        </a>
        .
      </p>
    </main>
  );
}
