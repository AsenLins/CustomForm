import { ContainerBase } from './containerBase'


class FormItem extends ContainerBase {
    constructor(option) {
        super(option);
        this.constrolList = [];
    }
}

export { FormItem };