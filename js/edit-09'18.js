/*jshint esversion: 6 */

window.addEventListener('load', function() {

    // move the control container up in the DOM
    const controlContainer = document.querySelector('.leaflet-control-container');
    document.getElementById('map').insertAdjacentElement('afterbegin', controlContainer);
    
    // move zoom control to right
    const zoomControl = document.querySelector('.leaflet-control-zoom');
    const leafletTopRight = document.querySelector('.leaflet-top.leaflet-right');
    leafletTopRight.appendChild(zoomControl);

    // create skipMapElement
    const skipMapElement = '<div class="leaflet-bar leaflet-control skip-map"><a class="leaflet-control-zoom-in" href="#neighborhoods-select" title="Zoom in" role="button" aria-label="Zoom in">skip the map</a></div>';
    
    // add skipMapElement to map
    const leafletTopLeft = document.querySelector('.leaflet-top.leaflet-left');
    leafletTopLeft.innerHTML = skipMapElement;

    // console.log(something);
});