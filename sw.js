importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/186b078a2e8a0fe8d6ed.js",
    "revision": "709debc52236a8a05d53245529d95335"
  },
  {
    "url": "/_nuxt/1effe45618ade08a3b72.js",
    "revision": "1a589ae43b63d41c11cf9046e23d6afe"
  },
  {
    "url": "/_nuxt/2d7999de69e0425b6ef0.js",
    "revision": "3fc815db66d95bd63e7694505ddb2a77"
  },
  {
    "url": "/_nuxt/3ef67c4c861edd5f4970.js",
    "revision": "f72ecdc49b687763cbffe02d0e7e2301"
  },
  {
    "url": "/_nuxt/58d08824c446e39461dc.js",
    "revision": "0f20ebd3f28fb93a2c829b9e17df061c"
  },
  {
    "url": "/_nuxt/686e84b2ed4727df03e1.js",
    "revision": "597bf7f1694313dd235c8338c75c94dc"
  },
  {
    "url": "/_nuxt/72b18d127952a19729c1.js",
    "revision": "46b8c7784db9ba90ac9572f1657b936c"
  },
  {
    "url": "/_nuxt/a1651739a995e905334b.js",
    "revision": "432032cb2f581f3a868e9b51f0218a9d"
  },
  {
    "url": "/_nuxt/a1d6ad4246b0a4ea8b99.js",
    "revision": "76160d2286c327c760603021777922e2"
  },
  {
    "url": "/_nuxt/b4dea26775ea14eb7b2d.js",
    "revision": "8c5f351872ee423fbf3112672214b61d"
  }
], {
  "cacheId": "kater",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
