'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { Section } from '@/components/section';
import { NowPlayingResponse } from '@/lib/spotify';

interface WhoamiProps {
  initialPlaying: NowPlayingResponse;
}

export function Whoami({ initialPlaying }: WhoamiProps) {
  const { data } = useQuery({
    queryKey: ['spotify'],
    queryFn: () => fetch('/api/now-playing').then((res) => res.json())
  });

  const spotifyData = data ?? initialPlaying;

  return (
    <Section
      content={
        <div className="bg-background p-4 pt-12">
          <h1 className="text-2xl leading-normal font-semibold">
            João Dematte
          </h1>
          <p className="text-sm">
            Self-taught interaction engineer obsessed with details and
            interfaces.
          </p>
          <p className="mt-4 text-sm">
            I have a strong passion for building web applications that are both
            functional and aesthetically pleasing.
          </p>

          {spotifyData.isPlaying && (
            <div className="mt-4">
              <span className="text-xs font-semibold">
                Currently listening to
              </span>
              <div className="mt-2 flex items-end gap-2">
                <div className="grid size-16 place-items-center">
                  <Image
                    src={spotifyData.albumImageUrl}
                    alt={spotifyData.title}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">{spotifyData.title}</p>
                  <p className="">{spotifyData.artist}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
}
