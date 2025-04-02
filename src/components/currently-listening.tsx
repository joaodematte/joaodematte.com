import Link from '@/components/link';
import { getSpotifyData } from '@/lib/spotify';

export default async function CurrentlyListening() {
  const data = await getSpotifyData();

  if (!data.isPlaying) return null;

  return (
    <section className="invisible fixed bottom-12 left-12 z-20 2xl:visible">
      <p className="font-semibold">currently listening to</p>
      <p>
        <Link href={data.songUrl} target="_blank" external>
          {data.artist} - {data.title}
        </Link>
      </p>
    </section>
  );
}
