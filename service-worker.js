self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('app-cache').then((cache) => {
            return cache.addAll([
                '/',
                './index.html',
                './style.css',
                './script.js',
                './manifest.json',
                './icons/icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
