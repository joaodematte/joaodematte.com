import { getNowPlaying } from '@/utils/getNowPlaying';

export const config = {
  runtime: 'experimental-edge'
};

export async function GET(request: Request) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  const song = await response.json();

  if (song.item === null) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((artist: { name: string }) => artist.name).join(', ');
  const songUrl = song.item.external_urls.spotify;

  return new Response(
    JSON.stringify({
      artist,
      isPlaying,
      songUrl,
      title
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
      }
    }
  );
}
