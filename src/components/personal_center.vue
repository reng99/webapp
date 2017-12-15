<template>
  <div id="userCenter">
    <div class="main">
      <div class="pc_top">
        <div class="pc_top_main">
          <div class="pc_info" v-if="isLogin">
            <div class="row">
              <div class="col s3 no-padding-right">
                <img src="../../static/imgs/yuna.jpg" class="headImg">
              </div>
              <div class="col s9 no-padding-left">
                <p class="userPhone">{{userData}}</p>
                <p class="userEarn">欢迎回来</p>
              </div>
            </div>
          </div>
          <div class="pc_none" v-if="!isLogin">
            <p>欢迎来到淘米淘</p>
            <router-link :to="{ path:'/login'}">登录 / 注册</router-link>
          </div>
        </div>
        <div class="pc_top_bg"></div>
      </div>
      <div class="three-tabs row no-margin">
        <router-link class="col s4 center" v-for="(item,index) in tabNames" :to="{path:'/personalCenter',query:{state:item.state}}" :key="index" @click.native="activeTab(index)">
          <p class="tab-name main-color" v-if="activeTabClass==index">{{item.name}}</p>
          <p class="tab-name" v-else>{{item.name}}</p>
          <span class="underline bg-main" v-show="activeTabClass==index"></span>
        </router-link>
      </div>
      <div class="h10"></div>
      <div class="tmt-user-buyer-order">
        <div class="tubo-head"><router-link :to="{ path:'/buyOrder', query: {state:'all'}}" class="right no-margin no-padding">我的订单<i></i></router-link></div>
        <div class="googleUI-head googleUI-top-line">
          <div class="h10"></div>
          <div class="row no-margin white">
            <div class="col s3 center no-padding">
              <router-link :to="{ path:'/buyOrder', query: {state:'DZF'}}" class="tmt-footer-link">
                <i class="tmt-icons-dfk"></i>
                <span>待支付</span>
              </router-link>
            </div>
              <div class="col s3 center no-padding">
              <router-link :to="{ path:'/buyOrder', query: {state:'DFH'}}" class="tmt-footer-link">
                <i class="tmt-icons-dsh"></i>
                <span>代发货</span>
              </router-link>
              </div>
                <div class="col s3 center no-padding">
              <router-link :to="{ path:'/buyOrder', query: {state:'DYHQR'}}" class="tmt-footer-link">
                <i class="tmt-icons-ywc"></i>
                <span>待收货</span>
              </router-link>
                </div>
                  <div class="col s3 center no-padding">
              <router-link :to="{ path:'/buyOrder', query: {state:'QX'}}" class="tmt-footer-link">
                <i class="tmt-icons-gb"></i>
                <span>已关闭</span>
              </router-link>
            </div>
          </div>
          <div class="h10"></div>
        </div>
      </div>
      <div class="h10"></div>
      <div class="pc_list_quick">
        <ul>
          <li>
            <router-link :to="{path:'/accountSetting'}"><i class="pc_list_iconA"></i><p>账号设置</p><span></span></router-link>
          </li>
          <li>
            <router-link :to="{path:'/myMessage',query:{state:'TRANSACTION'}}"><i class="pc_list_iconB"></i><p>我的消息</p><span></span></router-link>
          </li>
          <li>
            <router-link :to="{path:'/help',query:{id:1}}"><i class="pc_list_iconC"></i><p>帮助中心</p><span></span></router-link>
          </li>
          <li>
            <router-link :to="{path:'/personalCenter/customerService'}"><i class="pc_list_iconD"></i><p>联系客服</p><span></span></router-link>
          </li>
          <li>
            <router-link :to="{path:'/personalCenter/myMessage',query:{state:'TRANSACTION'}}"><i class="pc_list_iconE"></i><p>意见反馈</p><span></span></router-link>
          </li>
        </ul>
      </div>
    </div>
    <toolbar :toolId=toolId />
  </div>
</template>

<script>
import toolbar from './common/toolbar.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      toolId: 3,
      userData:'',
      isLogin:false,
      activeTabClass:0,
      tabNames:[
        {
          'name':'买家中心',
          'state': 'buyCtr'
        },
        {
          'name':'卖家中心',
          'state': 'sellCtr'
        },
        {
          'name':'店铺管理',
          'state': 'shopMgr'
        }
      ],
    }
  },
  created: function () {
    this.getUserData();
    this.loadOnTop();
  },
  mounted(){

  },
  components: {
    toolbar
  },
  methods:{
    loadOnTop:function () {
      window.scrollTo(0,0);
    },
    getUserData:function () {
      let that = this;
      if(that.$getCookie('logindata')){
        that.userData=JSON.parse(that.$getCookie('logindata')).account.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
        that.isLogin = true;
      }else{
        that.isLogin = false
      }
    },
    activeTab : function (index){
      this.activeTabClass = index;
    }
  }
}
</script>

<style scoped lang="less">
  #userCenter{
    .main {
      max-width:60rem;
      margin:0 auto;
      overflow: hidden;
      .pc_top{
        height: 12rem;width: 100%;background:#FFF;position: relative;
        .pc_top_bg{width:200%;position: absolute;left: -50%;top:-2rem;height: 6rem;background: #09c7d1;z-index: 4;}
        .pc_top_main{width: 170%;position: absolute;left: -35%;top:-2rem;height: 14rem;background: #09c7d1 url('../../static/icons/svg/grzx_bg.svg') center bottom no-repeat;background-size:60%;border-radius:200%;z-index: 5;overflow: hidden;
          .pc_info{min-width:320px;margin: 0 auto;padding-top:4.2rem;width:55%;
            .headImg{width:6rem;height:6rem;border-radius:10rem;}
            .userPhone{margin: 0;padding:.8rem 0 0 .5rem;color:#FFF;font-size:2.2rem;line-height: 2.6rem;}
            .userEarn{margin: 0;padding:0 0 0 .5rem;color:#FFF;font-size:1.4rem;line-height:2rem;}
          }
          .pc_none{
            min-width:320px;margin: 0 auto;padding-top:4.2rem;width: 100%;
            text-align: center;
            p{text-align: center;color:#FFF;font-size:2rem;margin-bottom: 1rem;}
            a{padding:.3rem 2rem;border-radius: 3rem;border: 1px solid #FFF;color:#FFF;}
          }
        }
      }
      .three-tabs{
        width:100%;
        height:4.4rem;
        background:#fff;
        z-index: 9999;
        .tab-name{
          height:4.2rem;
          line-height:4.2rem;
          color: #999;
          font-size: 1.2rem;
        }
        .underline{
          display:block;
          width:1.6rem;
          height:.2rem;
          margin:0 auto;
        }
      }
      .tmt-icons-dfk{background: url('../../static/icons/svg/buy_dfk.svg') center center no-repeat;background-size: 98%;}
      .tmt-icons-dsh{background: url('../../static/icons/svg/buy_dsh.svg') center center no-repeat;background-size: 98%;}
      .tmt-icons-ywc{background: url('../../static/icons/svg/buy_ywc.svg') center center no-repeat;background-size:87%;}
      .tmt-icons-gb{background: url('../../static/icons/svg/buy_gb.svg') center center no-repeat;background-size: 81%;}
      .pc_list_quick{width: 100%;background: #FFF;padding:0 .9rem;margin-bottom: 5.4rem;
        ul{
          li{line-height:5rem;height:5rem;font-size: 1.2rem;border-bottom: 1px solid #f3f3f3;width: 100%;}
          li a{color:#333;display: block;width: 100%;height: 5rem;}
          li:last-child{border-bottom: none;}
          li i{display: block;float: left;height:5rem;width: 3.2rem;}
          li p{float: left;display:block;width:65%;height: 4.2rem;}
          li span{float: right;display:block;
            height:5rem;
            background: url('../../static/icons/svg/icon-leftright_gray.svg') right center no-repeat;
            background-size:30%;
            margin-left: .4rem;
            width:4.2rem;
          }
          .pc_list_iconA{background: url('../../static/icons/svg/grzx_bz.svg') left center no-repeat;background-size:65%;}
          .pc_list_iconB{background: url('../../static/icons/svg/grzx_kf.svg') left center no-repeat;background-size:65%;}
          .pc_list_iconC{background: url('../../static/icons/svg/grzx_xx.svg') left center no-repeat;background-size:65%;}
          .pc_list_iconD{background: url('../../static/icons/svg/grzx_yj.svg') left center no-repeat;background-size:65%;}
          .pc_list_iconE{background: url('../../static/icons/svg/grzx_zh.svg') left center no-repeat;background-size:65%;}
        }
      }
      .tmt-detail-company-info{border-bottom:1px solid #f2f2f2;position: relative;
        a{width: 100%;}
      }
      .googleUI-head-nav{width: 100%;box-sizing: border-box;margin: 4px 0;
        i{display: block;width:2rem;height:2rem;margin: 0 auto;font-size:1.8rem;line-height: 2.5rem;color:#666;}
        span{color:#999;font-size:1rem;}
      }
      .googleUi-shopInfo-no{color:#000;font-style:normal;width: 100% !important;text-align: center;}
    }
  }
</style>
