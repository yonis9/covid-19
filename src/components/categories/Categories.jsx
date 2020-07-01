import React, { useContext } from 'react';

import { MapContext } from '../../providers/map/Map.provider';

import './Categories.scss'

const Categories = () => {
    const { category, setCategory } = useContext(MapContext);

    return (
        <div className='categories-container'>
            <p>Show By:</p>
            <div className='buttons'>
                <button 
                className={`${category === 'totalConfirmedCases' && 'open'}`}
                value='totalConfirmedCases'
                onClick={(e) => setCategory(e.target.value)}
                >Confirmed</button>
                <button
                className={`${category === 'totalDeaths' && 'open'}`}
                value='totalDeaths'
                onClick={(e) => setCategory(e.target.value)}
                >Deaths</button> 
                <button 
                className={`${category === 'totalRecoveredCases' && 'open'}`}
                value='totalRecoveredCases'
                onClick={(e) => setCategory(e.target.value)}
                >Recovered</button> 
            </div>
        </div>
    )
}

export default Categories;