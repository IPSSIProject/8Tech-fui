import {http} from "../https";

function getCart(userId) {

    return http.get(`http://localhost:4000/api/cart/${userId}`)
}

export default getCart;
