import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';
import CloseButton from '../close-button/CloseButton';

import './Stats.scss';

const Stats = () => {
    const { route, setRoute, data } = useContext(AppContext);
    const {
        newDeaths,
        newlyConfirmedCases,
        newlyRecoveredCases,
        totalConfirmedCases,
        totalDeaths,
        totalRecoveredCases
    } = data.stats;
console.log('statssss')

    return (
        <div className={`stats-container ${route === 'stats' && 'active'}`}>
            <CloseButton />
            <div className='stats-grid'>
                <div className='stat-field'>
                    <div className='stat-name'>New Confirmed Cases</div>
                    <div className='stat-value'>{newlyConfirmedCases}</div>
                </div>
                <div className='stat-field'>
                    <div className='stat-name'>New Deaths</div>
                    <div className='stat-value'>{newDeaths}</div>
                </div>
                <div className='stat-field'>
                    <div className='stat-name'>New Recovered Cases</div>
                    <div className='stat-value'>{newlyRecoveredCases}</div>
                </div>
                <div className='stat-field'>
                    <div className='stat-name'>Total Confirmed Cases</div>
                    <div className='stat-value'>{totalConfirmedCases}</div>
                </div>
                <div className='stat-field'>
                    <div className='stat-name'>Total Deaths</div>
                    <div className='stat-value'>{totalDeaths}</div>
                </div>
                <div className='stat-field'>
                    <div className='stat-name'>Total Recovered Cases</div>
                    <div className='stat-value'>{totalRecoveredCases}</div>
                </div>
                <div className='stat-field'>
                    <div className='stat-name'>Death Precentage</div>
                    <div className='stat-value'>{Math.round(totalDeaths/totalConfirmedCases*10000)/100}%</div>
                </div>
                <div className='stat-field'>
                    <div className='stat-name'>Recovered Precentage</div>
                    <div className='stat-value'>{Math.round(totalRecoveredCases/totalConfirmedCases*10000)/100}%</div>
                </div>
            </div>
        </div>
    )
}

export default Stats;