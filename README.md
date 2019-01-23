# map-generator
Use openlayers to generate a map which can be displayed on a website.

# Get started
run `npm install` 

# Development
run `npm run serve` to edit your files and watch your changes. You can run the development env on http://localhost:2300

# publish
run `npm run build` to generate a ready to use index.html. This will be located in the dist folder. Copy and paste this html on your website. It should work out of the box.

# Add routes
The map and routes are generated in the 'src/map.js' file. Here you can update the location of the map by longtitude and lattiude and the zoom.
In the maps array you can add routes to display on the map. The marker displays and location image which you can place on the start of end of te route.
The other data is displayed on click.

# Edit maps
In `index.js` you can edit the map itself, here you edit the openlayers settings. Only edit this file if you know how openlayers work.

# Edit styling
In `index.html` the styling is made inline, in order to prevent loading of external css.



