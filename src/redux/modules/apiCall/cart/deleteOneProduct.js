import {http} from "../https";

function deleteOneProduct(userId, productId) {

    return http.delete(`/cart/${userId}/${productId}`);
}

export default deleteOneProduct;
