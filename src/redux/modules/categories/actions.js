import { createAction } from '@reduxjs/toolkit'

export const fetchCategoriesRequest = createAction(
    'FETCH_CATEGORIES_REQUEST',
);

export const fetchCategoriesSuccess = createAction(
    'FETCH_CATEGORIES_SUCCESS',
    response => {
        return {
            payload: {
                categories: response
            }
        }
    }
);
export const fetchCategoriesFailure = createAction(
    'FETCH_CATEGORIES_FAILURE',
);

