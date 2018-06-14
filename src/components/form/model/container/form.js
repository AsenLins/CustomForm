import { ContainerBase } from "./containerBase"

class Form extends ContainerBase {
    constructor(option) {
        super(option);
        this.action = option.action;
        this.method = option.method;
        this.enctype = option.enctype;
        this.constrolList = [];
    }

}

export { Form }