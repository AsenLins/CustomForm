import qs from 'qs';
import axios from './config/axiosConfig';

const apiServiceName = "Authorize/";
const authorizeApi = {
    /**
     * 用户登录授权
     * @param {数据} payload 
     */
    MangerLogin(payload) {
        return axios.post(apiServiceName + "MangerLogin", qs.stringify(payload));
    }
}

export default authorizeApi;