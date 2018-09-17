var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/css/*',
    '/data/*',
    '/img/*',
    '/js/*'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);})
        .catch(function(err) { console.log('Install error', err) })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                return response || fetch(event.request);})
            .catch(function(err) { console.log('Fetch error', err) })
    );
});