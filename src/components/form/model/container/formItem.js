const ContainerBase = require("./containerBase");

class FormItem extends ContainerBase {
    constructor(option) {
        super(option);
        this.constrolList = {};
    }
}

module.exports = FormItem;