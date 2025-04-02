import { Metadata } from 'next';

import Link from '@/components/link';
import { WritingList } from '@/components/writing-list';

const title = 'joão dematte';
const description = 'exploring human interactivity through UX';

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    site: '@joaodematte',
    creator: '@joaodematte',
    card: 'summary_large_image',
    title,
    description
  },
  openGraph: {
    title,
    description,
    url: 'https://joaodematte.com/',
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <section>
        <p className="font-semibold">joão dematte</p>
        <p className="text-foreground">exploring human interactivity through UX.</p>
      </section>

      <section>
        <p className="font-semibold">today</p>
        <p className="text-foreground">
          working as a mid-level software engineer at{' '}
          <Link href="https://neomind.com.br" target="_blank" external>
            neomind
          </Link>
          , currently building a drag and drop form builder and layout designer. passionate about gym and programming
          languages;
        </p>
        <p className="text-foreground">
          and improving the React&apos;s ecosystem by scratching a new drag and drop open-source library called{' '}
          <Link href="https://github.com/joaodematte/grippy" target="_blank" external>
            grippy
          </Link>
          .
        </p>
      </section>

      <section>
        <p className="font-semibold">links</p>
        <ul>
          <li>
            <Link href="https://twitter.com/joaodematte" target="_blank" external>
              twitter
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/dematte" target="_blank" external>
              linkedin
            </Link>
          </li>
          <li>
            <Link href="https://github.com/joaodematte" target="_blank" external>
              github
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@joaodematte" target="_blank" external>
              youtube
            </Link>
          </li>
        </ul>
      </section>

      <WritingList />
    </>
  );
}
