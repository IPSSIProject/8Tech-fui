import {createReducer} from "@reduxjs/toolkit";
import {fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess} from './actions'
import {initialState} from "./index";
import formatterApiToProducts from "../apiCall/formatters/formatterApiToProducts";


export const productsReducer = createReducer(initialState, (builder => {
    builder
        .addCase(fetchProductsRequest, ((state, action) => {
            return {
                ...state,
                productsStatus: 'loading',
            }

        }))
        .addCase(fetchProductsSuccess, ((state, action) => {
            const productsFormatted = formatterApiToProducts(action.payload.products);
            return {
                ...state,
                productsStatus: 'fetched',
                products: productsFormatted
            }

        }))
        .addCase(fetchProductsFailure, ((state, action) => {
            return {
                ...state,
                productsStatus: 'failure',
            }

        }))
}))
