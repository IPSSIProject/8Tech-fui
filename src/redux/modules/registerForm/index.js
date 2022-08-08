import {createSlice} from "@reduxjs/toolkit";
import {isEmpty, omitBy} from "lodash";
import {PayloadAction} from "@reduxjs/toolkit";

export const stateName = 'registerFormState';

const initialState = {
    isSubmitted: false,
    isSubmitSuccessful: false,
    isSubmitting: false,
}

const registerFormStateSlice = createSlice({
    name: stateName,
    initialState,
    reducers: {
        submitRegisterForm: {
            reducer(state) {
                state.isSubmitting = true;
            },
            prepare,
        },
        submitSuccessful(state, action: PayloadAction) {
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

export default registerFormStateSlice.reducer;

export const {
    submitRegisterForm,
    submitSuccessful,
    submitFailed,
    reset,
} = registerFormStateSlice.actions

function prepare({ data }) {
    const sanitized = sanitizeRoot(data);

    const {firstname, lastname, email, password} = sanitized

    return {
        payload: {
            firstname,
            lastname,
            email,
            password,
        }
    }
}

const sanitizeRoot = (data) => {
    return omitBy(data, isEmpty);
}
