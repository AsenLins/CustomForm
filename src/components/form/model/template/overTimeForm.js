/**
 * 加班申请模板
 */
import { Form } from "../container/form";
import { FormItem } from "../container/formItem";
import { Controls } from "../controls/index";



class OverTimeForm {
    constructor(option) {
        var OverTimeForm = new Form({
                name: "overTimeForm",
                method: "POST",
                enctype: "multipart/form-data"
            })
            .add(new FormItem({

                })
                .add(new Controls.DateAndTimeInput({
                    title: "开始时间"
                }))
                .add(new Controls.DateAndTimeInput({
                    title: "结束时间"
                }))
                .add(new Controls.Label({
                    title: "加班时长"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.FileUpload({
                    title: "附件"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.Title({
                    text: "审批采用会签形式，即需要选中的审批人均审批通过单据才算审批通过"
                }))
            )
        return OverTimeForm;
    }
}



export { OverTimeForm }