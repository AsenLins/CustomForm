import { VerifyBase } from './verifyBase';
import { VerifyRule } from './verifyRule';


const Verify = {
    notEmpty: function() {
        return new VerifyBase({
            type: verifyEnum.type.noEmpty
        });
    },
    define: function(option) {
        return new VerifyBase({
            tip: option.tip,
            reg: option.reg,
            type: verifyEnum.type.defind
        });
    },
    fileLimit: function(option) {

    }

}

export { Verify }