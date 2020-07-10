import React, { useContext } from 'react';

import { MenuContext } from '../../providers/menu/Menu.provider';

import './Backdrop.scss';

const Backdrop = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

    return (
        <div 
        className={`backdrop ${isMenuOpen && window.innerWidth < 600 && 'open'} `}
        onClick={() => setIsMenuOpen(false)}
        ></div>
    )
}

export default Backdrop;