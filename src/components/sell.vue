<template>
  <div>
    <navbar></navbar>
    <div id="body_container" class="tmt-sell">
      <div style="height:50rem;">
         sell placeholder
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
  name: 'tmt-sell',
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
  .tmt-sell{
    background:green;
  }
</style>
