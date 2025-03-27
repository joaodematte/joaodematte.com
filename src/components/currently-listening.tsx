import Link from '@/components/link';
import { getSpotifyData } from '@/lib/spotify';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function CurrentlyListening() {
  const data = await getSpotifyData();

  if (!data.isPlaying) return null;

  return (
    <section>
      <p
        className="animate-fade font-semibold"
        style={{
          animationDelay: 'calc(var(--animation-delay-step) * 11)'
        }}
      >
        currently listening to
      </p>
      <p>
        <Link
          href={data.songUrl}
          target="_blank"
          external
          className="animate-fade"
          style={{
            animationDelay: 'calc(var(--animation-delay-step) * 12)'
          }}
        >
          {data.artist} - {data.title}
        </Link>
      </p>
    </section>
  );
}
