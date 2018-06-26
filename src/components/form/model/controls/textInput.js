import { ControlBase } from './controlBase';
import { controlType } from './controlsTypeEnum';

class TextInput extends ControlBase {
    constructor(option) {
        super(option);
        this.type = controlType.text;
    }
}

export { TextInput };