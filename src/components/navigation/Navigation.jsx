import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';
import { MenuContext } from '../../providers/menu/Menu.provider';

import './Navigation.scss';

const Navigation = () => {
    const { category, setCategory, setViewport } = useContext(AppContext);
    const { isMenuOpen, searchResults, onSearchChange } = useContext(MenuContext);

    return (
        <div className={`navigation ${isMenuOpen ? 'open' : ''}`}>
            <div className='show-by'>
                <p>Show by:</p>
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
            <div className='search-container'>
                <input type='search' placeholder='Search Countries' onChange={onSearchChange}/>
                <div className='search-results'>
                    {
                        searchResults.map(result => 
                        <div 
                        className='result'
                        key={result.location.countryOrRegion}
                        onClick={() =>setViewport({
                            width: '100vw',
                            height: '100vh',
                            latitude: result.location.lat,
                            longitude: result.location.long,
                            zoom: 3
                        })}
                        >
                            {result.location.countryOrRegion}
                        </div>
                        )
                    }
                </div>
            </div>
            <p className='footer'>Made by Yoni Sisso</p>
        </div>
    )
}


export default Navigation;
