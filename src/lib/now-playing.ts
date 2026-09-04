// Last.fm e non l'API di Spotify: in produzione il sito è solo file statici su
// Plesk (vedi DEPLOY.md), quindi non esiste un posto dove tenere al riparo un
// token Spotify. La chiave Last.fm è in sola lettura e finisce nel bundle: è il
// prezzo per non aggiungere un server solo per una riga di testo.
declare global {
  interface ImportMetaEnv {
    readonly VITE_LASTFM_USER?: string;
    readonly VITE_LASTFM_KEY?: string;
  }
}

const USER = import.meta.env.VITE_LASTFM_USER;
const KEY = import.meta.env.VITE_LASTFM_KEY;

export type Track = {
  artist: string;
  title: string;
  /** true mentre suona, false se è l'ultimo ascoltato. */
  playing: boolean;
  url: string;
};

type LastfmTrack = {
  name?: string;
  artist?: { "#text"?: string };
  "@attr"?: { nowplaying?: string };
};

let cached: Track | null | undefined;
let request: Promise<Track | null> | undefined;

/** Il risultato, se la richiesta di questa sessione è già arrivata. */
export function cachedNowPlaying(): Track | null | undefined {
  return cached;
}

/**
 * Una sola richiesta per sessione, condivisa da tutte le pagine: PageShell viene
 * rimontato a ogni cambio rotta e senza questa cache la riga si svuoterebbe ogni
 * volta per ricaricare la stessa canzone.
 */
export function nowPlaying(): Promise<Track | null> {
  request ??= load()
    .catch(() => null)
    .then((track) => (cached = track));
  return request;
}

async function load(): Promise<Track | null> {
  if (!USER || !KEY) return null;

  const endpoint =
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&limit=1" +
    `&user=${encodeURIComponent(USER)}&api_key=${encodeURIComponent(KEY)}`;

  const response = await fetch(endpoint);
  if (!response.ok) return null;

  const payload = (await response.json()) as {
    recenttracks?: { track?: LastfmTrack | LastfmTrack[] };
  };
  // Con limit=1 Last.fm a volte restituisce l'oggetto singolo invece dell'array.
  const raw = payload.recenttracks?.track;
  const track = Array.isArray(raw) ? raw[0] : raw;

  const title = track?.name;
  const artist = track?.artist?.["#text"];
  if (!title || !artist) return null;

  return {
    artist,
    title,
    playing: track?.["@attr"]?.nowplaying === "true",
    // Last.fm linkerebbe a sé stesso: la ricerca porta il brano dentro Spotify.
    url: `https://open.spotify.com/search/${encodeURIComponent(`${artist} ${title}`)}`,
  };
}
