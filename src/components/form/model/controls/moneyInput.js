const Base = require("../base/base");

class MoneyInput extends Base {
    constructor(option) {
        super(option);
        this.type = "money";
    }
}

module.exports = MoneyInput;