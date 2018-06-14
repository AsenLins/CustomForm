import { ControlBase } from './controlBase';

class Title extends ControlBase {
    constructor(option) {
        super(option);
        this.type = "title";
        this.text = option.text;
    }
}

export { Title };