class Verify {
    constructor(verify) {
        this.name = verify.name;
        //this.targetName = verify.targetName;
        this.tip = verify.tip;
        this.reg = verify.reg;
    }
}
class VerifyBuilder {
    constructor(formObj) {
        if (formObj.verify === undefined) {
            formObj.verify = [];
        }

        this.verify = formObj.verify;
    }
    addVerify(verifyObj) {
        this.verify.push(verifyObj);
    }
    setVerify(verifyObj) {
        this.verify = verifyObj;
    }

}

export { VerifyBuilder }