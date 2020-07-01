import React from 'react';

import './InfoCard.scss'

const InfoCard = ({ country }) => {
    console.log(country)
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
    )
}

export default InfoCard;