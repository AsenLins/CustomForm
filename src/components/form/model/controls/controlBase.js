import { Base } from '../base/base';

class ControlBase extends Base {
    constructor(option) {
        super(option);
        this.vmodel;
        this.placeholder = "";
        if (option.notEmpty !== undefined) {
            this.notEmpty = option.notEmpty;
        }
        if (option.title !== undefined) {
            this.placeholder = "请输入" + this.title;
        }

        this.coreData = {
            verify: [],
            attrs: {},
            data: {},
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
        this.coreData.data = data;
        return this;
    }



}

export { ControlBase }