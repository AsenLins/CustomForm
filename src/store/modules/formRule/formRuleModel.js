import uuid from "uuid/v1";
class FormRuleModel {
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

export default FormRuleModel;