import { ControlBase } from './controlBase';
import { controlType } from './controlsTypeEnum';

class Radio extends ControlBase {
    constructor(option) {
        super(option);
        this.keyName = option.keyName;
        this.isCheck = false;
        this.type = controlType.radio;
    }
}

export { Radio };