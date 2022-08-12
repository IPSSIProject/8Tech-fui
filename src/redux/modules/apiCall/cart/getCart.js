import {https} from "../https";

function getCart(userId) {

    return https.get(`http://localhost:4000/api/cart/${userId}`)
}

export default getCart;
