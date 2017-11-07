<template>
  <div>
    <div id="body_container" class="login">
      this is the login
    </div>
    <toolbar></toolbar>
  </div>

</template>

<script>
  import toolbar from './snippet/register_hint.vue'
  export default {
    name: 'login',
    data () {
      return {

      }
    },
    components: {
      toolbar
    }
  }
</script>

<style scoped lang="less">
  .login{
    width:100%;
    height: 40rem;
    background:red;
  }
</style>
