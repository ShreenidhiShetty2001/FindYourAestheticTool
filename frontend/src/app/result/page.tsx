import ResultLoader from "@/components/ResultLoader";

type Props = { searchParams: Promise<{ r?: string }> };

export async function generateMetadata({ searchParams }: Props) {
  const { r } = await searchParams;

  if (!r) {
    return {
      title: "Your Aesthetic Result",
      robots: { index: false, follow: false },
    };
  }

  const ogImage = `/api/og?r=${encodeURIComponent(r)}`;
  return {
    title: "My Aesthetic Result",
    robots: { index: false, follow: false },
    openGraph: { images: [ogImage] },
    twitter: { card: "summary_large_image", images: [ogImage] },
  };
}

export default function ResultPage() {
  return <ResultLoader />;
}
