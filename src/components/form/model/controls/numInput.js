import { ControlBase } from './controlBase';
import { controlType } from './controlsTypeEnum';
class NumInput extends ControlBase {
    constructor(option) {
        super(option);
        this.type = controlType.number;
    }
}

export { NumInput };