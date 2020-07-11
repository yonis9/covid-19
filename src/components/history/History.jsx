import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';
import CloseButton from '../close-button/CloseButton';

import Spinner from '../spinner/Spinner';
import GraphList from '../graph-list/GraphList';

import './History.scss';

const History = () => {
    const { data, error,  route } = useContext(AppContext); 
    console.log('hitory')
    return (
        <div className={`history ${route === 'history' && 'active'}`}>
            <CloseButton />
            {   
                error ? <h2>Sorry, we are not able to get that data</h2> :
                !data ? 
                <Spinner /> :
                <GraphList history={data.stats.history}/>
            }
        </div>
    )
}

export default React.memo(History);