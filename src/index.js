import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main-page';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance
// to log results 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
