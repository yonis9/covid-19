import React, { useState, useEffect} from 'react';

import  CanvasJSReact from '../../assets/canvasjs.react';

import './Graph.scss';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Graph = ({ title, color, pointer, history }) => {
    console.log('render graph')
    const [isScaleTotal, setIsScaleTotal] = useState(false);
    const [totalDataPoints, setTotalDataPoints] = useState([]);
    const [dailydDataPoints, setDailydDataPoints] = useState([]);

    const fontOptions = {
            fontColor: '#b6b6b6',
            fontFamily: 'Oswald',
    }

    const axisOptions = {
            includeZero: false,
            gridThickness: 0.5,
            gridColor: '#161616',
            lineColor: '#161616',
            labelFontColor: '#b6b6b6'
    }

    const options = {
        backgroundColor: '#242424',
        theme: "dark1",
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            text: `${isScaleTotal ? 'Total': 'Daily'} ${title}`,
            ...fontOptions
        },
        axisY: {
            title: title,
            ...fontOptions,
            ...axisOptions
        },
        axisX: axisOptions,
        data: [{
            color: color,
            fillOpacity: .3, 
            type: "area",
            xValueFormatString: "DD MMM YYYY",
            yValueFormatString: "#,###",
            dataPoints: isScaleTotal ? totalDataPoints : dailydDataPoints
        }]
    }


    useEffect(() => {
        if (history.length) {
            const newDailyDataPoints = [];
            const newTotalDataPoints = [];
            let total = 0;

            for (let day of history) {
                newTotalDataPoints.push({
                    x: new Date(day.date),
                    y: day[pointer]
                })
                newDailyDataPoints.push({
                    x: new Date(day.date),
                    y: day[pointer]-total
                })
                total=day[pointer];
            }
            setTotalDataPoints(newTotalDataPoints);
            setDailydDataPoints(newDailyDataPoints);
        }
    },[history, pointer])


    return (
        <div className='graph'>
            <button className='switch-graph-button' onClick={() =>setIsScaleTotal(!isScaleTotal)}>
                Show {isScaleTotal ? 'Daily': 'Total'} Graph
            </button>
            <CanvasJSChart options={options} 
				//  onRef={ref => this.chart = ref}
			/>
        </div>
    )
}

export default  React.memo(Graph);