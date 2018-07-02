/**
 * TODO
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
     *获取未扩展的表单对象form
     */
    getOrigin(option) {



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
    }



}


export { formMethod };