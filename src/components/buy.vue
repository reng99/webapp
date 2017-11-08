<template>
  <div>
    <gamebar></gamebar>
    <div id="body_container" class="tmt-buy">
      <div style="height:50rem;">
         buy placeholder
      </div>
    </div>
    <vue-footer></vue-footer>
    <toolbar :toolId=toolId />
  </div>
</template>

<script>
import gamebar from './snippet/gamebar.vue'
import vueFooter from './common/footer.vue'
import toolbar from './common/toolbar.vue'
export default {
  name: 'tmt-buy',
  data () {
    return {
      toolId: 1
    }
  },
  components: {
    gamebar,
    vueFooter,
    toolbar
  }
}
</script>

<style scoped lang="less">
  .tmt-buy{
    background:yellow;
  }
</style>
