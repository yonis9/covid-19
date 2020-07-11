import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';

import CloseButton from '../close-button/CloseButton';
import Spinner from '../spinner/Spinner';
import StatsGrid from '../stats-grid/StatsGrid';
import UpdatedAt from '../updated-at/UpdatedAt';
import PieList from '../pie-list/PieList';


import './Stats.scss';

const Stats = () => {
    const { route, data, error } = useContext(AppContext);
    console.log('render stats')


    return (
        <div className={`stats-container ${route === 'stats' && 'active'}`}>
            <CloseButton />
            {   
                error ? <h2>Sorry, we are not able to get that data</h2> :
                !data ?
                <Spinner /> : 
                <>
                    <UpdatedAt date={data.updatedDateTime}/>
                    <StatsGrid stats={data.stats}/>
                    <PieList stats={data.stats} />
                </>
            }
        </div>
    )
}

export default React.memo(Stats);