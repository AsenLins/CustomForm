import { ControlBase } from './controlBase';
import { controlType } from './controlsTypeEnum';
class MultiText extends ControlBase {
    constructor(option) {
        super(option);
        this.type = controlType.multiText;
    }
}

export { MultiText };