import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createBrowserHistory, History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { GlobalStore } from "../types/storeType"
import { keyReducer, apiKey, api } from './config';
// import { reducer as homeReducer } from '../../containers/home/redux';
export const history = createBrowserHistory();

import { reducer as WeatherReducer, INITIAL_STATE } from "../containers/Weather/redux";

export default () => {
    return createStore(
        combineReducers({
            router: connectRouter(history),
            [keyReducer.weather]: WeatherReducer
        }),
        {
            // WEATHER: INITIAL_STATE
        },
        applyMiddleware(
            thunk.withExtraArgument({ api, apiKey }),
            routerMiddleware(history)
        )
    );
};
