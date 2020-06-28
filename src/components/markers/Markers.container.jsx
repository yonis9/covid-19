import React, { useContext} from 'react';

import { AppContext } from '../../providers/app/App.provider';
import Markers from'./Markers';

const MarkersContainer = () => {
    const { 
        data,
        setCountry,
        category 
    } = useContext(AppContext);

    return (
        <Markers
         data={data}
         setCountry={setCountry}
         category={category}
        />
    )
}

export default MarkersContainer;