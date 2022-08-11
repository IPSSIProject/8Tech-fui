import {http} from "../https";

function decrementQuantityOfProduct(userId, productId) {

    return http.put(`/cart/${userId}/${productId}`);
}

export default decrementQuantityOfProduct;
