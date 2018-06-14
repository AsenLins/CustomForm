import { ControlBase } from './controlBase';

class DateInput extends ControlBase {
    constructor(option) {
        super(option);
        this.type = "date";
    }
}

export { DateInput };