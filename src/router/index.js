import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/components/index'], resolve)
const CharacterData = resolve => require(['@/components/snippet/characterData'], resolve)

const Buy = resolve => require(['@/components/buy'], resolve)

const Sell = resolve => require(['@/components/sell'], resolve)
const stepOne = resolve => require(['@/components/seller/stepOne'], resolve)
const stepTwo = resolve => require(['@/components/seller/stepTwo'], resolve)
const result = resolve => require(['@/components/seller/result'], resolve)

const schXC = resolve => require(['@/components/schXC'], resolve)
const BuySch = resolve => require(['@/components/buySch'], resolve)

const hok = resolve => require(['@/components/hok'], resolve)

const gameSearch = resolve => require(['@/components/game/gameSearch'], resolve)
const GameDet = resolve => require(['@/components/game/gameDet'],resolve)
const gameList = resolve => require(['@/components/game/gameList'], resolve)
const gameOrder = resolve => require(['@/components/game/gameOrder'], resolve)
const gamePay = resolve => require(['@/components/game/gamePay'], resolve)


const PersonalCenter = resolve => require(['@/components/personal_center'], resolve)

const buyOrder = resolve => require(['@/components/personalCenter/buyOrder'], resolve)
const buyOrderData = resolve => require(['@/components/personalCenter/buyOrderData'], resolve)
const orderDetail = resolve => require(['@/components/personalCenter/orderDetail'], resolve)


const myMessage = resolve => require(['@/components/personalCenter/myMessage'], resolve)
const myMessageData = resolve => require(['@/components/personalCenter/myMessageData'], resolve)
const messageDetail = resolve => require(['@/components/personalCenter/messageDetail'], resolve)


const Login = resolve => require(['@/components/login'], resolve)
const Register = resolve => require(['@/components/register'], resolve)
const Forget = resolve => require(['@/components/forget'],resolve)

const Notice = resolve => require(['@/components/notice/index'],resolve)
const Article = resolve => require(['@/components/notice/article'],resolve)

const help = resolve => require(['@/components/help/help'], resolve)
const helpList = resolve => require(['@/components/help/helpList'], resolve)
const helpDet = resolve => require(['@/components/help/helpDet'], resolve)
const helpDetb2 = resolve => require(['@/components/help/helpDetb2'], resolve)
const helpDetb9 = resolve => require(['@/components/help/helpDetb9'], resolve)
const helpDetc1 = resolve => require(['@/components/help/helpDetc1'], resolve)
const helpDetd3 = resolve => require(['@/components/help/helpDetd3'], resolve)
const helpDete3 = resolve => require(['@/components/help/helpDete3'], resolve)
const helpDete4 = resolve => require(['@/components/help/helpDete4'], resolve)
const helpDete5 = resolve => require(['@/components/help/helpDete5'], resolve)

const accountSetting = resolve => require(['@/components/personalCenter/accountSetting/index'], resolve)
const personalData = resolve => require(['@/components/personalCenter/accountSetting/personalData'], resolve)
const modifyNickname = resolve => require(['@/components/personalCenter/accountSetting/modifyNickname'], resolve)
const modifyQq = resolve => require(['@/components/personalCenter/accountSetting/modifyQq'], resolve)
const showPhoneNum = resolve => require(['@/components/personalCenter/accountSetting/showPhoneNum'], resolve)
const verifyPhone = resolve => require(['@/components/personalCenter/accountSetting/verifyPhone'], resolve)
const modifyPwd = resolve => require(['@/components/personalCenter/accountSetting/modifyPwd'], resolve)
const verifyUserId = resolve => require(['@/components/personalCenter/accountSetting/verifyUserId'], resolve)
const cashierAccount = resolve => require(['@/components/personalCenter/accountSetting/cashierAccount'], resolve)
const verifyUserIdSucc = resolve => require(['@/components/personalCenter/accountSetting/verifyUserIdSucc'], resolve)

// 卖家收入明细
const accountIncomeList = resolve => require(['@/components/personalCenter/accountIncomeList'], resolve)
const accountIncomeDetail = resolve => require(['@/components/personalCenter/accountIncomeDetail'], resolve)

const p404 = resolve => require(['@/components/404'], resolve)
const error = resolve => require(['@/components/error'], resolve)

Vue.use(Router)


const router = new Router({
  mode: "history",
  base:'/m/',
  scrollBehavior:(to, from, savedPosition) => {
    if(to.meta.scrollToTop&&(to.path!=from.path)){
      return {x:0,y:0}
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      component: Index,
      children: [{path: '',name: 'characterData',component: CharacterData}]
    },

    {path: '/buy',name: 'Buy',component: Buy},
    {path: '/gameSearch',name: 'gameSearch',component: gameSearch},

    {path: '/buySch',name: 'buySch',component: BuySch},
    {path: '/gameList',name: 'gameList',component: gameList},
    {path: '/GameDet',name:'GameDet',component:GameDet, meta: { scrollToTop: true }},

    {path: '/sell',name: 'Sell',component: Sell,meta: { requireAuth: true }},//我要卖 暂时未对应pc路由
    {path: '/stepOne',name: 'stepOne',component: stepOne,meta: { requireAuth: true }},
    {path: '/stepTwo',name: 'stepTwo',component: stepTwo,meta: { requireAuth: true }},
    {path: '/result',name: 'result',component: result,meta: { requireAuth: true }},

    {path: '/schXC',name: 'schXC',component: schXC},//首充号续充 暂时未对应pc路由

    {path: '/gameOrder',name: 'gameOrder',component: gameOrder,meta: { requireAuth: true }},//确定订单 暂时未对应pc路由
    {path: '/gamePay',name: 'gamePay',component: gamePay,meta: { requireAuth: true }},//支付 暂时未对应pc路由

    {path: '/hok',name: 'hok',component: hok},

    {path: '/personalCenter',name: 'PersonalCenter',component: PersonalCenter, meta: { scrollToTop: true }},
    {
      path: '/myMessage',component: myMessage,
      children: [
        {
          path: '/',
          name: 'myMessageData',
          component: myMessageData
        }
      ]
    },
    {path: '/messageDetail',name: 'messageDetail',component: messageDetail},
    {path: '/accountSetting',name: 'accountSetting',component: accountSetting},
    {path: '/personalData',name: 'personalData',component: personalData},
    {path: '/modifyNickname',name: 'modifyNickname',component: modifyNickname},
    {path: '/modifyQq',name: 'modifyQq',component: modifyQq},
    {path: '/showPhoneNum',name: 'showPhoneNum',component: showPhoneNum},
    {path: '/verifyPhone',name: 'verifyPhone',component: verifyPhone},
    {path: '/modifyPwd',name: 'modifyPwd',component: modifyPwd},
    {path: '/verifyUserId',name: 'verifyUserId',component: verifyUserId},
    {path: '/verifyUserIdSucc',name: 'verifyUserIdSucc',component: verifyUserIdSucc},
    {path: '/cashierAccount',name: 'cashierAccount',component: cashierAccount},

    {path: '/accountIncomeList',name: 'accountIncomeList',component: accountIncomeList},
    {path: '/accountIncomeDetail',name: 'accountIncomeDetail',component: accountIncomeDetail},

    {path: '/buyOrder',component:buyOrder,
      children: [
        {
          path: '/',
          name: 'buyOrderData',
          component: buyOrderData
        }
      ]
    },
    {path: '/orderDetail',name: 'orderDetail',component: orderDetail,meta: { requireAuth: true }},
    {path: '/login',name: 'Login',component: Login},
    {path: '/register',name: 'Register',component: Register},
    {path: '/forget',name: 'Forget',component: Forget},

    {path:'/notice',name:'Notice',component:Notice},
    {path:'/article',name:'Article',component:Article},

    {path: '/help', name: 'help', component: help},
    {path: '/helpDet',name: 'helpDet',component: helpDet},
    {path: '/helpList',name: 'helpList',component: helpList},
    {path: '/helpDetb2',name: 'helpDetb2',component: helpDetb2},
    {path: '/helpDetb9',name: 'helpDetb9',component: helpDetb9},
    {path: '/helpDetc1',name: 'helpDetc1',component: helpDetc1},
    {path: '/helpDetd3',name: 'helpDetd3',component: helpDetd3},
    {path: '/helpDete3',name: 'helpDete3',component: helpDete3, meta: { scrollToTop: true }},
    {path: '/helpDete4',name: 'helpDete4',component: helpDete4},
    {path: '/helpDete5',name: 'helpDete5',component: helpDete5},

    {path: '/p404',name: 'p404',component: p404},
    {path: '/error',name: 'error',component: error},
    {path: '*', component: p404}
  ]
})

//未在路由表中的 重定向到首页或者p404
router.beforeEach((to, from, next) => {
  $(".loading-wrap").find("img").css("width","40px");//防止loading图大小被改
  $(".loading-wrap").show();
  if (to.matched.length ===0) {//是否在路由表内
    // from.name ? next({ name:from.name }) : next('/p404');
    next('/p404');
  }
  if (to.meta.requireAuth) {//是否需要登录权限
        if (getcookie("logindata")) {
            next();
        }else {
            next("/login");
        }
    }else {
        next();
    }
});


router.afterEach(()=>{
  $(".loading-wrap").hide();
})

function getcookie(c_name) {
    if (document.cookie.length>0){
      let c_start=document.cookie.indexOf(c_name + "=")
      if (c_start!=-1){
        c_start=c_start + c_name.length+1
        let c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
        return unescape(document.cookie.substring(c_start,c_end))
      }
    }
  };

export default router
