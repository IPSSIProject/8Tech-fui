import {call, put, takeEvery, select} from "redux-saga/effects";
import {
    initializationCart,
    reset,
    submitAddProduct,
    submitAddProductSuccessful, submitDecrementQuantityProduct, submitDecrementQuantityProductSuccessful,
    submitRemoveOneProduct,
    submitRemoveOneProductSuccessful
} from "./index";
import postCart from "../apiCall/cart/postCart";
import {refreshSession} from "../session";
import {sessionSelectors} from "../session/sessionSelectors";
import getCart from "../apiCall/cart/getCart";
import deleteOneProduct from "../apiCall/cart/deleteOneProduct";
import decrementQuantityOfProduct from "../apiCall/cart/deleteUnityOfProduct";

export function* cartSagas() {
    yield takeEvery(submitAddProduct.type, function* (action) {
        const { userId, productId } = action.payload
        try {
            const response = yield call(postCart, userId, productId);
            yield put(submitAddProductSuccessful(response.data));
        }
        catch (e) {
            console.error(e)
        }

    });

    yield takeEvery(submitRemoveOneProduct.type, function* (action) {
        const { userId, productId } = action.payload;
        try {
            const response = yield call(deleteOneProduct, userId, productId);
            yield put(submitRemoveOneProductSuccessful(response.data));
        }
        catch (e) {
            console.error(e)
        }
    });

    yield takeEvery(submitDecrementQuantityProduct.type, function* (action) {
        const { userId, productId } = action.payload;
        try {
            const response = yield call(decrementQuantityOfProduct, userId, productId);
            yield put(submitDecrementQuantityProductSuccessful(response.data));
        }
        catch (e) {
            console.error(e)
        }
    });


    yield takeEvery(refreshSession.type, function* () {
        const userId = yield select((state) => sessionSelectors.userId(state));
        const response = yield call (getCart, userId);
        yield put(initializationCart(response.data))
    });


}
