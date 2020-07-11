import React, { createContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';

export const AppContext = createContext({
    route: '',
    setRoute: () => {},
    data: null,
    error: false
})

const AppProvider = ({ children }) => {
    const [route, setRoute] = useState('');
    const { data, error } = useFetch('https://api.smartable.ai/coronavirus/stats/global');

    return (
        <AppContext.Provider value={{route, setRoute, data, error}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider;