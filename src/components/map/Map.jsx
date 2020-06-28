import React from 'react';
import { useContext, useEffect } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';

import { AppContext } from '../../providers/app/App.provider';
import MarkersContainer from '../markers/Markers.container';
import InfoCard from '../info-card/InfoCard';

import './Map.scss';

function Map() {
  // const [viewport, setViewport] = useState({
  //   width: '100vw',
  //   height: '100vh',
  //   latitude: 34,
  //   longitude: 20,
  //   zoom: 1.5
  // });

  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [category, setCategory] = useState('totalConfirmedCases')
  // const [country, setCountry] = useState(null);
  // const [searchResult, setSearchResult] = useState([])

  const { viewport,setViewport, country } = useContext(AppContext)



  useEffect(() => {
    const handleResize = () => setViewport({
        width: '100vw',
        height: '100vh',
        latitude: 34,
        longitude: 20,
        zoom: 1.5
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
           offsetTop={100}
           offsetLeft={100}
           >
               <InfoCard country={country} />
           </Popup>
       )

       
   } 
    </ReactMapGL>
  );
}


export default Map;
