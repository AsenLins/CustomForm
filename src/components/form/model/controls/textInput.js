import { ControlBase } from './controlBase';


class TextInput extends ControlBase {
    constructor(option) {
        super(option);
        this.type = "text";
    }
}

export { TextInput };