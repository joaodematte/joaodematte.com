export interface SpotifyAPIResponse {
  is_playing: boolean;
  item: {
    album: {
      album_type: 'album' | 'single' | 'compilation';
      artists: Array<{
        external_urls: Record<string, string>;
        href: string;
        id: string;
        name: string;
        type: 'artist';
        uri: string;
      }>;
      available_markets: string[];
      external_urls: Record<string, string>;
      href: string;
      id: string;
      images: Array<{
        height: number;
        url: string;
        width: number;
      }>;
      name: string;
      release_date: string;
      release_date_precision: 'year' | 'month' | 'day';
      total_tracks: number;
      type: 'album';
      uri: string;
    };
    artists: Array<{
      external_urls: Record<string, string>;
      href: string;
      id: string;
      name: string;
      type: 'artist';
      uri: string;
    }>;
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: 'track';
    uri: string;
  };
}

export interface CurrentlyListeningSong {
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  songUri: string;
  title: string;
  albumImageUrl: string;
  album: string;
}

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = btoa(`${client_id}:${client_secret}`);
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export function normalizeSpotifyResponse(responseData: SpotifyAPIResponse): CurrentlyListeningSong {
  const isPlaying = responseData.is_playing;
  const title = responseData.item.name;
  const artist = responseData.item.artists.map((_artist: Record<string, unknown>) => _artist.name).join(', ');
  const album = responseData.item.album.name;
  const albumImageUrl = responseData.item.album.images[0].url;
  const songUrl = responseData.item.external_urls.spotify;
  const songUri = responseData.item.uri;

  return {
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    songUri
  };
}

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token ?? ''
    })
  });

  return response.json();
}

export async function getNowPlaying() {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
}
