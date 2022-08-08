import {CategoryState} from "./index";

const getState = (state) => state[CategoryState.stateKey];

export default {
    state: getState,
    allCategories: (state) => getState(state).categories,
}
