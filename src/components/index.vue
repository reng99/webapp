<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links <em>家庭</em></h2>
    <p>WWF's goal is to:
<q cite="http://www.wwf.org">
build a future where people live in harmony with nature
</q> we hope they succeed.</p>
<strike>ae</strike>
<center>这个文本居中对齐。</center>
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
        font-size:1rem;
      }
    }
  }
</style>
