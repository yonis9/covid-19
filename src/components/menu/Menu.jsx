import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../providers/app/App.provider';
import { MenuContext } from '../../providers/menu/Menu.provider';

import Categories from '../categories/Categories';
import Search from '../search/Search';
import Navigation from '../navigation/Navigation';

import './Menu.scss';


const Menu = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
    const { route } = useContext(AppContext);

   useEffect(() => {
       if (route) {
        setIsMenuOpen(false);
       }
   }, [route])

    return (
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <Categories />
            <Search />
            <Navigation />
            <p className='footer'>Made by Yoni Sisso</p>
        </div>
    )
}


export default Menu;
