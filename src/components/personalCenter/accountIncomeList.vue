<template>
  <div id="accountIncomeList">
    <back
      :title='"收入明细"'
      :jumpTo='jumpTo' />
    this component is account income list!
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  export default {
    data () {
      return {
        jumpTo: '/personalCenter'
      }
    },
    components: {
      back
    },
    created: function () {

    }
  }
</script>
<style lang="less" scoped>
  #accountIncomeList{
    background: #f00;
  }
</style>
