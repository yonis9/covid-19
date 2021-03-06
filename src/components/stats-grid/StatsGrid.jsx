import React from 'react';

import './StatsGrid.scss';

const StatsGrid = ({ stats }) => {
    const {
        newDeaths,
        newlyConfirmedCases,
        newlyRecoveredCases,
        totalConfirmedCases,
        totalDeaths,
        totalRecoveredCases,
        activeCases
    } = stats;


    return (
        <div className='stats-grid'>
            <div className='stat-field'>
                <div className='stat-name'>Total Confirmed Cases</div>
                <div className='stat-value'>{totalConfirmedCases.toLocaleString()}</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>New Confirmed Cases</div>
                <div className='stat-value'>{newlyConfirmedCases.toLocaleString()}</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>Total Deaths</div>
                <div className='stat-value'>{totalDeaths.toLocaleString()}</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>New Deaths</div>
                <div className='stat-value'>{newDeaths.toLocaleString()}</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>Total Recovered Cases</div>
                <div className='stat-value'>{totalRecoveredCases.toLocaleString()}</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>New Recovered Cases</div>
                <div className='stat-value'>{newlyRecoveredCases.toLocaleString()}</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>Death Precentage</div>
                <div className='stat-value'>{Math.round(totalDeaths/totalConfirmedCases*10000)/100}%</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>Recovered Precentage</div>
                <div className='stat-value'>{Math.round(totalRecoveredCases/totalConfirmedCases*10000)/100}%</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>Active Cases</div>
                <div className='stat-value'>{activeCases.toLocaleString()}</div>
            </div>
        </div>
    )
} 

export default React.memo(StatsGrid);