import axios from "axios"
export const apiClient = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 5000,
})
//Исходящие запросы
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('avion-token')
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)
//Входящие запросы

apiClient.interceptors.request.use(
    (response) => {
        return response
    },
    (error) => {
        if(error.response && error.response.status === 401){
            console.log('Токен недействителен')
            localStorage.removeItem('avion_token')
            window.location.href = '/login'
            
        }
        Promise.reject(error)
    }
)