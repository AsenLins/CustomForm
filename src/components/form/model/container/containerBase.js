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
        /*是否业务组件*/
        this.isImportant = false;
    }

    add(control) {
        control.parent = this;
        this.controlList.push(control);

        return this;
    }

    remove(index) {
        this.controlList.remove(index);
        //delete this[_id];
        return this;
    }

    find(_id) {
        return this.controlList[_id];
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
    setImportant() {
        this.isImportant = true;
    }
}

export { ContainerBase };