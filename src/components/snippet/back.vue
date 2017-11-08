<template>
  <div>
    <div class="back row no-margin">
      <div @click="toBack" class="margin-left6 col s3">&lt;&nbsp;返回</div>
      <div class="col s8">{{title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'back',
    data () {
      return {
        title: '个人中心'
      }
    },
    methods: {
      toBack () {
        var vm = this
        vm.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  .back{
    width:100%;
    height:4.4rem;
    line-height:4.4rem;
    background:#fff;
  }
</style>
