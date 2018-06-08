const Base = require("../base/base");

class DateAndTimeInput extends Base {
    constructor(option) {
        super(option);
        this.type = "dateAndTime";
    }
}

module.exports = DateInput;