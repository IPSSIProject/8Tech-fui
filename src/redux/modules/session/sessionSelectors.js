import {stateName} from './index'
import {createSelector} from "@reduxjs/toolkit";

const getState = (state) => state[stateName];

export const sessionSelectors = {
    token: (state) => getState(state).token,
    userId: (state) => getState(state).userId,
    connected: createSelector(
        (state) => getState(state).token,
        token => !!token
    )
}
