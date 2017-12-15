<template>
  <div id="myMessage">
    <back :title='title' :jumpTo='jumpTo'></back>
    <div class="three-tabs row">
      <router-link class="col s4 center" v-for="(item,index) in tabNames" :to="{path:'/myMessage',query:{state:item.state}}" :key="index" @click.native="activeTab(index)">
        <p class="tab-name main-color" v-if="activeTabClass==index">{{item.name}}<span class="main-color">({{item.totalNum}})</span></p>
        <p class="tab-name" v-else>{{item.name}}<span class="main-color">({{item.totalNum}})</span></p>
        <span class="underline bg-main" v-show="activeTabClass==index"></span>
      </router-link>
    </div>
    <div class="main">
      <div class="scrollList-top-fixed"></div>
      <div class="h10"></div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import back from '@/components/snippet/back.vue'
  export default {
    name: "myMessage",
    data () {
      return {
         title : '我的消息',
         activeTabClass: 0,
         jumpTo :'/personalCenter',
         tabNames:[
          {
            name:'交易动态',
            state: 'TRANSACTION',
            totalNum: 0
          },
          {
            name:'系统信息',
            state: 'SYSTEM',
            totalNum: 0
          },
          {
            name:'资金信息',
            state: 'FUNDS',
            totalNum: 0
          }
        ],
        category: ''
      }
    },
    created: function(){
      var vm = this;
      vm.category = vm.$route.query.state;
      if(vm.$getCookie('logindata')){
        vm.$router.replace('/myMessage');
        vm.$getDataWithUrl('/user','/message/page/1.view',{"category":'TRANSACTION'},response=>{
          vm.tabNames[0].totalNum = response.data.context.total;
        },'get');
        vm.$getDataWithUrl('/user','/message/page/1.view',{"category":'SYSTEM'},response=>{
          vm.tabNames[1].totalNum = response.data.context.total;
        },'get');
        vm.$getDataWithUrl('/user','/message/page/1.view',{"category":'FUNDS'},response=>{
          vm.tabNames[2].totalNum = response.data.context.total;
        },'get');
      }else{
        vm.$router.replace('/login');
      }
    },
    methods:{
      activeTab : function (index){
        var vm = this;
        vm.activeTabClass = index;
      },
      // refresh : function () {
      //   window.location.reload();
      // },
      goBack: function(){

      }
    },
    components: {
      back
    }
  }

</script>

<style scoped lang="less">
  #myMessage{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    .three-tabs{
      width:100%;
      height:4.4rem;
      background:#fff;
      z-index: 9999;
      font-size: 1.4rem;
      .tab-name{
        height:4.2rem;
        line-height:4.2rem;
        color: #999;
      }
      .underline{
        display:block;
        width:1.6rem;
        height:.2rem;
        margin:0 auto;
      }
    }
  }
</style>
