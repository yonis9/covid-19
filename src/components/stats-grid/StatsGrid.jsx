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

    const addCommas = number => {
            const numberArray = number.toString().split('');
            let count = 1;
            for (let i=numberArray.length-1; i>0; i--) {
                if (count%3 === 0) numberArray[i] = `,${numberArray[i]}`;
                count++;
            }
            return numberArray.join('')
    }

    return (
        <div className='stats-grid'>
            <div className='stat-field'>
                <div className='stat-name'>Total Confirmed Cases</div>
                <div className='stat-value'>{addCommas(totalConfirmedCases)}</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>New Confirmed Cases</div>
                <div className='stat-value'>{addCommas(newlyConfirmedCases)}</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>Total Deaths</div>
                <div className='stat-value'>{addCommas(totalDeaths)}</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>New Deaths</div>
                <div className='stat-value'>{addCommas(newDeaths)}</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>Total Recovered Cases</div>
                <div className='stat-value'>{addCommas(totalRecoveredCases)}</div>
            </div>
            <div className='stat-field'>
                <div className='stat-name'>New Recovered Cases</div>
                <div className='stat-value'>{addCommas(newlyRecoveredCases)}</div>
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
                <div className='stat-value'>{addCommas(activeCases)}</div>
            </div>
        </div>
    )
} 

export default React.memo(StatsGrid);