<template>
  <div id="P404">

    <back :title='"404页面"'></back>
    <div class="pic404">
      <img src="../../static/imgs/kong_couwu.png" alt="bg404">
    </div>
    <div class="row">
      <div class="col s12">
        <router-link :to="{path:'/'}" class="btn left bg-main">返回首页</router-link>
        <router-link :to="{path:'/help',query:{id:'1'}}" class="btn right bg-main">帮助中心</router-link>
      </div>
    </div>
    <!--<div class="main">-->
      <!--<div class="tmt-page-header bg-white">-->
        <!--<div class="row no-margin">-->
          <!--<div class="col s3 no-padding">-->
            <!--<a href="javascript:void(0)" @click="goBack" class="tmt-page-top-back">-->
              <!--<i class="tmt-icons-arrow-leftright"></i>-->
            <!--</a>-->
          <!--</div>-->
          <!--<div class="col s6 no-padding">-->
            <!--<div class="tmt-page-top-title center">404</div>-->
          <!--</div>-->
          <!--<div class="col s3 no-padding">-->
            <!--<router-link :to="{ path: '/', query: {id:'1'}}"  class="tmt-page-top-icon right" replace>-->
              <!--<i class="tmt-icons-home right"></i>-->
            <!--</router-link>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="eimg"><img src="../../static/imgs/kong_couwu.png"></div>-->
      <!--<div class="h10"></div><div class="h10"></div><div class="h10"></div><div class="h10"></div>-->
      <!--<div class="btngroup row">-->
        <!--<div @click="back" class="col s6 help center"><span>返回</span></div>-->
        <!--<div @click="help" class="col s6 help center"><span>帮助</span></div>-->
      <!--</div>-->
    <!--</div>-->


  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  export default {
    name: 'P404',
    data() {
      return {}
    },
    methods: {
      // goBack: function () {
      //   let _this = this;
      //   _this.$router.back(-1)
      // },
      // back:function(){
      //   this.$router.back(-1);
      // },
      // help:function(){
      //   this.$router.push({path:'/help',query:{id:'1'}});
      // }
    },
    components: {
      back
    }
  }
  </script>
<style scoped lang="less">
  #P404 {
    max-width: 60rem;
    margin: 0 auto;
    .pic404{
      width: 100%;
      height:auto;
      margin: .6rem 0 1rem 0;
      img{
        width: 100%;
        height: auto;
        display:block;
      }
    }
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*max-width: 60rem;*/
    /*margin: 0 auto;*/
    /*.main {*/
      /*flex-grow: 1;*/
      /*.eimg img{*/
        /*margin-top:4rem;*/
        /*width: 100%;*/
      /*}*/
      /*.emsg{*/
        /*text-align: center;*/
        /*padding: 50px;*/
        /*font-size: 1.6rem;*/
      /*}*/
      /*.help span{*/
        /*padding:1rem 4rem;background: #666;color:#FFF;border-radius: 2px;font-size: 1.2rem;*/
      /*}*/
    /*}*/
  }
  </style>
