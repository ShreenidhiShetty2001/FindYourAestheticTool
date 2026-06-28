import ResultLoader from "@/components/ResultLoader";

export const metadata = {
  title: "Your Aesthetic Result",
  robots: { index: false, follow: false },
};

export default function ResultPage() {
  return <ResultLoader />;
}
