import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/source/home'
import Market from '@/source/market/market.vue'
import Finance from '@/source/finance/finance.vue'
import FinanceForm from '@/source/finance/financeForm.vue'
import Discuss from '@/source/discuss/discuss.vue'
import Demo from '@/source/finance/demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/market',
      name: 'market',
      component: Market
    },
    {
      path: '/finance',
      name: 'finance',
      component: Finance,
    },
    {
      path: '/financeForm',
      name: 'financeForm',
      component: FinanceForm
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/discuss',
      name: 'discuss',
      component: Discuss
    }
  ]
})
