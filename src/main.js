// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import 'configPath'
import HeaderNav from './components/header-nav'
import FooterNav from './components/footer-nav'
import MenuNav from './components/menu-nav'
import MarketData from './components/market-data'
import axios from './components/data-transport'
import lssPlugin from './components/plugin-install'
import AutomatedForm from './components/automated-form'
import tableForm from './components/table-form'
import NavTag from './components/nav-tag'


Vue.use(lssPlugin)
Vue.use(ElementUI)
Vue.use(iView)
Vue.use(VueResource)

Vue.prototype.theme = 'dark'
Vue.prototype.$axios = axios
Vue.component("MenuNav",MenuNav)
Vue.component("HeaderNav",HeaderNav)
Vue.component("FooterNav",FooterNav)
Vue.component("MarketData",MarketData)
Vue.component("AutomatedForm",AutomatedForm)
Vue.component("tableForm",tableForm)
Vue.component("NavTag",NavTag)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
