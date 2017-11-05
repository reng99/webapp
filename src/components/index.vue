<template>
  <div>
    <vue-header></vue-header>
    <div id="body_container" class="index">
      <h1>{{ msg }}</h1>
      <h2>Essential Links <em>家庭</em></h2>
      <h1>body</h1>
    </div>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import vueHeader from './common/header.vue'
import vueFooter from './common/footer.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    vueHeader,
    vueFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .index{
    background:blue;
    h2{
      color:red;

      em{
        color:#fff;
        font-size:1rem;
      }
    }
  }
</style>
