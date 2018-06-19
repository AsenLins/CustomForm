/**
 * 请假申请模板
 */

import { Form } from "../container/form";
import { FormItem } from "../container/formItem";
import { Controls } from "../controls/index";
import { Verify } from '../verify/index';

class VacationForm {
    constructor(option) {
        var vacationForm = new Form({
                name: "vacationForm",
                method: "POST",
                enctype: "multipart/form-data"
            })
            .add(new FormItem({

                })
                .add(new Controls.RadioBoxGroup({
                    title: "请假类型",
                }).setVerify(new Verify({
                    tip: "请假类型不能为空",
                    rules: "notEmpty"
                })))

            )
            .add(new FormItem({})
                .add(new Controls.DateAndTimeInput({
                        title: "开始时间",
                    }).setVerify(new Verify({
                        tip: "开始时间不能为空",
                        rules: [
                            "nontEmpty"
                        ]
                    }))

                )
                .add(new Controls.DateAndTimeInput({
                    title: "结束时间",
                }))
                .add(new Controls.TextInput({
                    title: "请假时长",
                }))
            )

        .add(new FormItem({})
                .add(new Controls.MultiText({
                    title: "请假事由",
                }))
            )
            .add(new FormItem({})
                .add(new Controls.FileUpload({
                    title: "说明附件",
                }))
            )

        return vacationForm;
    }
}



export { VacationForm }