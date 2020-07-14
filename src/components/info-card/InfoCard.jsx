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
                        <span>Confirmed Cases: {totalConfirmedCases}</span>
                        <span className='new-info confirmed'>+{newlyConfirmedCases}</span>
                    </div>
                    <div className='category-container'>
                        <span>Deaths: {totalDeaths}</span>
                        <span className='new-info deaths'>+{newDeaths}</span>
                    </div>
                    <div className='category-container'>
                        <span>Recovered: {totalRecoveredCases}</span>
                        <span className='new-info recoverd'>+{newlyRecoveredCases}</span>
                    </div>
                </div>
            </div>
        </Popup>
    )
}

export default InfoCard;