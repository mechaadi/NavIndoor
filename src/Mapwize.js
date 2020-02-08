import React, { Component } from 'react'

// import OlMap from "ol/Map";
// import OlView from "ol/View";
// import OlLayerTile from "ol/layer/Tile";
// import OlSourceOSM from "ol/source/OSM";
// import Feature from 'ol/Feature';
import 'ol/ol.css';
// import  Point from "ol/geom/Point";

// import {fromLonLat} from 'ol/proj';


// Start Openlayers imports
import Geolocation from 'ol/Geolocation';

import { 
  Map,
  View
} from 'ol'
import {
  GeoJSON,
  XYZ
} from 'ol/format'
import {
  Tile as TileLayer,
  Vector as VectorLayer
} from 'ol/layer'
import {
  Vector as VectorSource,
  OSM as OSMSource,
  XYZ as XYZSource,
  TileWMS as TileWMSSource
} from 'ol/source'
import {
  Select as SelectInteraction,
  defaults as DefaultInteractions
} from 'ol/interaction'
import { 
  Attribution,
  ScaleLine,
  ZoomSlider,
  Zoom,
  Rotate,
  MousePosition,
  OverviewMap,
  defaults as DefaultControls
} from 'ol/control'
import {
  Style,
  Fill as FillStyle,
  RegularShape as RegularShapeStyle,
  Stroke as StrokeStyle
} from 'ol/style'

import { 
  Projection,
  get as getProjection
} from 'ol/proj'

import {fromLonLat} from 'ol/proj';



var london = fromLonLat([77.4820, 28.4728]);




class Mapwize extends React.Component {
  constructor(props) {
      super(props)
      this.updateDimensions = this.updateDimensions.bind(this)
      this.state={
        lat: ''
      }

      
  }
  updateDimensions(){
      const h = window.innerWidth >= 992 ? window.innerHeight : window.innerHeight
      this.setState({height: h})
  }
  componentWillMount(){
      window.addEventListener('resize', this.updateDimensions)
      this.updateDimensions()
  }
  componentDidMount(){

    var view = new View({
      center: london,
      projection: 'EPSG:3857',
      zoom: 18,

    });

    let that = this;

      // Create an Openlayer Map instance with two tile layers
      const map = new Map({
          //  Display the map in the div with the id of map
          target: 'map',
          layers: [
              new TileLayer({
                  source: new XYZSource({
                      url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                      projection: 'EPSG:3857'
                  })
              }),
              new TileLayer({
                  source: new TileWMSSource({
                      url: 'https://ahocevar.com/geoserver/wms',
                      params: {
                          layers: 'topp:states',
                          'TILED': true,
                      },
                      projection: 'EPSG:4326'
                  }),
                  name: 'India'
              }),
          ],
          // Add in the following map controls
          controls: DefaultControls().extend([
              new ZoomSlider(),
              new MousePosition(),
              new ScaleLine(),
              new OverviewMap()
          ]),
          // Render the tile layers in a map view with a Mercator projection
          view:view
      })

      var geolocation = new Geolocation({
        // enableHighAccuracy must be set to true to have the heading value.
        trackingOptions: {
          enableHighAccuracy: true
        },
        tracking: true,
        projection: view.getProjection()
      });


      geolocation.on('change', function() {
        console.log('haha')
        console.log(geolocation.position_)
        that.setState({lat: geolocation.position_})
     
      });

    
  }
  componentWillUnmount(){
      window.removeEventListener('resize', this.updateDimensions)
  }
  render(){
      const style = {
          width: '100%',
          height:this.state.height,
          backgroundColor: '#cccccc',
      }
      return (
        <div>
         <div>
      <p>HELLO {this.state.lat}</p>
         </div>
 <div id='map' style={style} > 
 </div>
</div>
        
                 

                  
           
      )
  }
}
export default Mapwize;
