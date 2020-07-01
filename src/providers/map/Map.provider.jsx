import React, { createContext,useEffect, useState} from 'react';

export const MapContext = createContext({
    viewPort: {
        width: '100vw',
        height: '100vh',
        latitude: 34,
        longitude: 20,
        zoom: 1.5
      },
      category: 'totalConfirmedCases',
      country: null,
      setViewport: () =>{},
      setCategory: () => {},
      setIsMenuOpen: () => {},
      setCountry: () => {}
})


const MapProvider = ({ children }) => {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 34,
        longitude: 20,
        zoom: 1.5
      });

    const [category, setCategory] = useState('totalConfirmedCases');
    const [country, setCountry] = useState(null);

    return (
        <MapContext.Provider value={{
            viewport,
            category,
            country,
            setViewport,
            setCategory,
            setCountry
        }}>
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider;