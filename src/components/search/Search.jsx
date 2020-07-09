import React, { useContext, useState } from 'react';
import { FlyToInterpolator } from 'react-map-gl';
import * as d3 from 'd3-ease';


import { AppContext } from '../../providers/app/App.provider';
import { MapContext } from '../../providers/map/Map.provider';
import { MenuContext } from '../../providers/menu/Menu.provider';

import './Search.scss'

const Search = () => {
    const [searchField, setSearchField] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const { data, setRoute } = useContext(AppContext);
    const { setViewport, viewPort } = useContext(MapContext);
    const { setIsMenuOpen } = useContext(MenuContext);

    const onSearchChange = (event) => {
        const { value } = event.target;
        setSearchField(value)
        if (!value) {
           setSearchResults([]) 
        } else {
            setSearchResults(
                data.stats.breakdowns.filter( e => 
                    e.location.countryOrRegion.toLowerCase().includes(value.toLowerCase())
                    )
            )
        }
     }


    const onCountryClick = (latitude, longitude) => {
        setViewport({
            ...viewPort,
            latitude,
            longitude,
            zoom: 4,
            transitionDuration: 2000,
            transitionInterpolator: new FlyToInterpolator(),
            transitionEasing: d3.easeCubic 
        })
        setSearchField('');
        setSearchResults([]);
        setRoute('');
        setIsMenuOpen(false);

    }

    return (
        <div className='search-container'>
            <input 
            type='search'
            value={searchField}
            placeholder='Search Countries'
            onChange={onSearchChange}
            />
            <div className='search-results'>
                {
                    searchResults.map(result => 
                    <div 
                    className='result'
                    key={result.location.countryOrRegion}
                    onClick={() => onCountryClick(result.location.lat, result.location.long)}
                    >
                        {result.location.countryOrRegion}
                    </div>
                    )
                }
            </div>
        </div>
    )
}


export default Search;