import { all, fork } from "redux-saga/effects";
import FruitsSaga from "../../containers/home/saga";

export default function* rootSaga() {
    console.log("===12=====", new Date);
    yield all([fork(FruitsSaga)]);
}
