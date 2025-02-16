import axios from "axios";
const instanceLogin = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_LOGIN,
  timeout: 10000,
});
instanceLogin.interceptors.request.use(
  (config) => {
    const localConfig = config
    // If the URL requires authentication, a token is provided.
    if (config.url) {
      const accessToken = localStorage.getItem('token')
      if (localConfig.headers) {
        // Add authentication information if available
        if (accessToken) localConfig.headers.Authorization = `Bearer ${accessToken}`
      }
    }
    return localConfig
  },
  (error) => Promise.reject(error)
)
export default instanceLogin;
