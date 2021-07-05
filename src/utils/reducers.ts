import { combineReducers } from 'redux';

function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        ...injectedReducers,
        // other non-injected reducers can go here...
    });

    return rootReducer
}
export default createReducer