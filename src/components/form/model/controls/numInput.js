import { Base } from '../base/base';


class NumInput extends Base {
    constructor(option) {
        super(option);
        this.type = "number";
    }
}

export { NumInput };