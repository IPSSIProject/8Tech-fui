import {stateName} from "./index";

const getState = (state) => state[stateName];

export const cartSelectors = {
    cartItems: getState,
}
