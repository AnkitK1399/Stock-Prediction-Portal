import axios from 'axios'

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL

const axiosInstance = axios.create(
    baseURL = baseURL
)

// Request Interceptor

axiosInstance.interceptors.request.use(
    function(config){
        const accessToken = localStorage.getItem(accessToken)
        if (accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
    },function(error){
        return Promise.reject(error);
    }
)

// Response Interceptor

axiosInstance.interceptors.response.use(
    function(response){
        return response;
    },
    // handle failed responses
    async function(error){
        const originalRequest = error.config;
        if (error.status === 401 && !originalRequest.retry){
            originalRequest.retry = true;
            refreshToken = localStorage.getItem('refreshToken')
            try{
                const response = await axiosInstance.post('token/refresh/',{'refresh':refreshToken})
                localStorage.setItem('accessToken', response.data.access)
                originalRequest.headers['Authorization'] = `Berear ${accessToken}`
                return axiosInstance(originalRequest)
            }catch(error){
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                
            }   
        }
        return Promise.reject(error)

    }
)

export default axiosInstance;