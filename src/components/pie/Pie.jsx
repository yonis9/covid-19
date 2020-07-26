import React, { useState, useEffect } from 'react';

import  CanvasJSReact from '../../assets/canvasjs.react';

import './Pie.scss';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Pie = ({ breakdowns, query, total, title }) => {
    const [dataPoints, setDataPoints] = useState([]);

    useEffect(() => {
        const getDataPoints = (breakdowns, query) => {
            const topCountries = breakdowns.sort((a,b) => b[query] - a[query]).slice(0,19);
            const topCountriesData = topCountries.reduce(({ mappedTopCountries, totalTopCountries}, country) => {
                mappedTopCountries.push({
                    name: country.location.countryOrRegion,
                    y: country[query] / total * 100
                });
                totalTopCountries += country[query];
    
                return { mappedTopCountries, totalTopCountries }
            }, { mappedTopCountries: [], totalTopCountries: 0 });
           
            const { mappedTopCountries, totalTopCountries } = topCountriesData;
            mappedTopCountries.push({ name: 'Rest Of The World', y: (total - totalTopCountries) / total * 100 });
            
            return mappedTopCountries;
        }

        setDataPoints(getDataPoints(breakdowns, query));
        
    }, [breakdowns, query, total]);


    const options = {
        backgroundColor: '#242424',
        animationEnabled: true,
        subtitles: [{
            fontColor: '#b6b6b6',
            fontFamily: 'Oswald',
            text: title,
            verticalAlign: "center",
            fontSize: 24,
            maxWidth: 150,
            dockInsidePlotArea: false,
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
        <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
        />
    </div>
    );
}


export default React.memo(Pie);