import qs from 'qs';
import axios from './config/axiosConfig';

const apiServiceName = "FormDesign/";

const formDesignApi = {
    AddForm(payload) {
        console.log("payload", payload);
        return axios.post(apiServiceName + "AddForm", qs.stringify(payload));
    },
    GetFormDesignPageList(payload) {
        return axios.get(apiServiceName + "GetFormDesignPageList?pageIndex=" + payload.pageIndex + "&pageSize=" + payload.pageSize);
    },
    UpdateForm(payload) {
        return axios.post(apiServiceName + "UpdateForm", qs.stringify(payload));
    },
    RemoveForm(payload) {
        return axios.post(apiServiceName + "RemoveForm", qs.stringify(payload));
    }
}

export default formDesignApi;