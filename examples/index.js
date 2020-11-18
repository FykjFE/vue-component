import { createApp } from "vue";
import App from "./App.vue";
import {UcButton} from '../components/index'
createApp(App)
    .use(UcButton)
    .mount("#app");
