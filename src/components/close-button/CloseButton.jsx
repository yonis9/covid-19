import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';

import './CloseButton.scss';

const CloseButton = () => {
    const { setRoute } = useContext(AppContext);

    return (
        <div 
        className='close-button' 
        onClick={() => setRoute('')}
        >X</div>
    )
}

export default CloseButton;