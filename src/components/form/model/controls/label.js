import { ControlBase } from './controlBase';
import { controlType } from './controlsTypeEnum';

class Label extends ControlBase {
    constructor(option) {
        super(option);
        this.type = controlType.title;
        this.text = option.text;
    }
}

export { Label };