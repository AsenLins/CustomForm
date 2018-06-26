import { ControlPanelBase } from './controlPanelBase';
import { controlType } from './controlsTypeEnum';
class RadioBoxGroup extends ControlPanelBase {
    constructor(option) {
        super(option);
        this.show = false;
        this.vmodel = [];
        this.type = controlType.radioBoxGroup
    }
}

export { RadioBoxGroup };