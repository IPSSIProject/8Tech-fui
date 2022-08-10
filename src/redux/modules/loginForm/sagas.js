import {call, put, takeEvery} from "redux-saga/effects";
import {submitFailed, submitSuccessful, submitLoginForm} from "./index";
import userAuthentification from "../apiCall/userAuthentification";
import {newSession} from "../session";

export function* loginFormSagas() {
    yield takeEvery(submitLoginForm.type, function* (action) {
        try {
            const response = yield call(userAuthentification, action.payload);
            yield put(submitSuccessful(response.data));
            yield put(newSession(response.data));
        } catch (e) {
            console.log(e);
            yield put(submitFailed());
        }
    })
}
