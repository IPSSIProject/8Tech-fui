import {createSlice} from "@reduxjs/toolkit";
import {isEmpty, omitBy} from "lodash";

export const stateName = 'loginFormState';

const initialState = {
    isSubmitted: false,
    isSubmitSuccessful: false,
    isSubmitting: false,
}

const loginFormStateSlice = createSlice({
    name: stateName,
    initialState,
    reducers: {
        submitLoginForm: {
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

export default loginFormStateSlice.reducer;

export const {
    submitLoginForm,
    submitSuccessful,
    submitFailed,
    reset,
} = loginFormStateSlice.actions

function prepare({ data }) {
    const sanitized = sanitizeRoot(data);

    const {email, password} = sanitized

    return {
        payload: {
            email,
            password,
        }
    }
}

const sanitizeRoot = (data) => {
    return omitBy(data, isEmpty);
}
