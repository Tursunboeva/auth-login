import axios from 'axios'

const apiInstance = axios.create({
    baseURL:" https://api.escuelajs.co/api/v1",
    timeout: 10000
})

export default apiInstance