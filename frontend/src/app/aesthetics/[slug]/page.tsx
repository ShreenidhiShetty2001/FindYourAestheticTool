type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return { title: `${slug} Aesthetic Guide | Find Your Aesthetic` };
}

export default async function AestheticGuidePage({ params }: Params) {
  const { slug } = await params;
  return <main className="p-8">Aesthetic guide placeholder for: {slug}</main>;
}
