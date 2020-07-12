import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
   }, [route, setIsMenuOpen])

    return (
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <Categories />
            <Search />
            <Navigation />
            <div className='footer'>
                <p>Made by Yoni Sisso </p>
                <a href='https://github.com/yonis9' target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon className='icon' icon={faGithub} size='2x'/>
                </a>
            </div>
        </div>
    )
}


export default Menu;
