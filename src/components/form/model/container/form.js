import { ContainerBase } from "./containerBase"

class Form extends ContainerBase {
    constructor(option) {
        super(option);
        this.action = option.action;
        this.method = option.method;
        this.enctype = option.enctype;
        this.controlList = [];
        this.title = option.title;
        this.submitText = "提交申请";
        if (option.submitText !== undefined) {
            this.submitText = option.submitText;
        }
    }

}

export { Form }