import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from './reducers';
//for testing
import axios from 'axios';
window.axios=axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    //we add App as achild of provider
    <Provider store={store}><App /></Provider>,
     
     document.querySelector("#root")
     );
    //  console.log('stripe key is :',process.env.REACT_APP_STRIPE_KEY);
    //  console.log('enviremoent key is :',process.env.NODE_ENV);
