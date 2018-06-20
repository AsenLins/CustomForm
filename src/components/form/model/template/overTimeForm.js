/**
 * 加班申请模板
 */
import { Form } from "../container/form";
import { FormItem } from "../container/formItem";
import { Controls } from "../controls/index";
import { VerifyRule } from '../verify/rule/index';



class OverTimeForm {
    constructor(option) {
        var OverTimeForm = new Form({
                name: "overTimeForm",
                method: "POST",
                enctype: "multipart/form-data"
            })
            .add(new FormItem({
                    isImportant: true
                })
                .add(new Controls.DateAndTimeInput({
                        title: "开始时间"
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
                    }).setAttrs({
                        print: true
                    })

                )
                .add(new Controls.DateAndTimeInput({
                        title: "结束时间"
                    }).setVerify({
                        rules: [{
                                tip: "结束时间不能为空",
                                rule: VerifyRule.base.notEmpty(),
                            },
                            {
                                tip: "结束时间必须大于开始时间",
                                rule: VerifyRule.date.compareBig("开始时间")
                            }
                        ]
                    })

                )
                .add(new Controls.Label({
                    title: "加班时长"
                }).setVerify({
                    tip: "加班时长不能空",
                    rule: VerifyRule.base.notEmpty()
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