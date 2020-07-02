import React from 'react';
import { useContext, useEffect } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';

import { MapContext } from '../../providers/map/Map.provider';
import MarkersContainer from '../markers/Markers.container';
import InfoCard from '../info-card/InfoCard';

import './Map.scss';

function Map() {

  const { viewport,setViewport, country } = useContext(MapContext)



  useEffect(() => {
    const handleResize = () => setViewport({
        ...viewport,
        width: '100vw',
        height: '100vh'
      });

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });


  console.log('render map')
  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/mapbox/dark-v10'
      mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >  
    <MarkersContainer />
    {
       country && (
           <Popup
           className='popup'
           latitude={country.location.lat}
           longitude={country.location.long}
           closeButton={false}
           dynamicPosition={true}
           offsetTop={250}
           >
               <InfoCard country={country} />
           </Popup>
       )

       
   } 
    </ReactMapGL>
  );
}


export default Map;
