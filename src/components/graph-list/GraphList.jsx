import React from 'react';

import Graph from '../graph/Graph';


const graphCategories = [
    {
        title: 'Confirmed Cases',
        pointer: 'confirmed',
        color: "#ef8828"
    },
    {
        title: 'Deaths',
        pointer: 'deaths',
        color: "#ed2842"
    },
    {
        title: 'Recovered Cases',
        pointer: 'recovered',
        color: "#28ef64"
    }
]


const GraphList = ({ history }) => (
    graphCategories.map(({ pointer, title, color }) => 
    <Graph 
    key={pointer}
    title={title}
    pointer={pointer}
    color={color}
    history={history} />
    )
)

export default GraphList;
    
