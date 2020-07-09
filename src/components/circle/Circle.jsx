import React from 'react';

import './Circle.scss';

const Circle = ({ size, category, country, setRoute, handleCountryChange }) => {
    
    const onCircleClick = () => {
        setRoute('country');
        handleCountryChange(country);
    }

    return (
    <svg 
    className={`${category} circle`}
    height={size}
    width={size}
    onMouseEnter={() => handleCountryChange(country)} 
    onMouseLeave={() => handleCountryChange(null)} 
    onClick={onCircleClick}
    >
        <circle cx={size/2} cy={size/2} r={size/2} strokeWidth="4" />
    </svg>
   
)}

export default React.memo(Circle);