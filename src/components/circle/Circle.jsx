import React from 'react';

import './Circle.scss';

const Circle = ({ size, category, country, setCountry, setRoute, handleCountryChange }) => {
 
    return (
    <svg 
    className={`${category} circle`}
    height={size}
    width={size}
    onMouseEnter={() => handleCountryChange(country)} 
    onMouseLeave={() => handleCountryChange(null)} 
    onClick={() =>{
        setRoute('country')}}
    >
        <circle cx={size/2} cy={size/2} r={size/2} strokeWidth="4" />
    </svg>
   
)}

export default React.memo(Circle);