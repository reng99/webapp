import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Buy from '@/components/buy'
import Sell from '@/components/sell'
import PersonalCenter from '@/components/personal_center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/sell',
      name: 'Sell',
      component: Sell
    },
    {
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    }
  ]
})
