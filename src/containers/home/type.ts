import { initState } from "./const"

export type stateType = typeof initState
export type actionType = { type: string, payload?: stateType };