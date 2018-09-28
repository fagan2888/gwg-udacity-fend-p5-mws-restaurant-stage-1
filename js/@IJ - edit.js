/*jshint esversion: 6 */
console.log(document.querySelector('#map'));
document.addEventListener("DOMContentLoaded", function() {
    console.log(document.readyState);
    // move the control container up in the DOM
    // const controlContainer = document.querySelector('.leaflet-control-container');
    // document.getElementById('map').insertAdjacentElement('afterbegin', controlContainer);
    console.log(document.querySelector('#map'));
    // move zoom control to right
    const zoomControl = document.querySelector('.leaflet-control-zoom');
    console.log(zoomControl);
    console.log(document.querySelector('.leaflet-control-container'));
    const leafletTopRight = document.querySelector('.leaflet-top.leaflet-right');
    console.log(leafletTopRight);
    leafletTopRight.appendChild(zoomControl);

    // create skipMapElement
    var skipMapElement = '<div class="leaflet-bar leaflet-control skip-map"><a class="leaflet-control-zoom-in" href="" title="Zoom in" role="button" aria-label="Zoom in">press enter to skip the map</a></div>';

    // add skipMapElement to map
    const leafletTopLeft = document.querySelector('.leaflet-top.leaflet-left');
    leafletTopLeft.innerHTML = skipMapElement;
    
    //check on which page we are on and run code for that page
    if (document.contains(document.querySelector('.filter-options'))) {

        //apply the approprite url for the skiplink
        document.querySelector('.skip-map').firstElementChild.href = '#neighborhoods-select';

        // a11y, supply missing labels
        document.querySelector('#neighborhoods-select').setAttribute('aria-label','All Neighborhoods');
        document.querySelector('#cuisines-select').setAttribute('aria-label','All Cuisines');
    } else {

        //apply the approprite url for the skiplink
        document.querySelector('.skip-map').firstElementChild.href = '#reviews-container';
    }

    /* 
    things to fix on index.html after running Lighthouse

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
});