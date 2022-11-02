import React from 'react';
import ReactDOM from 'react-dom/client';
import FinalApp from './FinalApp';
// import FinalUserInput  from './FinalUserInput';
// import Bijay from './Vijay';
// import VijaySample from './VijaySample';
// import Scratch from './Scratch'
import './index.css';
// import App from './App';
// import Grid2 from './Grid2';
// import VijayLearn from './VijayLearn';
// import Gsd from './Gsd';
// import './FinalApp';
import reportWebVitals from './reportWebVitals';
// import Vijay from './Vijay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Gsd/> */}
    {/* < Grid2 /> */}
    {/* < VijayLearn /> */}
    < FinalApp/>
    {/* <FinalUserInput/> */}
    {/* <Vijay/> */}
    
     {/* < VijaySample /> */}
    {/* <Scratch/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
