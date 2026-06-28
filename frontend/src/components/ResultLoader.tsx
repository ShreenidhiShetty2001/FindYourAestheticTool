"use client";

import dynamic from "next/dynamic";

const ResultClient = dynamic(() => import("@/components/ResultClient"), { ssr: false });

export default function ResultLoader() {
  return <ResultClient />;
}
