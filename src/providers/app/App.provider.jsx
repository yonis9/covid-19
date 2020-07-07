import React, { createContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';

export const AppContext = createContext({
    route: '',
    setRoute: () => {},
    data: null
})

const AppProvider = ({ children }) => {
    const [route, setRoute] = useState('');
    const data = useFetch('https://api.smartable.ai/coronavirus/stats/global');

    console.log(data)

    return (
        <AppContext.Provider value={{route, setRoute, data}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider;