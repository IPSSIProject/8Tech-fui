import {createSlice} from "@reduxjs/toolkit";
import {isEmpty, omitBy} from "lodash";
import {PayloadAction} from "@reduxjs/toolkit";

export const stateName = 'newProductFormState';

const initialState = {
    isSubmitted: false,
    isSubmitSuccessful: false,
    isSubmitting: false,
    isInitialized: false,
    isInitializing: false,
    dto: {}
}

const newProductFormStateSlice = createSlice({
    name: stateName,
    initialState,
    reducers: {
        initialize(state, action) {
            state.isInitializing = true;
        },
        initialized(state, action) {
            state.isInitialized = true;
            state.isInitializing = false;
            state.dto = action.payload;

        },
        submitNewProductForm: {
            reducer(state) {
                state.isSubmitting = true;
            },
            prepare,
        },
        submitEditProductForm: {
            reducer(state) {
                state.isSubmitting = true;
            },
            prepare,
        },
        submitSuccessful(state, action) {
            state.isSubmitting = false;
            state.isSubmitSuccessful = true;
            state.isSubmitted = true;
        },
        submitFailed(state) {
            state.isSubmitting = false;
        },
        reset: () => initialState,
    }
});

export default newProductFormStateSlice.reducer;

export const {
    initialize,
    initialized,
    submitNewProductForm,
    submitEditProductForm,
    submitSuccessful,
    submitFailed,
    reset,
} = newProductFormStateSlice.actions

function prepare({ data }) {

    const { name, brand, category, price, promo, quantity, image, productId } = data

    console.log(data)

    return {
        payload: {
            name,
            brand,
            category_id: category.value || category,
            price: parseFloat(price),
            promotion: parseFloat(promo),
            quantity: parseInt(quantity),
            image: image?.imagePath || image,
            ...(productId && {productId}),
        }
    }
}
