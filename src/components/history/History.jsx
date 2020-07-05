import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/App.provider';
import CloseButton from '../close-button/CloseButton';

import './History.scss';
import GraphList from '../graph-list/GraphList';

const History = () => {
    const { data: {stats: { history } }, route } = useContext(AppContext); 
    console.log('hitory')
    return (
        <div className={`history ${route === 'history' && 'active'}`}>
            <CloseButton />
            <GraphList history={history}/>

        </div>
    )
}

export default React.memo(History);