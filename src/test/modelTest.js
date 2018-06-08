const Input = require("../components/form/model/base/input");
const CheckBox = require("../components/form/model/base/checkbox");
const TextInput = require("../components/form/model/mix/textInput");

var input = new Input({
    _controlId: "1",
    name: "input_1",
    placeholder: "请输入姓名",
    type: "text",
    value: "林先生"
});

var checkBox = new CheckBox({
    _controlId: "2",
    name: "checkBox_1"
});


var textInput = new TextInput({
    _controlId: "2",
    name: "textInput"
});


console.log("input", input);

console.log("checkBox", checkBox);


console.log("textInput", textInput);