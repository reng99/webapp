<template>
  <div>
    <navbar></navbar>
    <div id="body_container" class="tmt-buy">
      <div style="height:50rem;">
         buy placeholder
      </div>
    </div>
    <vue-footer></vue-footer>
    <toolbar></toolbar>
  </div>
</template>

<script>
import navbar from './common/navbar.vue'
import vueFooter from './common/footer.vue'
import toolbar from './common/toolbar.vue'
export default {
  name: 'tmt-buy',
  data () {
    return {

    }
  },
  components: {
    navbar,
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
