import React, { useState, useEffect } from 'react';

import  CanvasJSReact from '../../assets/canvasjs.react';

import './Pie.scss';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Pie = ({ breakdowns, query, total, title }) => {
    console.log('render pie')

    const [dataPoints, setDataPoints] = useState([]);

    useEffect(() => {
        const topCountries = breakdowns.sort((a,b) => 
            b[query] - a[query]
           ).slice(0,19);
        let totalTopCountries = 0;
        const mappedTopCountries = topCountries.map(country => {
            totalTopCountries += country[query];
            return (
            {
                name: country.location.countryOrRegion,
                y: country[query]/total*100
            }
        )});
        mappedTopCountries.push({ name: 'Rest Of The World', y: (total-totalTopCountries)/total*100 })
        setDataPoints(mappedTopCountries);
    }, [breakdowns, query])


    const options = {
        backgroundColor: '#242424',
        animationEnabled: true,
        subtitles: [{
            fontColor: '#b6b6b6',
            fontFamily: 'Oswald',
            text: title,
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: false
        }],
        data: [{
            type: "doughnut",
            
            indexLabelFontColor: "#b6b6b6",
            indexLabelFontFamily: 'Oswald',
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: dataPoints
        }]
    }
    return (
    <div className='pie'>
        <CanvasJSChart options = {options}
            /* onRef={ref => this.chart = ref} */
        />
    </div>
    );
}


export default React.memo(Pie);