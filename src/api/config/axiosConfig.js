import axios from 'axios';
import apiConfig from './apiConfig';


axios.defaults.baseURL = apiConfig.apiHost;
axios.defaults.headers['Content-Type'] = "application/x-www-form-urlencoded";



export default axios;