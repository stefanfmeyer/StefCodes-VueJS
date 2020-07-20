import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/App.scss";

Vue.config.productionTip = false;

// CUSTOM DIRECTIVES
// Animate On Scroll
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
