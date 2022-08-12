import {https} from "./https";

function postProduct(payload) {
    return https.post('/products', payload);
}

export default postProduct;
