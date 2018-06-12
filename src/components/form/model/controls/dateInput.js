import { Base } from '../base/base';

class DateInput extends Base {
    constructor(option) {
        super(option);
        this.type = "date";
    }
}

export { DateInput };