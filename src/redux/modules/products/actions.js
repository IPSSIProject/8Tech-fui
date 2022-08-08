import { createAction } from '@reduxjs/toolkit'

export const fetchProductsRequest = createAction(
    'FETCH_PRODUCTS_REQUEST',
);

export const fetchProductsSuccess = createAction(
    'FETCH_PRODUCTS_SUCCESS',
    response => {
        return {
            payload: {
                products: response
            }
        }
    }
);
export const fetchProductsFailure = createAction(
    'FETCH_PRODUCTS_FAILURE',
);

