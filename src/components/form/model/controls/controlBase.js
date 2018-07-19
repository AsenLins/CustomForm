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
        this.verify = {
            isNotEmpty: false,
            rules: []
        }
        this.attrs = {
            isPrint: false,
            isNotEmpty: false
        }
        this.data = {
            optionData: []
        }
    }

    setVerify(verify) {
        this.verify = verify;
        return this;
    }
    setAttrs(attrs) {
        this.attrs = attrs;
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }




}

export { ControlBase }