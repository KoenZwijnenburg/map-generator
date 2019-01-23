import OSM from 'ol/source/OSM';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import GPX from 'ol/format/GPX.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import VectorSource from 'ol/source/Vector.js';
import {Circle as CircleStyle, Fill, Stroke, Style, Icon} from 'ol/style.js';
import {fromLonLat} from 'ol/proj';
import {MAP} from './map';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';

var style = {
    'LineString': new Style({
      stroke: new Stroke({
        color: 'red',
        width: 3
      })
    }),
    'MultiLineString': new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 3
      })
    }),
    'Point':  new Style({
      image: new Icon({
        anchor: [1, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://openlayers.org/en/latest/examples/data/icon.png'
      })
    })
  };




const maps =  [];
const markers = []

for(let map of MAP.maps){

  markers.push(
    new Feature({
      type: 'icon',
      geometry: new Point(fromLonLat(map.marker)),
      details: map.details
    })
  )

  maps.push(
    new VectorLayer({
      source: new VectorSource({
        url: map.gpx,
        format: new GPX()
      }),
      style: function(feature) {
        return style[feature.getGeometry().getType()];
      }
    })
  )
}

var vectorLayer = new VectorLayer({
  source: new VectorSource({
    features: markers
  }),
  style: function(feature) {
    return style[feature.getGeometry().getType()];
  }
});

let map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    vectorLayer,
    ...maps
  ],
  view: new View({
    center: fromLonLat([MAP.longtitude, MAP.lattitude]),
    zoom: MAP.zoom
  }),
});

var title = document.getElementById('route-title');
var description = document.getElementById('route-description');
var img = document.getElementById('route-img');
var button = document.getElementById('route-button');
var info = document.getElementById('route-details');

map.on('singleclick', function(evt) {
  evt.preventDefault();
  evt.stopPropagation();

  var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
      //you can add a condition on layer to restrict the listener
      return feature;
      });
  if (feature) {
    info.style.display = 'block';
    var details = feature.values_.details;
    title.innerHTML = details.title;
    description.innerHTML = details.description;
    img.src = details.img;
    button.href = details.url;
  }
});

