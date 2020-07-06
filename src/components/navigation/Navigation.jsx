import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';

import './Navigation.scss';

const Navigation = () => {
    const { setRoute } = useContext(AppContext);
    return (
        <ul className='navigation'>
            <li onClick={() => setRoute('stats')}>Stats</li>
            <li onClick={() => setRoute('history')}>History</li>
            <li onClick={()=> setRoute('stay-safe')}>Stay Safe</li>
        </ul>
    )
}

export default Navigation;