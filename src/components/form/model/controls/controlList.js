const Base = require("../base/base");

class ControlList extends Base {
    constructor(option) {
        super(option);
        this.list = [];
    }
}

module.exports = ControlList;