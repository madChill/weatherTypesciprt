import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory, History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from 'redux-saga';

import createReducer from "./reducers"
import rootSaga from "./rootSaga"
export const history = createBrowserHistory();


export default (initStore = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    // const runSaga = sagaMiddleware.run;
    const store = createStore(
        createReducer({
            router: connectRouter(history),
        }),
        initStore,
        applyMiddleware(sagaMiddleware, routerMiddleware(history))
        // createInjectorsEnhancer({
        //     createReducer,
        //     runSaga,
        // })
    );
    sagaMiddleware.run(rootSaga);
    return store
};
