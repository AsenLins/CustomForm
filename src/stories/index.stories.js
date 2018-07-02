/* eslint-disable react/react-in-jsx-scope */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { templateFactory } from "../components/form/model/template/templateFactory"

import vantUIForm from '../components/form/vant/form.vue';
import formPanel from '../components/form/builder/formPanel';
import formStoreTest from '../components/form/vant/formStoreTest.vue'
import Vuex from 'vuex';

/*vant自定义组件 */
import vantPopRadioGroupBox from '../components/form/vant/control/vantPopRadioGroupBox.vue';
import vantPopCheckBoxGroup from '../components/form/vant/control/vantPopCheckBoxGroup.vue';
import vantPopDateTimePicket from '../components/form/vant/control/vantPopDateTimePicket.vue';


/*自定义store */
import formStore from '../store/modules/form/formDesign';



storiesOf("自定义组件", module).add("vantPopRadioGroupBox", () => ({
        components: { vantPopRadioGroupBox },
        data() {
            return {
                control: {
                    title: "测试popRadioGroupBox",
                    _id: "1",
                    show: false,
                    controlList: [{
                            _id: "r1",
                            keyName: "单选1"
                        },
                        {
                            _id: "r2",
                            keyName: "单选2"
                        }
                    ]
                }
            }
        },
        template: '<vantPopRadioGroupBox :control="control" ></vantPopRadioGroupBox>',
    }))
    .add("vantPopCheckBoxGroup", () => ({
        components: { vantPopCheckBoxGroup },
        data() {
            return {
                control: {
                    title: "测试vantPopCheckBoxGroup",
                    _id: "1",
                    show: false,
                    vmodel: [],
                    controlList: [{
                            _id: "2",
                            keyName: "复选1",
                        },
                        {
                            _id: "1",
                            keyName: "复选2",
                        }
                    ]
                }
            }
        },
        template: '<vantPopCheckBoxGroup :control="control" ></vantPopCheckBoxGroup>',
    }))
    .add("vantPopDateTimePicket", () => ({
        components: { vantPopDateTimePicket },
        data() {
            return {
                control: {
                    title: "vantPopDateTimePicket(date)",
                    _id: "1",
                    show: false,
                    vmodel: "",
                    type: "date"
                }
            }
        },
        template: '<vantPopDateTimePicket :control="control" ></vantPopDateTimePicket>',
    }))





var formPanelDesign = templateFactory["testForm"]();
formPanelDesign.title = "表单设计器";

var fromRenderForm = templateFactory["testForm"]();
fromRenderForm.title = "渲染表单"

storiesOf("表单设计器", module).add("表单容器Vant", () => ({
    components: { vantUIForm },

    data() {
        return {
            form: fromRenderForm,
        }
    },
    template: '<vantUIForm @testFather="testFather"  :form="form"  ></vantUIForm>',
    methods: {
        testFather: function(control) {
            console.log(control);
            control.show = true;
        }
    }
})).add("表单设计容器", () => ({
    components: { formPanel },

    data() {
        return {
            form: formPanelDesign
        }

    },
    template: '<formPanel :form="form"></formPanel>',

}))



var formStores = formStore;

var store = new Vuex.Store({
    modules: {
        formStores
    }
})




var formStateObj = templateFactory["testForm"]();
formStateObj.title = "表单设计器";

storiesOf("测试store", module).add("测试store", () => ({
    components: { formStoreTest },
    store,
    data() {
        return {
            form: formStateObj,
        }
    },
    template: '<formStoreTest :form="form"></formStoreTest>',

}))