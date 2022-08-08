import {call, put, takeEvery} from "redux-saga/effects";
import {submitFailed, submitSuccessful, submitRegisterForm} from "./index";
import {PayloadAction} from "@reduxjs/toolkit";
import postUser from "../apiCall/postUser";

export function* registerFormSagas() {
    yield takeEvery(submitRegisterForm.type, function* (action: PayloadAction) {
        try {
            const response = yield call(postUser, action.payload);
            yield put(submitSuccessful(response.data));
            // todo ajouter le call pour connecter l'user après le success de l'inscription
        } catch (e) {
            console.log(e);
            yield put(submitFailed());
        }
    })
}
