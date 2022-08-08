import axios from "axios";

function getProducts() {

    return axios.request({
        method: 'GET',
        url: 'http://localhost:4000/api/products',
        }
    )
}

export default getProducts;
