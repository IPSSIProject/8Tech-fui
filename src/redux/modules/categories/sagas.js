import {takeEvery, put, call} from 'redux-saga/effects'
import {fetchCategoriesFailure, fetchCategoriesRequest, fetchCategoriesSuccess} from "./actions";
import getCategories from "../apiCall/getCategories";

export default function* sagas() {
    yield takeEvery(fetchCategoriesRequest.type, fetchCategories);
}


function* fetchCategories() {
    try {
        const result = yield call(getCategories);
        yield put(fetchCategoriesSuccess(result.data));
    }
    catch (e) {
        yield put(fetchCategoriesFailure());
    }
}
