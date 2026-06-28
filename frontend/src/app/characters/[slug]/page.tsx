type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return { title: `${slug} | Character Aesthetic` };
}

export default async function CharacterAestheticPage({ params }: Params) {
  const { slug } = await params;
  return <main className="p-8">Character aesthetic placeholder for: {slug}</main>;
}
