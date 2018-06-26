import { ContainerBase } from './containerBase'


class FormItem extends ContainerBase {
    constructor(option) {
        super(option);
        this.controlList = [];
    }
}

export { FormItem };