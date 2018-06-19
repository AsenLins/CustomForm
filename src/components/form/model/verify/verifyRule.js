const verifyRuleTag = {
    date: "matchDate",
    num: "number",
    notEmpty: "notEmpty"
}


class VerifyRule {
    constructor() {

    }
    notEmpty() {
        return "notEmpty"
    }
    Isdate(targetName) {
        return ""
    }
    dataMatchBig(targetName) {
        return "matchDate_big['" + targetName + "']";
    }
    dateMatchSmall(targetName) {
        return "matchDate_small['" + targetName + "']";
    }


}