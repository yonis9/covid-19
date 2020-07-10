import React, { useContext } from 'react';

import { MapContext } from '../../providers/map/Map.provider';
import { MenuContext } from '../../providers/menu/Menu.provider';

import './Categories.scss'

const Categories = () => {
    const { category, setCategory } = useContext(MapContext);
    const { setIsMenuOpen } = useContext(MenuContext)

    const onCategoryClick = (event) => {
        setCategory(event.target.value);
        if (window.innerWidth < 600) {
            setIsMenuOpen(false);
        }
    }

    return (
        <div className='categories-container'>
            <p>Show By:</p>
            <div className='buttons'>
                <button 
                className={`${category === 'totalConfirmedCases' && 'open'}`}
                value='totalConfirmedCases'
                onClick={onCategoryClick}
                >Confirmed</button>
                <button
                className={`${category === 'totalDeaths' && 'open'}`}
                value='totalDeaths'
                onClick={onCategoryClick}
                >Deaths</button> 
                <button 
                className={`${category === 'totalRecoveredCases' && 'open'}`}
                value='totalRecoveredCases'
                onClick={onCategoryClick}
                >Recovered</button> 
            </div>
        </div>
    )
}

export default Categories;