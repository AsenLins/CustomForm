const Base = require("../base/base");

class Title extends Base {
    constructor(option) {
        super(option);
        this.type = "title";
        this.text = option.text;
    }
}

module.exports = Title;