import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';
import { MapContext } from '../../providers/map/Map.provider';
import CloseButton from '../close-button/CloseButton';

import './CountryStats.scss';

const CountryStats = () => {
    console.log('render country stats', )
    const { route } = useContext(AppContext);
    const { country } = useContext(MapContext)
    const {
        newDeaths,
        newlyConfirmedCases,
        newlyRecoveredCases,
        totalConfirmedCases,
        totalDeaths,
        totalRecoveredCases
    } = country;

    return (
        <div className={`country-stats ${route === 'country' && 'active'}`}>
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

export default CountryStats;