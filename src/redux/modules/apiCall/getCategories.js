import axios from "axios";

function getCategories() {

    return axios.request({
            method: 'GET',
            url: 'http://localhost:4000/api/categories',
        }
    )
}

export default getCategories;
