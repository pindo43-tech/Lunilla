const C = 'lunilla-v6', F = ['./', 'index.html', 'style.css', 'main.js', 'predict.js', 'store.js', 'phases.js', 'calendar.js', '../third_party/ics.js', '../third_party/sparkline.js', '../third_party/apg-calendar-keys.js', 'icon.svg', 'manifest.webmanifest'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(F))); self.skipWaiting(); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k))))));
// Solo GET del mismo origen y respuestas OK: antes se cacheaban también 404/500 (pisando la copia buena offline)
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { if (r.ok) { const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); } return r; }).catch(() => caches.match(e.request)));
});
