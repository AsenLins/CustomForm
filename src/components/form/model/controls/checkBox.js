import { ControlBase } from './controlBase';
import { controlType } from './controlsTypeEnum';

class CheckBox extends ControlBase {
    constructor(option) {
        super(option);
        this.keyName = option.keyName;
        this.isCheck = false;

        this.type = controlType.radio;
    }
}

export { CheckBox }