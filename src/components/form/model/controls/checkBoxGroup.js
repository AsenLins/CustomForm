const Base = require("../base/base");
class CheckBoxGroup extends Base {
    constructor(option) {
        super(option);
        this.checkBoxList = [];
    }
}

module.exports = CheckBoxGroup;