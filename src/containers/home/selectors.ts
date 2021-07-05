import { createSelector } from 'reselect';
import { initState, key } from './const';

import { StateType } from './type'

const selectDomain = state => state[key] || initState;

const selectFruits = () => createSelector(selectDomain, (subState: StateType) => subState.row1);
const selectStatus = () =>
    createSelector(selectDomain, (subState: StateType) => ({
        alertProperty: subState.alertProperty,
        loading: subState.loading,
        success: subState.success,
        error: subState.error,
        error2: subState.error2,
    }));

export default { selectFruits, selectStatus };