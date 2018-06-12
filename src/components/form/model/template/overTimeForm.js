import { Form } from "../container/form";
import { FormItem } from "../container/formItem";
import { Controls } from "../controls/index";

var guid = require("guid");


class OverTimeForm {
    constructor(option) {
        var OverTimeForm = new Form({
                _id: guid.raw(),
                name: "asen",
                method: "POST",
                enctype: "multipart/form-data"
            })
            .add(new FormItem({
                    _id: guid.raw()
                })
                .add(new Controls.DateAndTimeInput({
                    _id: guid.raw(),
                    title: "开始时间"
                }))
                .add(new Controls.DateAndTimeInput({
                    _id: guid.raw(),
                    title: "结束时间"
                }))
                .add(new Controls.Label({
                    _id: guid.raw(),
                    title: "加班时长"
                }))
            )
            .add(new FormItem({
                    _id: guid.raw()
                })
                .add(new Controls.FileUpload({
                    _id: guid.raw(),
                    title: "附件"
                }))
            )
            .add(new FormItem({
                    _id: guid.raw()
                })
                .add(new Controls.Title({
                    _id: guid.raw(),
                    text: "审批采用会签形式，即需要选中的审批人均审批通过单据才算审批通过"
                }))
            )
        return OverTimeForm;
    }
}



export { OverTimeForm }