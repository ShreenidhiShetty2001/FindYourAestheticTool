export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 p-8 sm:p-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>

      <p className="text-zinc-600">
        Find Your Aesthetic is an independent, one-person project. If you have
        feedback on the quiz, spotted a bug, have a question about your
        results, or need to reach us for a privacy or data request, email:
      </p>

      <p>
        <a
          href="mailto:shreenidhishetty391@gmail.com"
          className="text-lg font-medium text-gold hover:underline"
        >
          shreenidhishetty391@gmail.com
        </a>
      </p>

      <p className="text-zinc-600">
        We read every message and try to respond within a few days. For
        questions about advertising, see our{" "}
        <a href="/affiliate-disclosure" className="text-gold hover:underline">
          affiliate disclosure
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" className="text-gold hover:underline">
          privacy policy
        </a>
        .
      </p>
    </main>
  );
}
