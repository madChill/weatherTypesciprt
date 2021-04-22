import React, { Component } from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './containers/app';
import storeConfig, { history } from "./helpers/store";

const store = storeConfig();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

