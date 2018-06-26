import { ControlPanelBase } from './controlPanelBase';
import { controlType } from './controlsTypeEnum';
class CheckBoxGroup extends ControlPanelBase {
    constructor(option) {
        super(option);
        this.show = false;
        this.vmodel = [];
        this.type = controlType.checkBoxGroup;
    }
}

export { CheckBoxGroup };