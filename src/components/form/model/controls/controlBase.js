import { Base } from '../base/base';

class ControlBase extends Base {
    constructor(option) {
        super(option);
        this.verify = null;
        this.print = false;

    }
    setVerify(verify) {
        this.verify = verify;
    }
    setPrint(print) {
        this.print = print;
    }

}

export { ControlBase }