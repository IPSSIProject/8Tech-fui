import {call, put, takeEvery} from "redux-saga/effects";
import {
    initialize,
    initialized,
    submitEditProductForm,
    submitFailed,
    submitNewProductForm,
    submitSuccessful
} from "./index";
import postProduct from "../apiCall/postProduct";
import {fetchProductsRequest} from "../products/actions";
import getOneProduct from "../apiCall/getOneProduct";
import putProduct from "../apiCall/putProduct";
import {omit} from "lodash";

export function* newProductFormSagas() {
    yield takeEvery(submitNewProductForm.type, function* (action) {
        try {
            const response = yield call(postProduct, action.payload);
            yield put(submitSuccessful(response.data));
            yield put(fetchProductsRequest());
        } catch (e) {
            console.log(e);
            yield put(submitFailed());
        }
    });

    yield takeEvery(submitEditProductForm.type, function* (action) {
        const payload = omit(action?.payload, 'productId');

        try {
            const response = yield call(putProduct, action?.payload.productId, payload);
            yield put(submitSuccessful(response.data));
            yield put(fetchProductsRequest());
        } catch (e) {
            console.log(e);
            yield put(submitFailed());
        }
    })

    yield takeEvery(initialize.type, function* (action) {
        const response = yield call(getOneProduct, action?.payload.productId);
        yield put(initialized(response.data[0]));
    })
}
