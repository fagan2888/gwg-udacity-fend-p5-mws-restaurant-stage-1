/*jshint esversion: 6 */

window.addEventListener('load', function() {

    console.log('>>> _script <<< loaded');

    /***********************
        index.html edits
    ************************/

    //append meta elements to head element
    const items = ['<meta http-equiv="X-UA-Compatible" content="ie=edge">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<meta charset="UTF-8">'];
    const target = document.querySelector('head');

    items.forEach(function(item) {
        target.insertAdjacentHTML('afterbegin', item);
    });
    
    //append _styles at the end of the head
    document.querySelector('title').insertAdjacentHTML('beforebegin', '<link rel="stylesheet" href="css/_styles.css">');
    console.log('>>> _styles <<< loaded');

    /******************************
        restaurant.html edits
    *******************************/

    // move the control container up in the DOM
    // const controlContainer = document.querySelector('.leaflet-control-container');
    // document.getElementById('map').insertAdjacentElement('afterbegin', controlContainer);
    

    /* 09-18-08 remove #map from tablist */
    document.getElementById('map').setAttribute('tabindex', '-1');

    // move zoom control to right
    const zoomControl = document.querySelector('.leaflet-control-zoom');   //next 3 lines work on index.html but on restaurant.html somtimes
    const leafletTopRight = document.querySelector('.leaflet-top.leaflet-right');
    leafletTopRight.appendChild(zoomControl);

    // create skipMapElement
    var skipMapElement = '<div class="leaflet-bar leaflet-control skip-map"><a class="leaflet-control-zoom-in" href="" title="Zoom in" role="button" aria-label="Zoom in">press enter to skip the map</a></div>';

    // add skipMapElement to map
    const leafletTopLeft = document.querySelector('.leaflet-top.leaflet-left');
    leafletTopLeft.innerHTML = skipMapElement;
    
    //check on which page we are on and run code specific for that page
    if (document.contains(document.querySelector('.filter-options'))) {

        //apply the approprite url for the skiplink
        document.querySelector('.skip-map').firstElementChild.href = '#neighborhoods-select';

        // a11y, supply missing labels
        document.querySelector('#neighborhoods-select').setAttribute('aria-label','All Neighborhoods');
        document.querySelector('#cuisines-select').setAttribute('aria-label','All Cuisines');
    } else {
        
        // switched from h1 to h2 to compy with a11y recomendation of h1 per page
        const h1Element = document.querySelector('#restaurant-name');
        const newEl = document.createElement('h2');

        newEl.id = 'restaurant-name';
        h1Element.parentNode.replaceChild(newEl, h1Element);

        //apply the approprite url for the skiplink
        document.querySelector('.skip-map').firstElementChild.href = '#reviews-container';
    }

    /* 
    things to fix in index.html after running Lighthouse

    1. Image elements do not have [alt] attributes
        >> I edited restaruant.json (added "photo_description" to all restaurants), added a function in dbhelper.js line159 & main.js line164
    2. Form elements do not have associated labels
        >> solution in this documetn
    3. Background and foreground colors do not have a sufficient contrast ratio
        >> all fixes done in styles_fix.css
    4. <html> element does not have a [lang] attribute
        >> solution in this documetn

    things to on restaurant.html fix after running Lighthouse

    1. Image elements do not have [alt] attributes
        >> I edited restaruant.json (added "photo_description" to all restaurants), added a function in dbhelper.js line159 & restaurant_info.js line92  
    2. Background and foreground colors do not have a sufficient contrast ratio.
        >> all fixes done in styles_fix.css
    3. <html> element does not have a [lang] attribute
        >> fix done in this doc
    */

    // <html> element does not have a [lang] attribute 
    document.querySelector('html').setAttribute('lang','en');

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        console.log('service worker present');
        window.addEventListener('load', function() {
            navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() {console.log('ServiceWorker registration successful');})
            .catch(function(error) {console.log('ServiceWorker registration failed: ', error);});
        });
    }
});