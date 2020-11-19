import {App} from "vue";
import './style/theme.scss'
//按需加载
export {default as UcButton} from './button/index'
export {default as UcSelect} from './select/index'

//全量加载
import UcButton from './button/index'
import UcSelect from './select/index'

export default function (app: App): void {
    app.use(UcButton)
    app.use(UcSelect)
}
