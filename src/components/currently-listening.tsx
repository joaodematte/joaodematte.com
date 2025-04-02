'use client';

import useSWR from 'swr';

import Link from '@/components/link';
import fetcher from '@/lib/fetcher';
import { CurrentlyListeningSong } from '@/lib/spotify';

export default function CurrentlyListening() {
  const { data } = useSWR<CurrentlyListeningSong>('/api/currently-listening', fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnMount: true,
    revalidateOnReconnect: true
  });

  if (!data) {
    return null;
  }

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
