import React, { useContext } from 'react';

import MapProvider from './providers/map/Map.provider';
import MenuProvider from './providers/menu/Menu.provider';

import Hamburger from './components/hamburger/Hamburger';
import Menu from './components/menu/Menu';
import Map from './components/map/Map';
import Stats from './components/stats/Stats';
import History from './components/history/History';

import { AppContext } from './providers/app/App.provider';

import './App.css';

function App() {
  const { data } = useContext(AppContext)
 
  return (
    <div className="App">
      <MenuProvider>
        <Hamburger />
        <Menu />
      </MenuProvider>
      {data && 
      <>
        <Stats />
        <History />
      </>
      }
      <MapProvider>
        <Map />
      </MapProvider>
    </div>
  );
}

export default App;