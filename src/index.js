import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BollardCard from './list/BollardCard';
import { bollards } from './list/bollards'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className='content-div'>
      <BollardCard bollard={bollards[0]} />
      <BollardCard bollard={bollards[1]} />
      <BollardCard bollard={bollards[2]} />
      <BollardCard bollard={bollards[3]} />
      <BollardCard bollard={bollards[4]} />
      <BollardCard bollard={bollards[5]} />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
