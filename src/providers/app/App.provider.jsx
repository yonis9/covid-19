import React, { createContext,useEffect, useState} from 'react';

export const AppContext = createContext({
    viewPort: {
        width: '100vw',
        height: '100vh',
        latitude: 34,
        longitude: 20,
        zoom: 1.5
      },
      isMenuOpen: false,
      category: 'totalConfirmedCases',
      country: null,
      data: [],
      setViewport: () =>{},
      setCategory: () => {},
      setIsMenuOpen: () => {},
      setCountry: () => {},
      setData: () => {}

})


const AppProvider = ({ children }) => {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 34,
        longitude: 20,
        zoom: 1.5
      });

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [category, setCategory] = useState('totalConfirmedCases');
    const [country, setCountry] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('fetch')
        const fetchData = async() => {
            const requestOptions = {
                headers: {
                    'Subscription-Key': process.env.REACT_APP_KEY
                }
            };
            
            const response = await fetch("https://api.smartable.ai/coronavirus/stats/global", requestOptions);
            const result = await response.json();
            console.log(result)
            setData(result.stats.breakdowns);
        }
        fetchData()
    }, [])
    

    return (
        <AppContext.Provider value={{
            viewport,
            isMenuOpen,
            category,
            country,
            data,
            setViewport,
            setCategory,
            setIsMenuOpen,
            setCountry,
            setData,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;