var guid = require("guid");

class Base {
    constructor(option) {
        if (option._id != undefined) {
            this._id = option._id;
        } else {
            this._id = guid.raw();
        }
        /*是否业务组件*/
        this.isImportant = false;
        this.name = option.name;
        if (option.title !== undefined) {
            this.title = option.title;
        }

        if (option.title !== undefined && option.name === undefined) {
            this.name = option.title;
        }

        if (option.value !== undefined) {
            this.value = option.value;
        }
    }
}

export { Base }