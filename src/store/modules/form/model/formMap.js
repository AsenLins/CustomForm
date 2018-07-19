const formMap = {

    getters: {
        getCurrentEditControl: "form/getCurrentEditControl",
        getCurrentEditAttr: "form/getCurrentEditAttr",
        getCurrentEditVerify: "form/getCurrentEditVerify",
        getCurrentForm: "form/getCurrentForm",
        getCurrentDesignForm: "form/getCurrentDesignForm",
        getFormVerify: "form/getFormVerify",
        getOriginForm: "form/getOriginForm"
    },
    actions: {
        changeForm: "form/changeForm",
        changeEditControl: "form/changeEditControl",
        addControl: "form/addControl",
        removeControl: "form/removeControl",
        setControlAttr: "form/setControlAttr",
        setControlVerify: "form/setControlVerify",
        modifyEditControl: "form/modifyEditControl",
        attrOptionDataDelete: "form/attrOptionDataDelete",
        attrOptionChange: "form/attrOptionChange",
        attrOptionDataPush: "form/attrOptionDataPush",
        formVerifyChange: "form/formVerifyChange",
        setControlVerifyStatus: "form/setControlVerifyStatus"
    }
}

export default formMap;