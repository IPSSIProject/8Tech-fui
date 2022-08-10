import axios from "axios";

function userAuthentification(payload) {
    return axios.request({
        method: 'POST',
        url: 'http://localhost:4000/api/user/authentication',
        data: payload
    });
}

export default userAuthentification;
