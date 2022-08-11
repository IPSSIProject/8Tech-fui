import {createSlice} from "@reduxjs/toolkit";
import decodeToken from "../../../utils/decodeToken";

export const stateName = 'session';

const initialState = {
    token: undefined,
    userId: undefined,
}

const sessionStateSlice = createSlice({
    name: stateName,
    initialState,
    reducers: {
        newSession: (state, action) => {
            const {payload} = decodeToken(action.payload.token);

            state.token = action.payload.token
            state.userId = payload.id
            state.isAdmin = payload.isAdmin
        },
        refreshSession: (state) => {
            const sessionStorage = JSON.parse(localStorage.getItem('session'));

            state.token = sessionStorage.token
            state.userId = sessionStorage.userId
            state.isAdmin = sessionStorage.isAdmin
        },

        closeSession: () => initialState,
    }
});

export default sessionStateSlice.reducer;

export const {
    newSession,
    refreshSession,
    closeSession,
} = sessionStateSlice.actions
