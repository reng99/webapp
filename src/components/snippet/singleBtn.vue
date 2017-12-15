<!--使用方法-->

<!--
  <single-btn
    :btnName = '"保存修改"'  // 默认为按钮的名称,类型是String
    @btnEvent = 'parentMethod' // 父组件控制的方法(function)
   />
-->

<template>
  <div id="singleBtn">
    <button class="btn" @click="handleEvent">{{btnName}}</button>
  </div>
</template>
<script>
  export default {
    name: 'singelBtn',
    data() {
      return {

      }
    },
    props: {
      btnName: {
        type: String,
        default: '按钮名称'
      }
    },
    methods: {
      handleEvent: function () {
        var vm = this;
        vm.$emit('btnEvent');
      }
    }
  }
</script>
<style scoped lang="less">
#singleBtn{
  .btn{
      display:block;
      width: 90%;
      height: 4.4rem;
      margin: 0 auto;
      margin-top: 1rem;
      border-radius: .3rem;
      font-size: 1.4rem;
      line-height: 4.4rem;
      background: #09c7d1;
    }
}
</style>
