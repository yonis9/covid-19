import React, { createContext, useState } from 'react';

export const MenuContext = createContext({
    isMenuOpen: false
});


const MenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <MenuContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider;
