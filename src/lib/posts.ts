import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string;
  content: string;
}

export const getPosts = cache(async () => {
  const posts = await fs.readdir('./posts/');

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const path = `./posts/${file}`;
        const postContent = await fs.readFile(path, 'utf-8');
        const { data, content } = matter(postContent);

        return { ...data, content } as Post;
      })
  );
});

export async function getPost(slug: string) {
  const posts = await getPosts();

  return posts.find((post) => post.slug === slug);
}
