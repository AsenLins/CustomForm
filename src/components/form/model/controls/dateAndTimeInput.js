import { ControlBase } from './controlBase';

class DateAndTimeInput extends ControlBase {
    constructor(option) {
        super(option);
        this.type = "dateAndTime";
        this.show = false;
        this.placeholder = "";
        if (this.title != undefined) {
            this.placeholder = "请选择" + this.title;
        }
    }
}

export { DateAndTimeInput };