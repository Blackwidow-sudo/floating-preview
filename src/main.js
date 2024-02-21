import Vue from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";

Vue.use(VueRouter);

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
