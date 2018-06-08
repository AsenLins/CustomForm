const Base = require("../base/base");

class NumberInput extends Base {
    constructor(option) {
        super(option);
        this.type = "number";
    }
}

module.exports = NumberInput;