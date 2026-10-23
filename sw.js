// Service worker: keeps the app and every song available offline.
// Bump VERSION when the app shell changes so phones pick up the new files.

const VERSION = 'v25';
const CACHE = `julesange-${VERSION}`;

const SHELL = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'hygge.js',
  'vendor/qrcode.js',
  'manifest.webmanifest',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'songs/index.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await cache.addAll(SHELL);
      const songs = await (await cache.match('songs/index.json')).json();
      await cache.addAll(songs.map((song) => `songs/${song.id}.json`));
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) {
        if (key.startsWith('julesange-') && key !== CACHE) await caches.delete(key);
      }
      await self.clients.claim();
    })(),
  );
});

// Stale-while-revalidate: answer from the cache at once (it works without
// signal by the tree), and refresh the cached copy in the background.
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const lookup = request.mode === 'navigate' ? 'index.html' : request;
      const cached = await cache.match(lookup, { ignoreSearch: true });
      const network = fetch(request)
        .then((response) => {
          if (response.ok) cache.put(lookup, response.clone());
          return response;
        })
        .catch(() => undefined);
      if (cached) {
        event.waitUntil(network);
        return cached;
      }
      return (await network) ?? Response.error();
    })(),
  );
});
