import { Base } from '../base/base';


class MoneyInput extends Base {
    constructor(option) {
        super(option);
        this.type = "money";
    }
}

export { MoneyInput };