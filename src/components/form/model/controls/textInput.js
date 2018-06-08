const Base = require("../base/Base");

class TextInput extends Base {
    constructor(option) {
        super(option);
        this.type = "text";
    }
}

module.exports = TextInput;