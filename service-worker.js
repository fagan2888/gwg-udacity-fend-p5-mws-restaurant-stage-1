/*jshint esversion: 6 */

const cacheName = 'v1';
const toCache = [
    './',
    './index.html',
    './restaurant.html?id=1',
    './css/styles.css',
    './css/styles_.css',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './js/script_.js',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg'
];

self.addEventListener('install', function(event) {
    console.log('installing >>> SW');
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll(toCache)
            .then(function() {
                console.log('cashed >>> files');
            });
        })
        .catch(function(error) {
            console.log('Install error', error);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('activated >>> new SW');
    // Remove unwanted caches
    event.waitUntil(
        caches.keys()
        .then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cache) {
                    if (cache !== cacheName) {
                        console.log('old cache removed >>> SW');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.open(cacheName)
		.then(function (cache) {
			return cache.match(event.request)
				.then(function (response) {
					return response || fetch(event.request)
						.then(function (response) {
							cache.put(event.request, response.clone());
							return response;
						});
				});
		})
	);
});
