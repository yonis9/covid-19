import React, { useContext } from 'react';

import Circle from './Circle';
import { AppContext } from '../../providers/app/App.provider';
import { MapContext } from '../../providers/map/Map.provider';

const CircleContainer = ({ country, category }) => {
    const { setRoute, route} = useContext(AppContext)
    const { setCountry } = useContext(MapContext);

    const handleCountryChange = (value) => {
        if (!route) {
            setCountry(value)
        }
    }

    return (
        <Circle
        country={country}
        category={category}
        route={route}
        setRoute={setRoute}
        handleCountryChange={handleCountryChange}
        setCountry={setCountry}
         />
    )
}


export default CircleContainer;