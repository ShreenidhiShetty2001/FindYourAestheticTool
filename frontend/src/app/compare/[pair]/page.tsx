type Params = { params: Promise<{ pair: string }> };

export async function generateMetadata({ params }: Params) {
  const { pair } = await params;
  return { title: `${pair} | Aesthetic Comparison` };
}

export default async function ComparePage({ params }: Params) {
  const { pair } = await params;
  return <main className="p-8">Comparison page placeholder for: {pair}</main>;
}
