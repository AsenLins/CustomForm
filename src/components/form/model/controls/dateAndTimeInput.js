import { ControlBase } from './controlBase';

class DateAndTimeInput extends ControlBase {
    constructor(option) {
        super(option);
        this.type = "dateAndTime";
    }
}

export { DateAndTimeInput };