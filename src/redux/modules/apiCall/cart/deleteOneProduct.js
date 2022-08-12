import {https} from "../https";

function deleteOneProduct(userId, productId) {

    return https.delete(`/cart/${userId}/${productId}`);
}

export default deleteOneProduct;
