export const metadata = { title: "Data Deletion" };

export default function DataDeletionPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 p-8 sm:p-12">
      <h1 className="text-3xl font-semibold tracking-tight">Data Deletion</h1>

      <p className="text-zinc-600">
        Find Your Aesthetic doesn&apos;t use accounts, and we don&apos;t
        currently store your quiz answers or results in a database. Here&apos;s
        exactly where your data lives, and how to remove it.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">
        Where your quiz data actually lives
      </h2>
      <p className="text-zinc-600">
        While you&apos;re taking the quiz, your in-progress answers are saved
        in your browser&apos;s session storage, on your own device, so you
        don&apos;t lose your place if you reload the page. Your final result is
        also saved in session storage so the results page can display it.
        None of this is sent anywhere except to our server, briefly, to
        calculate your result.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">
        It already deletes itself
      </h2>
      <p className="text-zinc-600">
        This data expires automatically after about an hour of inactivity, and
        is cleared the moment you close the browser tab. There&apos;s nothing
        you need to do.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">
        To delete it immediately
      </h2>
      <p className="text-zinc-600">
        Close the browser tab, or clear your browser&apos;s site data /
        storage for this site from your browser&apos;s settings. Either
        action removes it completely.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">If this changes</h2>
      <p className="text-zinc-600">
        If we ever begin storing quiz responses on our servers (for example,
        anonymized data to improve how the quiz scores people), we&apos;ll
        update our{" "}
        <a href="/privacy-policy" className="text-gold hover:underline">
          privacy policy
        </a>{" "}
        and add a way to request deletion of anything tied to you here.
      </p>

      <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
      <p className="text-zinc-600">
        Have a data question we haven&apos;t covered? Email{" "}
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
