import axios from "axios";

function postCart(userId, productId) {
    const session = JSON.parse(localStorage.getItem('session'));

    return axios.request({
        method: 'POST',
        url: `http://localhost:4000/api/cart/${userId}/${productId}`,
        headers: {
            'Authorization': `Bearer ${session.token}`
        }
    });

}

export default postCart;
