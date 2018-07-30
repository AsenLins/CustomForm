class Storage {
    constructor() {
        if (window.localStorage === undefined) {
            console.warn("浏览器不支持本地存储[window.localStorage===undefined]");
        } else {
            this.localStorage = window.localStorage;
        }
    }
    setItem(key, value) {
        this.localStorage.setItem(key, value);
    }
    getItem(key) {
        return this.localStorage[key];
    }
}


export default new Storage();