import React from 'react';

import './Circle.scss';

const Circle = ({ size, category, country, setCountry }) => {
    console.log('circle')
    


    return (
    <svg 
    className={`${category} circle`}
    height={size}
    width={size}
    onMouseEnter={() => setCountry(country)} 
    onMouseLeave={() => setCountry(null)} 
    >
        <circle cx={size/2} cy={size/2} r={size/2} strokeWidth="4" />
    </svg>
   
)}

export default React.memo(Circle);