# Mobile Web Specialist Certification Course
---
Site is published at https://ivanjanko.github.io/mws-restaurant-stage-1/index.html

update 09-29-18

recomended edits after first submision:
* to add vieport meta tag
    * meta tag already present it's injected in both html files by the script_.js line 11 to 18
    ![picture alt](http://www.brightlightpictures.com/assets/images/portfolio/thethaw_header.jpg "Title is optional")
* breadcrumb element is non-semantic and so requires a aria label
    * solution in script_.js line 
* map element is non-semantic and so requires a aria role
    * solution in script_.js line 

Quick overview of changes done to the starter code:
* root files
  * index.html & restaurant.html >> a tag href attibute changed from '/' to './' and added link to script_.js
  * created service-worker.js >> for offline loading
* js folder files
  * main.js >> mapboxToken value set and a11y adjustments made from line 164 to 180
  * restaurant_info.js  >> mapboxToken value set and a11y adjustments made line 92
  * dbhelper.js  >> github linking issue resolved with line 12 and 154, a11y modification on line 158
  * created script_.js >> 95% of work is in this file and styles_.css

* data folder files
  * restaurant.json >> pictures descriptions added

* css folder files
  * created styles_.js >> 95% of work is in this file and script_.css

---