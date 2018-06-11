const Base = require("../base/base");

class TextInput extends Base {
    constructor(option) {
        super(option);
        this.type = "text";
    }
}

module.exports = TextInput;