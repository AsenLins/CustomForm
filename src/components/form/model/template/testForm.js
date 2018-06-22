/**
 * 测试模板
 */
import { Form } from "../container/form";
import { FormItem } from "../container/formItem";
import { Controls } from "../controls/index";
import { VerifyRule } from '../verify/rule/index';


class TestForm {
    constructor() {
        var testForm = new Form({
                name: "overTimeForm",
                method: "POST",
                enctype: "multipart/form-data",
                title: "测试表单"
            })
            .add(new FormItem({})
                .add(new Controls.TextInput({
                    title: "测试文本",
                }))
            )
            .add(new FormItem({})
                .add(new Controls.DateAndTimeInput({
                    title: "测试时间（包时分秒）"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.DateInput({
                    title: "测试时间（只有年月日）"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.FileUpload({
                    title: "测试文件上传"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.NumInput({
                    title: "测试数字输入"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.MoneyInput({
                    title: "测试金额输入"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.MultiText({
                    title: "测试多行文本框"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.CheckBoxGroup({
                    title: "测试CheckBox"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.RadioBoxGroup({
                    title: "测试radioBox"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.Label({
                    text: "测试Lable"
                }))
            )

        return testForm;

    }
}


export { TestForm }