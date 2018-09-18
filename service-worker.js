/*jshint esversion: 6 */

const cacheName = 'v1';
const toCache = [
    './',
    './index.html',
    './restaurant.html',
    './css/styles.css',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
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
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll(toCache)
            .then(function() {
                console.log('Files Cashed');
            });
        })
        .catch(function(error) {
            console.log('Install error', error);
        })
    );
});

// self.addEventListener('activate', function(event) {
//     console.log('SW: Activated');
//     // Remove unwanted caches
//     event.waitUntil(
//         caches.keys()
//         .then(function(cacheNames) {
//             return Promise.all(
//                 cacheNames.map(function(cache) {
//                     if (cache !== cacheName) {
//                         console.log('SW: Old Cache Removed');
//                         return caches.delete(cache);
//                     }
//                 })
//             );
//         })
//     );
// });

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
            return response || fetch(event.request);
            }
        )
    );
});

// Alternative fetch

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
