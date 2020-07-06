import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';
import CloseButton from '../close-button/CloseButton';
import StatsGrid from '../stats-grid/StatsGrid';

import './Stats.scss';

const Stats = () => {
    const { route, data } = useContext(AppContext);
console.log('statssss')

    return (
        <div className={`stats-container ${route === 'stats' && 'active'}`}>
            <CloseButton />
            <StatsGrid stats={data.stats}/>
        </div>
    )
}

export default React.memo(Stats);