<template>
  <div>
    <gamebar></gamebar>
    <div id="body_container" class="tmt-sell">
      <div style="height:50rem;">
         sell placeholder
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
  name: 'tmt-sell',
  data () {
    return {
      toolId: 2
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
  .tmt-sell{
    background:green;
  }
</style>
