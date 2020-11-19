import {createApp} from "vue";
import App from "./App.vue";
// import RcComponent from '../components/index'//全量加载组件库
import '../components/style/theme.scss'//加载样式
import RcComponent from '../lib/index'//全量加载组件库
createApp(App)
    .use(RcComponent)
    .mount("#app");
