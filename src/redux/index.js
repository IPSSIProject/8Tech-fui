import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import { all } from "redux-saga/effects";
import {productsReducer} from "./modules/products/reducers";
import {ProductsState} from "./modules/products";
import {CategoryState} from "./modules/categories";
import {categoryReducer} from "./modules/categories/reducer";
import {registerFormSagas} from "./modules/registerForm/sagas";
import registerForm from "./modules/registerForm";
import {loginFormSagas} from "./modules/loginForm/sagas";
import loginForm from './modules/loginForm'
import session from './modules/session';
import cart from './modules/cart';
import {sessionSagas} from "./modules/session/sagas";
import {cartSagas} from "./modules/cart/sagas";
import newProductForm from "./modules/newProductForm";
import {newProductFormSagas} from "./modules/newProductForm/sagas";

const sagaMiddleware = createSagaMiddleware()

export const configureStore = (initialState = {} ) => {

    const store = createStore(
        combineReducers({
            [ProductsState.stateKey]: productsReducer,
            [CategoryState.stateKey]: categoryReducer,
            registerForm,
            loginForm,
            session,
            cart,
            newProductForm
        }),
        initialState,
        composeWithDevTools({trace: true})(
            applyMiddleware(
                sagaMiddleware,
            )
        )
    );

    sagaMiddleware.run(rootSaga)

    return store;
}

function* rootSaga() {

    yield all([
        // fichiers sagas des states
        ProductsState.sagas(),
        CategoryState.sagas(),
        registerFormSagas(),
        loginFormSagas(),
        sessionSagas(),
        cartSagas(),
        newProductFormSagas(),
    ])
}
