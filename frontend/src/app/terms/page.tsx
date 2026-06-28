export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 p-8 sm:p-12">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="text-sm text-zinc-500">Last updated: June 2026</p>

      <p className="text-zinc-600">
        By using Find Your Aesthetic (&quot;the site&quot;), you agree to these
        terms. If you don&apos;t agree, please don&apos;t use the site.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">What this is</h2>
      <p className="text-zinc-600">
        Find Your Aesthetic is a free quiz for entertainment and
        self-discovery purposes. Your results — your aesthetic breakdown,
        fantasy and wearable aesthetics, and style formula — are generated
        from a fixed scoring system based on your answers. They&apos;re a fun
        starting point for thinking about your style, not professional
        styling, fashion, or psychological advice.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Eligibility</h2>
      <p className="text-zinc-600">
        The site is intended for general audiences and is not directed at
        children under 13. If you are under the age required by your
        jurisdiction to agree to these terms on your own, please use the site
        only with a parent or guardian&apos;s involvement.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Acceptable use</h2>
      <p className="text-zinc-600">
        Please don&apos;t attempt to disrupt the site, scrape it at high
        volume, or use it for any unlawful purpose. We reserve the right to
        restrict access if we believe these terms are being violated.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Intellectual property</h2>
      <p className="text-zinc-600">
        The site&apos;s design, quiz content, and aesthetic descriptions are
        owned by Find Your Aesthetic unless otherwise noted. Your individual
        quiz answers and results belong to you.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">
        Third-party links and advertising
      </h2>
      <p className="text-zinc-600">
        The site may contain links to third-party products or brands,
        including affiliate links, and may display ads served by Google
        AdSense. See our{" "}
        <a href="/affiliate-disclosure" className="text-gold hover:underline">
          affiliate disclosure
        </a>{" "}
        for details. We aren&apos;t responsible for the content or practices
        of third-party sites we link to.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">No warranty</h2>
      <p className="text-zinc-600">
        The site and its results are provided &quot;as is,&quot; without
        warranties of any kind. We don&apos;t guarantee the quiz will be
        uninterrupted, error-free, or that its results will match your own
        sense of your style — it&apos;s a fun tool, not a precise measurement.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">
        Limitation of liability
      </h2>
      <p className="text-zinc-600">
        To the fullest extent permitted by law, Find Your Aesthetic isn&apos;t
        liable for any indirect, incidental, or consequential damages arising
        from your use of the site.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Changes</h2>
      <p className="text-zinc-600">
        We may update the site or these terms at any time. Continued use of
        the site after changes means you accept the updated terms.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
      <p className="text-zinc-600">
        Questions about these terms? Email{" "}
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
