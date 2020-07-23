import React, { useState, useEffect} from 'react';

import  CanvasJSReact from '../../assets/canvasjs.react';

import './Graph.scss';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Graph = ({ title, color, pointer, history }) => {
    const [isScaleTotal, setIsScaleTotal] = useState(false);
    const [graphData, setGraphData] = useState({ daily: [], total: [] });


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
            dataPoints: isScaleTotal ? graphData.total : graphData.daily
        }]
    }


    useEffect(() => {
            // const daily = [];
            // const total = [];
            // let totalCount = 0;

            const { daily, total } = history.reduce(({ daily, total, totalCount }, day) => {
                total.push({
                    x: new Date(day.date),
                    y: day[pointer]
                })
                daily.push({
                    x: new Date(day.date),
                    y: day[pointer]-totalCount
                })
                totalCount=day[pointer];

                return { daily, total, totalCount }
            },{ total: [], daily: [] })


            // for (let day of history) {
            //     total.push({
            //         x: new Date(day.date),
            //         y: day[pointer]
            //     })
            //     daily.push({
            //         x: new Date(day.date),
            //         y: day[pointer]-totalCount
            //     })
            //     totalCount=day[pointer];
            // }
            setGraphData({ daily, total })
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