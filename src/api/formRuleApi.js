import qs from 'qs';
import axios from './config/axiosConfig';

const apiServiceName = "FormRule/";

const formRuleApi = {
    AddFormRule(payload) {
        return axios.post(apiServiceName + "AddFormRule", qs.stringify(payload));
    },
    GetRuleByFormId(payload) {
        return axios.get(apiServiceName + "GetRuleByFormId?id=" + payload.id);
    },
    UpdateFormRule(payload) {
        return axios.post(apiServiceName + "UpdateFormRule", qs.stringify(payload));
    }
}

export default formRuleApi;