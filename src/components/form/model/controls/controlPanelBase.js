import { Base } from '../base/base';

class ControlPanelBase extends Base {
    constructor(option) {
        super(option);
        this.vmodel;
        this.controlList = [];
        this.placeholder = "";
        if (option.placeholder !== undefined) {
            this.placeholder = option.placeholder;
        }
        this.verify = {
            isNotEmpty: false,
            rules: []
        }
        this.attrs = {
            isPrint: false,
            isNotEmpty: false
        }
        this.data = {
            optionData: []
        }


    }
    add(control) {
        this.controlList.push(control);
        return this;
    }
}

export { ControlPanelBase }