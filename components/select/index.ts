import UcSelect from './select.vue'
import VcOption from './option.vue'
import {App} from 'vue'

export default function (app: App): void {
    app.component(UcSelect.name, UcSelect)
    app.component(VcOption.name, VcOption)
}
