const Base = require("../base/base");

class MultiText extends Base {
    constructor(option) {
        super(option);
        this.type = "multiText";
    }
}

module.exports = MultiText;