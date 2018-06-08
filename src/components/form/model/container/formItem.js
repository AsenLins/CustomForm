const ContainerBase = require("../base/base");

class FormItem extends Base {
    constructor(option) {
        super(option);
        this.constrolList = {};
    }
}

module.exports = FormItem;