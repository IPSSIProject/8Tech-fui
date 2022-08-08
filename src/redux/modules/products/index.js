import selectors from "./selectors";
import sagas from './sagas';

const stateKey = 'products';

export const initialState = {
    productsStatus: undefined,
    products: [],
    productFilters: {
        promotion: false,
        category: '',
        brand: [],
    }
}

export const ProductsState = {
    stateKey,
    selectors,
    sagas,
}
