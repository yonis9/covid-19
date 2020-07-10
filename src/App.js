import React, { useContext } from 'react';

import { MapContext } from './providers/map/Map.provider';

import CountryStats from './components/country-stats/CountryStats';
import Hamburger from './components/hamburger/Hamburger';
import Menu from './components/menu/Menu';
import Backdrop from './components/backdrop/Backdrop';
import Map from './components/map/Map';
import Stats from './components/stats/Stats';
import History from './components/history/History';
import StaySafe from './components/stay-safe/StaySafe';
import ErrorBoundary from './ErrorBoundary';

import './App.css';

function App() {
  const { country } = useContext(MapContext);

  return (
    <div className="App">
      <ErrorBoundary>
        <Hamburger />
        <Menu />
        <Backdrop />
        <Stats />
        <History />
        <StaySafe />
        { country && <CountryStats country={country} />}
        <Map />
      </ErrorBoundary>
    </div>
  );
}

export default App;