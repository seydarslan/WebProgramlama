import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRecaptcha from "vue-recaptcha";
import Antd from 'ant-design-vue';
import VueNumberInput from '@chenfengyuan/vue-number-input';
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(VueNumberInput);
Vue.use(VueRecaptcha);
Vue.use(VueRouter);

import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Pagination from "./components/Pagination";
import ShopingCard from "./components/ShopingCard";
import SideMenu from "./components/SideMenu";

const router = new VueRouter({
  mode:'history',
  base: __dirname,
  routes:[
    {
      path: '/login', component: Login
    },
    {
      path: '/signin', component: SignIn
    },
    {
      path: '/pagination', component: Pagination
    },
    {
      path: '/sepetim', component: ShopingCard
    },
    {path: '/', component: SideMenu}
  ]
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
