import { combineReducers } from 'redux';
import home from "../../containers/home/reducers"

function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        home,
        ...injectedReducers,
    });

    return rootReducer
}

export default createReducer