/**
 * 请假申请模板
 */

import { Form } from "../container/form";
import { FormItem } from "../container/formItem";
import { Controls } from "../controls/index";
import { VerifyRule } from '../verify/rule/index';

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
                }).setVerify({
                    tip: "请假类型不能为空",
                    rule: VerifyRule.base.notEmpty()
                }))

            )
            .add(new FormItem({})
                .add(new Controls.DateAndTimeInput({
                        title: "开始时间",
                    }).setVerify({
                        rules: [{
                                tip: "开始时间不能为空",
                                rule: VerifyRule.base.notEmpty()
                            },
                            {
                                tip: "开始时间必须大于结束时间",
                                rule: VerifyRule.date.compareBig("结束时间")
                            }
                        ]


                    })

                )
                .add(new Controls.DateAndTimeInput({
                        title: "结束时间",
                    }).setVerify({
                        rules: [{
                            tip: "结束时间不能为空",
                            rule: VerifyRule.base.notEmpty()
                        }, {
                            tip: "结束时间必须大于开始时间",
                            rule: VerifyRule.date.compareBig("开始时间")
                        }]
                    })

                )
                .add(new Controls.TextInput({
                    title: "请假时长",
                }).setVerify({
                    tip: "请假时长不能为空",
                    rule: VerifyRule.base.notEmpty()
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