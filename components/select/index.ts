import UcSelect from './select.vue'
import {App} from 'vue'

export default function (app: App): void {
    app.component(UcSelect.name, UcSelect)
}
