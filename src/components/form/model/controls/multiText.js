import { ControlBase } from './controlBase';

class MultiText extends ControlBase {
    constructor(option) {
        super(option);
        this.type = "multiText";
    }
}

export { MultiText };