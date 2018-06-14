import { Base } from '../base/base';

/**
 *
 *
 * @class ContainerBase
 * @extends {Base}
 */


class ContainerBase extends Base {
    constructor(option) {
        super(option);
    }

    add(control) {
        this.constrolList.push(control);
        return this;
    }

    remove(index) {
        this.constrolList.remove(index);
        //delete this[_id];
        return this;
    }

    find(_id) {
        return this.constrolList[_id];
    }

    findList(ids) {
        if (!(ids instanceof Array) || ids.length == 0) {
            return [];
        }
        var listArray = [];
        for (var index = 0; index < ids.length; index++) {
            if (this.control[ids[index]] != undefined) {
                listArray.push = this.control[ids[index]];
            }
        }
        return listArray;
    }
}

export { ContainerBase };