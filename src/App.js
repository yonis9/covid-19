import React, { useContext } from 'react';

import { MapContext } from './providers/map/Map.provider';
import MenuProvider from './providers/menu/Menu.provider';

import CountryStats from './components/country-stats/CountryStats';
import Hamburger from './components/hamburger/Hamburger';
import Menu from './components/menu/Menu';
import Map from './components/map/Map';
import Stats from './components/stats/Stats';
import History from './components/history/History';

import { AppContext } from './providers/app/App.provider';

import './App.css';

function App() {
  const { data } = useContext(AppContext)
  const { country } = useContext(MapContext)
  console.log(country)
  return (
    <div className="App">
        <MenuProvider>
          <Hamburger />
          <Menu />
  
        {data && 
        <>
          <Stats />
          <History />
        </>
        }

       { country && <CountryStats country={country} />}
        
        
        <Map />
        </MenuProvider>
    </div>
  );
}

export default App;