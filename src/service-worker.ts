const CACHE_NAME = 'menthol-cache-v1'
const ASSETS_TO_CACHE = [
  '/nfts/nft1.png',
  '/nfts/nft2.png',
  '/nfts/nft3.png',
  '/music/background.mp3'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  )
}) 