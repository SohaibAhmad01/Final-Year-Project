import React from "react";
import ReactDOM  from "react-dom";
import AboutUs from "./AboutUs";
import App from "./App";
import ContactUs from "./ContactUs";
import Main from "./Main";
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.querySelector("#root")
);