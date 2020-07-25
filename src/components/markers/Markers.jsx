import React, { useState, useEffect } from 'react';
import { Marker } from 'react-map-gl';

import CircleContainer from '../circle/Circle.container';

import './Markers.scss';

const Markers = ({ data, error, category }) => {
    const [mappedMarkersData, setMappedData] = useState([])

    useEffect(() => {
        const filterOutNonCases = (array, query) => array.filter(el => el[query] > 0);

        const mapToQueries = (array, query) => array.map(el => el[query]);
        
        const calculateSize = (current, max) => (
            current > 0.6 * max ? 160 :
            current > 0.2 * max ? 120 :
            current > 0.1 * max ? 100 :
            current > 0.01 * max ? 80 :
            current > 10000 ? 60 : 20
            );

        const mapData = (data, query) => {
            const countriesWithCases = filterOutNonCases(data.stats.breakdowns, query);
            const queriesArray = mapToQueries(countriesWithCases, query);
            const max = Math.max(...queriesArray);

            return countriesWithCases.map(country => {
                country.size = calculateSize(country[query], max);
                return country;
            });
        }


        if (error) {
            alert('Sorry, we are not able to get that data')
        }
        else if (data) {
            setMappedData(mapData(data, category));
        }
    }, [data, category, setMappedData, error])


    return !!mappedMarkersData.length && 
    mappedMarkersData.filter(({ location: { lat, long }}) => lat && long)
    .map(country => {
        const { location: { lat, long, countryOrRegion } } = country;

        return (
            <div 
            className='marker'
            key={countryOrRegion}
            >
                <Marker 
                latitude={lat}
                longitude={long}
                >  
                    <CircleContainer 
                    country={country}
                    category={category}
                    />
                </Marker>
            </div>
        )
    })
}

export default React.memo(Markers);


