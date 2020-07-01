import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext({
    route: '',
    setRoute: () => {},
    data: null,
    setDate: () => {}
})

const AppProvider = ({ children }) => {
    const [route, setRoute] = useState('');
    const [data, setData] = useState(null);


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
            setData(result);
        }
        fetchData()
    }, [])

    return (
        <AppContext.Provider value={{route, setRoute, data}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider;