<template>
  <div id="back">
    <div class="row no-margin">
      <div class="col s3 no-padding height44">
        <a href="javascript:void(0)" @click="goBack">
          <i class="back-icon"></i>
        </a>
      </div>
      <div class="col s6 no-padding">
        <div class="top-title center">{{title}}</div>
      </div>
      <div class="col s3 no-padding"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'back',
    data () {
      return {
      }
    },
    props:{
      title:{
        type: String,
        default: '相关标题'
      },
      jumpTo:{
        type: String,
        default: ''
      }
    },
    methods: {
      goBack: function () {
        var vm = this
        if(!vm.jumpTo){
          vm.$router.go(-1);
        }else{
          vm.$router.replace(vm.jumpTo);
        }
      }
    }
  }
</script>

<style scoped lang="less">
  #back{
    width:100%;
    height:4.4rem;
    line-height:4.4rem;
    background:#fff;
    border-bottom: .1rem solid #e7e7e7;
    z-index: 9999;
    i.back-icon{
      display:block;
      width: 4.4rem;height: 4.4rem;background: url('../../../static/icons/svg/icon-leftright_gray.svg') center center no-repeat;-webkit-transform: rotate(180deg);
      background-size: 40%;
    }
    .top-title{
      font-size: 1.6rem;
      color: #666;
    }
    .height44{
      height: 4.4rem;
    }
  }
</style>
