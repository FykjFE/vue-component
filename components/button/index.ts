import UcButton from './button.vue'
import {App} from 'vue'
import './button.scss'

export default function (app: App): void {
    app.component(UcButton.name, UcButton)
}

export {UcButton}
