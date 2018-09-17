/*jshint esversion: 6 */

const cacheName = 'v1';
const toCache = [
    '/',
    '/css/*',
    '/img/*',
    '/js/*'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll(toCache);
        })
        .catch(function(error) {
            console.log('Install error', error);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('SW: Activated');
    // Remove unwanted caches
    event.waitUntil(
        caches.keys()
        .then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cache) {
                    if (cache !== cacheName) {
                        console.log('SW: Old Cache Removed');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            }
        )
    );
});

// self.addEventListener('fetch', function (event) {
// 	event.respondWith(
// 		caches.open(cacheName)
// 		.then(function (cache) {
// 			return cache.match(event.request)
// 				.then(function (response) {
// 					return response || fetch(event.request)
// 						.then(function (response) {
// 							cache.put(event.request, response.clone());
// 							return response;
// 						});
// 				});
// 		})
// 	);
// });

