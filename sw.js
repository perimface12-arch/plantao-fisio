// Cache simples: abre offline e busca atualização quando há rede.
const CACHE = "plantao-fisio-v4";
const FILES = ["./", "index.html", "cases.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-180.png", "splash.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).hostname === "api.anthropic.com") return;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok && (new URL(req.url).origin === location.origin || req.url.includes("fonts."))) {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match("index.html")))
  );
});
