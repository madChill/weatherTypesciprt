import { Reducer, Action } from 'redux'
import actions from "./actions";

import { initState } from "./const"
import { actionType } from './type'

export default (state = initState, { type, payload }: actionType) => {
    switch (type) {
        case actions.getFruits.REQUEST: {
            return { ...state, loading: true }
        }
        case actions.getFruits.SUCCESS: return { ...state, row1: payload?.row1 }
        case actions.getFruits.FAILURE: return { ...state, error2: payload?.error }
        case actions.getFruits.FULFILL: return { ...state, loading: false }
    }
}