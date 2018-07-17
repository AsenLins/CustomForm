const setNewControlAttr = {
    text: function() {
        this.title = "文本";
        this.placeholder = "请输入";
    },
    checkBoxGroup: function() {
        this.title = "多选";
        this.placeholder = "请选择";
    },
    fileUpload: function() {
        this.title = "附件";
    },
    title: function() {
        //this.title = undefined;
        this.placeholder = "说明文字";
        this.value = "说明文字"
            //this.placeholder = "请输入";
    },
    number: function() {
        this.title = "数字";
        this.placeholder = "请输入";
    },
    radioBoxGroup: function() {
        this.title = "单选";
        this.placeholder = "请选择";
    },
    multiText: function() {
        this.title = "多行文本";
        this.placeholder = "请输入";
    },
    dateInput: function() {
        this.title = "日期";
        this.value = "请选择";
    },
    dateAndTimeInput: function() {
        this.title = "日期+时间";
        this.value = "请选择";
    }
}


export default {
    setNewControlAttr
}