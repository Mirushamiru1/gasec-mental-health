
// Basic service worker for offline shell caching (customize before production)
const CACHE_NAME = 'gasec-cache-v1';
const OFFLINE_URL = '/index.html';
self.addEventListener('install', event => {
  event.waitUntil((async ()=>{
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([OFFLINE_URL]);
    self.skipWaiting();
  })());
});
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
