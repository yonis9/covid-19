import React, { useContext } from 'react';
import  CanvasJSReact from '../../assets/canvasjs.react';

import { AppContext } from '../../providers/app/App.provider';
import CloseButton from '../close-button/CloseButton';

import './History.scss';
import { useEffect } from 'react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const dataPoints = [];

const History = () => {
    const { route } = useContext(AppContext);
    const { data: {stats: { history } } } = useContext(AppContext);

    const options = {
        backgroundColor: '#242424',
        theme: "dark1",
        animationEnabled: true,
        title: {
            text: "Confiremd Cases Per Day",
            fontColor: '#b6b6b6',
            fontFamily: 'Oswald',
        },
        axisY: {
            title: "Confirmed cases",
            titleFontColor: '#b6b6b6',
            titleFontFamily: 'Oswald',
            includeZero: false,
            gridThickness: 0.5,
            gridColor: '#161616',
            lineColor: '#161616',
            labelFontColor: '#b6b6b6'
        },
        axisX: {
            includeZero: false,
            gridThickness: 0.5,
            gridColor: '#161616',
            lineColor: '#161616',
            labelFontColor: '#b6b6b6'
        },
        data: [{
            color: "#ef8828",
            fillOpacity: .3, 
            type: "area",
            xValueFormatString: "DD MMM YYYY",
            yValueFormatString: "#,###",
            dataPoints: dataPoints
        }]
    }


    useEffect(() => {
        if (history.length) {
            let total = 0;
            for (let day of history) {
                dataPoints.push({
					x: new Date(day.date),
					y: day.confirmed-total
                })
                total=day.confirmed;
            }
        }
    },[history])


    return (
        <div className={`history ${route === 'history' && 'active'}`}>
            <CloseButton />
            <CanvasJSChart options = {options} 
				//  onRef={ref => this.chart = ref}
			/>
        </div>
    )
}

export default History;