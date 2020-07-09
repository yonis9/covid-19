import React from 'react';

import Pie from '../pie/Pie';

import './PieList.scss';

    const PIE_CATEGORIES = [
        {
            title: 'Total Confrimed Cases',
            query: 'totalConfirmedCases'

        },
        {
            title: 'Active Cases',
            query: 'activeCases'

        },
        {
            title: 'Total Deaths',
            query: 'totalDeaths'

        }
    ]


const PieList = ({ stats }) => (

    PIE_CATEGORIES.map(c => (
        <Pie
        key={c.query}
        breakdowns={stats.breakdowns}
        title={c.title}
        query={c.query}
        total={stats[c.query]}
        />
    ))
)


export default PieList;