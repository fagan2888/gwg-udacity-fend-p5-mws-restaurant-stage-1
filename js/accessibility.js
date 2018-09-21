window.onload = function(){
    
    var leaflet = document.querySelectorAll('.leaflet-bottom.leaflet-right a');

    // Helper function to convert NodeLists to Arrays
    function slice(nodes) {
        return Array.prototype.slice.call(nodes);
    }
    var elements = slice(leaflet);
    for (var el of elements) {
        el.setAttribute('tabindex', '-1');
        // el.setAttribute('aria-hidden', 'true');
        // console.log(el);
    }
    var restaurantsList = slice(document.querySelectorAll('#restaurants-list h1'));
    for (var rest of restaurantsList) {
        rest.setAttribute('aria-hidden', 'false');
        // el.setAttribute('aria-hidden', 'true');
        console.log(rest);
    }
    // console.log(restaurantsList)
    
    /* 09-18-08 remove #map from tablist */
    document.getElementById('map').setAttribute('tabindex', '-1');
};