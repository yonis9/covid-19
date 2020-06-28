import React, { useContext } from 'react';

import { MenuContext } from '../../providers/menu/Menu.provider'

import './Hamburger.scss';

const Hamburger = () => {
    const { isMenuOpen, setIsMenuOpen} = useContext(MenuContext);
    return (
        <div className={`hamburger ${isMenuOpen ? 'open': ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div></div>
            <div></div>
            <div></div>

        </div>
    )
}

export default Hamburger;