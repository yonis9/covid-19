import React, { useContext } from 'react';
import { AppContext } from '../../providers/app/App.provider';

import CloseButton from '../close-button/CloseButton';

import './StaySafe.scss';


const StaySafe = () => {
    const { route } = useContext(AppContext)
        return (
        <div className={`stay-safe ${route === 'stay-safe' && 'active'}`}>
            <CloseButton />
            <p>
            As the number of people with COVID-19 continues to increase in the current pandemic, everyone has a role to play in taking care of ourselves and our loved ones, and slowing the spread of the new coronavirus. Here is what you can do:
            </p>
            <ul>
                <li>Clean your home regularly, particularly frequently touched surfaces like</li>
                <li>Stay physically fit. Exercise regulary. Eat a nutritious diet. Don’t smoke.</li>
                <li>Follow the Golden Rule. Wash your hands frequently with soap and water or use alchohol based hand-rub.</li>
                <li>If you show symptoms of COVID-19, self isolate yourself, wear a mask around others and seek medical advice.</li>
                <li>Avoid alarmist news. Be connected to friends and family. Have a hobby.</li>
                <li>If any member of the household shows symptoms of Covid-19, seek medical advice and follow your local health authority's guidance.</li>
            </ul>
            <p>#STAYHOMESTAYSAFE</p>
        </div>
    )
}


export default React.memo(StaySafe);