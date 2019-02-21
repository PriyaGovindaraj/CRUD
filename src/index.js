import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Axios from 'axios';
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<BrowserRouter>
    <App /></BrowserRouter>, document.getElementById('root'));
Axios.defaults.baseURL='http://localhost:4000';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
