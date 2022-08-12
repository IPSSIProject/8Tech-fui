import {call, put, takeEvery} from "redux-saga/effects";
import {submitFailed, submitSuccessful, submitRegisterForm} from "./index";
import postUser from "../apiCall/postUser";
import {newSession} from "../session";

export function* registerFormSagas() {
    yield takeEvery(submitRegisterForm.type, function* (action) {
        try {
            const response = yield call(postUser, action.payload);
            yield put(submitSuccessful(response.data));
            yield put(newSession(response.data));
        } catch (e) {
            console.log(e);
            yield put(submitFailed());
        }
    })
}
