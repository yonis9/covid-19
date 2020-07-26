import React, { useContext } from 'react';
import { Popup } from 'react-map-gl';

import { AppContext } from '../../providers/app/App.provider';

import './InfoCard.scss'

const InfoCard = ({ country }) => { 
  const { route } = useContext(AppContext)
    const { 
        location: { countryOrRegion,isoCode },
        newDeaths,
        newlyConfirmedCases,
        newlyRecoveredCases,
        totalConfirmedCases,
        totalDeaths,
        totalRecoveredCases
     } = country;
     
    return (
       !route &&
        <Popup
        className='popup'
        latitude={country.location.lat}
        longitude={country.location.long}
        closeButton={false}
        dynamicPosition={true}
        offsetTop={250}
        >
            <div className='info-card'>
                <img src={`https://www.countryflags.io/${isoCode}/flat/64.png`} alt='flag' />
                <div className='country-name'>{countryOrRegion}</div>
                <div className='description'>
                    <div className='category-container'>
                        <span>Confirmed Cases: {totalConfirmedCases.toLocaleString()}</span>
                        <span className='new-info confirmed'>+{newlyConfirmedCases.toLocaleString()}</span>
                    </div>
                    <div className='category-container'>
                        <span>Deaths: {totalDeaths.toLocaleString()}</span>
                        <span className='new-info deaths'>+{newDeaths.toLocaleString()}</span>
                    </div>
                    <div className='category-container'>
                        <span>Recovered: {totalRecoveredCases.toLocaleString()}</span>
                        <span className='new-info recoverd'>+{newlyRecoveredCases.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </Popup>
    )
}

export default InfoCard;