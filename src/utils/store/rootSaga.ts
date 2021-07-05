import { all, fork } from "redux-saga/effects";
import FruitsSaga from "../../containers/home/saga";

export default function* rootSaga() {
    yield all([fork(FruitsSaga)]);
}
