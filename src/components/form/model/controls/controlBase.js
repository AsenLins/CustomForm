import { Base } from '../base/base';

class ControlBase extends Base {
    constructor(option) {
        super(option);
        this.coreData = {
            verify: [],
            attrs: {},
            data: {}
        }

    }
    setVerify(verify) {
        this.coreData.verify.push(verify);
        return this;
    }
    setAttrs(attrs) {
        this.coreData.attrs = attrs;
        return this;
    }
    setData(data) {
        this.targetFrom.coreData.data = data;
        return this;
    }

}

export { ControlBase }