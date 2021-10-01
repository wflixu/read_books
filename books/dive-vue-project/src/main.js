import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// app.config.warnHandler =  function (msg, vm, trace){
//     console.log("msg", msg);
//     console.log("trace", trace)
// }

app.config.globalProperties.appName= '深入vue开发实战！'

app.mount("#app");
