import { Base } from '../base/base';


class TextInput extends Base {
    constructor(option) {
        super(option);
        this.type = "text";
    }
}

export { TextInput };