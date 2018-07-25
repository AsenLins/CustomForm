import uuid from "uuid/v1";
class formRuleModel {
    constructor() {
        this.formId = uuid();
        this.visibleUser = {
            users: {},
            department: {}
        };
        this.approver = {
            approverList: []
        };
        this.send = {
            sendList: []
        };
        this.sendConfig = "submit";
    }
}

export default formRuleModel;