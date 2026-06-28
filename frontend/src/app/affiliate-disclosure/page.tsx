export const metadata = { title: "Affiliate Disclosure" };

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 p-8 sm:p-12">
      <h1 className="text-3xl font-semibold tracking-tight">Affiliate Disclosure</h1>
      <p className="text-sm text-zinc-500">Last updated: June 2026</p>

      <p className="text-zinc-600">
        In accordance with FTC guidelines, this page discloses how Find Your
        Aesthetic may earn money from links on this site.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Affiliate links</h2>
      <p className="text-zinc-600">
        Find Your Aesthetic may, now or in the future, include affiliate
        links — for example, links to clothing or beauty products that match
        a particular aesthetic. If you click one of these links and make a
        qualifying purchase, we may earn a small commission, at no additional
        cost to you. The price you pay is unaffected.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Advertising</h2>
      <p className="text-zinc-600">
        This site may also display ads served through Google AdSense. Google
        and its advertising partners may use cookies or similar technology to
        show ads based on your visits to this and other sites. See our{" "}
        <a href="/privacy-policy" className="text-gold hover:underline">
          privacy policy
        </a>{" "}
        for more on how that works and how to opt out.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Our recommendations</h2>
      <p className="text-zinc-600">
        Any product or brand we mention is chosen because we think it fits the
        relevant aesthetic, not based on commission rates. Affiliate
        relationships don&apos;t change our opinions or the quiz&apos;s
        scoring.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
      <p className="text-zinc-600">
        Questions about this disclosure? Email{" "}
        <a
          href="mailto:shreenidhishetty391@gmail.com"
          className="text-gold hover:underline"
        >
          shreenidhishetty391@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
