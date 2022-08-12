import {https} from "../https";

function decrementQuantityOfProduct(userId, productId) {

    return https.put(`/cart/${userId}/${productId}`);
}

export default decrementQuantityOfProduct;
