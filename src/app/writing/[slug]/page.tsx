import { Code } from 'bright';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import NextLink from 'next/link';
import { notFound } from 'next/navigation';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

import { sharedMetadata } from '@/app/shared-metadata';
import Link from '@/components/link';
import { getPost, getPosts } from '@/lib/posts';

interface WritingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post['meta:description'],
    keywords: post['meta:keywords'],
    openGraph: {
      ...sharedMetadata.openGraph,
      title: post.title,
      description: post['meta:description']
    },
    twitter: {
      ...sharedMetadata.twitter,
      title: post.title,
      description: post['meta:description']
    }
  };
}

Code.lineNumbers = true;
Code.theme = 'dark-plus';

function GoBackIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.05005 13.5C2.05005 13.7485 2.25152 13.95 2.50005 13.95C2.74858 13.95 2.95005 13.7485 2.95005 13.5L2.95005 1.49995C2.95005 1.25142 2.74858 1.04995 2.50005 1.04995C2.25152 1.04995 2.05005 1.25142 2.05005 1.49995L2.05005 13.5ZM8.4317 11.0681C8.60743 11.2439 8.89236 11.2439 9.06809 11.0681C9.24383 10.8924 9.24383 10.6075 9.06809 10.4317L6.58629 7.94993L14.5 7.94993C14.7485 7.94993 14.95 7.74846 14.95 7.49993C14.95 7.2514 14.7485 7.04993 14.5 7.04993L6.58629 7.04993L9.06809 4.56813C9.24383 4.39239 9.24383 4.10746 9.06809 3.93173C8.89236 3.75599 8.60743 3.75599 8.4317 3.93173L5.1817 7.18173C5.00596 7.35746 5.00596 7.64239 5.1817 7.81812L8.4317 11.0681Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="relative">
      <nav className="absolute -inset-x-24 select-none">
        <NextLink
          href="/"
          className="text-foreground group absolute inline-flex transform-gpu items-center gap-1.5 opacity-50 transition-transform duration-100 hover:-translate-x-2"
        >
          <GoBackIcon />
          <span className="font-mono text-sm opacity-0 transition-opacity duration-100 group-hover:opacity-100">
            cd ../
          </span>
        </NextLink>
      </nav>

      <h1 className="font-extrabold">{post.title}</h1>
      <p className="text-foreground">
        {post.description} —{' '}
        {new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
      </p>

      <div className="prose prose-code:font-mono prose-zinc prose-code:after:hidden prose-code:px-1 prose-code:before:hidden dark:prose-invert text-foreground prose-code:bg-[#1e1e1e] prose-code:rounded-sm prose-code:text-[#D4D4D4] mt-6">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkToc],
              rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
            }
          }}
          components={{
            pre: Code
          }}
        />
      </div>

      <hr className="my-12 opacity-50" />

      <footer>
        <Link href="/">writing by joão dematte</Link>
      </footer>
    </article>
  );
}
