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
    const skipMapElement = '<div class="leaflet-bar leaflet-control skip-map"><a class="leaflet-control-zoom-in" href="#neighborhoods-select" title="Zoom in" role="button" aria-label="Zoom in">press enter to skip the map</a></div>';
    
    // add skipMapElement to map
    const leafletTopLeft = document.querySelector('.leaflet-top.leaflet-left');
    leafletTopLeft.innerHTML = skipMapElement;

    console.log(something);

    //things to fix after running Lighthouse

    /* Elements Use Attributes Correctly
    These are opportunities to improve the configuration of your HTML elements.
    1
    Image elements do not have [alt] attributes
    Elements Describe Contents Well
    These are opportunities to make your content easier to understand for a user of assistive technology, like a screen reader.
    1
    Form elements do not have associated labels
    Color Contrast Is Satisfactory
    These are opportunities to improve the legibility of your content.
    1
    Background and foreground colors do not have a sufficient contrast ratio.

    >> Page Specifies Valid Language
    <html> element does not have a [lang] attribute */
    document.querySelector('html').setAttribute('lang','en');
    document.querySelector('#neighborhoods-select').setAttribute('aria-label','All Neighborhoods');
});