'use client';

import useSWR from 'swr';
import SpotifySVG from '@/components/icons/SpotifySVG';
import fetcher from '@/utils/fetcher';
import Link from 'next/link';
import { useI18n } from '@/context/i18n';

type Song =
  | {
      isPlaying: false;
    }
  | {
      isPlaying: true;
      artist: string;
      songUrl: string;
      title: string;
      albumImage: string;
    };

export default function Spotify() {
  const {
    translations: { spotify_not_playing }
  } = useI18n();

  const { data } = useSWR<Song>('/api/now-playing', fetcher);

  return (
    <p className="flex items-center">
      <SpotifySVG />
      {data?.isPlaying ? (
        <span className="ml-1">
          <Link
            href={data.songUrl}
            target="_blank"
            rel="noreferrer"
            className="focusable rounded-sm font-medium text-zinc-800 underline decoration-green-500 decoration-2 underline-offset-2 transition duration-100 hover:text-green-500 hover:decoration-green-500/30 focus:text-green-500 focus:ring-green-500/40 dark:text-white dark:decoration-green-400 dark:hover:text-green-400 dark:hover:decoration-green-400/30 dark:focus:text-green-400 dark:focus:ring-green-400/40"
          >
            {data.title}
          </Link>{' '}
          <span className="text-zinc-400">— {data.artist}</span>
        </span>
      ) : (
        <span className="ml-1">{spotify_not_playing}</span>
      )}
    </p>
  );
}
