import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
    return (
        <div style={{ height: '80vh', width: '80%', margin: '0 auto' }}>
        <GoogleMapReact
            // bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
            defaultCenter={center}
            defaultZoom={zoom}
        ></GoogleMapReact>
        </div>
  );
};

export default Map;
