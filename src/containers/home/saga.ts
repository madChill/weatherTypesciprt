import { AxiosResponse } from "axios";

import { takeLatest, put, call } from 'redux-saga/effects';
import FruitsType from "../../interfaces/fruits"
import ApiRouteList, { fetchLyrics, getFruits } from "../../utils/api"

import actions from './actions';
import { ActionType, GetLyricsAction } from "./type"

function* onLoadLyrics({ artist, song }: GetLyricsAction) {
    try {
        yield put(actions.getFruits.request());
        const { data } = yield call(fetchLyrics, artist, song);
        yield put(actions.getFruits.success(data.lyrics));
    } catch (error) {
        yield put(actions.getFruits.failure(error.response.data.error));
    }
}

export function* getFruitsRequest({ payload }: ActionType<{ name: string }>) {
    try {
        yield put(actions.getFruits.request());
        const showcasesdata: AxiosResponse<FruitsType[]> = yield call(getFruits, payload);
        yield put(actions.getFruits.success(showcasesdata.data));
        // yield put(msgQueue.show({ severity: 'success', text: 'Thao tác thành công' }));
    } catch (err) {
        yield put(actions.getFruits.failure(err));
        // yield put(msgQueue.show({ severity: 'error', text: get(err, 'response.data.errorDescription') }));
    } finally {
        yield put(actions.getFruits.fullfil());
    }
}

export default function* dataShowcases() {
    yield takeLatest(actions.getFruits.TRIGGER, getFruitsRequest);
}