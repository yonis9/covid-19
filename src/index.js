import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppProvider from './providers/app/App.provider';
import MapProvider from './providers/map/Map.provider';
import MenuProvider from './providers/menu/Menu.provider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
      <AppProvider>
        <MapProvider>
          <MenuProvider>
            <App />
          </MenuProvider>
        </MapProvider>
     </AppProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
