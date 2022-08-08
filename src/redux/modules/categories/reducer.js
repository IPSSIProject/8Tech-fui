import {createReducer} from "@reduxjs/toolkit";
import formatterApiToCategories from "../apiCall/formatters/formatterApiToCategories";
import {initialState} from "./index";
import {fetchCategoriesFailure, fetchCategoriesRequest, fetchCategoriesSuccess} from "./actions";


export const categoryReducer = createReducer(initialState, (builder => {
    builder
        .addCase(fetchCategoriesRequest, ((state, action) => {
            return {
                ...state,
                categoriesStatus: 'loading',
            }

        }))
        .addCase(fetchCategoriesSuccess, ((state, action) => {
            const categoriesFormatted = formatterApiToCategories(action.payload.categories);
            return {
                ...state,
                categoriesStatus: 'fetched',
                categories: categoriesFormatted,
            }

        }))
        .addCase(fetchCategoriesFailure, ((state, action) => {
            return {
                ...state,
                categoriesStatus: 'failure',
            }

        }))
}))
