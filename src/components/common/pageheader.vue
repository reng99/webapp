<template>
   <div id="pageheader">
    <div class="tmt-page-header">
    <div class="row no-margin">
      <div class="col s3 no-padding">
        <a href="javascript:void(0)" @click="goBack" class="tmt-page-top-back">
          <i class="back-icon"></i>
        </a>
      </div>
      <div class="col s6 no-padding">
        <div class="tmt-page-top-title center">{{title}}</div>
      </div>
      <div class="col s3 no-padding">
        <a href="javascript:void(0)" @click="openTopControl" class="tmt-page-top-icon right">
          <i class="tmt-icons-list right"></i>
        </a>
      </div>
    </div>
  </div>
  <transition name="showlist">
  <div class="tmt-page-hidden-control" v-if="topControl">
    <div class="row no-margin">
      <div class="col s3 center no-padding" v-for="tops in topCon">
        <router-link :to="{ path: tops.url}" class="tmt-footer-link">
          <i :class="tops.icon"></i>
          <span>{{tops.name}}</span>
        </router-link>
      </div>
    </div>
  </div>
  </transition>
  </div>
</template>
<script >
   export default {
    name: 'pageheader',
    data() {
      return {
        topControl:false,
        topCon:[
          {
            name:'首页',
            url:'/',
            param:'1',
            icon:'icon_home_white'
          },
          {
            name:'消息',
            url:'/myMessage',
            param:'2',
            icon:'icon_message_white'
          },
          {
            name:'我要卖',
            url:'/sell',
            param:'3',
            icon:'tmt_icons_sell_white'
          },
          {
            name:'个人中心',
            url:'/personalCenter',
            param:'4',
            icon:'tmt_icons_mine_white'
          }
        ]
      }
    },
    props: {
    title: String
    },
    methods: {
      goBack: function () {
        let _this = this;
        _this.$router.back(-1)
      },
      openTopControl:function () {
        let _this = this;
        _this.topControl = !_this.topControl;
      }
    }
  }
</script>
<style scoped>
    .tmt-page-hidden-control {
    position: fixed;
    top: 4.4rem;
    max-width: 60rem;
    z-index: 12;
    width: 100%;
    background: rgba(0,0,0,0.7);
    }
    i.back-icon{
      display:block;
      width: 4.4rem;height: 4.4rem;background: url('../../../static/icons/svg/icon-leftright_gray.svg') center center no-repeat;-webkit-transform: rotate(180deg);
      background-size: 40%;
    }
    .showlist-enter-active, .showlist-leave-active {
      transition: all .3s;
      transform: translateY(0);
    }
    .showlist-enter, .showlist-leave-active {
      opacity: 0;
      transform: translateY(-100%);
    }
    .tmt-page-header{
    position: fixed;
    top: 0;
    z-index: 15;
    border-bottom: 1px solid #e5e5e5;
    max-width: 60rem;
    }
    .tmt-page-top-title{
    font-size: 1.6rem;
    color: #333;
    }
</style>
