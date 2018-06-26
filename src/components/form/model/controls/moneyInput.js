import { ControlBase } from './controlBase';
import { controlType } from './controlsTypeEnum';

class MoneyInput extends ControlBase {
    constructor(option) {
        super(option);
        this.type = controlType.money;
    }
}

export { MoneyInput };