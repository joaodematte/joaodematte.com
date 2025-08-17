export type NowPlayingResponse =
  | {
      isPlaying: true;
      title: string;
      artist: string;
      album: string;
      albumImageUrl: string;
      songUrl: string;
    }
  | { isPlaying: false };

type SpotifyArtist = { name: string };
type SpotifyImage = { url: string };
type SpotifyAlbum = { name: string; images: SpotifyImage[] };
type SpotifyExternalUrls = { spotify: string };
type SpotifyItem = {
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  external_urls: SpotifyExternalUrls;
};
type SpotifyCurrentlyPlaying = {
  is_playing: boolean;
  item: SpotifyItem | null;
};

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

function getSpotifyEnv(): {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
} {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      'Missing Spotify environment variables. Please set SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REFRESH_TOKEN.'
    );
  }

  return { clientId, clientSecret, refreshToken };
}

async function getAccessToken(): Promise<string> {
  const { clientId, clientSecret, refreshToken } = getSpotifyEnv();

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body,
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(
      `Failed to refresh Spotify access token (status ${response.status}).`
    );
  }

  const json = (await response.json()) as { access_token?: string };

  if (!json.access_token) {
    throw new Error('Spotify token response did not include access_token.');
  }

  return json.access_token;
}

async function fetchNowPlaying(accessToken: string): Promise<Response> {
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json'
    },
    cache: 'no-store'
  });
}

export async function getNowPlaying(): Promise<NowPlayingResponse> {
  try {
    const accessToken = await getAccessToken();
    const response = await fetchNowPlaying(accessToken);

    if (response.status === 204 || response.status > 400) {
      return { isPlaying: false };
    }

    const song = (await response.json()) as SpotifyCurrentlyPlaying;

    if (!song || !song.is_playing || !song.item) {
      return { isPlaying: false };
    }

    const title = song.item.name;
    const artist = song.item.artists.map((a) => a.name).join(', ');
    const album = song.item.album?.name;
    const albumImageUrl = song.item.album?.images?.[0]?.url;
    const songUrl = song.item.external_urls?.spotify;

    if (!title || !artist || !album || !albumImageUrl || !songUrl) {
      return { isPlaying: false };
    }

    return {
      isPlaying: true,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl
    };
  } catch {
    return { isPlaying: false };
  }
}
