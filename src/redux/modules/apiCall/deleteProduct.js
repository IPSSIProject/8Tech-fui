import {https} from "./https";

function deleteProduct(productId) {

    return https.delete(`/product/${productId}`);
}

export default deleteProduct;
