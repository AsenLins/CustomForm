import { RuleBase } from './ruleBase'

class VRDate extends RuleBase {
    constructor() {
        super({
            nameSpace: "date"
        });
    }
    compareBig(target) {
        return this.nameSpace + "_compare_big['" + target + "']";
    }
    compareSmall(target) {
        return this.nameSpace + "_compare_small['" + target + "']";
    }
}


export { VRDate }