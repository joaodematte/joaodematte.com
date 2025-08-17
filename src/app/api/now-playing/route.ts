import { NextResponse } from 'next/server';

import { getNowPlaying } from '@/lib/spotify';

export async function GET() {
  const data = await getNowPlaying();

  const response = NextResponse.json(data, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });

  return response;
}
