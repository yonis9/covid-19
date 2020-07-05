import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';

import CloseButton from '../close-button/CloseButton';
import GraphList from '../graph-list/GraphList';

import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';

import './CountryStats.scss';

const CountryStats = ({country}) => {
    console.log('render country stats')
    const { route } = useContext(AppContext);
    const data = useFetch(`https://api.smartable.ai/coronavirus/stats/${country.location.isoCode}`, route, 'country')
    const {
        newDeaths,
        newlyConfirmedCases,
        newlyRecoveredCases,
        totalConfirmedCases,
        totalDeaths,
        totalRecoveredCases
    } = country;

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            console.log('mounted')
        }

        return () => {
            mounted=false;
            console.log('unmounted')
        }
    })


    console.log(data)
    return (
        <div className={`country-stats ${route === 'country' && 'active'}`}>
            <CloseButton isCountry={true}/>
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
            {
                data && <GraphList history={data.stats.history}/>
            }
        </div>
    )
}

export default React.memo(CountryStats);