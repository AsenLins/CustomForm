import { ControlBase } from './controlBase';

class ControlList extends ControlBase {
    constructor(option) {
        super(option);
        this.list = [];
    }
}

export { ControlList };