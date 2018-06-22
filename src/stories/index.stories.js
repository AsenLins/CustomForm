/* eslint-disable react/react-in-jsx-scope */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import vantUIForm from '../components/form/vantUIForm.vue';
import { templateFactory } from "../components/form/model/template/templateFactory"
console.log("templateFactory", templateFactory)
console.log("testForm", templateFactory["testForm"]());

storiesOf("表单设计器", module).add("表单容器Vant", () => ({
    components: { vantUIForm },

    data() {
        return {
            form: templateFactory["testForm"](),
            text: "123"
        }
    },

    template: '<vantUIForm></vantUIForm>',

    methods: { action: linkTo('Button') },
}))