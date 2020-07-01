import React, { useContext} from 'react';

import { MapContext } from '../../providers/map/Map.provider';
import { AppContext } from '../../providers/app/App.provider';
import Markers from'./Markers';

const MarkersContainer = () => {
    const { setCountry, category } = useContext(MapContext);
    const { data } = useContext(AppContext);

    return (
        <Markers
         data={data}
         setCountry={setCountry}
         category={category}
        />
    )
}

export default MarkersContainer;