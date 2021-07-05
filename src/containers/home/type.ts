import { initState } from "./const"

export type stateType = typeof initState

export type FruitActionType = {
    type: string, payload?: { name: string };
};

export interface GetLyricsAction {
    type: string;
    artist: string;
    song: string;
}