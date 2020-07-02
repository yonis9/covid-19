import React, { useContext, useState } from 'react';

import { AppContext } from '../../providers/app/App.provider';
import { MapContext } from '../../providers/map/Map.provider';

import './Search.scss'

const Search = () => {
    const [searchField, setSearchField] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const { data } = useContext(AppContext);
    const { setViewport } = useContext(MapContext);

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
            width: '100vw',
            height: '100vh',
            zoom: 3,
            latitude,
            longitude
        })
        setSearchField('');
        setSearchResults([]);
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