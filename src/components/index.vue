<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links <em>reng</em></h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello{
    background:blue;
    h2{
      color:red;
      em{
        color:#fff;
      }
    }
  }
</style>
