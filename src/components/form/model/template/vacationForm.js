const Form = require("../container/form");
const FromItem = require("../container/formItem");
const Controls = require("../controls/index");



var form = new Form({
        _id: "1",
        method: "GET"

    })
    .add(new FromItem({
        _id: "2",
        name: "formItem2"
    }))
    .add(new FromItem({
        _id: "3",
        name: "formItem3"
    }))
    .add(new FromItem({
            _id: "4",
            name: "formItem3"
        })
        .add(new Controls.TextInput({
            _id: "5",
            name: "control_textBox"
        }))
        .add(new Controls.NumInput({
            _id: "6",
            name: "control_NumBox"
        }))
    );

var form4 = form.find("4");
console.log(form4);