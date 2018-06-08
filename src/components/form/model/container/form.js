const ContainerBase = require("./containerBase");

class Form extends ContainerBase {
    constructor(option) {
        super(option);
        this.action = option.action;
        this.method = option.method;
        this.formControl = {};
    }
}