const formMap = {

    getters: {
        getCurrentEditControl: "formStores/getCurrentEditControl",
        getCurrentEditAttr: "formStores/getCurrentEditAttr",
        getCurrentEditVerify: "formStores/getCurrentEditVerify",
        getCurrentForm: "formStores/getCurrentForm"
    },
    actions: {
        changeForm: "formStores/changeForm",
        changeEditControl: "formStores/changeEditControl",
        addControl: "formStores/addControl",
        removeControl: "formStores/removeControl",
        setControlAttr: "formStores/setControlAttr",
        setControlVerify: "formStores/setControlVerify",
        modifyEditControl: "formStores/modifyEditControl"
    }
}

export { formMap };