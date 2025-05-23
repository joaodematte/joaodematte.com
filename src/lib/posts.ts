import fs from 'fs/promises';
import path, { join } from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

interface Post {
  'slug': string;
  'title': string;
  'description': string;
  'date': string;
  'content': string;
  'meta:description': string;
  'meta:keywords': string;
}

export const getPosts = cache(async () => {
  const postsPath = join(process.cwd(), 'posts');
  const posts = await fs.readdir(postsPath);

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const postContent = await fs.readFile(join(postsPath, file), 'utf-8');
        const { data, content } = matter(postContent);

        return { ...data, content } as Post;
      })
  );
});

export async function getPost(slug: string) {
  const posts = await getPosts();

  return posts.find((post) => post.slug === slug);
}
