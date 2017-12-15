<template>
  <div id="accountIncomeDetail">
    <back
      :title='"收入明细"'
      :jumpTo='jumpTo' />
    this component is about account income detail.
  </div>
</template>
<script>
  import back from '@/components/snippet/back.vue'
  export default {
    data () {
      return {
        jumpTo: '/accountIncomeList'
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
  #accountIncomeDetail{
    background : blue;
  }
</style>
