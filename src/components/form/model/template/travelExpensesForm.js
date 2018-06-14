/**
 * 出差申请费用模板
 */

import { Form } from "../container/form";
import { FormItem } from "../container/formItem";
import { Controls } from "../controls/index";


class TravelExpensesForm {
    constructor(option) {
        var travelExpensesForm = new Form({
                name: "travelExpensesForm",
                method: "POST",
                enctype: "multipart/form-data"
            })
            .add(new FormItem({

                })
                .add(new Controls.Title({
                    text: "去程"
                }))

            )
            .add(new FormItem({})
                .add(new Controls.CheckBoxGroup({
                    title: "交通工具"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.MoneyInput({
                    title: "金额"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.DateInput({
                    title: "日期"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.Title({
                    text: "回程"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.CheckBoxGroup({
                    title: "交通工具"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.MoneyInput({
                    title: "金额"
                }))
            )
            .add(new FormItem({})
                .add(new Controls.DateInput({
                    title: "日期"
                }))
            )

        .add(new FormItem({})
            .add(new Controls.Title({
                text: "酒店住宿"
            }))
        )

        .add(new FormItem({})
            .add(new Controls.MoneyInput({
                title: "金额"
            }))
        )

        .add(new FormItem({})
            .add(new Controls.MultiText({
                title: "备注"
            }))
        )

        .add(new FormItem({})
            .add(new Controls.FileUpload({
                title: "费用凭证"
            }))
        )

        return travelExpensesForm;
    }
}



export { TravelExpensesForm }