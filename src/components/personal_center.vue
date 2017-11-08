<template>
  <div>
    <div id="body_container" class="personal_center">
      <ul>
        <li><router-link :to="{path:'/personalCenter/demoItemDetail'}">demo item1 &gt;</router-link></li>
      </ul>
    </div>
    <vue-footer></vue-footer>
    <toolbar :toolId=toolId />
  </div>
</template>

<script>
import vueFooter from './common/footer.vue'
import toolbar from './common/toolbar.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      toolId: 3
    }
  },
  components: {
    vueFooter,
    toolbar
  }
}
</script>

<style scoped lang="less">
  .personal_center{
    height:50rem;
    background:yellow;
    ul li a{
      width:100%;
      height:3rem;
      line-height:3rem;
    }
  }
</style>
