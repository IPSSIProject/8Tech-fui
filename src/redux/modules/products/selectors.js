import {ProductsState} from "./index";
import {createSelector} from "@reduxjs/toolkit";
import {uniq, uniqBy} from 'lodash'

const getState = (state) => state[ProductsState.stateKey];
const getAllProducts = (state) => getState(state).products;

export default {
    state: getState,
    allProducts: getAllProducts,
    productsStatus: (state) => getState(state).productsStatus,
    promotions: createSelector(
        getAllProducts,
        allProducts => allProducts.filter(p => p.promotion > 0)
    ),
    newProducts: createSelector(
        getAllProducts,
        allProducts => allProducts.filter(p => p.new === 1)
    ),
    allBrands: createSelector(
        getAllProducts,
        allProducts => uniq(allProducts.map(p => p.brand))
    ),
    allCategories: createSelector(
        getAllProducts,
        allProducts => uniqBy(allProducts.map(p => p.category), 'id')
    )
}
