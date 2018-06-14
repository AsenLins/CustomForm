import { ControlBase } from './controlBase';

class RadioBoxGroup extends ControlBase {
    constructor(option) {
        super(option);
        this.checkBoxList = [];
    }
}

export { RadioBoxGroup };