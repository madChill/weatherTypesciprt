import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { keyReducer, apiKey, api } from './config';
// import { reducer as homeReducer } from '../../containers/home/redux';
export const history = createBrowserHistory();

//reducer
import { reducer as WeatherReducer } from "../containers/Weather/redux";

export default () => {
    return createStore(
        combineReducers({
            router: connectRouter(history),
            [keyReducer.weather]: WeatherReducer
        }),
        {},
        applyMiddleware(
            thunk.withExtraArgument({ api, apiKey }),
            routerMiddleware(history)
        )
    );
};
