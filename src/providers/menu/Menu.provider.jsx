import React, { createContext, useState } from 'react';
import { useContext } from 'react';

import { AppContext } from '../app/App.provider'

export const MenuContext = createContext({
    isMenuOpen: false,
    searchResults: [],
    onSearchChnage: () => {},
    setIsMenuOpen: () => {}
});





const MenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const { data } = useContext(AppContext);

    const onSearchChange = (event) => {
        if (!event.target.value) {
           setSearchResults([]) 
        } else {
            setSearchResults(
                data.filter( e => 
                    e.location.countryOrRegion.toLowerCase().includes(event.target.value.toLowerCase())
                    )
            )
        }
     }


    return (
        <MenuContext.Provider value={{isMenuOpen, setIsMenuOpen, searchResults, onSearchChange }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider;
