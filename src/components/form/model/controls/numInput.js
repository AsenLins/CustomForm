import { ControlBase } from './controlBase';

class NumInput extends ControlBase {
    constructor(option) {
        super(option);
        this.type = "number";
    }
}

export { NumInput };