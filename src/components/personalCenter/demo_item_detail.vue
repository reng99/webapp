<template>
  <div>
    <back></back>
    <div id="body_container" class="demo-item-detail">
      this is demo-item-detail content
    </div>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import vueFooter from '../common/footer.vue'
import back from '../snippet/back.vue'
export default {
  name: 'demo-item-detail',
  data () {
    return {

    }
  },
  components: {
    vueFooter,
    back
  }
}
</script>

<style scoped lang="less">
  .demo-item-detail{
    height:50rem;
    background:green;
  }
</style>
