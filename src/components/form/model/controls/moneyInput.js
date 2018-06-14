import { ControlBase } from './controlBase';


class MoneyInput extends ControlBase {
    constructor(option) {
        super(option);
        this.type = "money";
    }
}

export { MoneyInput };