// SixthPin High-Performance PWA Service Worker
const CACHE_NAME = "sixthpin-pwa-v1";
const STATIC_ASSETS = [
  "/",
  "/services/",
  "/case-studies/",
  "/company/about/",
  "/contact/",
  "/insights/",
  "/manifest.json",
  "/logo.png",
  "/logo-light.png"
];

// Install Event - Precache static shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean up stale caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Stale-While-Revalidate Strategy
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Skip non-GET requests and video streaming chunks (handled by browser media cache)
  if (request.method !== "GET" || request.url.includes(".mp4") || request.url.startsWith("chrome-extension")) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline and request is an HTML page, return cached root
          if (request.headers.get("accept")?.includes("text/html")) {
            return caches.match("/");
          }
        });

      return cachedResponse || fetchPromise;
    })
  );
});
