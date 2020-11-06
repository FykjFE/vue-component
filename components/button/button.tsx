import { defineComponent } from 'vue';
export default defineComponent({
    name: 'UcButton',
    props: {
        title: {
            type: String,
            require: false,
            default: 'This is title.'
        }
    },
    setup() {
        return (
            <>
                <h1 class="title">
                 1111111
                </h1>
            </>
        )
    }
})
