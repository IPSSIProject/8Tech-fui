import axios from "axios";

function postUser(payload) {
    return axios.request({
        method: 'POST',
        url: 'http://localhost:4000/api/user/registration',
        data: payload
    });
}

export default postUser;
