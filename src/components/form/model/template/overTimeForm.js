/**
 * 加班申请模板
 */
import { Form } from "../container/form";
import { FormItem } from "../container/formItem";
import { Controls } from "../controls/index";
//import { VerifyRule } from '../verify/rule/index';
import { Verify } from '../verify/verify';
import { VerifyRule } from '../verify/verifyRule';

class OverTimeForm {
    constructor(option) {
        var OverTimeForm = new Form({
                name: "overTimeForm",
                method: "POST",
                enctype: "multipart/form-data",
                title: "加班申请"
            })
            .add(new FormItem({
                    isImportant: true
                })
                .add(new Controls.DateAndTimeInput({
                        title: "开始时间",
                        notEmpty: true,
                    })
                    .setVerify(new Verify({
                        isNotEmpty: false,
                        rules: [
                            new VerifyRule({
                                tip: "开始时间不能为空",
                                rule: "notEmpty"
                            }),
                            new VerifyRule({
                                tip: "结束时间不能为空",
                                rule: "notEmpty"
                            })
                        ]
                    }))
                    /*
                    .setVerify({
                        rules: [{
                                tip: "开始时间不能为空",
                                rule: VerifyRule.base.notEmpty()
                            },
                            {
                                tip: "开始时间必须大于结束时间",
                                rule: VerifyRule.date.compareBig("endTime")
                            }
                        ]
                    }).setAttrs({
                        print: true
                    })
                    */


                )
                .add(new Controls.DateAndTimeInput({
                    title: "结束时间",
                    notEmpty: true
                }))
                .add(new Controls.TextInput({
                    title: "加班时长",
                    notEmpty: true,
                }))

            )
            .add(new FormItem({})
                .add(new Controls.MultiText({
                    title: "加班事由"
                }))


            )
            .add(new FormItem({})
                .add(new Controls.FileUpload({

                    title: "附件",
                }))

            )
            .add(new FormItem({})
                .add(new Controls.Title({
                    text: "审批采用会签形式，即需要选中的审批人均审批通过单据才算审批通过",

                }))
            )
        return OverTimeForm;
    }
}



export { OverTimeForm }