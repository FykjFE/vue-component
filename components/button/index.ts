import UcButton from './button.vue'
import {App} from 'vue'
export default function (app: App): void {
    app.component(UcButton.name, UcButton)
}
