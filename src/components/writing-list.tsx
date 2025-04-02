import Link from '@/components/link';
import { getPosts } from '@/lib/posts';

export async function WritingList() {
  const posts = await getPosts();

  return (
    <section>
      <p className="font-semibold">reading</p>
      <ul>
        {posts.map(({ slug, title, description, date }) => (
          <li key={slug}>
            <Link href={`/writing/${slug.replaceAll(' ', '-')}`} external={false}>
              {title} — {description}
            </Link>
            {' — '}
            <span>
              {new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
