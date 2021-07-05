import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createBrowserHistory, History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from 'redux-saga';

import createReducer from "./reducers"
export const history = createBrowserHistory();


export default (initStore = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const runSaga = sagaMiddleware.run;
    const store = createStore(
        combineReducers({
            router: connectRouter(history),
        }),
        initStore,
        // applyMiddleware(sagaMiddleware, routerMiddleware(history))
        createInjectorsEnhancer({
            createReducer,
            runSaga,
        })
    );
    return store
};
