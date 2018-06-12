import { Base } from '../base/base';

class Label extends Base {
    constructor(option) {
        super(option);
        this.type = "title";
        this.text = option.text;
    }
}

export { Label };