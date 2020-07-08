import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';
import CloseButton from '../close-button/CloseButton';

import Spinner from '../spinner/Spinner';
import GraphList from '../graph-list/GraphList';

import './History.scss';

const History = () => {
    const { data, route } = useContext(AppContext); 
    console.log('hitory')
    return (
        <div className={`history ${route === 'history' && 'active'}`}>
            <CloseButton />
            {
                !data ? 
                <Spinner /> :
                <GraphList history={data.stats.history}/>
            }
        </div>
    )
}

export default React.memo(History);