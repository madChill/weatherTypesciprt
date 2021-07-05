import FruitsType from "../../interfaces/fruits";
import actions from "./actions";

import { initState } from "./const"
import { ActionType, StateType } from './type'

export default (state = initState, { type, payload }: ActionType<string | FruitsType[]>) => {
    switch (type) {
        case actions.getFruits.REQUEST: {
            return { ...state, loading: true }
        }
        case actions.getFruits.SUCCESS: return { ...state, row1: payload }
        case actions.getFruits.FAILURE: return { ...state, error2: payload }
        case actions.getFruits.FULFILL: return { ...state, loading: false }
        default: // need this for default case
            return state
    }
}