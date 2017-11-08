<template>
  <div id="register">
    <div class="main">
      register-page
    </div>
    <div class="login-hint">
      <span>已有账号</span>&nbsp;
      <router-link :to="{path:'/login'}" class="main-color">立即登录</router-link>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'login',
    data () {
      return {

      }
    },
    components: {
    }
  }
</script>

<style scoped lang="less">
  #register{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    max-width:60rem;
    margin:0 auto;
    .main{
      flex-grow: 1;
      background:red;
    }
    .login-hint{
      flex-shrink: 0;
      height:4.4rem;
      display:flex;
      flex-direction: row;
      align-items:center;
      justify-content:center;
    }
  }
</style>
