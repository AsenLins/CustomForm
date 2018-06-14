import { ControlBase } from './controlBase';


class Label extends ControlBase {
    constructor(option) {
        super(option);
        this.type = "title";
        this.text = option.text;
    }
}

export { Label };