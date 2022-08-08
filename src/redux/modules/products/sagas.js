import {takeEvery, put, call} from 'redux-saga/effects'
import getProducts from "../apiCall/getProducts";
import {fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess} from "./actions";

export default function* sagas() {
    yield takeEvery(fetchProductsRequest.type, fetchProducts);
}


function* fetchProducts() {
    try {
        const result = yield call(getProducts);
        yield put(fetchProductsSuccess(result.data));
    }
    catch (e) {
        yield put(fetchProductsFailure());
    }
}
