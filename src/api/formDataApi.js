import qs from 'qs';
import axios from './config/axiosConfig';

const apiServiceName = "FormData/";

const formDataApi = {
    GetFormDataList(payload) {
        return axios.get(apiServiceName + "GetFormDataList?pageIndex=" + payload.pageIndex + "&pageSize=" + payload.pageSize)
    },
    GetFormData(payload) {
        return axios.get(apiServiceName + "GetFormData?id=" + payload.id);
    }
}

export default formDataApi;