import { storiesOf } from '@storybook/vue';



storiesOf("", module).add("测试store", () => ({
    components: { formStoreTest },
    store,
    data() {
        return {
            form: formStateObj,
        }
    },
    template: '<formStoreTest :form="form"></formStoreTest>',

}))


export default {}