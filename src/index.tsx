import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import 'antd/dist/antd.css';
import Home from './pages/home/Home';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode>
        <Home/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
