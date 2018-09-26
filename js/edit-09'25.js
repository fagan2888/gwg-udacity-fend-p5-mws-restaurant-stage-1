/*jshint esversion: 6 */

window.addEventListener('load', function() {

    //things to fix after running Lighthouse

    /*
    1. Image elements do not have [alt] attributes
    
    2. Background and foreground colors do not have a sufficient contrast ratio.

    3. <html> element does not have a [lang] attribute
    */

    // adding lang attribute
    document.querySelector('html').setAttribute('lang','en');
});