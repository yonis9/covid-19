import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';
import { MapContext } from '../../providers/map/Map.provider';

import './CloseButton.scss';

const CloseButton = ({ trigger }) => {
    const { setRoute } = useContext(AppContext);
    const { setCountry } = useContext(MapContext);

    const onButtonClick = () => {
        setRoute('');
        if (trigger === 'country') {
            setTimeout(() => setCountry(null), 300)
        }
    }
    return (
        <div 
        className='close-button' 
        onClick={onButtonClick}
        >X</div>
    )
}

export default CloseButton;