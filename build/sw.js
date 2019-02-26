importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

// custom adjustments
// console.log('my adjustments');
workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "92b3de8fc8c8524aa8cb06d9818fcb4e"
  },
  {
    "url": "index.html",
    "revision": "25ce99cd7e47eec9d8f31b41030b0559"
  },
  {
    "url": "js/app.js",
    "revision": "dc0a95d4bbe3efe4cd73dccab0206283"
  }
]);
