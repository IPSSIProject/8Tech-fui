import sagas from './sagas';
import selectors from "./selectors";

const stateKey = 'categories';

export const initialState = {
    categoriesStatus: undefined ,
    categories: []
}

export const CategoryState = {
    stateKey,
    selectors,
    sagas,
}
