import { Base } from '../base/base';

class ControlPanelBase extends Base {
    constructor(option) {
        super(option);
        this.vmodel;
        this.controlList = [];

    }
    add(control) {
        this.controlList.push(control);
        return this;
    }
}

export { ControlPanelBase }