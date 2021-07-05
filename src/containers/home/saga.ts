import { Action } from 'redux'
import { takeLatest, put, call } from 'redux-saga/effects';
// import { TakeableChannel } from "redux-saga/core"
// import { get } from 'lodash';
import ApiRouteList from "../../utils/api"

import actions from './actions';
import { actionType } from "./type"

export function* getFruitsRequest({ payload }: actionType) {
    try {
        yield put(actions.getFruits.request());
        const showcasesdata = yield call(ApiRouteList.getFruits, payload);
        yield put(actions.getFruits.success(showcasesdata));
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