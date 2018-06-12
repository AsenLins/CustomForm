class Base {
    constructor(option) {
        this._id = option._id;
        this.name = option.name;
        if (option.title !== undefined) {
            this.title = option.title;
        }
        if (option.value !== undefined) {
            this.value = option.value;
        }
    }
}

export { Base }