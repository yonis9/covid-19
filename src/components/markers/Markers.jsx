import React, { useState, useEffect } from 'react';
import { Marker } from 'react-map-gl';

import CircleContainer from '../circle/Circle.container';

import './Markers.scss';

const Markers = ({ data, error, category }) => {
    const [mappedMarkersData, setMappedData] = useState([])

    useEffect(() => {
        if (error) {
            alert('Sorry, we are not able to get that data')
        }
        else if (data) {
            setMappedData(mapData(data, category));
        }
    }, [data, category, setMappedData, error])

    const mapData = (data, query) => {
        const filteredData = data.stats.breakdowns.filter(el => el[query] > 0);
        const countedQueries = filteredData.map(el => el[query]);

        const min = Math.min(...countedQueries);
        const max = Math.max(...countedQueries);
        const diff = max-min;

        return filteredData.map(el => {
            
            el.size = el[query] > 0.6 * diff ? 160 :
                      el[query] > 0.2 * diff ? 120 :
                      el[query] > 0.1 * diff ? 100 :
                      el[query] > 0.01 * diff ? 80 :
                      el[query] > 10000 ? 60 : 20;
            return el;
        })
    }

    console.log('render markers')
    return !!mappedMarkersData.length && 
    mappedMarkersData.filter(({ location: { lat, long }}) => lat && long)
    .map(country => {
        const { location: { lat, long, countryOrRegion }, size } = country;

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
                    size={size}
                    category={category}
                    />
                </Marker>
            </div>
        )
    })
}

export default React.memo(Markers);


