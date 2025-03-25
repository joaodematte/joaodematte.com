import { Metadata } from 'next';

import CurrentlyListening from '@/components/currently-listening';
import Link from '@/components/link';

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
    <main className="w-full max-w-xl space-y-6 p-6 leading-tight md:p-12">
      <section>
        <p
          className="animate-fade font-semibold"
          style={{
            animationDelay: 'calc(var(--animation-delay-step) * 1)'
          }}
        >
          joão dematte
        </p>
        <p
          className="text-foreground animate-fade"
          style={{
            animationDelay: 'calc(var(--animation-delay-step) * 2)'
          }}
        >
          exploring human interactivity through UX.
        </p>
      </section>

      <section>
        <p
          className="animate-fade font-semibold"
          style={{
            animationDelay: 'calc(var(--animation-delay-step) * 3)'
          }}
        >
          today
        </p>
        <p
          className="text-foreground animate-fade"
          style={{
            animationDelay: 'calc(var(--animation-delay-step) * 4)'
          }}
        >
          working as a mid-level software engineer at{' '}
          <Link href="https://neomind.com.br" target="_blank" external>
            neomind
          </Link>
          , currently building a drag and drop form builder and layout designer. passionate about gym and programming
          languages;
        </p>
        <p
          className="text-foreground animate-fade"
          style={{
            animationDelay: 'calc(var(--animation-delay-step) * 5)'
          }}
        >
          and improving the React&apos;s ecosystem by scratching a new drag and drop open-source library called{' '}
          <Link href="https://github.com/joaodematte/grippy" target="_blank" external>
            grippy
          </Link>
          .
        </p>
      </section>

      <section>
        <p
          className="animate-fade font-semibold"
          style={{
            animationDelay: 'calc(var(--animation-delay-step) * 6)'
          }}
        >
          links
        </p>
        <ul>
          <li>
            <Link
              href="https://twitter.com/joaodematte"
              target="_blank"
              external
              className="animate-fade"
              style={{
                animationDelay: 'calc(var(--animation-delay-step) * 7)'
              }}
            >
              twitter
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/joaodematte"
              target="_blank"
              external
              className="animate-fade"
              style={{
                animationDelay: 'calc(var(--animation-delay-step) * 8)'
              }}
            >
              linkedin
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/joaodematte"
              target="_blank"
              external
              className="animate-fade"
              style={{
                animationDelay: 'calc(var(--animation-delay-step) * 9)'
              }}
            >
              github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/@joaodematte"
              target="_blank"
              external
              className="animate-fade"
              style={{
                animationDelay: 'calc(var(--animation-delay-step) * 10)'
              }}
            >
              youtube
            </Link>
          </li>
        </ul>
      </section>

      <CurrentlyListening />
    </main>
  );
}
