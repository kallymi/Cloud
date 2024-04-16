// App.js
import React from 'react';
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const mapCenter = { lat: 59.95, lng: 30.33 };
  const mapZoom = 11;

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">Google Maps</h1>
      <p className='mt-3'> Un outil extraordinaire utilisé tous les jours !</p>
      <p className="mt-3">Comment vous trouvez l'emplacement de Google Maps sur notre site web?</p>
      <Map center={mapCenter} zoom={mapZoom} />
      
    </div>
  );
}

export default App;

