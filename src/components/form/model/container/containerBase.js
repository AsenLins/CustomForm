const Base = require("../base/base");

class ContainerBase extends Base {
    constructor(option) {
        super(option);
    }
    add(control) {
        this.constrolList[control._id] = control;
        return this;
    }

    remove(_id) {
        delete this[_id];
        return this;
    }
}

module.exports = ContainerBase;