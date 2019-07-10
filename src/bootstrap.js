import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

import Home from './components/home';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <Switch>
            <Route path='/' component={Home}/>
            <Route path='/results' component={Home}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
