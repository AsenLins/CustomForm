import { ControlBase } from '../controlBase';

/**
 * 业务组件-时间选择
 */
class BNDateTime extends ControlBase {
    constructor(option) {
        super(option);
        this.type = "BNDateTime"
        this.isImportant = true;
    }
}


export { BNDateTime }