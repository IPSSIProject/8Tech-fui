import {takeEvery} from "redux-saga/effects";
import {closeSession, newSession} from "./index";
import decodeToken from "../../../utils/decodeToken";

export function* sessionSagas() {
    yield takeEvery(newSession, function* (action) {
        const {payload: decodedToken} = decodeToken(action.payload.token);
        console.log({decodedToken})
        localStorage.setItem('session', JSON.stringify({
            token: action.payload.token,
            userId: decodedToken.id,
            isAdmin: decodedToken.isAdmin,
        }))
    });

    yield takeEvery(closeSession, function* () {
        localStorage.removeItem('session');
    })
}
