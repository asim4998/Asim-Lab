import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const index = posts.map((p) => ({
    slug: p.id.replace(/\.md$/, ''),
    title: p.data.title,
    description: p.data.description ?? '',
    tags: p.data.tags ?? [],
    image: p.data.image ?? '',
    // first 600 chars of plain text for searching
    text: p.body.replace(/[#*`>\-[\]()!]/g, ' ').slice(0, 600),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
