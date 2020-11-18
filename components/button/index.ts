import UcButton from './button.vue'
import {App} from 'vue'
import './button.scss'
export default function (app: App): void {
    console.log('app')
    console.log(app)
    app.component(UcButton.name, UcButton)
}
