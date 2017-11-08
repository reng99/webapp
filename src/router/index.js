import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Buy from '@/components/buy'
import Sell from '@/components/sell'

import PersonalCenter from '@/components/personal_center'
import DemoItemDetail from '@/components/personalCenter/demo_item_detail'

import Login from '@/components/login'
import Register from '@/components/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/personalCenter/demoItemDetail',
      name: 'demoItemDetial',
      component: DemoItemDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
