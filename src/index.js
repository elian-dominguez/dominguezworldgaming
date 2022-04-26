import React from 'react';
import ReactDOM from 'react-dom';
import { CustomProvider } from 'rsuite';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestoreApp } from './firebase/config';

import './index.css';

getFirestoreApp()

ReactDOM.render(
  <React.StrictMode>
    <CustomProvider theme="dark">
      <App />
    </CustomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
