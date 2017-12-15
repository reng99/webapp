<template>
  <div id="buyOrder">
    <back :title='title' :jumpTo='jumpTo'></back>
    <div class="main">
      <div class="three-tabs row z60 scrollList-top-b">
        <router-link class="col s14 center" v-for="(item,index) in tabNames" :to="{path:'/buyOrder',query:{state:item.state}}" :key="index" @click.native="activeTab(index)">
          <p class="tab-name main-color" v-if="activeTabClass==index">{{item.name}}</p>
          <p class="tab-name" v-else>{{item.name}}</p>
          <span class="underline bg-main" v-show="activeTabClass==index"></span>
        </router-link>
      </div>
    <div class="main">
      <div class="scrollList-top-fixed"></div>
      <div class="h10"></div>
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  export default {
    name: 'buyOrder',
    data () {
      return {
        msg: '',
        title : '我的订单',
        activeTabClass:'',
        jumpTo :'/personalCenter',
        tabNames:[
          {state:'all',name:'全部'},
          {state:'DZF',name:'待支付'},
          {state:'DFH',name:'待发货'},
          {state:'DYHQR',name:'待收货'},
          {state:'QX',name:'已关闭'}
        ]
      }
    },
    computed: {
      taps() {
        return this.$route.query.state;
      }
    },
    watch:{
      taps(curVal,oldVal){
        this.setTab(curVal);
      }
    },
    created:function () {
      if (this.$getCookie('logindata')) {
        this.setTab(this.$route.query.state);
      }else{
        this.$router.replace('/login')
      }
    },
    methods: {
      activeTab : function (index){
        this.activeTabClass = index;
      },
      setTab:function (pid) {
        let that = this;
        let tabs = that.tabNames;
        for(var i=0;i<tabs.length;i++){
          if(tabs[i].state==pid){
            that.activeTabClass = i;
          }
        }
      }
    },
    components: {
      back
    }
  }
</script>
<style scoped lang="less">
  #buyOrder {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    margin: 0 auto;
    .three-tabs{
      width:100%;
      height:4.4rem;
      background:#fff;
      z-index: 9999;
      .tab-name{
        height:4.2rem;
        line-height:4.2rem;
        font-size: 1.2rem;
        color: #999;
      }
      .underline{
        display:block;
        width:1.6rem;
        height:.2rem;
        margin:0 auto;
      }
    }
    .main {
      .tmt-user-order-main{background: #fff;width: 100%;height:4.4rem;}
      .tmt-user-message-main ul li a {
        font-size: 1.1rem !important;
      }
      .tmt-user-login-tab{width: 100%;overflow: hidden;
        li{height: 4.4rem;line-height: 4.4rem;
          a{display: block;width: 100%;font-size: 1.2rem;text-align: center;border-bottom:1px solid #eee;height: 4.4rem;color:#666;}
          a.active{border-bottom:1px solid #09c7d1;color:#09c7d1;}
        }
      }
      .tmt-user-login-tab li a.router-link-exact-active{color: #09c7d1;border-bottom: 1px solid #09c7d1;}
    }
  }
</style>
