import Link from "next/link";
import { notFound } from "next/navigation";
import { AESTHETICS_CONTENT } from "@/lib/aesthetics-content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(AESTHETICS_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const aesthetic = AESTHETICS_CONTENT[slug];
  if (!aesthetic) return {};

  return {
    title: `${aesthetic.name} Aesthetic — What It Means`,
    description: aesthetic.description,
  };
}

export default async function AestheticGuidePage({ params }: Params) {
  const { slug } = await params;
  const aesthetic = AESTHETICS_CONTENT[slug];

  if (!aesthetic) {
    notFound();
  }

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 p-8 sm:p-12">
      <p className="text-sm uppercase tracking-[0.2em] text-gold">Aesthetic Guide</p>
      <h1 className="text-3xl font-semibold tracking-tight">{aesthetic.name}</h1>
      <p className="text-lg text-zinc-600">{aesthetic.tagline}</p>

      <p className="text-zinc-600">{aesthetic.description}</p>

      <div>
        <h2 className="text-xl font-semibold tracking-tight">Key traits</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {aesthetic.traits.map((trait) => (
            <li key={trait} className="flex items-start gap-2 text-zinc-600">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {trait}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/quiz/find-your-aesthetic"
        className="self-start rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 font-medium text-black hover:brightness-95"
      >
        Take the Quiz
      </Link>
    </main>
  );
}
