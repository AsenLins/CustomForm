const Base = require("../base/base");
class RadioGroup extends Base {
    constructor(option) {
        super(option);
        this.checkBoxList = [];
    }
}

module.exports = RadioGroup;