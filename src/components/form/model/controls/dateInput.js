const Base = require("../base/base");

class DateInput extends Base {
    constructor(option) {
        super(option);
        this.type = "date";
    }
}

module.exports = DateInput;