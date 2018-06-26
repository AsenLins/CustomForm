import { ControlBase } from './controlBase';
import { controlType } from './controlsTypeEnum';
class DateInput extends ControlBase {
    constructor(option) {
        super(option);
        this.show = false;
        this.type = controlType.date;
    }
}

export { DateInput };