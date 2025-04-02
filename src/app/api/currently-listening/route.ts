import { NextResponse } from 'next/server';

import { getNowPlaying, normalizeSpotifyResponse } from '@/lib/spotify';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return new NextResponse(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  const song = await response.json();

  if (song.item === null) {
    return new NextResponse(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  return new NextResponse(JSON.stringify(normalizeSpotifyResponse(song)), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
    }
  });
}
