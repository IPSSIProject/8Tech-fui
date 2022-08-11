import {createSlice} from "@reduxjs/toolkit";

export const stateName = 'cart';

const initialState = []

const cartStateSlice = createSlice({
    name: stateName,
    initialState,
    reducers: {
        initializationCart(state, action) {
            state.push(...action.payload)
        },
        submitAddProduct(state, action) {},
        submitAddProductSuccessful(state, action) {
            const productIndex = state.findIndex(p => p.product_id === action.payload?.product_id);

            if (productIndex !== -1) {
                state[productIndex] = {
                    ...state[productIndex],
                    quantity: state[productIndex].quantity + 1
                }
            }
            else {
                state.push({
                    product_id: action.payload.product_id,
                    quantity: 1
                })
            }
        },
        submitRemoveOneProduct(state, action) {},
        submitRemoveOneProductSuccessful(state, action) {
            const productIndex = state.findIndex(p => p.product_id === action.payload?.product_id);
            state = state.splice(productIndex, 1);

        },
        submitDecrementQuantityProduct(state, action) {},
        submitDecrementQuantityProductSuccessful(state, action) {
            const productIndex = state.findIndex(p => p.product_id === action.payload?.product_id);

            if (state[productIndex].quantity > 1) {
                state[productIndex] = {
                    ...state[productIndex],
                    quantity: state[productIndex].quantity - 1
                }
            }
            else {
                state = state.splice(productIndex, 1);
            }
        },
        reset: () => initialState,
    }
});

export default cartStateSlice.reducer;

export const {
    initializationCart,
    submitAddProduct,
    submitAddProductSuccessful,
    submitRemoveOneProduct,
    submitRemoveOneProductSuccessful,
    submitDecrementQuantityProduct,
    submitDecrementQuantityProductSuccessful,
    reset,
} = cartStateSlice.actions
