import { ControlPanelBase } from './controlPanelBase';
import { controlType } from './controlsTypeEnum';
class ControlList extends ControlPanelBase {
    constructor(option) {
        super(option);
        this.type = controlType.controlList;
    }
}

export { ControlList };