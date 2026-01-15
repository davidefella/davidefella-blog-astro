import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const searchData = posts.map(post => ({
    title: post.data.title,
    slug: post.slug,
    tags: post.data.tags || [],
  }));

  return new Response(JSON.stringify(searchData), {
    headers: { 'Content-Type': 'application/json' }
  });
};
