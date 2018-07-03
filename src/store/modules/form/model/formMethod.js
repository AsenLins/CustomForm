import Vue from "vue";
import { Form } from "../../../../components/form/model/container/form";
import { Controls } from "../../../../components/form/model/container/form";
import { VerifyRule } from "../../../../components/form/model/container/form";
import { Verify } from "../../../../components/form/model/container/form";
/*
import { FormItem } from "../container/formItem";
import { Controls } from "../controls/index";
//import { VerifyRule } from '../verify/rule/index';
import { Verify } from '../verify/verify';
import { VerifyRule } from '../verify/verifyRule'; 
*/
/**
 * formDesign的公用方法类
 */
const formMethod = {
    /**
     *扩展表单对象form
     */
    extend(option) {
        var formObj = option.formObj,
            itemMix = option.mix.item,
            controlMix = option.mix.control;

        for (var item in formObj) {
            item = {...item, ...itemMix };
            if (item.controlList === undefined) {
                continue;
            }
            for (var control in item.controlList) {
                control = {...control, ...controlMix }
            }
        }
        return formObj;
    },

    /**
     * 获取控件所在的集合索引（用于修改或删除）
     * @param {要匹配的ID} id 
     * @param {所在数组} controlList 
     */
    getControlIndex(id, controlList) {
        var returnIndex = -1;
        for (var index = 0; index < controlList.length; index++) {
            var cur = controlList[index];
            if (cur._id == id) {
                returnIndex = index;
                break;
            }
        }
        return returnIndex;
    },
    /**
     *新增对象到指定vue对象
     *
     * @param {已存在的vue对象} obj
     * @param {要修改的键值对} key
     * @param {值} value
     */
    addVueObj(obj, key, value) {
        if (obj[key] == undefined) {
            Vue.set(obj, key, value);
        }
    },
    /**
     *重置已添加到vue对象的属性
     *
     * @param {*} obj
     * @param {*} key
     * @param {*} chanegObj
     */
    resetVueObj(obj, key, chanegObj) {
        Vue.delete(obj, key);
        Vue.set(obj, key, chanegObj);
    }
}


export { formMethod };