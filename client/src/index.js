import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

//import { createStore, applyMiddleware } from 'redux'
//import { Provider } from 'react-redux'
//import thunk from 'redux-thunk'
//import reducer from './reducers/index.js'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import './node_modules/bootstrap/dist/css/bootstrap.min.css';

//const store = createStore(reducer,applyMiddleware(thunk))

//render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
