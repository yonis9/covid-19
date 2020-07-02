import React, { useContext, useState } from 'react';
import  CanvasJSReact from '../../assets/canvasjs.react';

import { AppContext } from '../../providers/app/App.provider';
import CloseButton from '../close-button/CloseButton';
import Graph from '../graph/Graph';

import './History.scss';


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

const History = () => {
    const { data: {stats: { history } }, route } = useContext(AppContext); 

    return (
        <div className={`history ${route === 'history' && 'active'}`}>
            <CloseButton />
            {
                graphCategories.map(({ pointer, title, color }) => 
                     <Graph 
                     key={pointer}
                     title={title}
                     pointer={pointer}
                     color={color}
                     history={history} />
                )
            }

        </div>
    )
}

export default History;