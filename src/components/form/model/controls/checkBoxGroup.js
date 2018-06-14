import { ControlBase } from './controlBase';
class CheckBoxGroup extends ControlBase {
    constructor(option) {
        super(option);
        this.checkBoxList = [];
    }
}

export { CheckBoxGroup };