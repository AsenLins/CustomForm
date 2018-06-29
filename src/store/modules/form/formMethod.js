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



    }


}


export { formMethod };