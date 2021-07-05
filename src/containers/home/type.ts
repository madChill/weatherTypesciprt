import { initState } from "./const"
import FruitsType from "../../interfaces/fruits"

export type StateType = typeof initState & { row1: FruitsType[] }

export type ActionType<T> = {
    type: string, payload: T;
};


//
export interface GetLyricsAction {
    type: string;
    artist: string;
    song: string;
}