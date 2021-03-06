import React, { useContext } from 'react';

import useFetch from '../../hooks/useFetch';
import { AppContext } from '../../providers/app/App.provider';

import CloseButton from '../close-button/CloseButton';
import Spinner from '../spinner/Spinner';
import GraphList from '../graph-list/GraphList';
import StatsGrid from '../stats-grid/StatsGrid';
import UpdatedAt from '../updated-at/UpdatedAt';

import './CountryStats.scss';

const CountryStats = ({ country }) => {
    const { route } = useContext(AppContext);
    const { data, error } = useFetch(`https://api.smartable.ai/coronavirus/stats/${country.location.isoCode}`, route, 'country')

    return (
        <div className={`country-stats ${route === 'country' && 'active'}`}>
            <CloseButton trigger='country'/>
            {   
                error ? <h2>Sorry, we are not able to get that data</h2> :
                !data ?
                <Spinner /> :
                <>
                    <UpdatedAt date={data.updatedDateTime}/>
                    <h2>{country.location.countryOrRegion}</h2>
                    <img src={`https://www.countryflags.io/${country.location.isoCode}/flat/64.png`} alt='flag' />
                    <StatsGrid stats={country}/>
                    <GraphList history={data.stats.history}/>
                </>
            }
        </div>
    )
}

export default React.memo(CountryStats);