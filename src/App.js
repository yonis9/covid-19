import React, { useContext } from 'react';

import { MapContext } from './providers/map/Map.provider';

import CountryStats from './components/country-stats/CountryStats';
import Hamburger from './components/hamburger/Hamburger';
import Menu from './components/menu/Menu';
import Map from './components/map/Map';
import Stats from './components/stats/Stats';
import History from './components/history/History';
import StaySafe from './components/stay-safe/StaySafe';

import { AppContext } from './providers/app/App.provider';

import './App.css';

function App() {
  const { data } = useContext(AppContext)
  const { country } = useContext(MapContext)

  return (
    <div className="App">
      <Hamburger />
      <Menu />
      {/* {
      data && 
      <>
        <Stats />
        <History />
      </>
      }
      <StaySafe />
      { country && <CountryStats country={country} />} */}
      <Map />
    </div>
  );
}

export default App;