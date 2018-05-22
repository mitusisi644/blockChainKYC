import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/source/HelloWorld'
import Market from '@/source/market/market.vue'
import Finance from '@/source/finance/finance.vue'
import FinanceForm from '@/source/finance/financeForm.vue'
import Discuss from '@/source/discuss/discuss.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/discuss',
      name: 'discuss',
      component: Discuss
    }
  ]
})
