import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import {AppProvider} from "./components/context api/context"
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


