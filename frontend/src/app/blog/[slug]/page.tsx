type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return { title: `${slug} | Find Your Aesthetic Blog` };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  return <main className="p-8">Blog post placeholder for: {slug}</main>;
}
