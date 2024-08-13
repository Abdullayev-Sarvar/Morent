import axios from 'axios'

const apiInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

export default apiInstance