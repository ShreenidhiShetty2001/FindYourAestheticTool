export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 p-8 sm:p-12">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="text-sm text-zinc-500">Last updated: June 2026</p>

      <p className="text-zinc-600">
        This policy explains what information Find Your Aesthetic collects when
        you use the quiz, and how it&apos;s used. We&apos;ve tried to keep this
        plain and accurate to what the site actually does.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Information we collect</h2>
      <p className="text-zinc-600">
        When you take the quiz, your answers are sent to our server to compute
        your result (your aesthetic breakdown, fantasy/wearable split, and
        style formula). We do not require an account, a name, or an email
        address to take the quiz. Standard technical information (such as IP
        address and browser type) may be logged by our hosting providers as
        part of normal server operation.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Local storage, not cookies</h2>
      <p className="text-zinc-600">
        Your in-progress answers and your final result are stored in your
        browser&apos;s session storage, not in cookies we set. This data stays
        on your device, expires automatically after about an hour of
        inactivity, and is cleared when you close the browser tab.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">
        Data retention on our servers
      </h2>
      <p className="text-zinc-600">
        We do not currently store your individual quiz answers or results in a
        database. They&apos;re processed to generate your result and then
        discarded. If this changes in the future — for example, to
        anonymously analyze quiz responses and improve how the quiz scores
        people — we will update this policy before doing so.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Advertising</h2>
      <p className="text-zinc-600">
        We may use Google AdSense to display ads on this site. Google and its
        partners may use cookies, device identifiers, or similar technologies
        to serve ads based on your visits to this and other websites. You can
        learn more about how Google uses this data at{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          className="text-gold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          policies.google.com/technologies/partner-sites
        </a>
        , manage your ad personalization at{" "}
        <a
          href="https://adssettings.google.com"
          className="text-gold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Ads Settings
        </a>
        , or opt out of personalized advertising more broadly at{" "}
        <a
          href="https://www.aboutads.info/choices"
          className="text-gold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          aboutads.info/choices
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Third-party hosting</h2>
      <p className="text-zinc-600">
        This site is hosted on Vercel (frontend) and Render (backend), each of
        which may process technical request data (like IP address) as part of
        delivering the site to you, under their own respective privacy
        policies.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Children&apos;s privacy</h2>
      <p className="text-zinc-600">
        Find Your Aesthetic is not directed at children under 13, and we do
        not knowingly collect personal information from children under 13.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Your choices</h2>
      <p className="text-zinc-600">
        Since your quiz data lives in your browser, you can clear it at any
        time by closing the tab or clearing your browser&apos;s site data. See
        our{" "}
        <a href="/data-deletion" className="text-gold hover:underline">
          data deletion page
        </a>{" "}
        for details.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Changes to this policy</h2>
      <p className="text-zinc-600">
        We may update this policy as the site evolves. Material changes will
        be reflected by updating the date at the top of this page.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
      <p className="text-zinc-600">
        Questions about this policy? Email{" "}
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
