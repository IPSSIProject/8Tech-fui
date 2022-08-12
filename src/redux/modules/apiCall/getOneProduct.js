import {https} from "./https";


function getOneProducts(productId) {

    return https.get(`product/${productId}`,)
}

export default getOneProducts;
