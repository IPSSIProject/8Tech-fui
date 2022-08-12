import {https} from "./https";


function putProduct(productId, payload) {

    return https.put(`product/${productId}`, payload)
}

export default putProduct;
