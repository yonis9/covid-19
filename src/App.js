import React from 'react';

import MenuProvider from './providers/menu/Menu.provider';

import Hamburger from './components/hamburger/Hamburger';
import Navigation from './components/navigation/Navigation';
import Map from './components/map/Map';

import './App.css';

function App() {
  return (
    <div className="App">
      <MenuProvider>
        <Hamburger />
        <Navigation />
      </MenuProvider>
      <Map />
    </div>
  );
}

export default App;