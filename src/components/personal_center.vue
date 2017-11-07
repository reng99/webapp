<template>
  <div>
    <navbar></navbar>
    <div id="body_container" class="personal_center">
      <div style="height:50rem;">
         personal placeholder
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
  name: 'HelloWorld',
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
  .personal_center{
    background:red;
  }
</style>
