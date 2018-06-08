const Input = require("../base/base");

class DateInput extends Input {
    constructor(option) {
        super(option);
        this.type = "date";
    }
}

module.exports = DateInput;