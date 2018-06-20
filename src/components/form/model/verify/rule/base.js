import { RuleBase } from './ruleBase'

class VRBase extends RuleBase {
    constructor() {
        super({
            nameSpace: "base"
        });
    }
    notEmpty() {
        return this.nameSpace + "_notEmpty";
    }
}


export { VRBase }