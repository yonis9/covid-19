import React from 'react';
import { useContext, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

import { MapContext } from '../../providers/map/Map.provider';
import MarkersContainer from '../markers/Markers.container';
import InfoCard from '../info-card/InfoCard';

import './Map.scss';

const Map = () => {
  const { viewport, setViewport, country } = useContext(MapContext);

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        ...viewport,
        width: '100vw',
        height: '100vh'
      })};

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });


  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/mapbox/dark-v10'
      mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
      onViewportChange={nextViewport => setViewport({
        ...nextViewport,
        width: '100vw',
        height: '100vh'
      })}
    >  
      <MarkersContainer />
      {country && <InfoCard country={country} />} 
    </ReactMapGL>
  );
}


export default Map;
