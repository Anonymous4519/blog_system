import Vue from "vue";
import App from "./App.vue";
// 引入element-ui
import ElementUI from "element-ui";
// 引入路由
import router from "@/router";
// 引入vuex
import store from "@/store";
// 引入reset.css
import "reset-css";
import "element-ui/lib/theme-chalk/index.css";

// 引入全局组件header
import Header from "@/components/Header";
Vue.component(Header.name, Header);

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
