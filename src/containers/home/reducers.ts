import actions from "./actions";

import { initState } from "./const"
import { FruitActionType, stateType } from './type'

export default (state = initState, { type, payload }: { type: string, payload: stateType }) => {
    switch (type) {
        case actions.getFruits.REQUEST: {
            return { ...state, loading: true }
        }
        case actions.getFruits.SUCCESS: return { ...state, row1: payload.row1 }
        case actions.getFruits.FAILURE: return { ...state, error2: payload?.error }
        case actions.getFruits.FULFILL: return { ...state, loading: false }
        default: // need this for default case
            return state
    }
}