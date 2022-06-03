import axios from 'axios'
/* eslint-disable */
export default () => {
    return axios.create({
        baseUrl: 'http://localhost:3000/api',
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
