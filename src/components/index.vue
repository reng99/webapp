<template>
  <div>
    <navbar></navbar>
    <div id="body_container" class="index">

      <div style="width:100%;height:18rem;background:red;text-align:center;line-height:18rem;">
        banner loop
      </div>

      <div style="width:100%;height:16rem;margin:1rem 0;background:blue;line-height:16rem;text-align:center;">
        game items
      </div>

      <div style="width:100%;height:18rem;background:yellow;line-height:18rem;text-align:center;">
        hot recommend
      </div>

      <div style="width:100%;height:16rem;background:green;line-height:16rem;text-align:center;margin: 1rem 0;">
        public notice
      </div>

      <div style="width:100%;height:10rem;background:pink;line-height:10rem;text-align:center;">
        vertify
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .index{

  }
</style>
