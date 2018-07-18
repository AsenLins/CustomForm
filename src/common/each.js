const each = {
    setAllItem(obj, fn) {
        if (obj instanceof Array) {
            for (var index = 0, objLength = obj.length; index < objLength; index++) {
                fn.call(this, obj, index);
            }
        } else if (obj instanceof Object) {
            for (var item in obj) {
                fn.call(this, obj, item);
            }
        }
    }
}



class Each {
    constructor(option) {
        this.list = option.list;
    }
    setAllItem() {

    }
    setList(list) {
        this.list = list;
    }
    object(targetkey, fn, list) {
        var list = list;
        if (list == undefined) {
            list = this.list;
        }
        for (var key in list) {
            if (key == targetkey) {
                fn.call(list, key);
            }
            if (list[key] instanceof Array) {
                for (var index = 0; index < list[key].length; index++) {
                    if (list[key][index] instanceof Object) {
                        this.object(targetkey, fn, list[key][index]);
                    }
                }
            }
        }
    }
    get() {

    }
}


export default each;