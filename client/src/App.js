import { useState } from 'react';
import Map from 'react-map-gl/mapbox'; // If using with mapbox-gl v2:
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 15.12,
    longitude: 79.54,
    zoom: 5,
    width: '100%',
    height: '100%'
  });

  if(!process.env.REACT_APP_MAPBOX_TOKEN) {
    console.error('Mapbox access token is not set in environment variables.');
    return <div>Please add your Mapbox access token to .env file</div>;
  }
  return (
      <Map
        {...viewport}
        onMove={evt => setViewport(evt.viewport)}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        style={{width: '100vw', height: '100vh'}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      />
    );
}

export default App;
