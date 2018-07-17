const formAction = {

    changeForm(context, form) {
        context.commit("changeForm", form);
    },
    changeEditControl(context, control) {
        context.commit("changeEditControl", control);
    },
    addControl(context, control) {
        context.commit("addControl", control);
    },
    removeControl(context, control) {
        context.commit("removeControl", control);
    },
    modifyEditControl(context, attrObj) {
        context.commit("modifyEditControl", attrObj)
    },
    setControlAttr(context, attrObj) {
        context.commit("setControlAttr", attrObj);
    },
    setControlVerify(context, rulesObj) {
        context.commit("setControlVerify", rulesObj);
    },
    attrOptionDataPush(context, dataObj) {
        context.commit("attrOptionDataPush", dataObj)
    },
    attrOptionChange(context, dataObj) {
        context.commit("attrOptionChange", dataObj);
    },
    attrOptionDataDelete(context, dataObj) {
        context.commit("attrOptionDataDelete", dataObj);
    }

}

export { formAction }